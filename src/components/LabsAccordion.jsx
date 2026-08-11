"use client";

import { useEffect, useRef, useState } from "react";

export default function LabsAccordion({ items }) {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [isHovering, setIsHovering] = useState(false);
  const itemRefs = useRef([]);
  const hoverTimeoutRef = useRef(null);

  useEffect(() => {
    const observers = [];

    itemRefs.current.forEach((el, i) => {
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !isHovering) {
            setActiveIndex(i);
          }
        },
        {
          threshold: 0.6,
          rootMargin: "-10% 0px -35% 0px",
        }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [isHovering]);

  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const isOpen = activeIndex === i;
        return (
          <div
            key={item.title}
            ref={(el) => (itemRefs.current[i] = el)}
            className={`rounded-[18px] border transition-all duration-500 ${
              isOpen
                ? "bg-white/95 border-blue-200 shadow-lg"
                : "bg-gray-100/60 border-white/50 shadow-sm"
            }`}
            style={{ transition: "all 0.5s var(--ease-out)" }}
            onMouseEnter={() => {
              clearTimeout(hoverTimeoutRef.current);
              setIsHovering(true);
              setActiveIndex(i);
            }}
            onMouseLeave={() => {
              hoverTimeoutRef.current = setTimeout(() => {
                setIsHovering(false);
              }, 300);
            }}
          >
            {/* Header Row */}
            <div className="flex items-center gap-4 px-7 py-5">
              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-500 ${
                  isOpen
                    ? "bg-blue-600 text-white shadow-[0_4px_20px_rgba(37,99,235,0.35)]"
                    : "bg-blue-50 text-blue-600"
                }`}
              >
                {item.icon}
              </div>

              {/* Title */}
              <h4
                className={`flex-1 font-header font-bold text-[1.05rem] md:text-[1.1rem] leading-snug transition-colors duration-400 ${
                  isOpen ? "text-charcoal" : "text-gray-400"
                }`}
              >
                {item.title}
              </h4>


              {/* Animated indicator line */}
              <div
                className={`w-6 h-0.5 rounded-full transition-all duration-500 ${
                  isOpen ? "bg-blue-600 w-8" : "bg-gray-300 w-5"
                }`}
              />
            </div>

            {/* Expandable Content */}
            <div
              className="overflow-hidden transition-all"
              style={{
                maxHeight: isOpen
                  ? `${Math.ceil(item.bullets.length / 2) * 38 + 40}px`
                  : "0",
                opacity: isOpen ? 1 : 0,
                transition:
                  "max-height 0.5s var(--ease-out), opacity 0.4s ease 0.1s",
              }}
            >
              <div className="px-7 pb-6 pl-[4.75rem]">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2.5">
                  {item.bullets.map((bullet, bi) => (
                    <div
                      key={bullet}
                      className="flex items-center gap-2.5 text-[0.9rem] text-charcoal-light font-body"
                      style={{
                        opacity: isOpen ? 1 : 0,
                        transform: isOpen
                          ? "translateY(0)"
                          : "translateY(8px)",
                        transition: `opacity 0.4s ease ${0.15 + bi * 0.04}s, transform 0.4s ease ${0.15 + bi * 0.04}s`,
                      }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                      {bullet}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
