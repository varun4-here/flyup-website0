import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import AboutImageMorph from "@/components/AboutImageMorph";
import AboutContactForm from "@/components/AboutContactForm";
import Image from "next/image";

/* ──────────────────────────────────────────────
   SEO Metadata
   ────────────────────────────────────────────── */
export const metadata = {
  title: "About Us — Leadership & Vision | FlyUP Foundation",
  description:
    "Meet the leadership behind FLYUP Foundation — Abhay Singh (Founder) and Narayan Dutt Pathak (Strategic Advisor). Learn about our mission to transform education through innovation, technology, and community engagement.",
  keywords: [
    "FlyUP Foundation",
    "Abhay Singh",
    "Narayan Dutt Pathak",
    "FLYUP Founder",
    "Education Innovation India",
    "STEM Education",
    "PYWA",
    "Social Innovation",
    "Gorakhpur",
  ],
  openGraph: {
    title: "About Us — Leadership & Vision | FlyUP Foundation",
    description:
      "Meet the founders and leadership team driving FLYUP Foundation's mission to empower students through innovation and experiential learning.",
    type: "website",
  },
};

/* ──────────────────────────────────────────────
   DATA CONSTANTS
   ────────────────────────────────────────────── */
// Placeholders for founder photos (will be replaced via CMS/CDN)
const ABHAY_IMAGE =
  "https://res.cloudinary.com/dabcbwfe/image/upload/v1786436951/Untitled_-_11_August_2026_at_13.38.18_3_a1cdp0.png";
const PATHAK_IMAGE =
  "https://res.cloudinary.com/dabcbwfe/image/upload/v1786434697/WhatsApp_Image_2026-08-04_at_10.33.38_PM_1_fdrqvn.jpg";

const ABHAY_INITIATIVES = [
  {
    name: "SWAYAM",
    desc: "Empowering women through financial literacy, digital inclusion, entrepreneurship, and leadership development.",
  },
  {
    name: "Paise Ki Pathshala",
    desc: "A financial literacy initiative promoting responsible money management, digital finance, investment awareness, and financial inclusion for all.",
  },
  {
    name: "Career Pathways",
    desc: "A placement, career guidance, and mentorship program to bridge the gap between academia and industry, ensuring students are job-ready.",
  },
  {
    name: "FLYUP Campus Immersion",
    desc: "Bringing corporate exposure, industry trends, and real-world problem-solving inside college campuses.",
  },
  {
    name: "FLYUP AI & Robotics Labs",
    desc: "Establishing future-ready innovation labs in schools to introduce students to coding, AI, IoT, and automation.",
  },
  {
    name: "Faculty & Skill Development",
    desc: "Equipping educators and students with modern teaching methodologies, technology integration, and 21st-century skills.",
  },
];

