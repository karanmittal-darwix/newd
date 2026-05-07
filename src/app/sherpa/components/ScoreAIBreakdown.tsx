import React from "react";

interface ScoreBarProps {
  label: string;
  value: number;
  max?: number;
  highlight?: boolean;
}

const ScoreBar: React.FC<ScoreBarProps> = ({ label, value, max = 100, highlight = false }) => {
  const pct = (value / max) * 100;

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm font-semibold text-gray-700 w-24 shrink-0">{label}</span>
      <div className="flex-1 h-1.5 bg-indigo-100 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full bg-indigo-600 transition-all duration-700"
          style={{ width: `${pct}%` }}
        />
      </div>
      <span
        className={`font-mono text-sm w-8 text-right font-medium ${
          highlight ? "text-orange-500 font-semibold" : "text-gray-600"
        }`}
      >
        {value}
      </span>
    </div>
  );
}

interface Parameter {
  label: string;
  value: number;
  highlight?: boolean;
}

const parameters: Parameter[] = [
  { label: "script",     value: 96 },
  { label: "compliance", value: 100 },
  { label: "empathy",    value: 88 },
  { label: "close",      value: 82, highlight: true },
];

const ScoreAIBreakdown: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-8 max-w-lg w-full">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-semibold text-gray-800 tracking-tight">
          Score AI · Parameter breakdown
        </h1>
        <p className="mt-2 text-sm text-gray-500 leading-relaxed">
          Per-parameter scoring against your QA rubric, script, tone, compliance,
          conversion intent, calibrated to your team.
        </p>
      </div>

      {/* Card */}
      <div className="bg-indigo-50/60 rounded-xl p-5">
        {/* Card Header */}
        <p className="font-mono text-xs text-gray-400 font-medium tracking-widest uppercase mb-4">
          QA SCORE ·{" "}
          <span className="text-gray-700 font-semibold">94 / 100</span>
        </p>

        {/* Score Bars */}
        <div className="space-y-4">
          {parameters.map((p) => (
            <ScoreBar
              key={p.label}
              label={p.label}
              value={p.value}
              highlight={p.highlight}
            />
          ))}
        </div>

        {/* Footer */}
        <div className="border-t border-dashed border-indigo-200 mt-5 pt-3 flex items-center justify-between">
          <span className="text-xs text-gray-400">vs team avg</span>
          <span className="text-xs font-semibold text-indigo-600">+11 pts</span>
        </div>
      </div>
    </div>
  );
};

export default ScoreAIBreakdown;
