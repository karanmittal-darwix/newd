import React from "react";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

interface StatItem {
  label: string;
  value: string;
  accent?: boolean;
}

interface ScenarioCard {
  id: string;
  visual: React.ReactNode;
  title: string;
  description: string;
  stats: StatItem[];
}

/* ── Tiny visual sub-components ── */

const ChecklistVisual: React.FC = () => (
  <div className="flex flex-col gap-2 p-5">
    {[
      { label: "Income · Form 16", done: true },
      { label: "Bureau · 762", done: true },
      { label: "Address · proof", warn: true },
      { label: "Co-applicant ID", done: true },
      { label: "GST-mismatch", error: true },
    ].map((item) => (
      <div key={item.label} className="flex items-center gap-2.5">
        <span
          className={`flex h-[18px] w-[18px] flex-shrink-0 items-center justify-center rounded text-[10px] font-bold
            ${
              item.done
                ? "bg-[#5B5CE8] text-white"
                : item.warn
                ? "bg-amber-400 text-white"
                : "bg-slate-200 text-slate-400"
            }`}
        >
          {item.done ? "✓" : item.warn ? "!" : "✕"}
        </span>
        <span
          className={`text-[12px] ${
            item.error
              ? "text-[#C4C7D2] line-through"
              : "text-[#65697A]"
          }`}
        >
          {item.label}
        </span>
      </div>
    ))}
  </div>
);

const RiskProfileVisual: React.FC = () => (
  <div className="p-5 space-y-2.5 w-full">
    <div className="flex justify-between text-[11px]">
      <span className="text-[#9AA0B2]">Age band</span>
      <span className="text-[#5B5CE8] font-semibold">36–45</span>
    </div>

    <div className="flex items-center justify-between rounded-lg bg-[#5B5CE8] px-3 py-2">
      <span className="text-[12px] font-semibold text-white">
        Risk profile
      </span>
      <span className="text-[12px] font-semibold text-white">
        Moderate
      </span>
    </div>

    <div className="flex justify-between text-[11px] pt-0.5">
      <span className="text-[#9AA0B2]">Goal</span>
      <span className="text-[#5B5CE8] font-semibold">Child · 12y</span>
    </div>

    <div className="flex justify-between text-[11px]">
      <span className="text-[#9AA0B2]">NBA</span>
      <span className="text-[#5B5CE8] font-semibold">ULIP</span>
    </div>
  </div>
);

const PortfolioVisual: React.FC = () => (
  <div className="p-5 space-y-2.5 w-full">
    {[
      { label: "Equity", pct: 42, color: "bg-[#5B5CE8]" },
      { label: "Debt", pct: 26, color: "bg-[#9EA3F6]" },
      { label: "Alt", pct: 32, color: "bg-[#E0E1F8]" },
    ].map((item) => (
      <div key={item.label} className="flex items-center gap-3">
        <span
          className={`h-3 w-3 rounded-sm flex-shrink-0 ${item.color}`}
        />
        <span className="text-[12px] text-[#65697A] flex-1">
          {item.label}
        </span>
        <span className="text-[12px] font-semibold text-[#4B4B4B]">
          {item.pct}%
        </span>
      </div>
    ))}
  </div>
);

const LocationVisual: React.FC = () => (
  <div className="flex flex-col items-center justify-center py-8 gap-2 w-full">
    <svg
      viewBox="0 0 40 48"
      className="w-10 h-12 text-[#5B5CE8]"
      fill="currentColor"
    >
      <path d="M20 0C12.268 0 6 6.268 6 14c0 10.5 14 34 14 34s14-23.5 14-34C34 6.268 27.732 0 20 0zm0 19a5 5 0 110-10 5 5 0 010 10z" />
    </svg>

    <span className="text-[9px] font-mono text-[#A3A7B3] tracking-wide">
      12.9716° N · 77.5946° E
    </span>
  </div>
);

const BarChartVisual: React.FC = () => {
  const bars = [3, 5, 4, 6, 5, 7, 9, 10, 7, 6];
  const max = Math.max(...bars);
  const peakIndex = bars.indexOf(max);

  return (
    <div className="flex items-end gap-[3px] px-5 pb-4 pt-6 h-32 w-full">
      {bars.map((h, i) => (
        <div
          key={i}
          className={`flex-1 rounded-t-sm ${
            i === peakIndex ? "bg-[#5B5CE8]" : "bg-[#C9CBF4]"
          }`}
          style={{ height: `${(h / max) * 100}%` }}
        />
      ))}
    </div>
  );
};

