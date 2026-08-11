"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const MISSION_TEXT =
  "FlyUP Foundation works at the intersection of education technology and skill development — creating future-ready learners through innovation-driven, technology-enabled education models.";

export default function AboutSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("about-in-view");
          observer.unobserve(section); // fire once
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const words = MISSION_TEXT.split(" ");
  const totalWords = words.length;

  // Timing constants (seconds)
  const streamDuration = 1.2;
  const streamDelay = 0.3;
  const wordStartDelay = streamDelay + streamDuration * 0.2; // words start illuminating as the stream is ~20% through
  const wordStagger = 0.06; // seconds between each word
  const lastWordDelay = wordStartDelay + (totalWords - 1) * wordStagger;
  const imageDelay = lastWordDelay + 0.5; // image appears 0.5s after last word
  const ctaDelay = imageDelay + 0.8; // CTA appears after image

  return (
    <section
      ref={sectionRef}
      className="w-full py-24 md:py-32 bg-transparent flex justify-center items-center relative overflow-hidden"
    >
      {/* Subtle backdrop glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[150%] bg-white/30 blur-[100px] -z-10 rounded-full opacity-60 pointer-events-none" />

      <div className="max-w-[900px] mx-auto px-6 text-center relative z-10">
        {/* ---- Heading ---- */}
        <h2 className="about-heading text-blue-600 font-bold mb-2 tracking-wide uppercase text-3xl md:text-4xl font-header">
          About Us
        </h2>

        {/* ---- Data Stream Line ---- */}
        <div className="about-data-stream" />

        {/* ---- Word-by-Word Mission Text ---- */}
        <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed md:leading-relaxed lg:leading-snug font-body font-medium mb-12 tracking-tight">
          {words.map((word, i) => {
            const delay = wordStartDelay + i * wordStagger;
            return (
              <span
                key={i}
                className="about-word"
                style={{ animationDelay: `${delay}s` }}
              >
                {word}
                {i < totalWords - 1 ? "\u00A0" : ""}
              </span>
            );
          })}
        </p>

        {/* ---- 16:9 Image ---- */}
        <div
          className="about-image-wrapper w-full max-w-[800px] mx-auto mb-12"
          style={{ animationDelay: `${imageDelay}s` }}
        >
          <div className="about-image-frame">
            <div className="relative w-full" style={{ aspectRatio: "16 / 9" }}>
              {/* Cloudinary Image Optimized with Next.js Image */}
              <Image
                src="https://res.cloudinary.com/dabcbwfe/image/upload/v1784346813/D72B5E49-B4CE-48ED-A555-B3385744CA42_L0_001-7_1_2025_1_04_36_AM_ytunqb.jpg"
                alt="FlyUP Foundation"
                fill
                className="object-cover"
                sizes="(max-width: 800px) 100vw, 800px"
              />
            </div>
          </div>
        </div>

        {/* ---- CTA Button ---- */}
        <div
          className="about-cta"
          style={{ animationDelay: `${ctaDelay}s` }}
        >
          <a
            href="/about"
            className="group relative inline-flex items-center justify-center px-8 py-3.5 text-sm md:text-base font-body font-bold text-white transition-all duration-300 bg-blue-600 rounded-full hover:bg-blue-700 hover:shadow-[0_8px_20px_rgba(37,99,235,0.25)] hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 btn-shine overflow-hidden"
          >
            <span>Know More</span>
            <svg
              className="w-5 h-5 ml-2 -mr-1 transition-transform duration-300 group-hover:translate-x-1.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
