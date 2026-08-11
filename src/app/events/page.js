import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EventBlock from "@/components/EventBlock";

/* ──────────────────────────────────────────────
   SEO Metadata
   ────────────────────────────────────────────── */
export const metadata = {
  title:
    "Events — Youth Empowerment, Financial Literacy & Cultural Heritage | FlyUP Foundation",
  description:
    "Discover the Purvanchal Chhatra Mahotsav, the Eco-brick revolution, and the Swayam financial literacy movement in Gorakhpur — spearheaded by Narayan Dutt Pathak and Abhay Singh, empowering 200+ women and uniting the student community of Eastern Uttar Pradesh.",
  keywords: [
    "Purvanchal Chhatra Mahotsav",
    "Youth Activism Uttar Pradesh",
    "Narayan Dutt Pathak",
    "Abhay Singh",
    "Student Leadership",
    "Cultural Heritage Purvanchal",
    "Gorakhpur Student Festivals",
    "Eco-Bricks Gorakhpur",
    "Plastic Waste Management UP",
    "Youth Climate Action",
    "DDU Gorakhpur Students",
    "Eco Park Gorakhpur",
    "Swayam Event Gorakhpur",
    "Paise ki Pathshala",
    "Women Financial Literacy DDU",
    "Purvanchal Youth Welfare Association",
    "Gorakhpur University Youth",
    "FlyUP Foundation",
    "Deen Dayal Upadhyaya Gorakhpur University",
  ],
  openGraph: {
    title:
      "Events — Youth Empowerment, Financial Literacy & Cultural Heritage | FlyUP Foundation",
    description:
      "Youth-led movements transforming Eastern Uttar Pradesh — from the Purvanchal Chhatra Mahotsav and Eco-bricks to empowering 200 women through Swayam: Paise ki Pathshala.",
    type: "website",
  },
};

/* ──────────────────────────────────────────────
   Image Data (dummy — replace with CDN later)
   ────────────────────────────────────────────── */
const MAHOTSAV_IMAGES = [
  { src: "https://res.cloudinary.com/dabcbwfe/image/upload/v1784448794/IMG_1242_ls3hk5.jpg", alt: "Purvanchal Chhatra Mahotsav — event overview" },
  { src: "https://res.cloudinary.com/dabcbwfe/image/upload/v1784448794/IMG_1244_siq4sd.jpg", alt: "Purvanchal Chhatra Mahotsav — interactive session" },
  { src: "https://res.cloudinary.com/dabcbwfe/image/upload/v1784448794/IMG_1240_n7davo.jpg", alt: "Purvanchal Chhatra Mahotsav — students participating" },
  { src: "https://res.cloudinary.com/dabcbwfe/image/upload/v1784448793/IMG_1239_swkxzh.jpg", alt: "Purvanchal Chhatra Mahotsav — engaging activities" },
  { src: "https://res.cloudinary.com/dabcbwfe/image/upload/v1784448795/IMG_1246_rytpou.jpg", alt: "Purvanchal Chhatra Mahotsav — cultural showcase" },
];

const ECOBRICKS_IMAGES = [
  { src: "/images/hero_students.png", alt: "Student volunteers manufacturing Eco-bricks in Gorakhpur" },
  { src: "/images/lab_stem.png", alt: "Eco-brick furniture built by DDU Gorakhpur University students" },
  { src: "/images/event_workshop.png", alt: "Eco-brick awareness drive led by Narayan Dutt Pathak" },
  { src: "/images/lab_ai.png", alt: "Plastic waste collection for Eco-bricks in Gorakhpur" },
  { src: "/images/event_hackathon.png", alt: "Eco Park construction planning in Gorakhpur" },
];

const SWAYAM_IMAGES = [
  { src: "/images/event_workshop.png", alt: "Swayam Paise ki Pathshala event at DDU Gorakhpur University" },
  { src: "/images/hero_students.png", alt: "200 women receiving financial literacy certificates at Swayam event" },
  { src: "/images/event_hackathon.png", alt: "Abhay Singh addressing participants at Paise ki Pathshala" },
  { src: "/images/lab_robotics.png", alt: "Poster competition and Kavya Goshti at Swayam Gorakhpur" },
  { src: "/images/lab_stem.png", alt: "Prof. Anubhuti Dubey at Swayam financial empowerment event DDU" },
];

/* ──────────────────────────────────────────────
   Page Component
   ────────────────────────────────────────────── */
