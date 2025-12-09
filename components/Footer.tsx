"use client";

import { useState, useEffect } from "react";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(2024);

  useEffect(() => {
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
    <footer className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-900/20 via-transparent to-accent-900/20"></div>

      <div className="relative">
        {/* Main footer content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">G</span>
                </div>
                <h3 className="text-2xl font-bold gradient-text">
                  Gunasekaran
                </h3>
              </div>
              <p className="text-neutral-400 leading-relaxed mb-6 max-w-md">
                Technical Anchor with 10+ years of experience building scalable
                web applications and leading cross-functional teams. Passionate
                about frontend architecture, performance optimization, and
                creating exceptional user experiences.
              </p>
              <div className="flex items-center gap-2 text-sm text-neutral-500">
                <span>🌱</span>
                <span>Always learning, always growing</span>
              </div>
            </div>

            {/* Quick links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-neutral-400 hover:text-primary-400 transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 bg-primary-500 rounded-full group-hover:w-2 transition-all duration-300"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect section */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">
                Connect With Me
              </h4>
              <div className="space-y-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : "_self"}
                    rel={
                      social.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="group flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <span className="text-lg group-hover:animate-bounce">
                      {social.icon}
                    </span>
                    <div>
                      <div className="font-medium text-white group-hover:text-primary-400 transition-colors">
                        {social.name}
                      </div>
                      <div className="text-xs text-neutral-500">
                        {social.description}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-neutral-800 dark:border-neutral-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-neutral-400 text-sm text-center sm:text-left">
                © {currentYear} Gunasekaran. All rights reserved. Built with ❤️
                using Next.js & Tailwind CSS.
              </p>
              <div className="flex items-center gap-4 text-sm text-neutral-500">
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  Available for opportunities
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