const CollectionsVisual: React.FC = () => (
  <div className="p-5 space-y-2 w-full">
    {[
      {
        from: "Skip",
        to: "Soft collection",
        color: "bg-[#4F46E5]",
        muted: false,
      },
      {
        from: "Negotiate",
        to: "EMI shift",
        color: "bg-[#5B5CE8]",
        muted: false,
      },
      {
        from: "Promise",
        to: "Track date",
        color: "bg-[#818CF8]",
        muted: false,
      },
      {
        from: "Recovered",
        to: "Close case",
        color: "bg-[#A5B4FC]",
        muted: false,
      },
      {
        from: "Escalate",
        to: "Legal",
        color: "bg-[#E0E1F8]",
        muted: true,
      },
    ].map((item) => (
      <div key={item.from} className="flex items-center gap-2">
        <span
          className={`h-[10px] w-[10px] rounded-sm flex-shrink-0 ${item.color}`}
        />
        <span
          className={`text-[11px] ${
            item.muted ? "text-[#C4C7D2]" : "text-[#65697A]"
          }`}
        >
          {item.from} → {item.to}
        </span>
      </div>
    ))}
  </div>
);

const NetworkVisual: React.FC = () => (
  <div className="flex items-center justify-center py-4 px-4 w-full">
    <svg viewBox="0 0 220 90" className="w-full h-20">
      <line
        x1="30"
        y1="45"
        x2="85"
        y2="28"
        stroke="#C7D2FE"
        strokeWidth="1.5"
        strokeDasharray="5 3"
      />
      <line
        x1="85"
        y1="28"
        x2="140"
        y2="45"
        stroke="#C7D2FE"
        strokeWidth="1.5"
        strokeDasharray="5 3"
      />
      <line
        x1="140"
        y1="45"
        x2="185"
        y2="32"
        stroke="#C7D2FE"
        strokeWidth="1.5"
        strokeDasharray="5 3"
      />
      <line
        x1="85"
        y1="28"
        x2="120"
        y2="65"
        stroke="#C7D2FE"
        strokeWidth="1.5"
        strokeDasharray="5 3"
      />
      <line
        x1="140"
        y1="45"
        x2="120"
        y2="65"
        stroke="#C7D2FE"
        strokeWidth="1.5"
        strokeDasharray="5 3"
      />

      {(
        [
          [30, 45, true],
          [85, 28, false],
          [140, 45, false],
          [185, 32, false],
          [120, 65, false],
        ] as [number, number, boolean][]
      ).map(([cx, cy, isMain], i) => (
        <circle
          key={i}
          cx={cx}
          cy={cy}
          r={isMain ? 6 : 5}
          fill={isMain ? "#4F46E5" : "#818CF8"}
        />
      ))}
    </svg>
  </div>
);

const VisitStepsVisual: React.FC = () => (
  <div className="p-5 space-y-3 w-full">
    {[
      { label: "T-0 visit", active: true },
      { label: "T+1 verify", active: true },
      { label: "T+2 disburse", active: false },
    ].map((step) => (
      <div key={step.label} className="flex items-center gap-2.5">
        <span
          className={`h-3.5 w-3.5 rounded-full flex-shrink-0 border-2 ${
            step.active
              ? "bg-[#5B5CE8] border-[#5B5CE8]"
              : "border-[#D6D8DF] bg-white"
          }`}
        />

        <span
          className={`text-[12px] ${
            step.active
              ? "text-[#4B4B4B] font-medium"
              : "text-[#9AA0B2]"
          }`}
        >
          {step.label}
        </span>
      </div>
    ))}
  </div>
);

/* ── Data ── */

