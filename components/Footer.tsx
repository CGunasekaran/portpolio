"use client";

import { useState, useEffect } from "react";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(() =>
    new Date().getFullYear()
  );
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setCurrentYear(new Date().getFullYear());
  }, []);

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/CGunasekaran",
      icon: "🐙",
      description: "View my code",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/gunasekaran-chinraj-7a21b063/",
      icon: "💼",
      description: "Connect professionally",
    },
    {
      name: "Email",
      href: "mailto:gunasekaran.bsc.cs@gmail.com",
      icon: "📧",
      description: "Send a message",
    },
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-neutral-50 via-white to-neutral-100 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950 text-neutral-900 dark:text-neutral-100 overflow-hidden">
      {/* Animated background decoration */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-200/30 via-transparent to-accent-200/30 dark:from-primary-900/20 dark:via-transparent dark:to-accent-900/20"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary-300/20 to-accent-300/20 dark:from-primary-500/10 dark:to-accent-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-accent-300/20 to-primary-300/20 dark:from-accent-500/10 dark:to-primary-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="relative">
        {/* Main footer content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand section */}
            <div className="lg:col-span-2 animate-fade-in-up">
              <div className="modern-card p-8 mb-6">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform duration-300">
                    <span className="text-white font-bold text-2xl">G</span>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold gradient-text mb-1">
                      Gunasekaran
                    </h3>
                    <p className="text-sm text-primary-600 dark:text-primary-400 font-medium">
                      Technical Anchor & Full Stack Developer
                    </p>
                  </div>
                </div>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
                  Technical Anchor with 10+ years of experience building
                  scalable web applications and leading cross-functional teams.
                  Passionate about frontend architecture, performance
                  optimization, and creating exceptional user experiences.
                </p>
                <div className="flex items-center gap-3 text-sm">
                  <div className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 rounded-full border border-green-200 dark:border-green-800">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    <span className="text-green-700 dark:text-green-300 font-medium">
                      Always learning, always growing
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick links */}
            <div
              className="animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="modern-card p-6">
                <h4 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-6 flex items-center gap-2">
                  <span className="w-2 h-6 bg-gradient-to-b from-primary-500 to-accent-500 rounded-full"></span>
                  Quick Links
                </h4>
                <ul className="space-y-4">
                  {quickLinks.map((link, index) => (
                    <li
                      key={link.name}
                      className="animate-fade-in-right"
                      style={{ animationDelay: `${0.1 * index + 0.3}s` }}
                    >
                      <a
                        href={link.href}
                        className="group flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-transparent to-transparent hover:from-primary-50 hover:to-accent-50 dark:hover:from-primary-900/20 dark:hover:to-accent-900/20 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg border border-transparent hover:border-primary-200 dark:hover:border-primary-800"
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                        <span className="text-neutral-700 dark:text-neutral-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 font-medium transition-colors duration-300">
                          {link.name}
                        </span>
                        <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-primary-500">
                          →
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Connect section */}
            <div
              className="animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="modern-card p-6">
                <h4 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-6 flex items-center gap-2">
                  <span className="w-2 h-6 bg-gradient-to-b from-accent-500 to-primary-500 rounded-full"></span>
                  Connect With Me
                </h4>
                <div className="space-y-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target={
                        social.href.startsWith("http") ? "_blank" : "_self"
                      }
                      rel={
                        social.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="group flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-neutral-50 to-neutral-100 dark:from-neutral-800/50 dark:to-neutral-700/50 hover:from-primary-50 hover:to-accent-50 dark:hover:from-primary-900/30 dark:hover:to-accent-900/30 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-glow border border-neutral-200 dark:border-neutral-700 hover:border-primary-300 dark:hover:border-primary-600 animate-fade-in-right"
                      style={{ animationDelay: `${0.1 * index + 0.5}s` }}
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <span className="text-2xl group-hover:animate-bounce">
                          {social.icon}
                        </span>
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-neutral-900 dark:text-neutral-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                          {social.name}
                        </div>
                        <div className="text-sm text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition-colors duration-300">
                          {social.description}
                        </div>
                      </div>
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-primary-500 transform group-hover:translate-x-1">
                        →
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-neutral-300 dark:border-neutral-700 bg-gradient-to-r from-neutral-100 via-white to-neutral-100 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <p className="text-neutral-700 dark:text-neutral-400 text-sm font-medium text-center sm:text-left">
                  © {mounted ? currentYear : new Date().getFullYear()}{" "}
                  Gunasekaran. All rights reserved.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-4 text-sm">
                <span className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 text-green-700 dark:text-green-300 rounded-full border border-green-200 dark:border-green-800 font-medium">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  Always learning, always growing
                </span>
                <div className="flex items-center gap-4 text-xs text-neutral-500 dark:text-neutral-500">
                  <span className="font-mono">v{currentYear}.12.0</span>
                  <span>
                    Updated Dec {mounted ? new Date().getDate() : "9"},{" "}
                    {currentYear}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
