import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const LABS = [
  {
    id: "ai-robotics-lab",
    title: "AI & Robotics Lab",
    description:
      "Empowering students with hands-on learning in Artificial Intelligence, Robotics, Coding, IoT, Automation, and Machine Learning.",
    image: "/images/lab_robotics.png",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
        <rect x="9" y="9" width="6" height="6" />
        <line x1="9" y1="1" x2="9" y2="4" />
        <line x1="15" y1="1" x2="15" y2="4" />
        <line x1="9" y1="20" x2="9" y2="23" />
        <line x1="15" y1="20" x2="15" y2="23" />
        <line x1="20" y1="9" x2="23" y2="9" />
        <line x1="20" y1="14" x2="23" y2="14" />
        <line x1="1" y1="9" x2="4" y2="9" />
        <line x1="1" y1="14" x2="4" y2="14" />
      </svg>
    ),
  },
  {
    id: "steam-lab",
    title: "Composite STEAM Lab",
    description:
      "An integrated learning space for Science, Technology, Engineering, Arts, and Mathematics — promoting creativity, innovation, and design thinking.",
    image: "/images/lab_stem.png",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M9 2v7.5L4.5 16A2.5 2.5 0 0 0 6.5 20h11a2.5 2.5 0 0 0 2-4.5L15 9.5V2" />
        <path d="M8 2h8" />
        <path d="M15 9l4.5 5.5" />
      </svg>
    ),
  },
  {
    id: "aerospace-lab",
    title: "Aerospace Lab",
    description:
      "Introducing students to drones, aeromodelling, aviation, rocketry, and space science through project-based learning.",
    image: "/images/lab_ai.png", 
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
      </svg>
    ),
  },
];

export default function LabsSection() {
  return (
    <section id="labs" className="py-[100px] max-md:py-[72px] bg-transparent">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <ScrollReveal className="text-center mb-16">
          <h2
            className="font-header font-[800] text-charcoal leading-[1.15] mb-5"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Innovation <span className="text-blue-600">Labs</span>
          </h2>
          <p className="text-[1.1rem] text-gray-500 max-w-[700px] mx-auto leading-[1.8]">
            Discover our dedicated lab setups designed to bring experiential 
            technology and science education directly to campuses across Uttar Pradesh.
          </p>
        </ScrollReveal>

        {/* Grid */}
        <div className="grid grid-cols-3 gap-8 max-lg:grid-cols-2 max-md:grid-cols-1">
          {LABS.map((lab, i) => (
            <ScrollReveal key={lab.id} delay={0.1 * (i + 1)}>
              <div
                id={lab.id}
                className="group bg-gray-100/85 backdrop-blur-[12px] rounded-[20px] overflow-hidden shadow-sm border border-white/60 transition-all duration-400 hover:-translate-y-2 hover:shadow-xl hover:bg-gray-100/95 hover:border-blue-100"
                style={{ transition: "all 0.4s var(--ease-out)" }}
              >
                {/* Card Image */}
                <div className="w-full h-[220px] overflow-hidden relative">
                  <Image
                    src={lab.image}
                    alt={lab.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                {/* Card Content */}
                <div className="p-7">
                  {/* Icon */}
                  <div className="w-[52px] h-[52px] rounded-[14px] bg-blue-50 flex items-center justify-center mb-[18px] text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                    {lab.icon}
                  </div>
                  <h3 className="font-header font-bold text-[1.3rem] text-charcoal mb-2.5">
                    {lab.title}
                  </h3>
                  <p className="text-[0.95rem] text-gray-500 leading-[1.7]">
                    {lab.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal delay={0.3} className="text-center mt-12">
          <a
            href="/labs"
            className="btn-shine relative overflow-hidden inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-header font-semibold text-[0.95rem] tracking-[0.02em] bg-blue-600 text-white shadow-[0_4px_20px_rgba(37,99,235,0.3)] hover:bg-blue-700 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(37,99,235,0.4)] transition-all duration-300 cursor-pointer"
          >
            Explore Our Labs
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
        </ScrollReveal>
      </div>
    </section>
  );
}