export default function EventsPage() {
  return (
    <main>
      <Navbar />

      {/* Page Header */}
      <section className="pt-28 pb-4 md:pt-32 md:pb-6">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          {/* Breadcrumb for SEO */}
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
              <li className="text-charcoal font-medium">Events</li>
            </ol>
          </nav>

          <h1
            className="font-header font-[800] text-charcoal leading-[1.15] tracking-[-0.02em] mb-3"
            style={{ fontSize: "clamp(2.2rem, 5vw, 3.6rem)" }}
          >
            Our <span className="text-blue-600">Events</span>
          </h1>
          <p className="font-body text-gray-500 text-base md:text-lg max-w-[600px] mx-auto leading-relaxed">
            Where youth activism meets cultural heritage — shaping the leaders
            of tomorrow across Eastern Uttar Pradesh.
          </p>
        </div>
      </section>

      {/* ─── Event 1: Purvanchal Chhatra Mahotsav ─── */}
      <section
        id="purvanchal-chhatra-mahotsav"
        className="py-16 md:py-24"
      >
        <div className="max-w-[1200px] mx-auto px-6">
          <EventBlock
            badge="Gorakhpur, Uttar Pradesh"
            images={MAHOTSAV_IMAGES}
          >
            {/* SEO-optimized semantic content */}
            <h2 className="font-header font-bold text-2xl md:text-3xl lg:text-[2rem] text-charcoal leading-tight mb-4 tracking-[-0.01em]">
              Purvanchal Chhatra Mahotsav
              <span className="block text-blue-600 text-lg md:text-xl font-semibold mt-1 tracking-normal">
                The Epicenter of Youth Empowerment &amp; Cultural Heritage
              </span>
            </h2>

            <p className="text-[0.95rem] md:text-base text-charcoal-light leading-relaxed mb-4">
              The <strong>Purvanchal</strong> region of Uttar Pradesh has long been a fertile
              ground for intellect, revolution, and art. At the very heart of this legacy
              today stands the <strong>Purvanchal Chhatra Mahotsav</strong> — not just an
              annual college festival, but a rapidly growing socio-cultural movement that
              has successfully bridged the gap between traditional heritage and modern
              youth activism, transforming the student landscape across eastern Uttar Pradesh.
            </p>

            <p className="text-[0.95rem] md:text-base text-charcoal-light leading-relaxed mb-4">
              Rooted deeply in the academic hubs of the region, notably transforming the
              ecosystem around institutions like{" "}
              <strong>Deen Dayal Upadhyaya Gorakhpur University</strong>, the Mahotsav
              serves as a massive platform for young minds to showcase their brilliance,
              debate their futures, and celebrate their regional pride.
            </p>

            <h3 className="font-header font-semibold text-lg md:text-xl text-charcoal mt-6 mb-3">
              The Visionaries Behind the Movement
            </h3>

            <p className="text-[0.95rem] md:text-base text-charcoal-light leading-relaxed mb-4">
              The unparalleled success and year-on-year growth of the Purvanchal Chhatra
              Mahotsav are largely credited to the relentless dedication of prominent
              student leaders and activists, <strong>Narayan Dutt Pathak</strong> and{" "}
              <strong>Abhay Singh</strong>. Together, they have engineered a platform that
              goes far beyond standard university politics — it is a proud tradition, a
              roar of unity, and a stepping stone to greatness.
            </p>

            <p className="text-[0.95rem] md:text-base text-charcoal-light leading-relaxed mb-6">
              With every passing year, the scale of the Mahotsav multiplies. What started
              as a localized effort to bring students together has blossomed into a heavily
              anticipated cultural phenomenon. As leaders like <strong>Narayan Dutt
                Pathak</strong> and <strong>Abhay Singh</strong> continue to push the
              boundaries of what student activism can achieve, the Mahotsav stands as a
              testament to the power, potential, and unstoppable energy of the Purvanchal youth.
            </p>

          </EventBlock>
        </div>
      </section>

      {/* Divider */}
      <div className="event-divider" />

      {/* ─── Event 2: Eco-Bricks Gorakhpur ─── */}
      <section
        id="eco-bricks-gorakhpur"
        className="py-16 md:py-24"
      >
        <div className="max-w-[1200px] mx-auto px-6">
          <EventBlock
            badge="Gorakhpur, Uttar Pradesh · Environmental Initiative"
            images={ECOBRICKS_IMAGES}
            reversed
          >
            <h2 className="font-header font-bold text-2xl md:text-3xl lg:text-[2rem] text-charcoal leading-tight mb-4 tracking-[-0.01em]">
              Eco-Bricks
              <span className="block text-blue-600 text-lg md:text-xl font-semibold mt-1 tracking-normal">
                Turning Plastic Waste into Sustainable Infrastructure
              </span>
            </h2>

            <p className="text-[0.95rem] md:text-base text-charcoal-light leading-relaxed mb-4">
              While the global conversation around plastic pollution often stalls at
              debate, the youth of <strong>Gorakhpur</strong> have decided to act. A
              massive environmental revolution is brewing in the heart of Purvanchal,
              driven by the ingenious concept of <strong>Eco-bricks</strong> — and it
              is proving that student activism can create tangible, real-world change
              far beyond the boundaries of campus politics.
            </p>

            <p className="text-[0.95rem] md:text-base text-charcoal-light leading-relaxed mb-4">
              Spearheaded by visionary student leaders{" "}
              <strong>Narayan Dutt Pathak</strong> and{" "}
              <strong>Abhay Singh</strong>, this grassroots campaign has rapidly
              transformed from a simple awareness drive into a full-scale, youth-led
              manufacturing movement. What began as community clean-up efforts quickly
              evolved into an organised operation that drew over{" "}
              <strong>250 highly motivated students</strong> from premier institutions
              like <strong>Deen Dayal Upadhyaya Gorakhpur University (DDU)</strong> and
              <strong>Madan Mohan Malviya University of Technology (MMMUT)</strong>, channeling the energy of the student community into environmental
              conservation.
            </p>

            <h3 className="font-header font-semibold text-lg md:text-xl text-charcoal mt-6 mb-3">
              From Trash to Treasure
            </h3>

            <p className="text-[0.95rem] md:text-base text-charcoal-light leading-relaxed mb-4">
              Under their joint leadership, the results have been nothing short of
              spectacular. In a remarkably short span, student volunteers successfully
              diverted approximately <strong>1 quintal (80–100 kgs)</strong> of
              single-use plastic from ending up in local landfills and waterways.
              Through dedicated community effort, this waste was compressed and
              transformed into over <strong>200 highly durable Eco-bricks</strong>,
              which were then engineered into practical, sturdy structures — including
              tables, seating stools, and dustbins — for campus and community use.
            </p>

            <h3 className="font-header font-semibold text-lg md:text-xl text-charcoal mt-6 mb-3">
              The Grand Vision: Gorakhpur&apos;s First Eco Park
            </h3>

            <p className="text-[0.95rem] md:text-base text-charcoal-light leading-relaxed mb-4">
              The ambition of this leadership duo extends far beyond furniture.{" "}
              <strong>Narayan Dutt Pathak</strong> and{" "}
              <strong>Abhay Singh</strong> are now coordinating with local
              administration and traffic authorities to construct a dedicated{" "}
              <strong>Eco Park in Gorakhpur</strong> — built entirely out of
              plastic-waste Eco-bricks, serving as a permanent, living monument to
              sustainability and the power of youth activism.
            </p>

            <p className="text-[0.95rem] md:text-base text-charcoal-light leading-relaxed mb-4">
              The <strong>Eco-brick movement in Gorakhpur</strong> is a masterclass
              in modern student leadership. By actively solving the plastic crisis,
              these young activists and their dedicated volunteers are proving that the
              youth of Purvanchal are ready to lead on all fronts — cultural, social,
              and environmental. The green revolution is here, and it is being built
              brick by eco-friendly brick.
            </p>
          </EventBlock>
        </div>
      </section>

      {/* Divider */}
      <div className="event-divider" />

      {/* ─── Event 3: Swayam — Paise Ki Pathshala ─── */}
      <section
        id="swayam-paise-ki-pathshala"
        className="py-16 md:py-24"
      >
        <div className="max-w-[1200px] mx-auto px-6">
          <EventBlock
            badge="DDU Gorakhpur University · Women Empowerment"
            images={SWAYAM_IMAGES}
          >
            <h2 className="font-header font-bold text-2xl md:text-3xl lg:text-[2rem] text-charcoal leading-tight mb-4 tracking-[-0.01em]">
              Swayam: Paise Ki Pathshala
              <span className="block text-blue-600 text-lg md:text-xl font-semibold mt-1 tracking-normal">
                Financial Freedom for All
              </span>
            </h2>

            <p className="text-[0.95rem] md:text-base text-charcoal-light leading-relaxed mb-4">
              While traditional education focuses heavily on academic milestones, the
              critical life skill of managing wealth often gets left behind. Seeking to
              bridge this massive gap, a groundbreaking initiative known as{" "}
              <strong>Swayam</strong> took center stage on the eve of International
              Women&apos;s Day at the Rovers-Rangers Hall of{" "}
              <strong>Deen Dayal Upadhyaya Gorakhpur University</strong>. Operating
              under the banner of <strong>Paise Ki Pathshala</strong> (The School of
              Money), this event was designed to bring actionable financial education to
              the grassroots level, and was successfully orchestrated through the joint
              efforts of the <strong>Purvanchal Youth Welfare Association</strong> and
              the <strong>FlyUP Foundation</strong>.
            </p>

            <h3 className="font-header font-semibold text-lg md:text-xl text-charcoal mt-6 mb-3">
              The Leadership Behind the Vision
            </h3>

            <p className="text-[0.95rem] md:text-base text-charcoal-light leading-relaxed mb-4">
              The sheer scale of this empowerment drive was made possible by a dedicated
              coalition of student activists and youth leaders.{" "}
              <strong>Abhay Singh</strong>, acting in his capacity as the Director of
              the FlyUP Foundation, addressed the massive gathering by emphasizing that
              financial literacy is no longer a luxury but an absolute necessity for
              every individual today. <strong>Narayan Dutt Pathak</strong>, the
              President of the Purvanchal Youth Welfare Association, championed the
              initiative, declaring such impactful programs as deeply inspiring for the
              region&apos;s youth. The seamless execution was masterfully handled by a
              core team of youth organizers including Varun Pandey, Anushka Rai, Shikha
              Pathak, Shashi Shukla, Manvendra, Kanak, Tanishka, and Arshita.
            </p>

            <h3 className="font-header font-semibold text-lg md:text-xl text-charcoal mt-6 mb-3">
              Empowering 200 Women
            </h3>

            <p className="text-[0.95rem] md:text-base text-charcoal-light leading-relaxed mb-4">
              The <strong>Swayam</strong> event was the grand culmination of a rigorous
              six-month awareness campaign focused heavily on women&apos;s empowerment.
              The initiative provided entirely free, high-quality education to women
              regarding critical life skills such as saving, investing, banking, and
              overall economic management. During the various sessions,{" "}
              <strong>200 dedicated participants</strong> were officially awarded
              certificates validating their newly acquired financial literacy. The event
              also hosted engaging poster competitions and a beautiful poetry
              recitation centered on the themes of equality and education, while highly
              meritorious students were honored with scholarships based on their
              performance in a specialized financial empowerment examination.
            </p>

            <h3 className="font-header font-semibold text-lg md:text-xl text-charcoal mt-6 mb-3">
              Backed by Academic Leadership
            </h3>

            <p className="text-[0.95rem] md:text-base text-charcoal-light leading-relaxed mb-4">
              The youth-led initiative garnered massive support from top-tier academic
              leadership at DDU Gorakhpur University. Chief Guest and Dean of Student
              Welfare, <strong>Prof. Anubhuti Dubey</strong>, powerfully stated that
              alongside formal education, financial awareness is an essential pillar
              for the holistic development of women and society.{" "}
              <strong>Prof. Ajay Shukla</strong> delivered a resonant message making it
              clear that practical financial understanding carries just as much
              importance as academic knowledge, while the Coordinator of
              Rovers-Rangers, <strong>Prof. Sharad Mishra</strong>, further motivated
              the youth to actively connect with such social service programs.
            </p>

            <p className="text-[0.95rem] md:text-base text-charcoal-light leading-relaxed mb-4">
              The success of <strong>Swayam: Paise ki Pathshala</strong> stands as a
              shining testament to what can be achieved when dynamic youth leadership,
              dedicated operational teams, and academic support unite. For the youth of
              Purvanchal, the journey toward total financial literacy has officially
              begun.
            </p>
          </EventBlock>
        </div>
      </section>

      {/* ─── Contact Us CTA ─── */}
      <section className="w-full py-16 md:py-20 flex justify-center items-center">
        <a
          href="/about#contact-form"
          className="relative inline-flex items-center justify-center px-12 py-4 text-base md:text-lg font-header font-bold text-white tracking-wide rounded-full overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(249,115,22,0.4)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
          style={{
            background: "linear-gradient(135deg, #F97316 0%, #FACC15 100%)",
          }}
        >
          <span className="relative z-10">Contact Us</span>
          <span
            className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
            style={{
              background: "linear-gradient(135deg, #EA580C 0%, #EAB308 100%)",
            }}
          />
        </a>
      </section>

      <Footer />
    </main>
  );
}
