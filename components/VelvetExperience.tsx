import Link from "next/link";

const features = [
  {
    number: "01",
    title: "Stay in a prime Kigali location",
    description:
      "Located in Remera, Velvet Suites gives you convenient access to Kigali while providing a peaceful place to relax.",
    icon: "⌂",
  },
  {
    number: "02",
    title: "Relax in elegant comfort",
    description:
      "Our suites give you privacy, comfort and a warm atmosphere for business or leisure.",
    icon: "◇",
  },
  {
    number: "03",
    title: "Enjoy warm hospitality",
    description:
      "Our team is dedicated to making your stay comfortable, easy and memorable.",
    icon: "♡",
  },
];

export default function VelvetExperience() {
  return (
    <section className="bg-[#f6f6f4] py-10 sm:py-12 lg:py-14">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-stretch lg:gap-10 lg:px-8">
        {/* Left */}
        <div className="flex h-full flex-col justify-center">
          <p className="text-[12px] font-bold uppercase tracking-[0.28em] text-[#7a0000]">
            Discover Velvet Suites
          </p>

          <h2 className="mt-3 font-serif text-[36px] font-medium leading-[1.05] text-[#121212] sm:text-[42px] lg:text-[46px]">
            Everything you need for a
            <span className="block text-[#4a0000]">comfortable stay.</span>
          </h2>

          <p className="mt-4 max-w-[620px] text-[15px] leading-7 text-gray-600">
            Velvet Suites combines elegant accommodation, a convenient Remera
            location and warm hospitality for a relaxing stay in Kigali.
          </p>

          <div className="mt-7 space-y-5">
            {features.map((feature, index) => (
              <div
                key={feature.number}
                className="grid grid-cols-[48px_1fr] gap-4"
              >
                <div className="flex flex-col items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-[14px] bg-[#4a0000] text-lg text-white">
                    {feature.icon}
                  </div>

                  {index !== features.length - 1 && (
                    <div className="mt-2 h-5 w-px bg-[#d8d0cc]" />
                  )}
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#9a6c20]">
                    Highlight {feature.number}
                  </p>

                  <h3 className="mt-1 text-[18px] font-semibold text-[#171717]">
                    {feature.title}
                  </h3>

                  <p className="mt-1 text-[14px] leading-6 text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <Link
            href="#rooms"
            className="mt-7 inline-flex min-h-[48px] w-fit items-center justify-center rounded-full bg-[#4a0000] px-7 text-[13px] font-semibold text-white transition hover:bg-[#650000]"
          >
            Explore Our Rooms
            <span className="ml-3 text-lg">→</span>
          </Link>
        </div>

        {/* Right */}
        <div className="relative h-full min-h-[420px]">
          <div className="relative h-full min-h-[420px] overflow-hidden rounded-[26px] bg-[#1b0808] shadow-[0_25px_60px_rgba(0,0,0,0.14)]">
            <img
              src="/hotels/fp-1.jpg"
              alt="Velvet Suites accommodation in Kigali"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/5" />

            <div className="absolute bottom-5 left-5 right-5 rounded-[20px] border border-white/15 bg-[#160707]/95 p-5 text-white backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] bg-[#c9a45c] text-lg font-bold text-[#310000]">
                  ✓
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#d8b66b]">
                    Velvet Suites Experience
                  </p>

                  <h3 className="mt-1 text-[19px] font-semibold">
                    Comfort in the heart of Kigali
                  </h3>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-2">
                <div className="rounded-[12px] bg-white/[0.08] p-3">
                  <p className="text-[9px] uppercase tracking-[0.12em] text-gray-400">
                    Location
                  </p>
                  <p className="mt-1 text-[13px] font-semibold">Remera</p>
                </div>

                <div className="rounded-[12px] bg-white/[0.08] p-3">
                  <p className="text-[9px] uppercase tracking-[0.12em] text-gray-400">
                    Experience
                  </p>
                  <p className="mt-1 text-[13px] font-semibold">Comfortable</p>
                </div>

                <div className="rounded-[12px] bg-white/[0.08] p-3">
                  <p className="text-[9px] uppercase tracking-[0.12em] text-gray-400">
                    Hospitality
                  </p>
                  <p className="mt-1 text-[13px] font-semibold">Personal</p>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -left-4 top-7 hidden rounded-[16px] bg-white px-4 py-3 shadow-xl sm:block">
            <p className="text-[10px] text-gray-500">Guest experience</p>

            <div className="mt-1 flex items-center gap-2">
              <span className="text-[22px] font-bold text-[#171717]">
                Premium
              </span>

              <span className="rounded-full bg-[#f5ead3] px-2.5 py-1 text-[10px] font-semibold text-[#735000]">
                Kigali
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
