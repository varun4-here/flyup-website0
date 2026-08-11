import Image from "next/image";

const DUMMY_PARTNERS = [1, 2, 3, 4, 5, 6];

export default function PartnersSection() {
  return (
    <section className="py-20 w-full overflow-hidden relative border-y border-white/5">
      <div className="max-w-[1200px] mx-auto px-6 mb-16 text-center">
        <h2 className="text-3xl md:text-4xl font-header font-bold text-orange-500 mb-5 tracking-wide uppercase">
          Our Partners
        </h2>
        <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full shadow-[0_0_15px_rgba(249,115,22,0.5)]"></div>
      </div>

      {/* Infinite Scroll Marquee Container */}
      <div 
        className="relative w-full flex overflow-hidden group"
        style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
      >
        {/* The scrolling track. We duplicate the array to make the infinite loop seamless. */}
        <div className="flex w-max animate-marquee gap-16 md:gap-24 px-8 items-center hover:[animation-play-state:paused]">
          {[...DUMMY_PARTNERS, ...DUMMY_PARTNERS].map((_, index) => (
            <div
              key={index}
              className="w-[160px] h-[80px] relative flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 drop-shadow-md"
            >
              <Image
                src="/images/logo0.webp"
                alt="Partner Logo Placeholder"
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
