import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

/* ──────────────────────────────────────────────
   SEO Metadata
   ────────────────────────────────────────────── */
export const metadata = {
  title:
    "Career & Admission Services — Guidance from Learning to Career Success | FlyUP Foundation",
  description:
    "FLYUP Foundation supports students at every stage of their academic and professional journey through comprehensive career guidance, higher education counselling, skill development, and admission support.",
  keywords: [
    "Career Counselling",
    "Admission Services",
    "Higher Education Guidance",
    "Resume Building",
    "Interview Preparation",
    "University Admissions",
    "Career Readiness",
    "FlyUP Foundation",
    "Gorakhpur Career Services",
    "Study Abroad Guidance",
    "Scholarship Awareness",
    "DDU Gorakhpur",
    "Professional Development",
    "Internship Guidance",
    "Industry Orientation",
  ],
  openGraph: {
    title:
      "Career & Admission Services — Guidance from Learning to Career Success | FlyUP Foundation",
    description:
      "Comprehensive career guidance, higher education counselling, and admission support for students across Eastern Uttar Pradesh.",
    type: "website",
  },
};

/* ──────────────────────────────────────────────
   WhatsApp CTA
   ────────────────────────────────────────────── */
const WHATSAPP_NUMBER = "919129504245";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hello, I am interested in FLYUP's Career & Admission Services and would like to speak with a counsellor."
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

/* ──────────────────────────────────────────────
   Services Data
   ────────────────────────────────────────────── */
