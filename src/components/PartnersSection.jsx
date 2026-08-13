"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const PARTNERS = [
  "https://res.cloudinary.com/dabcbwfe/image/upload/v1786641388/WhatsApp_Image_2026-08-04_at_10.44.57_PM-removebg-preview_zlyngk.png",
  "https://res.cloudinary.com/dabcbwfe/image/upload/v1786641388/WhatsApp_Image_2026-08-11_at_2.18.06_PM_du36pl.jpg",
  "https://res.cloudinary.com/dabcbwfe/image/upload/v1786641388/WhatsApp_Image_2026-08-11_at_2.16.29_PM_bjlfy5.jpg",
  "https://res.cloudinary.com/dabcbwfe/image/upload/v1786641389/WhatsApp_Image_2026-08-11_at_2.18.27_PM_i3e6nz.jpg",
  "https://res.cloudinary.com/dabcbwfe/image/upload/v1786641390/WhatsApp_Image_2026-08-11_at_2.18.29_PM_e0errn.jpg",
  "https://res.cloudinary.com/dabcbwfe/image/upload/v1786641391/WhatsApp_Image_2026-08-11_at_6.21.44_PM_quows1.jpg"
];

export default function PartnersSection() {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Auto-scrolling logic
  useEffect(() => {
    let animationFrameId;
    const scrollContainer = scrollRef.current;
    
    if (!scrollContainer) return;

    const scroll = () => {
      if (!isPaused && !isDragging) {
        scrollContainer.scrollLeft += 1.5; // Auto-scroll speed
        
        // Reset when scrolled past half the duplicated content
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused, isDragging]);

  // Mouse drag handlers
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    setIsPaused(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Drag sensitivity
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="py-20 w-full overflow-hidden relative border-y border-white/5 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-6 mb-16 text-center">
        <h2 className="text-3xl md:text-4xl font-header font-bold text-orange-500 mb-5 tracking-wide uppercase">
          Our Partners
        </h2>
        <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full shadow-[0_0_15px_rgba(249,115,22,0.5)]"></div>
      </div>

      {/* Scrollable Container */}
      <div 
        className="relative w-full overflow-hidden"
        style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
      >
        <div 
          ref={scrollRef}
          className="flex w-full gap-16 md:gap-24 px-8 items-center overflow-x-auto cursor-grab active:cursor-grabbing"
          style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }} // hide scrollbar in Firefox/IE
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={handleMouseLeave}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          {/* Duplicate the array multiple times to ensure enough content to scroll infinitely without snapping awkwardly */}
          {[...PARTNERS, ...PARTNERS, ...PARTNERS, ...PARTNERS].map((src, index) => (
            <div
              key={index}
              className="min-w-[160px] h-[80px] relative flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 drop-shadow-md shrink-0"
            >
              <Image
                src={src}
                alt={`Partner ${index}`}
                fill
                sizes="(max-width: 768px) 160px, 160px"
                className="object-contain pointer-events-none"
              />
            </div>
          ))}
        </div>
      </div>
      {/* Hide scrollbar in Chrome/Safari */}
      <style dangerouslySetInnerHTML={{__html: `
        ::-webkit-scrollbar { display: none; }
      `}} />
    </section>
  );
}
