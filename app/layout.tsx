import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClientScripts from "@/components/ClientScripts";
import PageLoader from "@/components/PageLoader";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gunasekaran - Technical Anchor Portfolio",
  description:
    "Experienced Technical Anchor with 10+ years in frontend architecture, e-commerce platforms, and team leadership. Specializing in React, Next.js, and scalable web solutions with 99.9% uptime.",
  keywords: [
    "Technical Anchor",
    "Frontend Architecture",
    "React Developer",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "E-commerce",
    "Team Leadership",
    "Performance Optimization",
    "Accessibility",
  ],
  authors: [{ name: "Gunasekaran" }],
  creator: "Gunasekaran",
  publisher: "Gunasekaran",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://gunasekaran-portfolio.vercel.app"),
  openGraph: {
    title: "Gunasekaran - Technical Anchor Portfolio",
    description:
      "Experienced Technical Anchor specializing in frontend architecture and scalable web solutions",
    url: "https://gunasekaran-portfolio.vercel.app",
    siteName: "Gunasekaran Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gunasekaran - Technical Anchor Portfolio",
    description:
      "Experienced Technical Anchor specializing in frontend architecture and scalable web solutions",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="color-scheme" content="light dark" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const savedTheme = localStorage.getItem('theme');
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                const shouldBeDark = savedTheme ? savedTheme === 'dark' : prefersDark;
                
                const root = document.documentElement;
                if (shouldBeDark) {
                  root.classList.add('dark');
                  root.classList.remove('light');
                } else {
                  root.classList.add('light');  
                  root.classList.remove('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${inter.className} antialiased bg-background text-foreground transition-colors duration-300`}
      >
        {/* Page loading indicator */}
        <PageLoader />

        {/* Main layout */}
        <div className="relative">
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </div>

        {/* Scroll to top button */}
        <button
          id="scroll-to-top"
          className="fixed bottom-8 right-8 w-12 h-12 bg-primary-500 hover:bg-primary-600 text-white rounded-full shadow-lg hover:shadow-glow transform hover:-translate-y-1 transition-all duration-300 opacity-0 pointer-events-none z-40"
          aria-label="Scroll to top"
        >
          <svg
            className="w-6 h-6 mx-auto"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>

        {/* Client-side scripts */}
        <ClientScripts />
      </body>
    </html>
  );
}
