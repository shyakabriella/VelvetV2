import Header from "@/components/Header";
import SearchPanel from "@/components/SearchPanel";
import VelvetExperience from "@/components/VelvetExperience";
import HotelCard, { type Hotel } from "@/components/HotelCard";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

const hotels: Hotel[] = [
  {
    name: "Velvet Suites Remera",
    location: "10 KG 111 Street, Remera, Kigali",
    description:
      "Experience elegant accommodation, comfort and warm hospitality at Velvet Suites Remera. A welcoming place to stay whether you are visiting Kigali for business, leisure or relaxation.",
    images: ["/ve1.avif", "/velv.jpeg"],
    startIndex: 0,
  },
  {
    name: "Velvet Suites Kimironko",
    location: "Kimironko, Kigali",
    description:
      "Enjoy the Velvet Suites experience in Kimironko, with comfortable accommodation and attentive hospitality in one of Kigali's vibrant neighborhoods.",
    images: ["/velv.jpeg", "/ve1.avif"],
    startIndex: 0,
  },
];

export default function Home() {
  return (
    <>
      <Header />

      <main className="overflow-hidden">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal direction="fade">
            <SearchPanel />
          </Reveal>
        </div>

        <Reveal direction="up">
          <VelvetExperience />
        </Reveal>

        <section
          id="rooms"
          className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20"
        >
          <Reveal direction="up">
            <div className="mb-10">
              <p className="text-[12px] font-bold uppercase tracking-[0.28em] text-[#7a0000]">
                Stay With Us
              </p>

              <h2 className="mt-3 font-serif text-[36px] text-[#171717] sm:text-[44px]">
                Choose Your Velvet Suites Location
              </h2>

              <p className="mt-3 max-w-2xl text-[16px] leading-7 text-gray-600">
                Discover Velvet Suites in Remera and Kimironko, Kigali, and
                choose the location that is most convenient for your stay.
              </p>
            </div>
          </Reveal>

          <div className="space-y-7">
            {hotels.map((hotel, index) => (
              <Reveal
                key={hotel.name}
                direction={index % 2 === 0 ? "right" : "left"}
                delay={index * 120}
              >
                <HotelCard hotel={hotel} />
              </Reveal>
            ))}
          </div>
        </section>
      </main>

      <Reveal direction="up">
        <Footer />
      </Reveal>
    </>
  );
}
