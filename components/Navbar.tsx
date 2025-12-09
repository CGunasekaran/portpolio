"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import ThemeToggle from "@/components/ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);
  const { actualTheme } = useTheme();

  const scrollToSection = (href: string) => {
    const sectionId = href.slice(1); // Remove the '#' from href
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Account for fixed navbar height
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
    setActiveSection(sectionId);
  };

  useEffect(() => {
    // Set hydrated to true on mount to prevent hydration mismatch
    setIsHydrated(true);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Update active section based on scroll position
      const sections = navItems.map((item) => item.href.slice(1));
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    // Set initial scroll state
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navItems = [
    { href: "#home", label: "Home", icon: "🏠" },
    { href: "#about", label: "About", icon: "👨‍💼" },
    { href: "#education", label: "Education", icon: "🎓" },
    { href: "#projects", label: "Projects", icon: "🚀" },
    { href: "#hobbies", label: "Hobbies", icon: "🎯" },
    { href: "#contact", label: "Contact", icon: "📧" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isHydrated && isScrolled
          ? "glass shadow-lg border-b border-white/20 dark:border-neutral-800/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo with modern styling */}
          <Link
            href="/"
            className="group flex items-center space-x-2 text-2xl font-bold"
          >
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-glow transition-all duration-300 transform group-hover:-rotate-6">
                <span className="text-white font-bold text-lg">G</span>
              </div>
            </div>
            <span className="gradient-text hidden sm:block">Gunasekaran</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.href}
                className={`group relative px-4 py-2 rounded-xl font-medium transition-all duration-300 hover:bg-white/10 dark:hover:bg-neutral-800/30 ${
                  activeSection === item.href.slice(1)
                    ? "text-primary-600 dark:text-primary-400"
                    : "text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400"
                }`}
                onClick={() => scrollToSection(item.href)}
              >
                <span className="flex items-center space-x-2">
                  <span className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                </span>

                {/* Active indicator */}
                {activeSection === item.href.slice(1) && (
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary-500 rounded-full"></div>
                )}
              </button>
            ))}
          </div>

          {/* Theme Toggle & CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />

            <button
              onClick={() => scrollToSection("#contact")}
              className="px-6 py-2 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-xl font-medium hover:shadow-glow transform hover:-translate-y-0.5 transition-all duration-300"
            >
              Let's Talk
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-xl transition-all duration-300 ${
              isOpen
                ? "bg-primary-500 text-white"
                : "bg-white/10 dark:bg-neutral-800/30 text-neutral-700 dark:text-neutral-300"
            }`}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Enhanced Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-out ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 space-y-2 bg-white/5 dark:bg-neutral-800/20 backdrop-blur-sm rounded-2xl mb-4 border border-white/10 dark:border-neutral-700/20">
            {navItems.map((item, index) => (
              <button
                key={item.href}
                className={`flex items-center space-x-3 px-6 py-3 font-medium transition-all duration-300 hover:bg-white/10 dark:hover:bg-neutral-700/30 hover:translate-x-2 w-full text-left ${
                  activeSection === item.href.slice(1)
                    ? "text-primary-600 dark:text-primary-400 bg-primary-50/50 dark:bg-primary-900/20"
                    : "text-neutral-700 dark:text-neutral-300"
                }`}
                onClick={() => {
                  setIsOpen(false);
                  scrollToSection(item.href);
                }}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="text-lg">{item.icon}</span>
                <span>{item.label}</span>
              </button>
            ))}

            {/* Mobile Theme Toggle & CTA */}
            <div className="px-6 pt-4 pb-2 space-y-3">
              <div className="flex justify-center">
                <ThemeToggle />
              </div>
              <button
                onClick={() => {
                  setIsOpen(false);
                  scrollToSection("#contact");
                }}
                className="flex items-center justify-center space-x-2 w-full px-6 py-3 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-xl font-medium hover:shadow-glow transition-all duration-300"
              >
                <span>Let's Talk</span>
                <span>💬</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
