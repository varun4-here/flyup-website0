"use client";

import { useEffect, useRef } from "react";

export default function PreHero() {
  const vantaRef = useRef(null);
  const sectionRef = useRef(null);
  const effectRef = useRef(null);

  // Initialize Vanta.js clouds via CDN
  useEffect(() => {
    let isMounted = true;

    function loadScript(src) {
      return new Promise((resolve, reject) => {
        // Skip if already loaded
        const existing = document.querySelector(`script[src="${src}"]`);
        if (existing) { resolve(); return; }
        const script = document.createElement("script");
        script.src = src;
        script.async = true;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
      });
    }

    async function initVanta() {
      try {
        await loadScript("https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js");
        await loadScript("https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.clouds.min.js");

        if (!isMounted || !vantaRef.current || !window.VANTA) return;

        effectRef.current = window.VANTA.CLOUDS({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          backgroundColor: 0xffffff,
          skyColor: 0x68b8d7,
          cloudColor: 0xadc1de,
          cloudShadowColor: 0x183550,
          sunColor: 0xff9919,
          sunGlareColor: 0xff6633,
          sunlightColor: 0xff9933,
          speed: 1
        });
      } catch (e) {
        console.warn("Vanta.js could not initialize:", e);
        if (vantaRef.current) {
          vantaRef.current.classList.add("vanta-fallback");
        }
      }
    }

    initVanta();

    return () => {
      isMounted = false;
      if (effectRef.current) {
        effectRef.current.destroy();
      }
    };
  }, []);

  // Pre-hero fade on scroll + dispatch navbar activation event
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let ticking = false;

    function handleScroll() {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const fadeStart = windowHeight * 0.1;
      const fadeEnd = windowHeight * 0.7;

      if (scrollY <= fadeStart) {
        section.style.opacity = "1";
        section.style.transform = "translateY(0)";
        section.style.pointerEvents = "auto";
      } else if (scrollY >= fadeEnd) {
        section.style.opacity = "0";
        section.style.transform = "translateY(-60px)";
        section.style.pointerEvents = "none";
      } else {
        const progress = (scrollY - fadeStart) / (fadeEnd - fadeStart);
        section.style.opacity = String(1 - progress);
        section.style.transform = `translateY(${-60 * progress}px)`;
        section.style.pointerEvents = progress > 0.5 ? "none" : "auto";
      }

      // Dispatch custom event for Navbar to listen to
      window.dispatchEvent(
        new CustomEvent("flyup-scroll", {
          detail: { scrollY, windowHeight },
        })
      );
    }

    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen z-[100] pre-hero-gradient"
      style={{ transition: "opacity 0.6s var(--ease-smooth)" }}
    >
      {/* Vanta Canvas */}
      <div ref={vantaRef} className="absolute inset-0 w-full h-full" />

      {/* Title Lockup */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none">
        <div
          className="flex flex-col items-center mb-[30vh] md:mb-[50vh] animate-[logo-float_4s_ease-in-out_infinite]"
        >
          <h1
            className="font-header font-[800] leading-none m-0 text-white select-none"
            style={{
              fontSize: "clamp(4rem, 10vw, 8rem)",
              textShadow:
                "0 4px 30px rgba(0,0,0,0.2), 0 2px 10px rgba(0,0,0,0.1)",
              letterSpacing: "-0.02em",
            }}
          >
            Fly UP
          </h1>
          <div
            className="font-body font-bold text-black/95 uppercase mt-2"
            style={{
              fontSize: "clamp(0.85rem, 2.1vw, 1.7rem)",
              letterSpacing: "0.52em",
              marginRight: "-0.52em",
            }}
          >
            FOUNDATION
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-10 left-1/2 flex flex-col items-center gap-2 z-10 pointer-events-none animate-[bounce-scroll_2.5s_infinite]"
        style={{ transform: "translateX(-50%)" }}
      >
        <span className="font-body text-xs text-black uppercase tracking-[0.15em]">
          Scroll
        </span>
        <svg
          className="w-6 h-6 stroke-black"
          viewBox="0 0 24 24"
          fill="none"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
