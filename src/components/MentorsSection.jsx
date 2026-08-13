import Image from "next/image";

const mentors = [
  {
    name: "Professor Ajay Shukla",
    title: "(HOD English Department DDUGU)",
    bio: "Professor Ajay Shukla sir has been a strong supporter and guiding force for FlyUP Foundation, providing valuable academic insight strategic direction and consistent encouragement for its education and innovation initiatives.",
    image: "https://res.cloudinary.com/dabcbwfe/image/upload/v1786640951/WhatsApp_Image_2026-08-11_at_6.19.53_PM_jcfc0c.jpg",
  },
  {
    name: "Byomkesh Mishra",
    title: "(Co-founder Medha Learning Foundation)",
    bio: "Byomkesh Mishra sir has played a key mentoring role in FlyUP Foundation's early journey, resolving critical initial queries, providing continuous guidance, and consistently advising and grooming the team for sustainable growth and impact.",
    image: "https://res.cloudinary.com/dabcbwfe/image/upload/v1786640985/111111111_vx2acx.jpg",
  },
  {
    name: "Kumar Rajesh Deepta",
    title: "(Founder & Director, Iottech Smart Products)",
    bio: "Kumar Rajesh Deepta sir supports FlyUP Foundation with his extensive entrepreneurial experience in the smart products and IoT sector, providing strategic guidance on technology integration and helping structure scalable innovation initiatives.",
    image: "https://res.cloudinary.com/dabcbwfe/image/upload/v1786640983/222222_lckgaj.png",
  },
  {
    name: "Deependra Mohan Singh",
    title: "(Assistant Professor Sociology DDUGU)",
    bio: "Deependra Mohan Singh sir provides academic leadership and strategic guidance to FlyUP Foundation, supporting curriculum alignment, institutional collaboration, and the integration of future ready learning models within school education systems.",
    image: "https://res.cloudinary.com/dabcbwfe/image/upload/v1786640962/WhatsApp_Image_2026-08-11_at_6.22.13_PM_bwnxai.jpg",
  },
];

export default function MentorsSection() {
  return (
    <section className="w-full py-24 bg-gray-200 text-gray-900">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16 max-w-3xl">
          <h2 className="text-blue-600 font-bold mb-3 tracking-wide uppercase text-3xl md:text-4xl font-header">
            Our Mentors
          </h2>
          <h3 className="text-2xl font-semibold mb-6 leading-tight font-header text-gray-800">
            Mentors Driving Knowledge And Impact -{" "}
            <span className="text-blue-600">At FlyUP Foundation</span>
          </h3>
          <p className="text-gray-700 text-lg leading-relaxed font-body">
            FlyUP Foundation mentors bring experience from education industry and
            social sectors guiding vision strategy innovation and impact while
            supporting learners institutions and partners to build sustainable
            future ready education ecosystems
          </p>
        </div>

        {/* Mentors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {mentors.map((mentor, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row gap-6 p-6 rounded-2xl bg-gray-300 border border-gray-400 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Mentor Image (Placeholder) */}
              <div className="shrink-0">
                <div className="w-32 h-32 sm:w-40 sm:h-40 relative rounded-2xl overflow-hidden bg-gray-400 border border-gray-500">
                  <Image
                    src={mentor.image}
                    alt={mentor.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Mentor Info */}
              <div className="flex flex-col justify-center">
                <h4 className="text-xl font-bold font-header mb-1 text-blue-600">
                  {mentor.name}{" "}
                  <span className="text-gray-500 text-base font-medium">
                    {mentor.title}
                  </span>
                </h4>
                <p className="text-gray-600 font-body text-sm leading-relaxed mt-4">
                  {mentor.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
