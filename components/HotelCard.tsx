"use client";

import { useEffect, useRef, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  PinIcon,
  ArrowRight,
} from "./Icons";

export type Hotel = {
  name: string;
  location: string;
  description: string;
  images: string[];
  startIndex?: number;
};

export default function HotelCard({ hotel }: { hotel: Hotel }) {
  const [i, setI] = useState(hotel.startIndex ?? 0);
  const [paused, setPaused] = useState(false);
  const touchStart = useRef<number | null>(null);

  const n = hotel.images.length;

  const go = (direction: number) => {
    setI((current) => (current + direction + n) % n);
  };

  useEffect(() => {
    if (n <= 1 || paused) return;

    const timer = window.setInterval(() => {
      setI((current) => (current + 1) % n);
    }, 4000);

    return () => window.clearInterval(timer);
  }, [n, paused]);

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    touchStart.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    if (touchStart.current === null) return;

    const distance =
      event.changedTouches[0].clientX - touchStart.current;

    if (Math.abs(distance) > 45) {
      go(distance > 0 ? -1 : 1);
    }

    touchStart.current = null;
  };

  return (
    <article className="mx-auto flex w-full flex-col overflow-hidden rounded-[22px] bg-white shadow-[0_8px_30px_rgba(0,0,0,0.06)] md:flex-row">
      {/* Image carousel */}
      <div
        className="relative h-[280px] overflow-hidden bg-[#2b1717] sm:h-[340px] md:h-[390px] md:w-1/2 md:shrink-0"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex h-full w-full transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{
            transform: `translateX(-${i * 100}%)`,
          }}
        >
          {hotel.images.map((image, index) => (
            <div
              key={`${image}-${index}`}
              className="relative h-full w-full shrink-0"
            >
              <img
                src={image}
                alt={`${hotel.name} - ${index + 1}`}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/5" />

        <div className="pointer-events-none absolute bottom-5 left-5 z-10 sm:bottom-6 sm:left-6">
          <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-[#d4b46c] sm:text-[11px]">
            Velvet Suites
          </p>

          <p className="mt-1 font-serif text-[21px] text-white sm:text-[25px]">
            Elevate Every Stay
          </p>
        </div>

        {n > 1 && (
          <>
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous image"
              className="absolute left-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/45 text-white backdrop-blur-sm transition hover:bg-[#4a0000] sm:left-5 sm:h-12 sm:w-12"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next image"
              className="absolute right-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/45 text-white backdrop-blur-sm transition hover:bg-[#4a0000] sm:right-5 sm:h-12 sm:w-12"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            <div className="absolute bottom-5 right-4 z-20 flex items-center gap-2 rounded-full bg-black/35 px-3 py-2 backdrop-blur-sm sm:bottom-6 sm:right-5">
              {hotel.images.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setI(index)}
                  aria-label={`Show image ${index + 1}`}
                  className={`rounded-full transition-all duration-300 ${
                    index === i
                      ? "h-2.5 w-2.5 bg-white"
                      : "h-2 w-2 bg-white/45 hover:bg-white/80"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Details */}
      <div className="flex flex-1 flex-col md:w-1/2">
        <div className="flex flex-1 flex-col justify-center px-6 py-7 sm:px-8 sm:py-8 lg:px-11">
          <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#9a6c20] sm:text-[11px]">
            Velvet Suites Kigali
          </p>

          <h2 className="mt-3 font-serif text-[28px] font-medium leading-tight text-[#171717] sm:text-[32px] lg:text-[38px]">
            {hotel.name}
          </h2>

          <div className="mt-4 flex items-start gap-2 text-[14px] text-gray-600 sm:mt-5 sm:text-[16px]">
            <span className="mt-0.5 shrink-0 text-[#4a0000]">
              <PinIcon />
            </span>

            <span>{hotel.location}</span>
          </div>

          <p className="mt-5 text-[15px] leading-7 text-gray-600 sm:mt-6 sm:text-[16px] sm:leading-8 lg:text-[17px]">
            {hotel.description}
          </p>

          <a
            href="#"
            className="group relative mt-6 inline-flex w-fit items-center gap-3 pb-1 text-[15px] font-semibold text-[#4a0000] transition-colors duration-300 hover:text-[#700000]"
          >
            <span>View Details</span>

            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />

            <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#4a0000] transition-all duration-300 group-hover:w-full" />
          </a>
        </div>

        <div className="flex items-center justify-between gap-4 border-t border-gray-200 px-6 py-5 sm:px-8 lg:px-11">
          <span className="hidden text-[13px] text-gray-500 sm:block">
            Experience Velvet Suites
          </span>

          <a
            href="tel:+250780925118"
            className="ml-auto inline-flex min-h-[46px] items-center justify-center rounded-full bg-[#4a0000] px-6 text-[13px] font-semibold text-white transition duration-300 hover:scale-[1.03] hover:bg-[#650000] sm:min-h-[48px] sm:px-7 sm:text-[14px]"
          >
            Reserve Now
          </a>
        </div>
      </div>
    </article>
  );
}
