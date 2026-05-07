import React from "react";

interface MetricRowProps {
  label: string;
  value: string;
  valueColor: string;
}

const MetricRow: React.FC<MetricRowProps> = ({ label, value, valueColor }) => (
  <li className="flex items-center justify-between">
    <span className="flex items-center gap-2 text-sm text-gray-700">
      <span className="w-2 h-2 rounded-full bg-indigo-400 inline-block" />
      {label}
    </span>
    <span className={`font-mono text-sm font-medium ${valueColor}`}>{value}</span>
  </li>
);

const metrics: MetricRowProps[] = [
  {
    label: "Customer sentiment / 90s",
    value: "−0.4",
    valueColor: "text-orange-500",
  },
  {
    label: "Tone-break events",
    value: "2",
    valueColor: "text-amber-500",
  },
  {
    label: "Unauthorized offers",
    value: "0",
    valueColor: "text-green-500",
  },
  {
    label: "Manager alert",
    value: "PINGED · ANJ-04",
    valueColor: "font-mono text-xs tracking-wide text-indigo-600",
  },
];

const SentinelMonitor: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-8 max-w-lg w-full">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-semibold text-gray-800 tracking-tight">
          Sentinel AI · Manager monitor
        </h1>
        <p className="mt-2 text-sm text-gray-500 leading-relaxed">
          Flags hostile sentiment, scripted-tone breaks, and unauthorized offers
          in real time. Manager gets alerted, not surprised.
        </p>
      </div>

      {/* Card */}
      <div className="bg-indigo-50/60 rounded-xl p-5">
        {/* Card ID */}
        <p className="font-mono text-xs text-gray-400 font-medium tracking-widest uppercase mb-4">
          SENTINEL · BR-SBN-08
        </p>

        {/* Metrics list */}
        <ul className="space-y-3">
          {metrics.map((metric) => (
            <MetricRow key={metric.label} {...metric} />
          ))}
        </ul>

        {/* Footer row */}
        <div className="border-t border-dashed border-indigo-200 mt-4 pt-3 flex items-center justify-between">
          <span className="text-xs text-gray-400">De-escalation script v3</span>
          <span className="text-xs font-semibold text-indigo-600">
            Pushed to officer
          </span>
        </div>
      </div>
    </div>
  );
};

export default SentinelMonitor;
