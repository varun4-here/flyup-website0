import PreHero from "@/components/PreHero";
import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import LabsSection from "@/components/LabsSection";
import AcademySection from "@/components/AcademySection";
import MentorsSection from "@/components/MentorsSection";
import PartnersSection from "@/components/PartnersSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <PreHero />
      <Navbar />
      <HeroCarousel />

      {/* Events CTA Section */}
      <section className="w-full py-8 md:py-12 flex justify-center items-center bg-transparent">
        <a
          href="/events"
          className="group relative inline-flex items-center justify-center px-8 py-3.5 text-sm md:text-base font-body font-bold text-white transition-all duration-300 bg-blue-600 rounded-full hover:bg-blue-700 hover:shadow-[0_8px_20px_rgba(37,99,235,0.25)] hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 btn-shine overflow-hidden"
        >
          <span>View all</span>
          <svg
            className="w-5 h-5 ml-2 -mr-1 transition-transform duration-300 group-hover:translate-x-1.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
          </svg>
        </a>
      </section>

      <LabsSection />
      <AcademySection />
      <MentorsSection />
      <PartnersSection />
      <AboutSection />
      <Footer />
    </main>
  );
}
