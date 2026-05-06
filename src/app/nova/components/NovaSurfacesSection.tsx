import { Manrope } from "next/font/google";
import { NOVA_SURFACES } from "@/data/nova";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export default function NovaSurfacesSection() {
  return (
    <section
      className={`${manrope.className} bg-white px-4 sm:px-6 lg:px-[129px] py-24 sm:py-28`}
    >
      <div className="mx-auto max-w-[1280px]">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[11px] tracking-[0.42em] text-[#5b5ce8] font-semibold uppercase mb-5">
            Surfaces Nova lives on
          </p>

          <h2 className="text-[32px] sm:text-[40px] lg:text-[50px] font-semibold text-[#4b4b4b] tracking-[-0.03em] leading-[1.1]">
             On a <span className="text-[#5b5ce8]">kiosk.</span> On a{" "} <span className="text-[#5b5ce8]">screen.</span> At the counter. </h2>

          <p className="mt-6 text-[15px] leading-[1.75] text-[#7a7a7a] max-w-[820px] mx-auto">
            Nova adapts to multiple in-store surfaces — from standalone
            kiosks to assisted retail counters and immersive display walls —
            all powered by the same conversational intelligence layer.
          </p>
        </div>

        {/* Surface Layout */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {NOVA_SURFACES.map((surface) => (
            <div
              key={surface.number}
              className="relative bg-[#fafafa] px-6 py-6 flex flex-col border-r-2 border-r-[#5b5ce8]"
            >
              {/* Number */}
              <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-[#9498a8] mb-5">
                {surface.number}
              </p>

              {/* Title */}
              <h3 className="text-[22px] font-semibold text-[#3f4354] tracking-[-0.03em] leading-tight mb-4">
                {surface.title}
              </h3>

              {/* Description */}
              <p className="text-[13px] leading-[1.85] text-[#727687] flex-1 mb-8">
                {surface.description}
              </p>

              {/* Chips */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {surface.chips.map((chip) => (
                  <span
                    key={chip}
                    className="rounded-md border border-[#e7e8f2] bg-[#fafaff] px-3 py-1.5 text-[10px] font-medium text-[#6b6f80]"
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