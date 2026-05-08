import { Manrope } from "next/font/google";
import { AUDIT_CALL_DETAILS, AUDIT_TRAIL_EVENTS } from "@/data/compliance";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export default function AuditTrailSection() {
  return (
    <section
      className={`${manrope.className} bg-white px-4 sm:px-6 lg:px-[129px] py-24 sm:py-28`}
    >
      <div className="mx-auto max-w-[1182px]">
        {/* Header */}
        <div className="text-center">
          <p className="text-[11px] tracking-[0.38em] text-[#5b5ce8] font-semibold uppercase">
            What the audit trail looks like
          </p>

          <h2 className="section-heading mt-5 text-[40px] sm:text-[42px] lg:text-[54px] text-[#4b4b4b] tracking-[-0.045em] leading-[1.08] max-w-[980px] mx-auto">
            Every call leaves a <span className="text-[#5b5ce8]">trail</span>{" "}
            your <span className="text-[#5b5ce8]">auditor</span> will read in
            plain English.
          </h2>

          <p className="mt-5 text-[15px] text-[#7a7a7a] max-w-[760px] mx-auto leading-[1.7]">
            Every interaction is automatically translated into a clear,
            human-readable audit trail, giving regulators and auditors full
            visibility without the need to decode complex system logs.
          </p>
        </div>

        {/* Main Panel */}
        <div className="mt-16 rounded-[24px] border border-[#e7e8f3] bg-[#f3f4ff] px-7 sm:px-8 lg:px-10 py-8 sm:py-10">
          {/* Label */}
          <p className="text-[18px] font-semibold text-[#5d6170] mb-6">
            Call Details
          </p>

          {/* Grid */}
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            {/* Left Metadata Card */}
            <div className="rounded-[16px] border border-[#eceef4] bg-white px-7 py-1.8">
              {AUDIT_CALL_DETAILS.map((item, i) => (
                <div
                  key={item.label}
                  className={`flex items-center justify-between py-5 ${
                    i < AUDIT_CALL_DETAILS.length - 1
                      ? "border-b border-[#ececf3]"
                      : ""
                  }`}
                >
                  <span className="text-[14px] text-[#7e8393]">
                    {item.label}
                  </span>

                  <span className="text-[14px] font-medium tracking-[0.01em] text-[#5b5ce8]">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Right Timeline */}
            <div className="flex flex-col gap-3">
              {AUDIT_TRAIL_EVENTS.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between gap-4 rounded-[12px] border border-[#eceef4] bg-white px-5 py-4"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    {/* Green Dot */}
                    <span className="h-2.5 w-2.5 rounded-full bg-[#22c55e] shrink-0" />

                    <span className="text-[13px] text-[#4b4b4b] leading-snug">
                      {item.event}
                    </span>
                  </div>

                  <span className="text-[12px] font-medium tracking-[0.08em] text-[#9ca0ad] tabular-nums shrink-0">
                    {item.time}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
