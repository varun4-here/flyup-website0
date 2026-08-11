import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import LabsAccordion from "@/components/LabsAccordion";

/* ──────────────────────────────────────────────
   SEO Metadata
   ────────────────────────────────────────────── */
export const metadata = {
  title:
    "Innovation Labs — Future-Ready STEM, AI, Robotics & Aerospace Labs | FlyUP Foundation",
  description:
    "FLYUP Foundation partners with schools, colleges, and universities to establish world-class Innovation Labs in AI & Robotics, Composite STEAM, Financial Literacy, Aerospace, and Life Sciences — transforming education through experiential, future-ready learning.",
  keywords: [
    "Innovation Labs",
    "STEM Labs India",
    "AI Robotics Lab Schools",
    "STEAM Education",
    "Aerospace Lab",
    "Financial Literacy Lab",
    "Life Sciences Lab",
    "NEP 2020 Labs",
    "FlyUP Foundation",
    "Future Skills Ecosystem",
    "Turnkey Lab Solutions",
    "Experiential Learning",
    "School Innovation Lab Setup",
    "Gorakhpur",
    "Uttar Pradesh",
  ],
  openGraph: {
    title:
      "Innovation Labs — Future-Ready Learning | FlyUP Foundation",
    description:
      "World-class Innovation Labs for schools, colleges, and universities — AI & Robotics, STEAM, Financial Literacy, Aerospace, and Life Sciences.",
    type: "website",
  },
};

/* ──────────────────────────────────────────────
   CTA Links
   ────────────────────────────────────────────── */
const WHATSAPP_NUMBER = "919129504245";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hello, I am interested in setting up Innovation Labs at our institution. Please share more details."
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;
const EMAIL = "labs@flyupfoundation.org.in";

/* ──────────────────────────────────────────────
   Innovation Labs Data
   ────────────────────────────────────────────── */
const LABS = [
  {
    id: "ai-robotics-lab",
    title: "AI & Robotics Lab",
    description:
      "Empowering students with hands-on learning in Artificial Intelligence, Robotics, Coding, IoT, Automation, and Machine Learning.",
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
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M9 2v7.5L4.5 16A2.5 2.5 0 0 0 6.5 20h11a2.5 2.5 0 0 0 2-4.5L15 9.5V2" />
        <path d="M8 2h8" />
        <path d="M15 9l4.5 5.5" />
      </svg>
    ),
  },
  {
    id: "financial-literacy-lab",
    title: "Financial Literacy Lab",
    description:
      "Developing financial confidence through practical learning in budgeting, digital finance, investing, entrepreneurship, and business planning.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    id: "aerospace-lab",
    title: "Aerospace Lab",
    description:
      "Introducing students to drones, aeromodelling, aviation, rocketry, and space science through project-based learning.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
      </svg>
    ),
  },
  {
    id: "life-sciences-lab",
    title: "Life Sciences & Environmental Lab",
    description:
      "Encouraging scientific exploration with biotechnology, environmental science, sustainability, climate action, and waste management programs.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M7 20h10" />
        <path d="M10 20c5.5-2.5.8-6.4 3-10" />
        <path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z" />
        <path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z" />
      </svg>
    ),
  },
];

/* ──────────────────────────────────────────────
   What We Provide — Accordion Data
   ────────────────────────────────────────────── */
const PROVIDE_ITEMS = [
  {
    title: "Infrastructure & Equipment",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
      </svg>
    ),
    bullets: [
      "Lab planning and design",
      "Robotics kits and AI learning tools",
      "STEAM equipment",
      "Aerospace learning kits",
      "Financial literacy learning resources",
      "Life sciences and environmental education kits",
      "Software and digital learning platforms",
    ],
  },
  {
    title: "Academic Support",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
    bullets: [
      "Structured curriculum",
      "Activity manuals and lesson plans",
      "Project-based learning modules",
      "Student workbooks and digital resources",
      "Assessment and evaluation framework",
    ],
  },
  {
    title: "Training & Capacity Building",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    bullets: [
      "Student training programs",
      "Teacher professional development",
      "Faculty orientation workshops",
      "Expert mentoring sessions",
      "Certification courses",
    ],
  },
  {
    title: "Innovation & Engagement",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M12 2v8l4-2" />
        <circle cx="12" cy="14" r="8" />
      </svg>
    ),
    bullets: [
      "Innovation challenges",
      "Hackathons and competitions",
      "Robotics and coding events",
      "Entrepreneurship bootcamps",
      "Financial literacy workshops",
      "Environmental awareness campaigns",
    ],
  },
  {
    title: "Technical & Operational Support",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    bullets: [
      "Lab installation and setup",
      "Equipment maintenance guidance",
      "Curriculum updates",
      "Technical assistance",
      "Annual support and consultation",
    ],
  },
];

