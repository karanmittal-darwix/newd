"use client";

import { Manrope } from "next/font/google";
import HeroStats from "./HeroStats";
import AgentOrb from "./AgentOrb";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Hero() {
  const handleDemoScroll = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const demoSection = document.getElementById("demo-request");

    if (demoSection) {
      const navbarHeight = 64;

      const targetPosition =
        demoSection.getBoundingClientRect().top + window.scrollY - navbarHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      className={`${manrope.className} relative overflow-hidden pt-16 sm:pt-20 pb-20 sm:pb-24 px-4 sm:px-6`}
      style={{
  backgroundImage:
    "linear-gradient(90deg, #565ADD1F 0%, #565ADD00 100%)",
}}
    >


      <div className="relative w-full max-w-[1400px] mx-auto text-center">
        {/* Heading */}
        <h1 className="text-[38px] sm:text-[52px] lg:text-[64px] font-semibold tracking-[-0.055em] leading-[1.02] max-w-[1400px] mx-auto text-[#3a3a4a]">
          An <span className="text-[#5b5ce8]">AI Agent</span> that actually{" "}
          <span className="text-[#5b5ce8]">holds the line</span>
        </h1>

        {/* Body */}
        <p className="mt-7 text-[15px] sm:text-[17px] text-[#6e6e80] max-w-3xl mx-auto leading-[1.8]">
          Darwix dials thousands of your customers in parallel, speaks their
          language, handles objections, and triggers the right action the moment
          the call ends.
        </p>

        {/* Orb */}
        <div className="mt-12 flex justify-center">
          <div className="max-w-5xl w-full">
            <AgentOrb />
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8">
          <button
            onClick={handleDemoScroll}
            className="rounded-[12px] bg-[#5b5ce8] px-6 py-3 text-[14px] font-semibold text-white shadow-lg shadow-indigo-200/70 transition-all duration-200 hover:bg-[#4e4fd9] hover:shadow-indigo-300/60"
          >
            Request a demo
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="relative max-w-7xl mx-auto mt-16">
        <HeroStats />
      </div>
    </section>
  );
}
