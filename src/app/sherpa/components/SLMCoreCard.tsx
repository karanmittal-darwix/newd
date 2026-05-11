import React from "react";

interface Stat {
  label: string;
  value: string;
  bold?: boolean;
}

const stats: Stat[] = [
  { label: "Params", value: "3.7B" },
  { label: "Calls trained", value: "4.2M" },
  { label: "Inference p50", value: "74ms" },
  { label: "Inference p99", value: "312ms" },
  { label: "Nudges live", value: "4 of 4" },
  { label: "Hosting", value: "VPC · in-region", bold: true },
];

const OrbVisual: React.FC = () => (
  <div className="flex items-center justify-center my-6">
    {/* Outer ring */}
    <div className="relative w-36 h-36 rounded-full border border-indigo-300 bg-gray-50 flex items-center justify-center">
      {/* Blurred orb blob */}
      <div className="w-20 h-20 rounded-full bg-indigo-600 opacity-80 blur-xl" />
      {/* Subtle inner glow overlay */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/30 to-transparent pointer-events-none" />
    </div>
  </div>
);

const StatRow: React.FC<{ stat: Stat; last: boolean }> = ({ stat, last }) => (
  <tr className={!last ? "border-b border-gray-100" : ""}>
    <td className="py-2.5 text-sm text-gray-500">{stat.label}</td>
    <td
      className={`py-2.5 text-sm text-right ${
        stat.bold ? "font-semibold text-gray-900" : "font-medium text-gray-900"
      }`}
    >
      {stat.value}
    </td>
  </tr>
);

const SLMCoreCard: React.FC = () => {
  return (
    <div className="w-80 bg-white rounded-2xl border border-gray-200 shadow-sm px-7 py-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-1">
        <span className="text-xs font-semibold tracking-widest text-gray-400 uppercase">
          SLM Core
        </span>
        <span className="flex items-center gap-1.5 text-xs font-semibold text-green-500">
          <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
          V24.11
        </span>
      </div>

      {/* Orb */}
      <OrbVisual />

      {/* Stats table */}
      <table className="w-full mb-5">
        <tbody>
          {stats.map((stat, i) => (
            <StatRow key={stat.label} stat={stat} last={i === stats.length - 1} />
          ))}
        </tbody>
      </table>

      {/* Footer */}
      <div className="border-t border-dashed border-gray-200 pt-4">
        <p className="text-xs text-gray-400 leading-relaxed">
          No tenant data leaves your VPC. Model updates shipped as delta weights.
        </p>
      </div>
    </div>
  );
};

export default SLMCoreCard;
