import Link from "next/link";
import { Instagram, LinkedIn, YouTube } from "./Icons";

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.9 2.9 0 1 1-2-2.76V9.4a6.4 6.4 0 1 0 5.45 6.33V8.79a8.16 8.16 0 0 0 4.77 1.52V6.88c-.34 0-.67-.06-1-.19Z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="mt-10 bg-[#111111] text-white">
      <div className="mx-auto w-full max-w-7xl px-4 pb-8 pt-14 sm:px-6 lg:px-8 lg:pt-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-20">
          <div>
            <h2 className="text-[28px] font-normal tracking-[0.18em] text-white sm:text-[30px]">
              VELVET SUITES
            </h2>

            <p className="mt-7 max-w-[390px] text-[16px] leading-7 text-gray-400">
              Experience unparalleled comfort and elegance at Velvet Suites,
              your premier destination for luxury hospitality in the heart of
              the city.
            </p>

            <div className="mt-8 flex items-center gap-3">
              <a
                href="#"
                aria-label="Velvet Suites YouTube"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-red-600 transition hover:scale-105 [&>svg]:h-5 [&>svg]:w-5"
              >
                <YouTube />
              </a>

              <a
                href="#"
                aria-label="Velvet Suites TikTok"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-[#20d6ad] text-black transition hover:scale-105 [&>svg]:h-5 [&>svg]:w-5"
              >
                <TikTokIcon />
              </a>

              <a
                href="#"
                aria-label="Velvet Suites Instagram"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-600 bg-[#202020] transition hover:scale-105 [&>svg]:h-5 [&>svg]:w-5"
              >
                <Instagram />
              </a>

              <a
                href="#"
                aria-label="Velvet Suites LinkedIn"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-[#8b0000] transition hover:scale-105 [&>svg]:h-5 [&>svg]:w-5"
              >
                <LinkedIn />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-[30px] font-normal text-white">
              Reach Out
            </h3>

            <div className="mt-7 space-y-3 text-[16px] text-gray-300">
              <p>
                Email:{" "}
                <a
                  href="mailto:info@velvetsuites.rw"
                  className="transition hover:text-white hover:underline"
                >
                  info@velvetsuites.rw
                </a>
              </p>

              <p>
                Tel:{" "}
                <a
                  href="tel:+250780925118"
                  className="transition hover:text-white hover:underline"
                >
                  +250 780 925 118
                </a>
              </p>

              <p>10 KG 111 Street, Remera, Kigali</p>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=10+KG+111+Street+Remera+Kigali"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center bg-[#a80000] px-7 py-4 text-[14px] font-semibold tracking-[0.08em] text-white transition hover:bg-[#c00000]"
            >
              VIEW ON MAP
              <span className="ml-3">›</span>
            </a>
          </div>

          <div>
            <h3 className="font-serif text-[30px] font-normal text-white">
              Quick Links
            </h3>

            <nav className="mt-7">
              <ul className="space-y-4 text-[17px] text-gray-300">
                <li>
                  <Link
                    href="/"
                    className="text-[#b40000] transition hover:text-white"
                  >
                    Home
                  </Link>
                </li>

                <li>
                  <Link href="/about" className="transition hover:text-white">
                    About Us
                  </Link>
                </li>

                <li>
                  <Link
                    href="/policies"
                    className="transition hover:text-white"
                  >
                    Policies
                  </Link>
                </li>

                <li>
                  <Link href="/gallery" className="transition hover:text-white">
                    Gallery
                  </Link>
                </li>

                <li>
                  <Link href="/menu" className="transition hover:text-white">
                    Menu
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="mt-16 border-t border-[#333333] pt-8">
          <p className="text-center text-[14px] text-gray-500">
            © 2026 Velvet Suites. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
