import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-t-4 border-[#1c1c1c] bg-white shadow-[0_1px_6px_rgba(0,0,0,0.12)]">
      <div className="mx-auto flex h-14 max-w-[1426px] items-center justify-end gap-6 px-4 text-[15px] md:pr-0">
        {/* Main menu */}
        <nav className="hidden items-center gap-7 md:flex">
          <Link
            href="/"
            className="font-medium transition duration-300 hover:text-[#4a0000]"
          >
            Home
          </Link>

          <Link
            href="/#rooms"
            className="font-medium transition duration-300 hover:text-[#4a0000]"
          >
            Rooms
          </Link>

          <Link
            href="/about"
            className="font-medium transition duration-300 hover:text-[#4a0000]"
          >
            About Us
          </Link>

          <Link
            href="/gallery"
            className="font-medium transition duration-300 hover:text-[#4a0000]"
          >
            Gallery
          </Link>

          <Link
            href="/policies"
            className="font-medium transition duration-300 hover:text-[#4a0000]"
          >
            Policies
          </Link>

          <Link
            href="/contact"
            className="font-medium transition duration-300 hover:text-[#4a0000]"
          >
            Contact
          </Link>

          <a
            href="tel:+250780925118"
            className="rounded-full bg-[#4a0000] px-5 py-2 font-semibold text-white transition duration-300 hover:bg-[#650000]"
          >
            Reserve Now
          </a>
        </nav>

        {/* Mobile */}
        <div className="flex items-center gap-3 md:hidden">
          <Link
            href="/#rooms"
            className="text-[13px] font-medium hover:text-[#4a0000]"
          >
            Rooms
          </Link>

          <a
            href="tel:+250780925118"
            className="rounded-full bg-[#4a0000] px-4 py-2 text-[11px] font-semibold text-white"
          >
            Reserve
          </a>
        </div>

        {/* Velvet Suites logo - same right position */}
        <Link
          href="/"
          aria-label="Velvet Suites"
          className="-mt-1 flex h-[calc(3.5rem+4px)] w-[120px] items-center justify-center bg-[#4a0000] px-2"
        >
          <img
            src="/vel.png"
            alt="Velvet Suites"
            className="max-h-[54px] w-auto object-contain"
          />
        </Link>
      </div>
    </header>
  );
}
