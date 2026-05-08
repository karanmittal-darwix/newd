import { Manrope } from "next/font/google";

const manrope = Manrope({ subsets: ["latin"], weight: ["400", "500", "600"] });

const INFRA_STATS = [
  { label: "Infra", value: "On-prem · VPC · Cloud" },
  { label: "Data", value: "India-only servers" },
  { label: "Standards", value: "AES-256 · TLS 1.3" },
  { label: "Fail safety", value: "Live audit-replayable" },
  { label: "SLA", value: "99.95% uptime" },
  { label: "Support", value: "24×7 · 15-hour BCM" },
];

export default function ComplianceHero() {
  return (
    <section
      className={`${manrope.className} relative w-full overflow-hidden`}
      style={{
        background:
          "linear-gradient(160deg, #eeeeff 0%, #f0f0ff 30%, #f5f5ff 60%, #ffffff 100%)",
      }}
    >
      {/* Subtle radial glow top-center */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2"
        style={{
          backgroundImage:
            "linear-gradient(90deg, #565ADD1F 0%, #565ADD00 100%)",
        }}
      />

      <div className="relative mx-auto max-w-[1182px] px-4 sm:px-6 lg:px-[129px] pt-16 sm:pt-20 lg:pt-[88px] pb-16 sm:pb-20 lg:pb-24">
        {/* Pill badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#dddff0] bg-white/80 px-4 py-1.5 text-[11px] font-medium text-[#7b7b7b] shadow-sm backdrop-blur-sm">
            <img src="/images/star.svg" alt="Star" />
            <span>Built for BFSI</span>
            <span className="text-[#d0d3e4]">·</span>
            <span>Powered by an in-house SLM</span>
          </div>
        </div>

        {/* Heading */}
        <h1 className="hero-heading text-center">
          Built for <span className="text-[#5b5ce8]">India&apos;s</span>{" "}
          regulated stack.
        </h1>

        {/* Body copy */}
        <p className="hero-subheading text-center max-w-[800px]">
          India's BFSI regulators don't write footnotes. Neither do we.
          <br />
          Darwix is built from model to deployment on the most demanding
          regulatory frameworks in the country: RBI data localisation, the 2025
          outsourcing directions, the DPDP Act, and the REE-AI governance
          framework.
        </p>

        {/* CTAs */}
        <div className="mt-9 flex items-center justify-center gap-4 flex-wrap">
          <button
            type="button"
            className="rounded-[10px] border border-[#5b5ce8] bg-white px-6 py-2.5 text-[13px] font-semibold text-[#5b5ce8] shadow-sm transition-all hover:bg-[#f5f5ff] hover:shadow-md"
          >
            Request CISO walkthrough
          </button>
          <button
            type="button"
            className="rounded-[10px] bg-[#5b5ce8] px-6 py-2.5 text-[13px] font-semibold text-white shadow-lg shadow-indigo-200/70 transition-all hover:bg-[#4e4fd9] hover:shadow-indigo-300/60"
          >
            Download compliance pack
          </button>
        </div>

        {/* Stat strip — label + value, no icons */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
          {INFRA_STATS.map((stat, i) => (
            <div
              key={stat.label}
              className={`
                flex flex-col items-center gap-1.5 px-4 py-7
                ${i < INFRA_STATS.length - 1 ? "lg:border-r border-[#e4e5f5]" : ""}
              `}
            >
              <span className="text-[11px] font-medium text-[#9498a8] tracking-[0.04em]">
                {stat.label}
              </span>
              <span className="text-[13px] font-semibold text-[#4b4b4b] text-center leading-snug">
                {stat.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
