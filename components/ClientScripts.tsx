"use client";

import { useEffect } from "react";

export default function ClientScripts() {
  useEffect(() => {
    // Scroll to top functionality
    const scrollToTopBtn = document.getElementById("scroll-to-top");

    const handleScroll = () => {
      if (scrollToTopBtn) {
        if (window.scrollY > 300) {
          scrollToTopBtn.style.opacity = "1";
          scrollToTopBtn.style.pointerEvents = "auto";
        } else {
          scrollToTopBtn.style.opacity = "0";
          scrollToTopBtn.style.pointerEvents = "none";
        }
      }
    };

    const handleScrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    // Enhanced scroll behavior for navigation
    const handleAnchorClick = (e: Event) => {
      e.preventDefault();
      const target = e.target as HTMLAnchorElement;
      const href = target.getAttribute("href");
      if (href && href.startsWith("#")) {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    };



    // Add event listeners
    window.addEventListener("scroll", handleScroll);

    if (scrollToTopBtn) {
      scrollToTopBtn.addEventListener("click", handleScrollToTop);
    }

    // Add click listeners to anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", handleAnchorClick);
    });

    // Cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll);

      if (scrollToTopBtn) {
        scrollToTopBtn.removeEventListener("click", handleScrollToTop);
      }

      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.removeEventListener("click", handleAnchorClick);
      });
    };
  }, []);

  return null; // This component doesn't render anything
}
