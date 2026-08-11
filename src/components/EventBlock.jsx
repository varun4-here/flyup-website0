"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

/**
 * EventBlock — Master & Thumbnails layout for a single event.
 * Images float to one side; text wraps around and below them.
 *
 * @param {object}   props
 * @param {string}   props.badge       – Badge text (e.g. location / date)
 * @param {React.ReactNode} props.children – Rich text content (SEO-optimized HTML)
 * @param {Array<{src: string, alt: string}>} props.images – 4-5 images
 * @param {boolean}  [props.reversed]   – Float images to the right instead of left
 */
export default function EventBlock({ badge, children, images, reversed = false }) {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-play the slideshow
  useEffect(() => {
    if (!images || images.length <= 1) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 4000); // Change image every 4 seconds
    return () => clearInterval(interval);
  }, [images]);

  const floatSide = reversed ? "float-right ml-8 lg:ml-12" : "float-left mr-8 lg:mr-12";

  return (
    <ScrollReveal>
      <div className="event-text-content font-body text-charcoal overflow-hidden">
        {/* Floating image block */}
        <div className={`${floatSide} w-full sm:w-[55%] mb-6 flex flex-col gap-3`}>
          {/* Master Image */}
          <div className="about-image-frame relative w-full" style={{ aspectRatio: "16 / 9" }}>
            {images.map((img, i) => (
              <Image
                key={img.src}
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 100vw, 660px"
                className={`event-master-image ${i === activeIndex ? "active" : ""}`}
                priority={i === 0}
              />
            ))}
          </div>

          {/* Thumbnail Strip */}
          <div className="flex gap-2.5">
            {images.map((img, i) => (
              <button
                key={img.src}
                className={`event-thumb ${i === activeIndex ? "active" : ""}`}
                onClick={() => setActiveIndex(i)}
                aria-label={`View image ${i + 1}: ${img.alt}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={160}
                  height={100}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Badge */}
        {badge && (
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 font-header font-semibold text-xs tracking-wide uppercase mb-4">
            {badge}
          </span>
        )}

        {/* Content — flows around the floated images */}
        {children}
      </div>
    </ScrollReveal>
  );
}
