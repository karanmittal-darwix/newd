"use client";

import { Manrope } from "next/font/google";
import { useRouter, usePathname } from "next/navigation";
import { NOVA_HERO_STATS } from "@/data/nova";

const manrope = Manrope({ subsets: ["latin"], weight: ["400", "500", "600"] });

export default function NovaHero() {
  const router = useRouter();
  const pathname = usePathname();

  const handleBookDemo = () => {
    // Try to find demo-request section on current page
    const section = document.getElementById("demo-request");
    if (section) {
      const navbarHeight = 64;
      const targetPosition =
        section.getBoundingClientRect().top + window.scrollY - navbarHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };
  return (
    <section
      className={`${manrope.className} relative w-full overflow-hidden`}
      style={{
        background:
          "linear-gradient(160deg, #eeeeff 0%, #f0f0ff 25%, #f5f5ff 55%, #ffffff 100%)",
      }}
    >
      {/* Radial glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2"
        style={{
          width: 900,
          height: 560,
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(91,92,232,0.10) 0%, transparent 68%)",
        }}
      />

      <div className="relative mx-auto max-w-[1182px] px-4 sm:px-6 lg:px-[129px] pt-16 sm:pt-20 lg:pt-[88px] pb-16 sm:pb-20 lg:pb-24">
        {/* Breadcrumb pill */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#dddff0] bg-white/80 px-4 py-1.5 text-[11px] font-medium text-[#7b7b7b] shadow-sm backdrop-blur-sm">
            <img src="/images/star.svg" alt="Star" />
            <span>Built with BFSI</span>
            <span className="text-[#d0d3e4]">·</span>
            <span>Powered by an in-house SLM</span>
          </div>
        </div>

        {/* Heading */}
        <h1 className="max-w-[1280px] mx-auto text-center text-[40px] sm:text-[54px] lg:text-[56px] font-semibold text-[#3a3a4a] tracking-[-0.045em] leading-[1.03]">
          Physical AI for the real world.
          <br />
          Voice, agents, and field{" "}
          <span className="text-[#5b5ce8]">in lockstep.</span>
        </h1>

        {/* Body */}
        <p className="mt-6 text-center text-[13px] sm:text-[15px] text-[#6e6e80] max-w-[640px] mx-auto leading-[1.75]">
          Where Sherpa is the field RM's wearable, Nova is the in-store AI
          concierge — a screen, a kiosk, a presence at the counter. Senses the
          customer. Understands their need. Acts and converts. Same brain.
          Different skin.
        </p>

        {/* CTAs */}
        <div className="mt-8 flex items-center justify-center gap-4 flex-wrap">
          {/* <button
            type="button"
            className="rounded-[10px] border border-[#5b5ce8] bg-white px-6 py-2.5 text-[13px] font-semibold text-[#5b5ce8] shadow-sm transition-all hover:bg-[#f5f5ff]"
          >
            Watch a live demo
          </button> */}
          <button
            onClick={handleBookDemo}
            type="button"
            className="rounded-[10px] bg-[#5b5ce8] px-6 py-2.5 text-[13px] font-semibold text-white shadow-lg shadow-indigo-200/70 transition-all hover:bg-[#4e4fd9]"
          >
            Book a demo
          </button>
        </div>

        {/* Stats strip */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4">
          {NOVA_HERO_STATS.map((stat, i) => (
            <div
              key={stat.label}
              className={`
        flex flex-col items-center gap-1.5 px-4 py-8
        border-[#e4e5f5]

        ${i % 2 === 0 ? "border-r lg:border-r" : ""}
        ${i < NOVA_HERO_STATS.length - 1 ? "lg:border-r" : ""}
      `}
            >
              <span className="text-[28px] sm:text-[32px] font-semibold text-[#4b4b4b] tracking-[-0.03em] leading-none">
                {stat.value}
              </span>

              <span className="text-[11px] text-[#9498a8] text-center leading-snug">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
