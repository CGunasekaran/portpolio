import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Check if environment variables are properly set
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error("Missing email configuration:", {
        EMAIL_USER: process.env.EMAIL_USER ? "Set" : "Missing",
        EMAIL_PASS: process.env.EMAIL_PASS ? "Set" : "Missing",
      });
      return NextResponse.json(
        {
          error:
            "Email service not configured. Please contact the administrator.",
        },
        { status: 500 }
      );
    }

    // Check for placeholder values
    if (
      process.env.EMAIL_USER === "your.email@gmail.com" ||
      process.env.EMAIL_PASS === "your_app_password_here"
    ) {
      console.error("Email configuration contains placeholder values");
      return NextResponse.json(
        {
          error:
            "Email service configuration incomplete. Please contact the administrator.",
        },
        { status: 500 }
      );
    }

    // Create transporter - choose between Gmail service or custom SMTP
    const transporter =
      process.env.USE_ALTERNATIVE_SMTP === "true"
        ? nodemailer.createTransport({
            host: process.env.SMTP_HOST || "smtp.gmail.com",
            port: parseInt(process.env.SMTP_PORT || "587"),
            secure: false, // true for 465, false for other ports
            auth: {
              user: process.env.EMAIL_USER,
              pass: process.env.EMAIL_PASS,
            },
            tls: {
              rejectUnauthorized: false, // For development only
            },
          })
        : nodemailer.createTransport({
            service: "gmail",
            auth: {
              user: process.env.EMAIL_USER,
              pass: process.env.EMAIL_PASS, // App password required for Gmail
            },
          });

    // Alternative configuration for other SMTP providers
    // const transporter = nodemailer.createTransport({
    //   host: process.env.SMTP_HOST,
    //   port: parseInt(process.env.SMTP_PORT || '587'),
    //   secure: false, // true for 465, false for other ports
    //   auth: {
    //     user: process.env.EMAIL_USER,
    //     pass: process.env.EMAIL_PASS,
    //   },
    // });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Send to yourself
      subject: `Portfolio Contact: Message from ${name}`,
      html: `
        <h2>New Contact Form Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
        
        <hr>
        <p><em>This message was sent through your portfolio contact form.</em></p>
      `,
      text: `
        New Contact Form Message
        
        Name: ${name}
        Email: ${email}
        Message: ${message}
        
        This message was sent through your portfolio contact form.
      `,
      replyTo: email, // Allow replying directly to the sender
    };

    // Verify SMTP connection before sending
    try {
      await transporter.verify();
      console.log("SMTP connection verified successfully");
    } catch (verifyError) {
      console.error("SMTP verification failed:", verifyError);
      return NextResponse.json(
        {
          error:
            "Email service connection failed. Please check your configuration.",
        },
        { status: 500 }
      );
    }

    // Send email
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully to:", process.env.EMAIL_USER);

    return NextResponse.json(
      { message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Email sending error:", error);

    // Provide more specific error messages
    let errorMessage = "Failed to send email. Please try again later.";

    if (error instanceof Error) {
      if (error.message.includes("Invalid login")) {
        errorMessage =
          "Email authentication failed. Please check your credentials.";
      } else if (
        error.message.includes("ENOTFOUND") ||
        error.message.includes("ECONNREFUSED")
      ) {
        errorMessage =
          "Cannot connect to email server. Please check your internet connection.";
      } else if (error.message.includes("timeout")) {
        errorMessage = "Email service timeout. Please try again.";
      }
    }

    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
