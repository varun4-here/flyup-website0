import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AcademyFlipCard from "@/components/AcademyFlipCard";
import AcademyAccordion from "@/components/AcademyAccordion";
import ScrollReveal from "@/components/ScrollReveal";

/* ──────────────────────────────────────────────
   SEO Metadata
   ────────────────────────────────────────────── */
export const metadata = {
  title:
    "FLYUP Academy — Campus Immersion Program (FCIP) | FlyUP Foundation",
  description:
    "The FLYUP Campus Immersion Program (FCIP) is a one-year experiential learning membership designed to complement classroom education through workshops, innovation challenges, career development, and community engagement.",
  keywords: [
    "FLYUP Academy",
    "FCIP",
    "FLYUP Campus Immersion Program",
    "Experiential Learning",
    "Youth Skill Development",
    "Financial Literacy",
    "Robotics Workshop",
    "AI Education",
    "Career Development Gorakhpur",
    "FlyUP Foundation",
    "Student Membership",
    "Innovation Program",
    "Gorakhpur University",
    "DDU Gorakhpur",
  ],
  openGraph: {
    title:
      "FLYUP Academy — Campus Immersion Program (FCIP) | FlyUP Foundation",
    description:
      "A one-year experiential learning membership bridging the gap between classroom education and the real world. Experience. Learn. Innovate. Lead.",
    type: "website",
  },
};

/* ──────────────────────────────────────────────
   WhatsApp CTA
   ────────────────────────────────────────────── */
const WHATSAPP_NUMBER = "919129504245";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hello, I would like to register for the FCIP 1-Year Membership."
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

/* ──────────────────────────────────────────────
   Curriculum Data
   ────────────────────────────────────────────── */
