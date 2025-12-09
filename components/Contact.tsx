"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          type: "success",
          message: "Message sent successfully! I'll get back to you soon.",
        });
        // Clear form on success
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus({
          type: "error",
          message: data.error || "Failed to send message. Please try again.",
        });
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: "Network error. Please check your connection and try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const contactMethods = [
    {
      icon: "📧",
      title: "Email",
      value: "gunasekaran.bsc.cs@gmail.com",
      href: "mailto:gunasekaran.bsc.cs@gmail.com",
      description: "Send me an email anytime",
    },
    {
      icon: "💼",
      title: "LinkedIn",
      value: "Connect with me",
      href: "https://www.linkedin.com/in/gunasekaran-chinraj-7a21b063/",
      description: "Let's connect professionally",
    },
    {
      icon: "🐙",
      title: "GitHub",
      value: "Check out my code",
      href: "https://github.com/CGunasekaran",
      description: "View my open source work",
    },
    {
      icon: "📱",
      title: "Phone",
      value: "+91 9840327045 / 7010604956",
      href: "#",
      description: "For urgent matters",
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-white to-neutral-50 dark:from-neutral-900 dark:to-neutral-950 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-100/20 via-transparent to-blue-100/20 dark:from-cyan-900/10 dark:to-blue-900/10"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Section Title */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-cyan-100 dark:bg-cyan-900/30 rounded-full mb-6">
            <span className="text-sm font-medium text-cyan-700 dark:text-cyan-300">
              💬 Let's connect
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-neutral-900 dark:text-neutral-100">
              Get In
            </span>{" "}
            <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
            Whether you have a question, want to discuss a project, or just want
            to say hi, feel free to reach out!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Enhanced Contact Methods */}
          <div className="space-y-8">
            <div className="card-modern p-8">
              <div className="flex items-start gap-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-2xl text-white">💬</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
                    Let's Connect
                  </h3>
                  <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
                </div>
              </div>

              <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8 leading-relaxed">
                I'm always open to discussing new opportunities, interesting
                projects, or just having a great conversation about technology
                and innovation.
              </p>

              {/* Contact methods grid */}
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <a
                    key={index}
                    href={method.href}
                    target={method.href.startsWith("http") ? "_blank" : "_self"}
                    rel={
                      method.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="group block p-4 rounded-xl bg-gradient-to-r from-neutral-50 to-neutral-100 dark:from-neutral-800 dark:to-neutral-700 hover:from-cyan-50 hover:to-blue-50 dark:hover:from-cyan-900/20 dark:hover:to-blue-900/20 transition-all duration-300 transform hover:-translate-y-1 border border-neutral-200 dark:border-neutral-600 hover:border-cyan-300 dark:hover:border-cyan-600"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <span className="text-xl text-white group-hover:animate-bounce">
                          {method.icon}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-1 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                          {method.title}
                        </h4>
                        <p className="text-sm font-medium text-cyan-600 dark:text-cyan-400 mb-1 break-all">
                          {method.value}
                        </p>
                        <p className="text-xs text-neutral-600 dark:text-neutral-400">
                          {method.description}
                        </p>
                      </div>
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-cyan-500 flex-shrink-0">
                        →
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced Contact Form */}
          <div className="card-modern p-8">
            <div className="flex items-start gap-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-2xl text-white">✉️</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
                  Send Message
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-3"
                >
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-4 border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all duration-300"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-3"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-4 border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all duration-300"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-3"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  className="w-full px-4 py-4 border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all duration-300 resize-none"
                  placeholder="Tell me about your project, questions, or just say hello..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                ></textarea>
              </div>

              {/* Enhanced Status Messages */}
              {status.type && (
                <div
                  className={`p-4 rounded-xl border ${
                    status.type === "success"
                      ? "bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-300 border-green-200 dark:border-green-800"
                      : "bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-300 border-red-200 dark:border-red-800"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-lg">
                      {status.type === "success" ? "✅" : "❌"}
                    </span>
                    <span className="font-medium">{status.message}</span>
                  </div>
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className={`w-full px-8 py-4 text-white rounded-xl font-semibold flex items-center justify-center gap-3 transition-all duration-300 transform hover:-translate-y-1 ${
                  isLoading
                    ? "bg-neutral-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-primary-600 to-accent-600 hover:shadow-glow"
                }`}
              >
                {isLoading ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending Message...
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      />
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
