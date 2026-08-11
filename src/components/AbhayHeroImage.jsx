"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Abhay Singh hero image that starts black-and-white
 * and transitions to full color as the user scrolls.
 */
export default function AbhayHeroImage({ src, alt }) {
  const containerRef = useRef(null);
  const [colorAmount, setColorAmount] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const el = containerRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const windowH = window.innerHeight;

      // Start transition when element enters viewport,
      // complete when it's ~40% scrolled through
      const start = windowH;
      const end = windowH * 0.3;
      const progress = 1 - (rect.top - end) / (start - end);
      const clamped = Math.max(0, Math.min(1, progress));
      setColorAmount(clamped);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      className="abhay-hero-image-container"
      style={{
        width: "100%",
        maxWidth: "420px",
        aspectRatio: "3 / 4",
        borderRadius: "24px",
        overflow: "hidden",
        position: "relative",
        boxShadow:
          "0 12px 40px rgba(30, 58, 138, 0.12), 0 0 60px rgba(59, 130, 246, 0.06)",
      }}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        style={{
          filter: `grayscale(${1 - colorAmount})`,
          transition: "filter 0.15s ease-out",
        }}
        loading="eager"
      />
      {/* Subtle gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, transparent 50%, rgba(30, 30, 46, 0.15) 100%)",
        }}
      />
    </div>
  );
}