const PYWA_INITIATIVES = [
  {
    name: "Purvanchal Chhatra Mahotsav",
    desc: "A platform for students to showcase their talents, ideas, and innovations.",
  },
  {
    name: "Neel Gagan Purvanchal (Eco Warrior)",
    desc: "An environmental sustainability initiative focused on climate action, eco-bricks, and green campus drives.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-bg">
      <Navbar />

      {/* ═══════════════════════════════════════════
          SECTION 1 — Hero (Abhay Singh)
          ═══════════════════════════════════════════ */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-[120px] -z-10 translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-50/30 rounded-full blur-[100px] -z-10 -translate-x-1/3 translate-y-1/3 pointer-events-none" />

        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          {/* Breadcrumb */}
          <nav className="mb-10 lg:mb-12" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-[0.82rem] uppercase tracking-[0.12em] font-header text-gray-400">
              <li>
                <a href="/" className="hover:text-blue-600 transition-colors">
                  Home
                </a>
              </li>
              <li aria-hidden="true">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
              </li>
              <li className="text-charcoal font-medium">About</li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left — Bio Text */}
            <div className="max-w-[580px]">
              <ScrollReveal>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-100 bg-blue-50/50 text-blue-600 font-header font-semibold text-[0.72rem] tracking-[0.1em] uppercase mb-6">
                  Founder
                </div>

                <h1
                  className="font-header font-[800] text-charcoal leading-[1.05] tracking-tight mb-4"
                  style={{ fontSize: "clamp(2.8rem, 5vw, 4.2rem)" }}
                >
                  Abhay <span className="text-blue-600">Singh</span>
                </h1>
                <p className="font-header font-bold text-[1.05rem] text-orange-500 tracking-wide mb-8">
                  Founder | FLYUP Foundation
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <div className="space-y-6 font-body text-gray-500 text-[1rem] leading-[1.8]">
                  <p>
                    Abhay Singh is an education entrepreneur, social innovator,
                    and organization builder dedicated to creating impactful
                    learning opportunities through innovation, technology, and
                    community engagement. As the Founder of FLYUP Foundation, he
                    leads the organization&apos;s mission of empowering
                    students, educators, and communities through STEM Education,
                    Artificial Intelligence, Robotics, Financial Literacy, Women
                    Empowerment, Career Development, and Experiential Learning.
                  </p>
                  <p>
                    With a vision to bridge the gap between education and
                    employability, Abhay has developed a range of flagship
                    initiatives under the banner of FLYUP Foundation.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* Right — Cinematic Image Morph */}
            <ScrollReveal delay={0.1} className="flex justify-center lg:justify-end">
              <AboutImageMorph 
                images={[ABHAY_IMAGE, ABHAY_IMAGE, ABHAY_IMAGE]} 
                alt="Abhay Singh — Founder, FLYUP Foundation" 
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 2 — 65:35 Split: Everything scrolls left, Form sticky right
          Starts immediately after Abhay's hero.
          ═══════════════════════════════════════════ */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-12 lg:gap-14 items-start">

            {/* ─── LEFT: Scrolling Content ─── */}
            <div>

              {/* ── Narayan Dutt Pathak — Condensed Bio ── */}
              <ScrollReveal>
                <div className="flex items-center gap-6 mb-6">
                  <div className="pathak-photo-frame shrink-0">
                    <Image
                      src={PATHAK_IMAGE}
                      alt="Narayan Dutt Pathak — Strategic Advisor, FLYUP Foundation"
                      width={130}
                      height={130}
                      className="w-full h-full object-cover"
                      sizes="130px"
                    />
                  </div>
                  <div>
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full font-header font-semibold text-[0.72rem] tracking-[0.1em] uppercase mb-2 bg-orange-50 text-orange-600 border border-orange-100">
                      Strategic Advisor
                    </span>
                    <h2
                      className="font-header font-[800] text-charcoal leading-[1.1] tracking-[-0.02em]"
                      style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}
                    >
                      Narayan Dutt{" "}
                      <span className="text-blue-600">Pathak</span>
                    </h2>
                    <p className="font-header font-semibold text-[0.85rem] text-orange-500 mt-1">
                      Strategic Advisor | FLYUP Foundation
                      <br />
                      <span className="text-gray-400 font-normal text-[0.8rem]">
                        Founder | Purvanchal Youth Welfare Association (PYWA)
                      </span>
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.08}>
                <p className="font-body text-gray-500 text-[0.92rem] leading-[1.85] mb-4">
                  Narayan Dutt Pathak is a social entrepreneur and youth
                  development leader committed to creating meaningful
                  opportunities for young people through education, community
                  engagement, and sustainable development. He provides strategic
                  direction for initiatives that empower youth and strengthen
                  communities across Eastern Uttar Pradesh.
                </p>
                <p className="font-body text-gray-500 text-[0.92rem] leading-[1.85]">
                  Under his leadership, flagship initiatives such as Purvanchal
                  Chhatra Mahotsav, Neel Gagan Purvanchal, Eco-Brick innovation,
                  and youth volunteer programs have inspired hundreds of students
                  to become active contributors to society. His leadership
                  reflects a strong belief that empowered youth, collaborative
                  institutions, and community-driven action are the foundation
                  of a progressive and inclusive India.
                </p>
              </ScrollReveal>

              {/* ── MOU with DDU Gorakhpur University ── */}
              <ScrollReveal delay={0.1} className="mt-12">
                <div className="relative rounded-[20px] overflow-hidden border border-blue-100 bg-gradient-to-br from-blue-50/80 via-white to-orange-50/40 shadow-lg">
                  {/* Top Accent Bar */}
                  <div className="h-1.5 w-full bg-gradient-to-r from-blue-600 via-orange-400 to-blue-600" />

                  <div className="p-6 md:p-8 flex flex-col sm:flex-row gap-6 items-start">
                    {/* MOU Photos */}
                    <div className="shrink-0 w-full sm:w-[220px] flex flex-col gap-3">
                      <div className="rounded-[14px] overflow-hidden shadow-md border border-white/80">
                        <Image
                          src="https://res.cloudinary.com/dabcbwfe/image/upload/v1784346815/IMG_1159_btrio6.jpg"
                          alt="FLYUP Foundation MOU signing ceremony with DDU Gorakhpur University"
                          width={440}
                          height={300}
                          className="w-full h-auto object-cover"
                          sizes="(max-width: 640px) 100vw, 220px"
                        />
                      </div>
                      <div className="rounded-[14px] overflow-hidden shadow-md border border-white/80">
                        <Image
                          src="https://res.cloudinary.com/dabcbwfe/image/upload/v1786438837/WhatsApp_Image_2026-07-13_at_10.40.19_PM_m2xphp.jpg"
                          alt="FLYUP Foundation and DDU Gorakhpur University partnership"
                          width={440}
                          height={300}
                          className="w-full h-auto object-cover"
                          sizes="(max-width: 640px) 100vw, 220px"
                        />
                      </div>
                    </div>

                    {/* MOU Text */}
                    <div className="flex-1">
                      <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full font-header font-semibold text-[0.72rem] tracking-[0.1em] uppercase mb-3 bg-blue-100/80 text-blue-700 border border-blue-200/60">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                          <polyline points="14 2 14 8 20 8" />
                        </svg>
                        Official Partnership
                      </span>

                      <h3
                        className="font-header font-[800] text-charcoal leading-[1.15] mb-2"
                        style={{ fontSize: "clamp(1.3rem, 2.5vw, 1.7rem)" }}
                      >
                        MOU with{" "}
                        <span className="text-blue-600">DDU Gorakhpur University</span>
                      </h3>

                      <p className="font-body text-gray-500 text-[0.88rem] leading-[1.75] mb-5">
                        FLYUP Foundation has signed a Memorandum of Understanding
                        with Deen Dayal Upadhyaya Gorakhpur University — one of the
                        most prestigious institutions in Eastern Uttar Pradesh — to
                        collaborate on skill development, experiential learning, and
                        youth empowerment programs.
                      </p>

                      <a
                        href="https://ddugu.ac.in/pdf/MOU-FLY-UP-Foundation-151225.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl font-header font-bold text-[0.85rem] tracking-wide bg-blue-600 text-white shadow-[0_4px_20px_rgba(37,99,235,0.3)] hover:bg-blue-700 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(37,99,235,0.4)] transition-all duration-300"
                      >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                          <polyline points="7 10 12 15 17 10" />
                          <line x1="12" y1="15" x2="12" y2="3" />
                        </svg>
                        View Official MOU
                      </a>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* ── Spacer ── */}
              <div className="h-24 md:h-32 w-full" aria-hidden="true"></div>

              {/* ── Flagship Initiatives ── */}
              <ScrollReveal className="mb-8 mt-4">
                <h2
                  className="font-header font-[800] text-charcoal leading-[1.15] mb-3"
                  style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}
                >
                  Flagship <span className="text-blue-600">Initiatives</span>
                </h2>
                <p className="font-body text-gray-500 text-[0.92rem] max-w-[520px] leading-relaxed">
                  Key programs built under FLYUP Foundation to bridge education,
                  employability, and empowerment.
                </p>
              </ScrollReveal>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {ABHAY_INITIATIVES.map((item, i) => (
                  <ScrollReveal key={item.name} delay={0.05 * (i + 1)}>
                    <div className="about-initiative-card group bg-gray-100/85 backdrop-blur-[12px] rounded-[16px] border border-white/60 p-5 h-full shadow-sm transition-all duration-400 hover:-translate-y-1.5 hover:shadow-xl hover:bg-white/95 hover:border-blue-200">
                      <h4 className="font-header font-bold text-[0.95rem] text-charcoal mb-1.5 leading-snug group-hover:text-blue-600 transition-colors duration-300">
                        {item.name}
                      </h4>
                      <p className="font-body text-[0.82rem] text-gray-500 leading-[1.65]">
                        {item.desc}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              {/* ── PYWA Collaboration ── */}
              <ScrollReveal delay={0.1} className="mt-10">
                <div className="bg-charcoal rounded-[18px] p-7 md:p-8">
                  <p className="font-body text-gray-400 text-[0.88rem] leading-relaxed mb-5">
                    In collaboration with the{" "}
                    <span className="text-white font-semibold">
                      Purvanchal Youth Welfare Association (PYWA)
                    </span>
                    , Abhay has also played a key role in conceptualizing and
                    organizing two of the region&apos;s most impactful youth-led
                    initiatives:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {PYWA_INITIATIVES.map((item) => (
                      <div
                        key={item.name}
                        className="bg-white/5 backdrop-blur-sm rounded-[12px] border border-white/10 p-4 transition-all duration-300 hover:bg-white/10 hover:border-white/20"
                      >
                        <h4 className="font-header font-bold text-white text-[0.92rem] mb-1.5">
                          {item.name}
                        </h4>
                        <p className="font-body text-gray-400 text-[0.82rem] leading-[1.65]">
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* ── Vision Statement ── */}
              <ScrollReveal delay={0.1} className="mt-10">
                <p className="font-body text-gray-500 text-[0.92rem] leading-[1.85]">
                  Driven by the belief that education should create opportunities
                  and inspire positive social change, Abhay continues to build
                  strategic partnerships with educational institutions, government
                  agencies, industry, and CSR organizations. His long-term vision
                  is to establish FLYUP Foundation as a nationally recognized
                  institution that empowers learners with the knowledge, skills,
                  and confidence to lead in an ever-evolving world.
                </p>
              </ScrollReveal>

              {/* Divider */}
              <div className="labs-divider my-12" />

              {/* ── Connect With Us ── */}
              <ScrollReveal delay={0.1}>
                <h3
                  className="font-header font-[800] text-charcoal mb-6"
                  style={{ fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)" }}
                >
                  Connect With{" "}
                  <span className="text-blue-600">Us</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <a
                    href="mailto:info@flyupfoundation.org.in"
                    className="flex items-center gap-3 px-5 py-4 rounded-[14px] bg-gray-100/85 border border-white/60 shadow-sm hover:shadow-md hover:border-blue-200 hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                    </div>
                    <div>
                      <span className="font-header font-semibold text-[0.8rem] text-gray-400 uppercase tracking-wide block">Email</span>
                      <span className="font-body text-charcoal text-[0.9rem]">info@flyupfoundation.org.in</span>
                    </div>
                  </a>

                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/919129504245"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-5 py-4 rounded-[14px] bg-gray-100/85 border border-white/60 shadow-sm hover:shadow-md hover:border-green-200 hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center text-green-600 shrink-0">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    </div>
                    <div>
                      <span className="font-header font-semibold text-[0.8rem] text-gray-400 uppercase tracking-wide block">WhatsApp</span>
                      <span className="font-body text-charcoal text-[0.9rem]">+91 91295 04245</span>
                    </div>
                  </a>

                  {/* Location */}
                  <div className="flex items-center gap-3 px-5 py-4 rounded-[14px] bg-gray-100/85 border border-white/60 shadow-sm sm:col-span-2">
                    <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-orange-500 shrink-0">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <div>
                      <span className="font-header font-semibold text-[0.8rem] text-gray-400 uppercase tracking-wide block">Registered Address</span>
                      <span className="font-body text-charcoal text-[0.9rem] block">742 S Professor Lane, Ram Janki Nagar</span>
                      <span className="font-body text-charcoal text-[0.9rem] block">Gorakhpur, Uttar Pradesh 273004, India</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

            </div>

            {/* ─── RIGHT: Permanently Sticky Contact Form ─── */}
            <div id="contact-form" className="lg:sticky lg:top-[88px] self-start">
              <ScrollReveal delay={0.15}>
                <AboutContactForm />
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
