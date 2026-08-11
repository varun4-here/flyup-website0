"use client";

import { useState } from "react";

/**
 * AcademyFlipCard — A formal 3D flip card.
 * Front face shows the category title; back face reveals the curriculum list.
 *
 * @param {object}   props
 * @param {string}   props.title      – Category heading (e.g. "Skill Development")
 * @param {string}   props.subtitle   – Short one-liner for the front face
 * @param {string[]} props.items      – Curriculum bullet points shown on the back
 * @param {React.ReactNode} props.icon – SVG icon element
 */
export default function AcademyFlipCard({ title, subtitle, items, icon }) {
  /* On touch devices hover doesn't work, so we toggle on tap */
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="flip-card h-[320px] md:h-[340px]"
      onClick={() => setFlipped((p) => !p)}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <div
        className="flip-card-inner"
        style={flipped ? { transform: "rotateY(180deg)" } : undefined}
      >
        {/* ── Front Face ── */}
        <div className="flip-card-front bg-gray-100/85 backdrop-blur-[12px] border border-white/60 flex flex-col items-center justify-center p-8 text-center">
          {/* Icon */}
          <div className="w-[56px] h-[56px] rounded-[14px] bg-blue-50 flex items-center justify-center mb-5 text-blue-600">
            {icon}
          </div>

          <h3 className="font-header font-bold text-[1.2rem] md:text-[1.35rem] text-charcoal mb-2 tracking-[-0.01em]">
            {title}
          </h3>
          <p className="text-[0.88rem] text-gray-500 leading-relaxed max-w-[260px]">
            {subtitle}
          </p>

          {/* Subtle hint */}
          <span className="mt-5 text-[0.75rem] text-gray-400 font-body tracking-wide uppercase">
            Hover to explore
          </span>
        </div>

        {/* ── Back Face ── */}
        <div className="flip-card-back bg-charcoal flex flex-col justify-center p-8">
          <h4 className="font-header font-bold text-white text-[1.05rem] mb-5 tracking-[-0.01em]">
            {title}
          </h4>
          <ul className="space-y-2.5">
            {items.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 text-[0.88rem] text-gray-300 leading-snug font-body"
              >
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-orange-400 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
