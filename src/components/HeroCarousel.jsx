"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const SLIDES = [
  {
    src: "https://res.cloudinary.com/dabcbwfe/image/upload/v1784448794/IMG_1245_jhs7ft.jpg",
    alt: "FlyUP Foundation Campus Event",
    label: "Campus Engagement",
  },
  {
    src: "https://res.cloudinary.com/dabcbwfe/image/upload/v1784346814/IMG_1158_gmdwpi.jpg",
    alt: "FlyUP Foundation Workshop",
    label: "Workshop Highlights",
  },
  {
    src: "https://res.cloudinary.com/dabcbwfe/image/upload/v1784448793/IMG_1239_swkxzh.jpg",
    alt: "FlyUP Foundation Student Activity",
    label: "Student Empowerment",
  },
  {
    src: "https://res.cloudinary.com/dabcbwfe/image/upload/v1784447604/DSC00325_liu5ap.jpg",
    alt: "FlyUP Foundation Event",
    label: "Event Highlights",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const total = SLIDES.length;
  const timerRef = useRef(null);
  const touchStartX = useRef(0);

  const goTo = useCallback(
    (index) => {
      let next = index;
      if (next < 0) next = total - 1;
      if (next >= total) next = 0;
      setCurrent(next);
    },
    [total]
  );

  // Autoplay
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 5000);

    return () => clearInterval(timerRef.current);
  }, [total]);

  // Reset autoplay on manual navigation
  function resetAutoplay() {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 5000);
  }

  function next() {
    goTo(current + 1);
    resetAutoplay();
  }

  function prev() {
    goTo(current - 1);
    resetAutoplay();
  }

  // Keyboard navigation
  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  });

  // Touch swipe handlers
  function onTouchStart(e) {
    touchStartX.current = e.changedTouches[0].screenX;
  }

  function onTouchEnd(e) {
    const diff = touchStartX.current - e.changedTouches[0].screenX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) next();
      else prev();
    }
  }

  return (
    <section id="hero" className="pt-4 pb-20 relative">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Headline */}
        <ScrollReveal className="text-center mb-7">
          <h2
            className="font-header font-[800] text-charcoal leading-[1.15] tracking-[-0.02em] mb-4"
            style={{ fontSize: "clamp(2.2rem, 5vw, 3.6rem)" }}
          >
            <span className="text-blue-600 block">Empowering Campuses.</span>
            <span className="text-orange-500 block">Mobilizing Youth.</span>
          </h2>
        </ScrollReveal>

        {/* Carousel */}
        <ScrollReveal delay={0.1}>
          <div
            className="relative w-full rounded-[20px] overflow-hidden shadow-lg bg-gray-200/70 backdrop-blur-[8px] border border-gray-300/50"
            style={{ maxHeight: "calc(100vh - 220px)" }}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            {/* Track */}
            <div
              className="flex will-change-transform"
              style={{
                transform: `translateX(-${current * 100}%)`,
                transition: "transform 0.5s var(--ease-out)",
              }}
            >
              {SLIDES.map((slide, i) => (
                <div key={i} className="min-w-full flex-shrink-0">
                  <div className="relative w-full" style={{ aspectRatio: "16 / 8.2" }}>
                    <Image
                      src={slide.src}
                      alt={slide.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 1200px"
                      priority={i === 0}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Left Arrow */}
            <button
              onClick={prev}
              className="absolute top-1/2 left-5 -translate-y-1/2 w-[52px] h-[52px] rounded-full bg-gray-200/92 backdrop-blur-[12px] shadow-md flex items-center justify-center z-10 cursor-pointer border-none text-charcoal hover:bg-gray-300 hover:shadow-lg hover:scale-[1.08] transition-all duration-300 max-md:w-10 max-md:h-10 max-md:left-3"
              aria-label="Previous slide"
            >
              <svg
                className="w-[22px] h-[22px] max-md:w-[18px] max-md:h-[18px]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            {/* Right Arrow */}
            <button
              onClick={next}
              className="absolute top-1/2 right-5 -translate-y-1/2 w-[52px] h-[52px] rounded-full bg-gray-200/92 backdrop-blur-[12px] shadow-md flex items-center justify-center z-10 cursor-pointer border-none text-charcoal hover:bg-gray-300 hover:shadow-lg hover:scale-[1.08] transition-all duration-300 max-md:w-10 max-md:h-10 max-md:right-3"
              aria-label="Next slide"
            >
              <svg
                className="w-[22px] h-[22px] max-md:w-[18px] max-md:h-[18px]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>

            {/* Dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2.5 z-10 max-[480px]:bottom-3.5">
              {SLIDES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    goTo(i);
                    resetAutoplay();
                  }}
                  className={`w-3 h-3 rounded-full border-2 p-0 cursor-pointer transition-all duration-300 max-[480px]:w-2.5 max-[480px]:h-2.5 ${
                    i === current
                      ? "bg-orange-500 border-orange-500 scale-[1.2] dot-active"
                      : "bg-transparent border-gray-400/70 hover:bg-gray-300/50 hover:border-gray-400"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