/* ──────────────────────────────────────────────
   Why Choose FLYUP
   ────────────────────────────────────────────── */
const WHY_CHOOSE = [
  { text: "Complete turnkey lab solutions" },
  { text: "Hands-on, experiential learning" },
  { text: "Industry-relevant curriculum" },
  { text: "NEP 2020 aligned approach" },
  { text: "Customizable for schools, colleges, and universities" },
  { text: "Focus on innovation, entrepreneurship, and future skills" },
];

/* ──────────────────────────────────────────────
   Page Component
   ────────────────────────────────────────────── */
export default function LabsPage() {
  return (
    <main>
      <Navbar />

      {/* ─── Hero Section — Split Layout with Floating Robot ─── */}
      <section className="pt-28 pb-8 md:pt-36 md:pb-16 overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm font-body text-gray-400">
              <li>
                <a href="/" className="hover:text-blue-600 transition-colors">
                  Home
                </a>
              </li>
              <li aria-hidden="true">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </li>
              <li className="text-charcoal font-medium">Innovation Labs</li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Left: Text */}
            <div>
              <ScrollReveal>
                <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full font-header font-semibold text-[0.78rem] tracking-[0.1em] uppercase mb-6 bg-blue-50 text-blue-600 border border-blue-100">
                  Innovation Labs
                </span>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <h1
                  className="font-header font-[800] text-charcoal leading-[1.1] tracking-[-0.025em] mb-5"
                  style={{ fontSize: "clamp(2.2rem, 5vw, 3.6rem)" }}
                >
                  Transforming Education Through{" "}
                  <span className="text-blue-600">Future-Ready</span> Learning
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <p className="font-body text-gray-500 text-[1.05rem] md:text-lg leading-[1.85] mb-8 max-w-[540px]">
                  FLYUP Foundation partners with schools, colleges, and
                  universities to establish world-class Innovation Labs that
                  combine technology, creativity, entrepreneurship, and
                  experiential learning.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.25}>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="#our-labs"
                    className="btn-shine relative overflow-hidden inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-header font-semibold text-[0.95rem] tracking-[0.02em] bg-blue-600 text-white shadow-[0_4px_20px_rgba(37,99,235,0.3)] hover:bg-blue-700 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(37,99,235,0.4)] transition-all duration-300 cursor-pointer"
                  >
                    Explore Labs
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                  <a
                    href="#contact-cta"
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-header font-semibold text-[0.95rem] tracking-[0.02em] bg-transparent text-charcoal border-2 border-gray-300 hover:border-blue-300 hover:text-blue-600 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
                  >
                    Get in Touch
                  </a>
                </div>
              </ScrollReveal>
            </div>

            {/* Right: Floating Robot — Large & Prominent */}
            <ScrollReveal delay={0.15} className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Radial glow behind the robot */}
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background:
                      "radial-gradient(circle at center, rgba(59, 130, 246, 0.15) 0%, rgba(249, 115, 22, 0.08) 40%, transparent 65%)",
                    transform: "scale(2)",
                  }}
                />
                <Image
                  src="/images/robot_zing.png"
                  alt="ZING Humanoid Robot — FLYUP Innovation Labs"
                  width={800}
                  height={940}
                  className="labs-robot-float relative z-10 object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)] scale-[1.1] md:scale-[1.25] lg:scale-[1.35] origin-center"
                  priority
                  style={{ maxHeight: "780px", width: "auto" }}
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="labs-divider" />

      {/* ─── Our Innovation Labs — 5 Equal Cards ─── */}
      <section id="our-labs" className="py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <ScrollReveal className="text-center mb-14">
            <h2
              className="font-header font-[800] text-charcoal leading-[1.15] mb-5"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)" }}
            >
              Our Innovation <span className="text-blue-600">Labs</span>
            </h2>
            <p className="font-body text-gray-500 text-[1.05rem] max-w-[620px] mx-auto leading-[1.8]">
              Five dedicated lab verticals designed to equip students with
              practical skills aligned with the future of education and work.
            </p>
          </ScrollReveal>

          {/* 5 Equal Cards — flex wrap, 3 top + 2 centered bottom */}
          <div className="flex flex-wrap justify-center gap-6">
            {LABS.map((lab, i) => (
              <ScrollReveal
                key={lab.id}
                delay={0.08 * (i + 1)}
                className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
              >
                <div
                  id={lab.id}
                  className="lab-card group bg-gray-100/85 backdrop-blur-[12px] rounded-[20px] shadow-sm border border-white/60 p-7 h-full transition-all duration-400 hover:-translate-y-2 hover:shadow-xl hover:bg-white/95 hover:border-blue-200"
                  style={{ transition: "all 0.4s var(--ease-out)" }}
                >
                  {/* Icon */}
                  <div className="w-[52px] h-[52px] rounded-[14px] bg-blue-50 flex items-center justify-center mb-5 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-[0_4px_16px_rgba(37,99,235,0.3)]">
                    {lab.icon}
                  </div>
                  <h3 className="font-header font-bold text-[1.25rem] text-charcoal mb-2.5 leading-tight">
                    {lab.title}
                  </h3>
                  <p className="text-[0.92rem] text-gray-500 leading-[1.7]">
                    {lab.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="labs-divider" />

      {/* ─── What We Provide — Centered Heading + Full-Width Scroll-Expand ─── */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          {/* Centered Heading */}
          <ScrollReveal className="text-center mb-12">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full font-header font-semibold text-[0.78rem] tracking-[0.08em] uppercase mb-4 bg-blue-50 text-blue-600">
              End-to-End Solutions
            </span>
            <h2
              className="font-header font-[800] text-charcoal leading-[1.15] mb-5"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)" }}
            >
              What We <span className="text-blue-600">Provide</span>
            </h2>
            <p className="font-body text-[1.05rem] text-gray-500 leading-[1.85] max-w-[580px] mx-auto">
              FLYUP offers complete end-to-end solutions for establishing
              and operating Innovation Labs — from infrastructure and
              curriculum to training and ongoing support.
            </p>
          </ScrollReveal>

          {/* Full-Width Scroll-Expand Accordion */}
          <LabsAccordion items={PROVIDE_ITEMS} />
        </div>
      </section>

      {/* Divider */}
      <div className="labs-divider" />

      {/* ─── Why Choose FLYUP — Interactive ─── */}
      <section className="py-16 md:py-24">
        <div className="max-w-[900px] mx-auto px-6">
          <ScrollReveal className="text-center mb-12">
            <h2
              className="font-header font-[800] text-charcoal leading-[1.15] mb-5"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)" }}
            >
              Why Choose <span className="text-blue-600">FLYUP</span>?
            </h2>
            <p className="font-body text-gray-500 text-[1.05rem] max-w-[550px] mx-auto leading-relaxed">
              From planning to deployment to long-term support — we are your
              end-to-end Innovation Lab partner.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {WHY_CHOOSE.map((item, i) => (
              <ScrollReveal key={item.text} delay={0.06 * (i + 1)}>
                <div className="why-card flex items-center gap-4 px-6 py-5 rounded-[16px] bg-gray-100/85 backdrop-blur-[8px] border border-white/60 shadow-sm cursor-default transition-all duration-300 hover:shadow-lg hover:border-blue-200 hover:-translate-y-1 hover:bg-white/95">
                  {/* Number badge */}
                  <span className="w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center font-header font-bold text-[0.85rem] text-blue-600 shrink-0 transition-all duration-300">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {/* Text */}
                  <span className="font-body font-medium text-[0.95rem] text-charcoal leading-snug flex-1">
                    {item.text}
                  </span>

                  {/* Animated checkmark */}
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="why-check w-5 h-5 text-blue-600 shrink-0 transition-colors duration-300"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="labs-divider" />

      {/* ─── Final CTA — Let's Build Future-Ready Campuses ─── */}
      <section id="contact-cta" className="py-16 md:py-24">
        <div className="max-w-[900px] mx-auto px-6">
          <ScrollReveal>
            <div className="bg-charcoal rounded-[24px] px-10 py-14 md:px-16 md:py-16 text-center">
              <h2
                className="font-header font-[800] text-white leading-[1.15] mb-4 tracking-[-0.02em]"
                style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)" }}
              >
                Let&apos;s Build Future-Ready Campuses
              </h2>
              <p className="font-body text-gray-400 text-[1rem] md:text-[1.05rem] leading-[1.8] max-w-[600px] mx-auto mb-10">
                Whether you&apos;re looking to establish a single lab or a
                comprehensive Future Skills ecosystem, FLYUP Foundation provides
                the expertise, infrastructure, training, and ongoing support to
                help your institution create meaningful learning experiences.
              </p>

              {/* Dual CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                {/* Email Button */}
                <a
                  href={`mailto:${EMAIL}?subject=${encodeURIComponent("Innovation Lab Inquiry")}`}
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-header font-bold text-[0.95rem] tracking-[0.02em] bg-white text-charcoal border-2 border-white hover:bg-blue-50 hover:border-blue-200 hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(37,99,235,0.15)] transition-all duration-300"
                >
                  {/* Mail Icon */}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  labs@flyupfoundation.org.in
                </a>

                {/* WhatsApp Button */}
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-header font-bold text-[0.95rem] tracking-[0.02em] text-white hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(37,211,102,0.35)] transition-all duration-300"
                  style={{
                    background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
                  }}
                >
                  {/* WhatsApp Icon */}
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp Us
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