const CURRICULUM = [
  {
    title: "Skill Development Workshops",
    subtitle: "Building competencies that classrooms often overlook.",
    items: [
      "Artificial Intelligence",
      "Robotics & Coding",
      "Digital Marketing",
      "Financial Literacy",
      "Entrepreneurship",
      "Communication & Leadership",
      "Career Readiness",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
  },
  {
    title: "Innovation & Technology",
    subtitle: "Hands-on exposure to emerging technologies.",
    items: [
      "AI & Robotics Demonstrations",
      "STEAM Activities",
      "Drone & Aerospace Sessions",
      "Innovation Challenges",
      "Design Thinking Workshops",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
        <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
        <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4 4.5 4.5 0 0 1 3-4Z" />
      </svg>
    ),
  },
  {
    title: "Career Development",
    subtitle: "Preparing students for professional life.",
    items: [
      "Career Counselling",
      "Resume & LinkedIn Building",
      "Interview Preparation",
      "Internship Guidance",
      "Industry Interaction Sessions",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
      </svg>
    ),
  },
  {
    title: "Social Impact & Leadership",
    subtitle: "Cultivating responsible, community-driven leaders.",
    items: [
      "Environmental Awareness Campaigns",
      "Eco-Brick & Sustainability Programs",
      "Community Service Projects",
      "Youth Leadership Activities",
      "Volunteering Opportunities",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Campus Experience",
    subtitle: "Beyond walls — real exposure from real institutions.",
    items: [
      "Expert Lectures",
      "Industry Visits",
      "Startup & Innovation Meets",
      "University Networking Events",
      "Conferences & Seminars",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 10 3 12 0v-5" />
      </svg>
    ),
  },
  {
    title: "Competitions & Recognition",
    subtitle: "Prove your mettle and earn recognition.",
    items: [
      "Innovation Competitions",
      "Business Plan Challenges",
      "Hackathons",
      "Quiz & Debate Events",
      "Certificates of Participation & Achievement",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5C7 4 7 8 7 8" />
        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5C17 4 17 8 17 8" />
        <path d="M4 22h16" />
        <path d="M10 22V8h4v14" />
        <path d="M8 9h8" />
        <path d="M7 4h10" />
      </svg>
    ),
  },
];

/* ──────────────────────────────────────────────
   Membership Benefits
   ────────────────────────────────────────────── */
const BENEFITS = [
  "One-year access to FLYUP activities",
  "Priority registration for workshops and events",
  "Member discounts on premium courses and certification programs",
  "Networking with industry experts, entrepreneurs, and educators",
  "Digital learning resources",
  "Participation certificates",
  "Leadership and volunteer opportunities",
  "Access to the FLYUP student community",
];

/* ──────────────────────────────────────────────
   Target Audience
   ────────────────────────────────────────────── */
const AUDIENCE = [
  { label: "School Students", detail: "Classes IX – XII" },
  { label: "Undergraduate Students", detail: null },
  { label: "Postgraduate Students", detail: null },
  { label: "Research Scholars", detail: null },
  { label: "Young Professionals", detail: null },
];

/* ──────────────────────────────────────────────
   Page Component
   ────────────────────────────────────────────── */
export default function AcademyPage() {
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
              <li className="text-charcoal font-medium">Academy</li>
            </ol>
          </nav>

          {/* Badge */}
          <ScrollReveal>
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full font-header font-semibold text-[0.78rem] tracking-[0.1em] uppercase mb-6 bg-blue-50 text-blue-600 border border-blue-100">
              FLYUP Campus Immersion Program
            </span>
          </ScrollReveal>

          {/* Heading */}
          <ScrollReveal delay={0.1}>
            <h1
              className="font-header font-[800] text-charcoal leading-[1.1] tracking-[-0.025em] mb-5"
              style={{ fontSize: "clamp(2.4rem, 5.5vw, 4rem)" }}
            >
              FLYUP <span className="text-blue-600">Academy</span>
            </h1>
          </ScrollReveal>

          {/* Tagline */}
          <ScrollReveal delay={0.15}>
            <p className="font-header font-semibold text-[1.05rem] md:text-[1.15rem] text-charcoal tracking-[0.04em] uppercase mb-4">
              Experience. Learn. Innovate. Lead.
            </p>
          </ScrollReveal>

          {/* Description */}
          <ScrollReveal delay={0.2}>
            <p className="font-body text-gray-500 text-[1.05rem] md:text-lg max-w-[720px] mx-auto leading-[1.85]">
              The FLYUP Campus Immersion Program (FCIP) is a one-year
              experiential learning membership designed to complement classroom
              education by exposing students to innovation, leadership,
              entrepreneurship, industry, and community engagement.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Divider ─── */}
      <div className="academy-divider" />

      {/* ─── Who Can Join ─── */}
      <section className="py-12 md:py-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <ScrollReveal className="text-center mb-12">
            <h2
              className="font-header font-[800] text-charcoal leading-[1.15] mb-4"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)" }}
            >
              Who Can <span className="text-blue-600">Join</span>
            </h2>
            <p className="font-body text-gray-500 text-[1.05rem] max-w-[550px] mx-auto leading-relaxed">
              FCIP is open to learners across all stages of academic and
              early professional life.
            </p>
          </ScrollReveal>

          <div className="flex flex-wrap items-center justify-center gap-4 max-w-[900px] mx-auto">
            {AUDIENCE.map((a, i) => (
              <ScrollReveal key={a.label} delay={0.08 * (i + 1)}>
                <div className="flex items-center gap-3 px-6 py-3.5 rounded-full bg-gray-100/85 backdrop-blur-[8px] border border-white/60 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-blue-600 shrink-0" />
                  <span className="font-body font-medium text-[0.92rem] text-charcoal whitespace-nowrap">
                    {a.label}
                  </span>
                  {a.detail && (
                    <span className="font-body text-[0.8rem] text-gray-400">
                      ({a.detail})
                    </span>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Divider ─── */}
      <div className="academy-divider" />

      {/* ─── What Members Get — Flip Card Grid ─── */}
      <section className="py-12 md:py-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <ScrollReveal className="text-center mb-14">
            <h2
              className="font-header font-[800] text-charcoal leading-[1.15] mb-4"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)" }}
            >
              What Members <span className="text-blue-600">Get</span>
            </h2>
            <p className="font-body text-gray-500 text-[1.05rem] max-w-[600px] mx-auto leading-relaxed">
              Six pillars of experiential learning — hover over each panel to
              explore the curriculum.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CURRICULUM.map((cat, i) => (
              <ScrollReveal key={cat.title} delay={0.08 * (i + 1)}>
                <AcademyFlipCard
                  title={cat.title}
                  subtitle={cat.subtitle}
                  items={cat.items}
                  icon={cat.icon}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Divider ─── */}
      <div className="academy-divider" />

      {/* ─── Membership Benefits ─── */}
      <section className="py-12 md:py-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text */}
            <ScrollReveal>
              <div>
                <span className="inline-flex items-center px-4 py-1.5 rounded-full font-header font-semibold text-[0.78rem] tracking-[0.08em] uppercase mb-4 bg-blue-50 text-blue-600">
                  Membership Benefits
                </span>

                <h2
                  className="font-header font-[800] text-charcoal leading-[1.15] mb-5"
                  style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)" }}
                >
                  Why Join <span className="text-blue-600">FCIP</span>
                </h2>

                <p className="font-body text-[1.05rem] text-gray-500 leading-[1.85] mb-8 max-w-[520px]">
                  Education does not stop in the classroom. Success comes from
                  exposure, experience, and continuous learning. FCIP equips
                  students with future-ready skills, professional networks, and
                  practical experience that bridges the gap between education
                  and the real world.
                </p>
              </div>
            </ScrollReveal>

            {/* Right: Benefits List */}
            <ScrollReveal delay={0.15}>
              <div className="bg-gray-100/85 backdrop-blur-[12px] rounded-[20px] border border-white/60 shadow-sm p-8 md:p-10">
                <ul className="space-y-4">
                  {BENEFITS.map((b) => (
                    <li
                      key={b}
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
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── Divider ─── */}
      <div className="academy-divider" />

      {/* ─── Our Vision ─── */}
      <section className="py-12 md:py-16">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <ScrollReveal>
            <span className="inline-flex items-center px-4 py-1.5 rounded-full font-header font-semibold text-[0.78rem] tracking-[0.08em] uppercase mb-4 bg-blue-50 text-blue-600">
              Our Vision
            </span>

            <p
              className="font-header font-[700] text-charcoal leading-[1.4] tracking-[-0.01em]"
              style={{ fontSize: "clamp(1.25rem, 2.5vw, 1.6rem)" }}
            >
              To create a vibrant community of learners, innovators,
              entrepreneurs, and changemakers by providing meaningful learning
              experiences that bridge the gap between education and the real
              world.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Final CTA Banner ─── */}
      <section className="py-16 md:py-20">
        <div className="max-w-[900px] mx-auto px-6">
          <ScrollReveal>
            <div className="bg-charcoal rounded-[24px] px-10 py-14 md:px-16 md:py-16 text-center">
              <h2
                className="font-header font-[800] text-white leading-[1.15] mb-3 tracking-[-0.02em]"
                style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)" }}
              >
                FLYUP Campus Immersion Program
              </h2>
              <p className="font-body text-gray-400 text-[1rem] mb-2">
                Annual Membership Fee
              </p>
              <p className="font-header font-[800] text-white text-3xl md:text-4xl mb-8">
                &#8377;1,000
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-enroll inline-flex items-center gap-3 px-12 py-4 rounded-full font-header font-bold text-[1rem] tracking-[0.02em]"
              >
                Enroll Now
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Terms & Conditions ─── */}
      <section className="py-12 md:py-16">
        <div className="max-w-[900px] mx-auto px-6">
          <ScrollReveal>
            <AcademyAccordion title="Terms & Conditions — FLYUP Campus Immersion Program (FCIP)">
              <div className="space-y-6">
                <div>
                  <h4 className="font-header font-semibold text-charcoal mb-1">1. Membership Validity</h4>
                  <p>The FCIP membership is valid for one (1) year from the date of registration. Membership is personal and non-transferable.</p>
                </div>

                <div>
                  <h4 className="font-header font-semibold text-charcoal mb-1">2. Membership Fee</h4>
                  <p>The annual membership fee is &#8377;1,000 per participant. The fee is non-refundable and non-transferable once the registration is confirmed, except where required by applicable law.</p>
                </div>

                <div>
                  <h4 className="font-header font-semibold text-charcoal mb-1">3. Nature of the Program</h4>
                  <p>FCIP is an experiential learning and engagement program. Activities are conducted periodically throughout the membership period. The program does not operate on a daily, weekly, or fixed classroom schedule.</p>
                </div>

                <div>
                  <h4 className="font-header font-semibold text-charcoal mb-1">4. Activity Schedule</h4>
                  <p>Workshops, seminars, bootcamps, field visits, competitions, networking sessions, webinars, and other activities will be announced from time to time. Members will be informed through official communication channels such as WhatsApp, email, SMS, or the FLYUP Foundation website and social media. Participation in activities depends on availability, registration, and eligibility where applicable.</p>
                </div>

                <div>
                  <h4 className="font-header font-semibold text-charcoal mb-1">5. Participation</h4>
                  <p>Members are encouraged to participate actively in available activities. Some programs may have limited seats and registrations will be accepted on a first-come, first-served basis or through a selection process, if specified.</p>
                </div>

                <div>
                  <h4 className="font-header font-semibold text-charcoal mb-1">6. Additional Charges</h4>
                  <p>The annual membership provides access to the FCIP community and designated member benefits. Certain premium workshops, certification courses, industry visits, competitions, conferences, travel, accommodation, examination fees, or specialized events may require separate registration or additional charges. Such charges, if any, will always be communicated in advance.</p>
                </div>

                <div>
                  <h4 className="font-header font-semibold text-charcoal mb-1">7. Certificates</h4>
                  <p>Participation certificates or completion certificates may be issued for eligible activities, subject to attendance and completion requirements. Membership alone does not guarantee a certificate.</p>
                </div>

                <div>
                  <h4 className="font-header font-semibold text-charcoal mb-1">8. Code of Conduct</h4>
                  <p>Participants are expected to maintain respectful behaviour towards fellow participants, trainers, and organizers; follow all safety, institutional, and event-specific guidelines; protect the reputation of FLYUP Foundation and partner institutions; and refrain from any misconduct, harassment, discrimination, or disruptive behaviour. FLYUP Foundation reserves the right to suspend or terminate membership for serious misconduct without refund.</p>
                </div>

                <div>
                  <h4 className="font-header font-semibold text-charcoal mb-1">9. Communication</h4>
                  <p>Members are responsible for providing accurate contact information and ensuring they receive official updates. FLYUP Foundation shall not be responsible for missed opportunities resulting from incorrect or outdated contact details.</p>
                </div>

                <div>
                  <h4 className="font-header font-semibold text-charcoal mb-1">10. Photography & Media</h4>
                  <p>Participants may be photographed or recorded during activities for educational, promotional, documentation, and reporting purposes. By participating, members consent to the use of such photographs or recordings unless they inform FLYUP Foundation in writing before the event.</p>
                </div>

                <div>
                  <h4 className="font-header font-semibold text-charcoal mb-1">11. Program Changes</h4>
                  <p>FLYUP Foundation reserves the right to modify the schedule, venue, speakers, trainers, curriculum, activity format, or event dates whenever necessary due to operational, academic, safety, or unforeseen circumstances.</p>
                </div>

                <div>
                  <h4 className="font-header font-semibold text-charcoal mb-1">12. Partner Activities</h4>
                  <p>Certain activities may be conducted in collaboration with educational institutions, industry partners, NGOs, government bodies, or corporate organizations. Participation in such activities may also be subject to the host organization&apos;s policies and guidelines.</p>
                </div>

                <div>
                  <h4 className="font-header font-semibold text-charcoal mb-1">13. Limitation of Liability</h4>
                  <p>FLYUP Foundation shall not be responsible for any personal loss, injury, theft, or damage arising during participation except where caused by its proven negligence. Participants are expected to follow all safety instructions issued during activities.</p>
                </div>

                <div>
                  <h4 className="font-header font-semibold text-charcoal mb-1">14. Intellectual Property</h4>
                  <p>Course materials, presentations, videos, manuals, and other learning resources provided under FCIP remain the intellectual property of FLYUP Foundation or their respective owners and may not be reproduced, distributed, or commercially used without prior written permission.</p>
                </div>

                <div>
                  <h4 className="font-header font-semibold text-charcoal mb-1">15. Acceptance</h4>
                  <p>Registration in the FLYUP Campus Immersion Program constitutes acceptance of these Terms & Conditions and any additional guidelines communicated for specific activities.</p>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <p className="text-[0.85rem] text-gray-400">
                    FLYUP Foundation is committed to providing meaningful learning experiences, professional networking opportunities, innovation-focused activities, and skill development programs that complement formal education and help participants become future-ready learners and leaders.
                  </p>
                </div>
              </div>
            </AcademyAccordion>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