const SERVICES = [
  {
    title: "Career Counselling",
    description: "Structured guidance to help students identify their strengths and chart a clear professional path.",
    items: [
      "Career planning and guidance",
      "Career aptitude awareness",
      "One-on-one mentoring",
      "Career pathway exploration",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 10 3 12 0v-5" />
      </svg>
    ),
  },
  {
    title: "Higher Education Admissions",
    description: "End-to-end admission support across undergraduate, postgraduate, and professional programs.",
    items: [
      "Undergraduate & Postgraduate Admissions",
      "Online & Distance Learning (ODL)",
      "Professional Diploma & Certificate Programs",
      "University Selection Guidance",
      "Admission Documentation Support",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
      </svg>
    ),
  },
  {
    title: "Study Opportunities",
    description: "Awareness and support for national and international academic pathways and scholarships.",
    items: [
      "National University Admissions",
      "International Education Guidance",
      "Scholarship Awareness",
      "Entrance Exam Counselling",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    title: "Professional Profile Development",
    description: "Building a competitive professional identity for academic and corporate environments.",
    items: [
      "Resume & CV Building",
      "Statement of Purpose (SOP)",
      "LinkedIn Profile Optimization",
      "Interview Preparation",
      "Personal Branding",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6" />
        <path d="M16 13H8" />
        <path d="M16 17H8" />
        <path d="M10 9H8" />
      </svg>
    ),
  },
  {
    title: "Career Readiness",
    description: "Practical training programs that prepare students for the demands of the modern workforce.",
    items: [
      "Digital Skills",
      "Communication Skills",
      "Employability Training",
      "Internship Guidance",
      "Industry Orientation",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
      </svg>
    ),
  },
  {
    title: "Institutional Partnerships",
    description: "Collaborative programs connecting educational institutions with industry and community.",
    items: [
      "University Collaboration Programs",
      "Industry-Academia Connect",
      "Career Awareness Workshops",
      "Campus Outreach Initiatives",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

/* ──────────────────────────────────────────────
   Why Choose FLYUP
   ────────────────────────────────────────────── */
const WHY_CHOOSE = [
  "Personalized guidance tailored to individual goals",
  "Trusted network of universities and industry partners",
  "End-to-end admission and documentation support",
  "Industry-oriented career mentoring",
  "Focus on lifelong learning and employability",
];

/* ──────────────────────────────────────────────
   Page Component
   ────────────────────────────────────────────── */
export default function ServicesPage() {
  return (
    <main>
      <Navbar />

      {/* ─── Hero Section ─── */}
      <section className="pt-28 pb-12 md:pt-32 md:pb-16">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center justify-center gap-2 text-sm font-body text-gray-400">
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
              <li className="text-charcoal font-medium">Services</li>
            </ol>
          </nav>

          {/* Badge */}
          <ScrollReveal>
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full font-header font-semibold text-[0.78rem] tracking-[0.1em] uppercase mb-6 bg-blue-50 text-blue-600 border border-blue-100">
              Career & Admission Partner
            </span>
          </ScrollReveal>

          {/* Heading */}
          <ScrollReveal delay={0.1}>
            <h1
              className="font-header font-[800] text-charcoal leading-[1.1] tracking-[-0.025em] mb-5"
              style={{ fontSize: "clamp(2.4rem, 5.5vw, 4rem)" }}
            >
              Career & Admission{" "}
              <span className="text-blue-600">Services</span>
            </h1>
          </ScrollReveal>

          {/* Tagline */}
          <ScrollReveal delay={0.15}>
            <p className="font-header font-semibold text-[1.05rem] md:text-[1.15rem] text-charcoal tracking-[0.04em] uppercase mb-4">
              Guiding Students from Learning to Career Success
            </p>
          </ScrollReveal>

          {/* Description */}
          <ScrollReveal delay={0.2}>
            <p className="font-body text-gray-500 text-[1.05rem] md:text-lg max-w-[720px] mx-auto leading-[1.85]">
              FLYUP Foundation supports students at every stage of their academic
              and professional journey through comprehensive career guidance,
              higher education counselling, skill development, and admission
              support.
            </p>
          </ScrollReveal>

          {/* Hero Image */}
          <ScrollReveal delay={0.25}>
            <div className="about-image-frame relative w-full max-w-[900px] mx-auto mt-10" style={{ aspectRatio: "21 / 9" }}>
              <Image
                src="https://res.cloudinary.com/dabcbwfe/image/upload/v1784449501/IMG_2537_ftylxa.jpg"
                alt="FLYUP Career and Admission Services — students receiving guidance"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 900px"
                priority
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Divider ─── */}
      <div className="academy-divider" />

      {/* ─── Our Services — 3x2 Grid ─── */}
      <section className="py-12 md:py-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <ScrollReveal className="text-center mb-14">
            <h2
              className="font-header font-[800] text-charcoal leading-[1.15] mb-4"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)" }}
            >
              Our <span className="text-blue-600">Services</span>
            </h2>
            <p className="font-body text-gray-500 text-[1.05rem] max-w-[600px] mx-auto leading-relaxed">
              Six integrated service areas designed to take students from
              academic clarity to professional readiness.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, i) => (
              <ScrollReveal key={service.title} delay={0.08 * (i + 1)}>
                <div
                  className="group bg-gray-100/85 backdrop-blur-[12px] rounded-[20px] overflow-hidden shadow-sm border border-white/60 transition-all duration-400 hover:-translate-y-2 hover:shadow-xl hover:bg-gray-100/95 hover:border-blue-100 p-7"
                  style={{ transition: "all 0.4s var(--ease-out)" }}
                >
                  {/* Icon */}
                  <div className="w-[52px] h-[52px] rounded-[14px] bg-blue-50 flex items-center justify-center mb-5 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                    {service.icon}
                  </div>

                  {/* Title */}
                  <h3 className="font-header font-bold text-[1.15rem] text-charcoal mb-2 tracking-[-0.01em]">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[0.88rem] text-gray-500 leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Items */}
                  <ul className="space-y-2">
                    {service.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-[0.85rem] text-charcoal-light leading-snug font-body"
                      >
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orange-400 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Divider ─── */}
      <div className="academy-divider" />

      {/* ─── Why Choose FLYUP — Split Layout ─── */}
      <section className="py-12 md:py-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text */}
            <ScrollReveal>
              <div>
                <span className="inline-flex items-center px-4 py-1.5 rounded-full font-header font-semibold text-[0.78rem] tracking-[0.08em] uppercase mb-4 bg-blue-50 text-blue-600">
                  Why Choose FLYUP
                </span>

                <h2
                  className="font-header font-[800] text-charcoal leading-[1.15] mb-5"
                  style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)" }}
                >
                  Your Trusted Education{" "}
                  <span className="text-blue-600">& Career Partner</span>
                </h2>

                <p className="font-body text-[1.05rem] text-gray-500 leading-[1.85] max-w-[520px]">
                  Whether you are choosing a career, applying to a university,
                  upskilling, or preparing for your first job — FLYUP Foundation
                  is committed to walking with you at every step. Our approach
                  combines personalized mentoring with institutional expertise to
                  deliver outcomes that matter.
                </p>
              </div>
            </ScrollReveal>

            {/* Right: Trust Metrics */}
            <ScrollReveal delay={0.15}>
              <div className="bg-gray-100/85 backdrop-blur-[12px] rounded-[20px] border border-white/60 shadow-sm p-8 md:p-10">
                <ul className="space-y-4">
                  {WHY_CHOOSE.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 text-[0.95rem] text-charcoal-light leading-snug font-body"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-5 h-5 text-blue-600 shrink-0 mt-0.5"
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── Final CTA Banner ─── */}
      <section className="py-12 md:py-16">
        <div className="max-w-[900px] mx-auto px-6">
          <ScrollReveal>
            <div className="bg-charcoal rounded-[24px] px-10 py-14 md:px-16 md:py-16 text-center">
              <h2
                className="font-header font-[800] text-white leading-[1.15] mb-4 tracking-[-0.02em]"
                style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)" }}
              >
                Your Journey Starts Here
              </h2>
              <p className="font-body text-gray-400 text-[1rem] max-w-[520px] mx-auto leading-relaxed mb-8">
                Whether you are choosing a career, applying to a university,
                upskilling, or preparing for your first job — we are ready to
                guide you.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-enroll inline-flex items-center gap-3 px-12 py-4 rounded-full font-header font-bold text-[1rem] tracking-[0.02em]"
              >
                Talk to a Counsellor
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
