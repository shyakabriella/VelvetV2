import Link from "next/link";

export default function SearchPanel() {
  return (
    <section className="relative left-1/2 min-h-[340px] w-screen -translate-x-1/2 overflow-hidden bg-[#0e0e0e] text-white lg:min-h-[380px]">
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/velv.jpeg"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/velvet-hero.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Velvet burgundy gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#260000]/95 via-[#3b0000]/70 to-black/20" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[340px] w-full max-w-7xl items-center px-4 py-10 sm:px-6 lg:min-h-[380px] lg:px-8">
        <div className="max-w-[720px]">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/20 px-4 py-2 backdrop-blur-md">
            <span className="text-[#c9a45c]">✦</span>

            <span className="text-[12px] font-medium tracking-wide text-white sm:text-[13px]">
              Elegant accommodation in Remera, Kigali
            </span>
          </div>

          <h1 className="mt-5 max-w-[700px] font-serif text-[38px] font-medium leading-[1.05] tracking-[-0.02em] text-white sm:text-[46px] lg:text-[54px]">
            Your Stay. Your Comfort.
            <span className="block text-[#c9a45c]">Velvet Suites.</span>
          </h1>

          <p className="mt-4 max-w-[650px] text-[15px] leading-6 text-gray-200 sm:text-[16px]">
            Experience comfort, elegance and warm hospitality at Velvet Suites
            in Remera, Kigali.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="#rooms"
              className="inline-flex min-h-[50px] items-center justify-center rounded-full bg-[#4a0000] px-7 text-[14px] font-semibold text-white transition duration-300 hover:bg-[#650000]"
            >
              Explore Our Rooms
              <span className="ml-3 text-lg">→</span>
            </Link>

            <a
              href="tel:+250780925118"
              className="inline-flex min-h-[50px] items-center justify-center rounded-full border border-white/60 bg-white px-7 text-[14px] font-semibold text-[#4a0000] transition duration-300 hover:bg-[#c9a45c] hover:text-black"
            >
              Book Your Stay
            </a>
          </div>
        </div>
      </div>

      {/* Location */}
      <div className="absolute bottom-6 right-8 z-10 hidden text-right lg:block">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[#c9a45c]">
          Find us
        </p>

        <p className="mt-1 text-[14px] text-white">10 KG 111 Street, Remera</p>

        <p className="text-[14px] text-gray-300">Kigali, Rwanda</p>
      </div>
    </section>
  );
}
