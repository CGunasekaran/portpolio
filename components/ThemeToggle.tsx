"use client";

import { useTheme } from "@/contexts/ThemeContext";
import { useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme, mounted } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  // Prevent hydration mismatch by showing a placeholder until mounted
  if (!mounted) {
    return (
      <div className="flex items-center gap-2 px-3 py-2 rounded-lg border border-border bg-background">
        <span className="text-sm">💻</span>
        <span className="hidden sm:inline text-sm font-medium">Theme</span>
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    );
  }

  const themes = [
    { value: "light" as const, label: "Light", icon: "☀️" },
    { value: "dark" as const, label: "Dark", icon: "🌙" },
    { value: "system" as const, label: "System", icon: "💻" },
  ];

  const currentTheme = themes.find((t) => t.value === theme);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg border border-border bg-background hover:bg-muted transition-colors"
        aria-label="Toggle theme"
      >
        <span className="text-sm">{currentTheme?.icon}</span>
        <span className="hidden sm:inline text-sm font-medium">
          {currentTheme?.label}
        </span>
        <svg
          className={`w-4 h-4 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />

          {/* Dropdown */}
          <div className="absolute right-0 top-full mt-2 w-40 py-2 bg-popover border border-border rounded-lg shadow-lg z-20">
            {themes.map((themeOption) => (
              <button
                key={themeOption.value}
                onClick={() => {
                  setTheme(themeOption.value);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-2 text-left hover:bg-muted transition-colors ${
                  theme === themeOption.value
                    ? "bg-muted text-primary-600 dark:text-primary-400"
                    : ""
                }`}
              >
                <span>{themeOption.icon}</span>
                <span className="text-sm font-medium">{themeOption.label}</span>
                {theme === themeOption.value && (
                  <svg
                    className="w-4 h-4 ml-auto text-primary-600 dark:text-primary-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