const scenarios: ScenarioCard[] = [
  {
    id: "home-loan",
    visual: <ChecklistVisual />,
    title: "Home Loan & MSME Underwriting",
    description:
      "Sherpa briefs underwriters live with key checks and cues.",
    stats: [
      { label: "Applications:", value: "4,200+" },
      { label: "Speed:", value: "+29%", accent: true },
    ],
  },

  {
    id: "insurance",
    visual: <RiskProfileVisual />,
    title: "Insurance Customer Profiling",
    description:
      "Sherpa captures details live with profiling and eligibility cues.",
    stats: [
      { label: "Profiles:", value: "12K+" },
      { label: "Conversion:", value: "+18%", accent: true },
    ],
  },

  /* MOVED HERE */

  {
    id: "field-visit",
    visual: <VisitStepsVisual />,
    title: "Lending · Field Visit & Loan Repayment",
    description:
      "Sherpa briefs RM live risk band, nudges, opportunity scoring insights.",
    stats: [
      { label: "FOs:", value: "9.8K" },
      { label: "Tickets / month:", value: "340K" },
    ],
  },

  {
    id: "asset-verify",
    visual: <LocationVisual />,
    title: "Asset Verification Visits",
    description:
      "Sherpa supports field visits with asset checks, prompts, and on-the-spot verification and updates.",
    stats: [
      { label: "Visits:", value: "24K+" },
      { label: "Case closure:", value: "+21%", accent: true },
    ],
  },

  {
    id: "hni-wealth",
    visual: <BarChartVisual />,
    title: "HNI Wealth Management",
    description:
      "Sherpa briefs the RM live during portfolio reviews. Risk band, last quarter's nudges, opportunity scoring.",
    stats: [
      { label: "RMs:", value: "1,480+" },
      { label: "AUM:", value: "₹38K Cr", accent: true },
    ],
  },

  {
    id: "collections",
    visual: <CollectionsVisual />,
    title: "NPA & Collections",
    description:
      "Voice agents soft-collect at scale, escalate to field via Sherpa only when negotiation needs a human.",
    stats: [
      { label: "Recovery:", value: "+34%", accent: true },
      { label: "Cost / promise:", value: "−61%", accent: true },
    ],
  },

  {
    id: "branch-banking",
    visual: <NetworkVisual />,
    title: "Branch Banking Insurance",
    description:
      "Cross-sell at the teller window, real-time eligibility, KYC pre-fill, compliance checks all baked in.",
    stats: [
      { label: "Branches:", value: "2,300+" },
      { label: "Policies / day:", value: "11K" },
    ],
  },

  /* MOVED TO BOTTOM */

  {
    id: "hni-proposal",
    visual: <PortfolioVisual />,
    title: "HNI Proposal Creation",
    description:
      "Sherpa briefs RMs live with portfolio signals, client goals, risk bands, and opportunity cues.",
    stats: [
      { label: "RMs:", value: "1,480+" },
      { label: "Proposals:", value: "8.6K" },
    ],
  },
];

const ScenarioCard: React.FC<{ card: ScenarioCard }> = ({ card }) => (
  <div className="flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-[#E5E7F5] bg-white shadow-[0_8px_24px_rgba(37,44,97,0.04)]">
    <div className="flex h-[148px] w-full shrink-0 items-center overflow-hidden border-b border-[#F0F1F5] bg-[#FBFBFE]">
      {card.visual}
    </div>

    <div className="flex flex-1 flex-col gap-2 p-4">
      <h3 className="min-h-[38px] text-[15px] font-semibold leading-snug tracking-[-0.01em] text-[#4B4B4B]">
        {card.title}
      </h3>

      <p className="flex-1 text-[13px] leading-relaxed text-[#7A7A7A]">
        {card.description}
      </p>

      <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1.5 border-t border-[#F0F1F5] pt-3">
        {card.stats.map((s) => (
          <span key={s.label} className="text-[12px] text-[#8A8A8A]">
            {s.label}{" "}
            <span
              className={`font-semibold ${
                s.accent ? "text-[#5B5CE8]" : "text-[#4B4B4B]"
              }`}
            >
              {s.value}
            </span>
          </span>
        ))}
      </div>
    </div>
  </div>
);

const BFSIScenarios: React.FC = () => (
  <section className={`w-full bg-white py-16 ${manrope.className}`}>
    <div className="text-center mb-12 max-w-[760px] mx-auto">
      <p className="text-[11px] tracking-[0.38em] text-[#5B5CE8] font-semibold uppercase mb-3">
        BFSI Scenarios in Production
      </p>

      <h2 className="mt-4 text-[28px] sm:text-[36px] lg:text-[42px] font-semibold text-[#4B4B4B] leading-[1.15] tracking-[-0.02em]">
        Built for one industry.
        <br />
        <span className="text-[#5B5CE8]">
          Tuned to many sub-verticals.
        </span>
      </h2>
    </div>

    <div className="mx-auto grid max-w-[1182px] auto-rows-fr grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {scenarios.map((card) => (
        <ScenarioCard key={card.id} card={card} />
      ))}
    </div>
  </section>
);

export default BFSIScenarios;