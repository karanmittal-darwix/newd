// AgentAssistNudges.tsx
import React from "react";

const nudgeItems = [
  "Confirm vehicle details, ownership & eligibility criteria",
  "Check customer income, existing EMIs & repayment capacity",
  "Explain loan amount based on vehicle value, EMI & total cost",
  "Clarify RC transfer, documentation & applicable charges",
  "Inform customer approval depends on verification & documents",
];

const BriefcaseIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
  </svg>
);

interface NudgeCardProps {
  source: string;
  title: string;
  items: string[];
}

const NudgeCard: React.FC<NudgeCardProps> = ({ source, title, items }) => (
  <div className="rounded-xl border border-indigo-100 bg-indigo-50/50 p-5">
    {/* Card Header */}
    <div className="flex items-center gap-3 mb-4 pb-4 border-b border-indigo-100">
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
        style={{
          background: "linear-gradient(135deg, #6366f1, #4f46e5)",
          boxShadow: "0 4px 14px rgba(99,102,241,0.35)",
        }}
      >
        <BriefcaseIcon className="w-5 h-5 text-white" />
      </div>
      <div>
        <p className="text-[10px] font-semibold tracking-widest text-indigo-400 uppercase">
          {source}
        </p>
        <p className="text-sm font-bold text-gray-800">{title}</p>
      </div>
    </div>

    {/* Checklist */}
    <ul className="space-y-2.5">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0" />
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const AgentAssistNudges: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-8 max-w-lg w-full">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800 tracking-tight mb-1">
          Agent Assist · Live Nudges
        </h1>
        <p className="text-sm text-gray-500 leading-relaxed">
          Real-time prompts triggered on customer intent. Audio-enabled so the
          FO never glances at a screen.
        </p>
      </div>

      {/* Nudge Card */}
      <NudgeCard
        source="Athena"
        title="Eligibility Review & Compliance"
        items={nudgeItems}
      />
    </div>
  );
};

export default AgentAssistNudges;