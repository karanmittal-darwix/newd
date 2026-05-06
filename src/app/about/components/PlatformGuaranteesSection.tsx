import { PLATFORM_GUARANTEES } from "@/data/compliance";

export default function PlatformGuaranteesSection() {
  return (
    <section className="bg-[#f7f8ff] px-4 sm:px-6 lg:px-[129px] py-20 sm:py-24">
      <div className="mx-auto max-w-[1182px]">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[11px] tracking-[0.38em] text-[#5b5ce8] font-semibold uppercase mb-4">
            Platform Guarantees
          </p>
          <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-semibold text-[#4b4b4b] tracking-[-0.03em] leading-[1.1]">
            Six guarantees. Built into the platform.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#7a7a7a] max-w-[540px] mx-auto leading-relaxed">
            Each capability is measurable, benchmarked quarterly against human agents
          </p>
        </div>

        {/* 2-col grid */}
        <div className="grid gap-4 lg:grid-cols-2">
          {PLATFORM_GUARANTEES.map((item) => (
            <div
              key={item.number}
              className="rounded-[16px] border border-[#eceef4] bg-white p-6 sm:p-7 shadow-[0_8px_24px_rgba(37,44,97,0.05)] hover:shadow-[0_12px_32px_rgba(91,92,232,0.08)] hover:border-[#d4d6ff] transition-all duration-200"
            >
              {/* Number + tags row */}
              <div className="flex items-start justify-between gap-4 mb-4">
                <span className="text-[11px] font-semibold text-[#9aa0b2] tracking-[0.2em]">
                  {item.number}
                </span>
                <div className="flex items-center gap-2 flex-wrap justify-end">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-[#5b5ce8] px-2.5 py-1 text-[10px] font-semibold text-white tracking-[0.12em]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <h3 className="text-[20px] font-semibold text-[#4b4b4b] tracking-[-0.02em] mb-3">
                {item.title}
              </h3>

              <p className="text-[13px] leading-[1.65] text-[#7a7a7a]">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}