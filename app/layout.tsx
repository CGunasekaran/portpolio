import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
      </head>
      <body
        className={`${inter.className} antialiased bg-background text-foreground transition-colors duration-300`}
      >
        {/* Page loading indicator */}
        <div
          id="page-loader"
          className="fixed inset-0 bg-background z-50 flex items-center justify-center"
        >
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-500"></div>
        </div>

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

        {/* Page scripts */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Page loader
              window.addEventListener('load', function() {
                const loader = document.getElementById('page-loader');
                if (loader) {
                  loader.style.opacity = '0';
                  setTimeout(() => loader.remove(), 300);
                }
              });

              // Scroll to top functionality
              const scrollToTopBtn = document.getElementById('scroll-to-top');
              
              window.addEventListener('scroll', function() {
                if (window.scrollY > 300) {
                  scrollToTopBtn.style.opacity = '1';
                  scrollToTopBtn.style.pointerEvents = 'auto';
                } else {
                  scrollToTopBtn.style.opacity = '0';
                  scrollToTopBtn.style.pointerEvents = 'none';
                }
              });
              
              scrollToTopBtn.addEventListener('click', function() {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              });

              // Enhanced scroll behavior for navigation
              document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                  e.preventDefault();
                  const target = document.querySelector(this.getAttribute('href'));
                  if (target) {
                    target.scrollIntoView({
                      behavior: 'smooth',
                      block: 'start'
                    });
                  }
                });
              });

              // Theme preference detection
              const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
              
              function setTheme(dark) {
                document.documentElement.classList.toggle('dark', dark);
                localStorage.setItem('theme', dark ? 'dark' : 'light');
              }
              
              // Initialize theme
              const savedTheme = localStorage.getItem('theme');
              if (savedTheme) {
                setTheme(savedTheme === 'dark');
              } else {
                setTheme(prefersDark.matches);
              }
              
              prefersDark.addEventListener('change', (e) => {
                if (!localStorage.getItem('theme')) {
                  setTheme(e.matches);
                }
              });
            `,
          }}
        />
      </body>
    </html>
  );
}
