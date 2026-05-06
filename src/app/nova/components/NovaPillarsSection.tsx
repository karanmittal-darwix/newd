import { Manrope } from "next/font/google";
import { NOVA_PILLARS } from "@/data/nova";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export default function NovaPillarsSection() {
  return (
    <section
      className={`${manrope.className} bg-white px-4 sm:px-6 lg:px-[129px] py-24 sm:py-28`}
    >
      <div className="mx-auto max-w-[1320px]">

        {/* Header */}
        <div className="text-center">
          <p className="text-[11px] tracking-[0.42em] text-[#5b5ce8] font-semibold uppercase">
            How Nova works in store
          </p>

          <h2 className="mt-5 text-[40px] sm:text-[54px] lg:text-[72px] font-semibold text-[#4b4b4b] tracking-[-0.05em] leading-[1.02]">
            Sense. Understand.{" "}
            <span className="text-[#5b5ce8]">Act.</span>
          </h2>

          <p className="mt-5 text-[15px] text-[#7a7a7a] max-w-[760px] mx-auto leading-[1.7]">
            Three pillars. Same brain. Three things have to happen at the
            counter. Nova does all three on the same SLM that powers Sherpa
            and the voice agents.
          </p>
        </div>

        {/* Pillar Cards */}
        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {NOVA_PILLARS.map((pillar) => (
            <div
              key={pillar.tag}
              className="rounded-[18px] border border-[#e8eaf2] bg-white px-7 pt-7 pb-6"
            >
              {/* Tag */}
              <div className="inline-flex rounded-full bg-[#f1f2ff] px-3 py-1">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#5b5ce8]">
                  {pillar.tag}
                </p>
              </div>

              {/* Title */}
              <h3 className="mt-6 text-[22px] font-semibold text-[#3f4354] tracking-[-0.03em] leading-tight">
                {pillar.title}
              </h3>

              {/* Description */}
              <p className="mt-4 text-[13px] leading-[1.8] text-[#7a7a7a]">
                {pillar.description}
              </p>

              {/* Divider */}
              <div className="my-7 h-px w-full bg-[#eceef4]" />

              {/* Features */}
              <div className="flex flex-col gap-3 mb-7">
                {pillar.features.map((f) => (
                  <div key={f} className="flex items-start gap-3">
                    <svg
                      className="w-4 h-4 text-[#5b5ce8] mt-[2px] shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.4}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>

                    <span className="text-[13px] text-[#5f6475] leading-[1.45]">
                      {f}
                    </span>
                  </div>
                ))}
              </div>

              {/* Utterance Box */}
              <div className="mt-2 rounded-[12px] border border-dashed border-[#d7d9f8] bg-[#f7f7ff] px-4 py-4">
                <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-[#9aa0b2] mb-2">
                  {pillar.utteranceLabel}
                </p>

                <p className="text-[13px] font-medium text-[#313547] leading-[1.55] mb-2">
                  {pillar.utterance}
                </p>

                <p className="text-[11px] text-[#9aa0b2] leading-snug">
                  {pillar.utteranceMeta}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}