import { Manrope } from "next/font/google";
import { NOVA_ADAPTIVE_CARDS } from "@/data/nova";

const manrope = Manrope({ subsets: ["latin"], weight: ["400", "500", "600"] });

export default function NovaAdaptiveSection() {
  return (
    <section
      className={`${manrope.className} bg-[#f7f8ff] px-4 sm:px-6 lg:px-[129px] py-20 sm:py-24`}
    >
      <div className="mx-auto max-w-[1182px]">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[11px] tracking-[0.38em] text-[#5b5ce8] font-semibold uppercase mb-4">
            What makes Nova adaptive
          </p>
          <h2 className="text-[32px] sm:text-[40px] lg:text-[50px] font-semibold text-[#4b4b4b] tracking-[-0.03em] leading-[1.1]">
            Built for any counter.
            <br />
            Any <span className="text-[#5b5ce8]">persona.</span> Any{" "}
            <span className="text-[#5b5ce8]">flow.</span>
          </h2>
        </div>

        {/* 4-col cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {NOVA_ADAPTIVE_CARDS.map((card) => (
            <div
              key={card.tag}
              className="rounded-[16px] border border-[#eceef4] bg-white p-5 sm:p-6 flex flex-col shadow-[0_8px_24px_rgba(37,44,97,0.05)] hover:shadow-[0_12px_32px_rgba(91,92,232,0.08)] hover:border-[#d4d6ff] transition-all duration-200"
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-[#5b5ce8] mb-3">
                {card.tag}
              </p>
              <h3 className="text-[18px] font-semibold text-[#4b4b4b] tracking-[-0.02em] leading-snug mb-3">
                {card.title}
              </h3>
              <p className="text-[12px] leading-[1.65] text-[#7a7a7a] flex-1 mb-5">
                {card.description}
              </p>

              {/* Chips */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {card.chipStyle === "color"
                  ? card.chips.map((hex) => (
                      <span
                        key={hex}
                        className="h-6 w-6 rounded-full"
                        style={{ backgroundColor: hex }}
                      />
                    ))
                  : card.chips.map((chip) => (
                      <span
                        key={chip}
                        className="rounded-md border border-[#e4e5f0] bg-[#f5f5fb] px-2.5 py-1 text-[10px] font-medium text-[#6b6f80]"
                      >
                        {chip}
                      </span>
                    ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}