import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function AcademySection() {
  return (
    <section
      id="academy"
      className="py-[100px] max-md:py-[72px] bg-transparent"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-2 gap-16 items-center max-lg:grid-cols-1 max-lg:gap-10 max-md:gap-8">
          {/* Left: Text */}
          <ScrollReveal>
            <div className="text-left">
              {/* Section Label Pill */}
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full font-header font-semibold text-[0.8rem] tracking-[0.08em] uppercase mb-4 bg-blue-50 text-blue-600">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                </svg>
                FLYUP Academy
              </span>

              <h2
                className="font-header font-[800] text-charcoal leading-[1.15] mb-5"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
              >
                Campus Immersion{" "}
                <span className="text-blue-600">Program</span>
              </h2>

              <p className="text-[1.05rem] text-gray-500 leading-[1.85] mb-9 max-w-[520px]">
                A one-year experiential learning membership designed to
                complement classroom education — exposing students to
                innovation, leadership, entrepreneurship, and community
                engagement across Eastern Uttar Pradesh.
              </p>

              <a
                href="/academy"
                className="btn-shine relative overflow-hidden inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-header font-semibold text-[0.95rem] tracking-[0.02em] bg-orange-500 text-white shadow-[0_4px_20px_rgba(249,115,22,0.35)] hover:bg-orange-600 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(249,115,22,0.45)] transition-all duration-300 cursor-pointer"
              >
                Explore the Academy
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </ScrollReveal>

          {/* Right: Image */}
          <ScrollReveal delay={0.2}>
            <div className="relative w-full aspect-video rounded-[20px] overflow-hidden bg-gray-100/70 backdrop-blur-[8px] shadow-md hover:shadow-lg hover:bg-gray-100/90 transition-all duration-300 border border-white/40">
              <Image
                src="https://res.cloudinary.com/dabcbwfe/image/upload/v1784449497/IMG_2532_nvdbqu.jpg"
                alt="FLYUP Campus Immersion Program"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
