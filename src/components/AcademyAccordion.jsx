"use client";

import { useState, useRef, useEffect } from "react";

/**
 * AcademyAccordion — Minimalist expandable accordion for Terms & Conditions.
 *
 * @param {object}   props
 * @param {string}   props.title    – The trigger heading
 * @param {React.ReactNode} props.children – The collapsible content
 */
export default function AcademyAccordion({ title, children }) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState("0px");

  useEffect(() => {
    if (open && contentRef.current) {
      setMaxHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setMaxHeight("0px");
    }
  }, [open]);

  return (
    <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white/60 backdrop-blur-[8px]">
      {/* Trigger */}
      <button
        className="academy-accordion-trigger w-full flex items-center justify-between px-7 py-5 text-left"
        onClick={() => setOpen((p) => !p)}
        aria-expanded={open}
      >
        <span className="font-header font-semibold text-[1rem] md:text-[1.1rem] text-charcoal">
          {title}
        </span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-gray-400 shrink-0 transition-transform duration-300"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      {/* Content */}
      <div
        ref={contentRef}
        className={`academy-accordion-content ${open ? "open" : ""}`}
        style={{ maxHeight }}
      >
        <div className="px-7 pb-6 pt-0 text-[0.9rem] text-charcoal-light leading-[1.8] font-body">
          {children}
        </div>
      </div>
    </div>
  );
}
