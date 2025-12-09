"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark" | "system";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  actualTheme: "light" | "dark"; // The actual resolved theme (light or dark)
  mounted: boolean; // To prevent hydration mismatch
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<Theme>("system");
  const [actualTheme, setActualTheme] = useState<"light" | "dark">("light");

  // Initialize theme after component mounts to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);

    const savedTheme = localStorage.getItem("theme") as Theme;
    if (savedTheme && ["light", "dark", "system"].includes(savedTheme)) {
      setTheme(savedTheme);
    }

    // Set initial actual theme
    const getInitialActualTheme = (): "light" | "dark" => {
      if (savedTheme === "dark") return "dark";
      if (savedTheme === "light") return "light";
      // For 'system' or no saved theme, check system preference
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    };

    setActualTheme(getInitialActualTheme());
  }, []);

  // Update actual theme when theme preference changes
  useEffect(() => {
    const updateActualTheme = (currentTheme: Theme) => {
      if (currentTheme === "system") {
        const systemPrefersDark = window.matchMedia(
          "(prefers-color-scheme: dark)"
        ).matches;
        setActualTheme(systemPrefersDark ? "dark" : "light");
      } else {
        setActualTheme(currentTheme);
      }
    };

    updateActualTheme(theme);
  }, [theme]);

  // Listen for system theme changes (only when theme is 'system')
  useEffect(() => {
    if (theme !== "system") return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleSystemThemeChange = () => {
      const systemPrefersDark = mediaQuery.matches;
      setActualTheme(systemPrefersDark ? "dark" : "light");
    };

    mediaQuery.addEventListener("change", handleSystemThemeChange);

    return () => {
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
    };
  }, [theme]);

  useEffect(() => {
    // Update DOM classes when actualTheme changes
    const root = document.documentElement;

    if (actualTheme === "dark") {
      root.classList.add("dark");
      root.classList.remove("light");
    } else {
      root.classList.add("light");
      root.classList.remove("dark");
    }

    // Update meta theme-color for mobile browsers
    const themeColorMeta = document.querySelector('meta[name="theme-color"]');
    if (themeColorMeta) {
      themeColorMeta.setAttribute(
        "content",
        actualTheme === "dark" ? "#020617" : "#3b82f6"
      );
    }
  }, [actualTheme]);

  const handleSetTheme = (newTheme: Theme) => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);

    // Immediately update actual theme
    if (newTheme === "system") {
      const systemPrefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setActualTheme(systemPrefersDark ? "dark" : "light");
    } else {
      setActualTheme(newTheme);
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme: handleSetTheme,
        actualTheme,
        mounted,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
