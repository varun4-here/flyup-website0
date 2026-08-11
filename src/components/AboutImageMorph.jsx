"use client";

import { useState } from "react";
import Image from "next/image";

/**
 * Fan-out image morph component with Cinematic Glow effects.
 * On hover, the main portrait fans into 3 overlapping images,
 * and a glowing neon border races around the frame.
 */
export default function AboutImageMorph({ images, alt }) {
  const [isHovered, setIsHovered] = useState(false);

  // Transform configs for the 3 fanned cards
  const fanTransforms = [
    { rotate: "-12deg", translateX: "-30px", translateY: "8px", zIndex: 1 },
    { rotate: "0deg", translateX: "0px", translateY: "-4px", zIndex: 3 },
    { rotate: "12deg", translateX: "30px", translateY: "8px", zIndex: 2 },
  ];

  return (
    <div
      className={`about-morph-container relative ${isHovered ? "hovered" : ""}`}
      style={{ width: "100%", maxWidth: "400px", aspectRatio: "3/4" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* ── Ambient Breathing Aura ── */}
      <div className={`cinematic-aura ${isHovered ? "hovered" : ""}`} />

      {/* ── Stacked Images & Border Trace ── */}
      {images.map((src, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-all duration-500"
          style={{
            zIndex: isHovered ? fanTransforms[i].zIndex : 3 - i,
            transform: isHovered
              ? `rotate(${fanTransforms[i].rotate}) translateX(${fanTransforms[i].translateX}) translateY(${fanTransforms[i].translateY}) scale(0.88)`
              : `rotate(0deg) translateX(0) translateY(0) scale(1)`,
            opacity: isHovered ? 1 : i === 0 ? 1 : 0,
            transition: `all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) ${i * 0.06}s`,
          }}
        >
          {/* Border Trace Wrapper - slightly larger than the image */}
          <div className="absolute inset-[-3px] rounded-[27px] overflow-hidden bg-[#0a0d14] shadow-2xl">
            {/* The spinning conic gradient glow */}
            <div className="border-trace-glow" />

            {/* Inner frame containing the actual image (hides center of glow) */}
            <div className="absolute inset-[3px] rounded-[24px] overflow-hidden bg-charcoal">
              <Image
                src={src}
                alt={`${alt} — photo ${i + 1}`}
                fill
                className="object-cover transition-transform duration-700"
                style={{
                  transform: isHovered ? "scale(1.05)" : "scale(1)",
                }}
                priority={i === 0}
                sizes="(max-width: 768px) 100vw, 500px"
              />
              
              {/* Subtle gradient overlay on side cards for depth */}
              {i !== 1 && (
                <div
                  className="absolute inset-0 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: "linear-gradient(180deg, transparent 40%, rgba(10, 13, 20, 0.7) 100%)",
                    opacity: isHovered ? 1 : 0,
                  }}
                />
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
