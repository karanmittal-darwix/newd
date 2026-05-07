import React from "react";

interface CheckItemProps {
  label: string;
}

const CheckIcon: React.FC = () => (
  <svg
    className="w-4 h-4 text-indigo-500 shrink-0"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.5}
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const CheckItem: React.FC<CheckItemProps> = ({ label }) => (
  <li className="flex items-center gap-3 text-sm text-gray-700">
    <CheckIcon />
    {label}
  </li>
);

const checks: string[] = [
  "Welcome script · all 7 disclosures present",
  "Interest rate disclosed verbatim",
  "Pre-payment terms read",
  "Customer consent captured (timestamp 01:08)",
  "No regulated-word triggers detected",
];

const AuditCompliance: React.FC = () => {
  const passCount = checks.length;

  return (
    <div className="bg-white rounded-2xl shadow-sm p-8 max-w-lg w-full">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-semibold text-gray-800 tracking-tight">
          Audit AI · Compliance reports
        </h1>
        <p className="mt-2 text-sm text-gray-500 leading-relaxed">
          Auto-generated compliance reports per call: disclosures, mis-selling
          flags, regulated-word triggers — pre-formatted for your auditor.
        </p>
      </div>

      {/* Card */}
      <div className="bg-indigo-50/60 rounded-xl p-5">
        {/* Card ID */}
        <p className="font-mono text-xs text-gray-400 font-medium tracking-widest uppercase mb-4">
          CALL AUDIT · LAP-24001
        </p>

        {/* Checklist */}
        <ul className="space-y-2.5">
          {checks.map((label) => (
            <CheckItem key={label} label={label} />
          ))}
        </ul>

        {/* Footer */}
        <div className="border-t border-dashed border-indigo-200 mt-4 pt-3 flex items-center justify-between">
          <span className="text-xs text-gray-400">
            {passCount} / {passCount} checks pass
          </span>
          <span className="text-xs font-semibold text-green-500">RBI-ready</span>
        </div>
      </div>
    </div>
  );
};

export default AuditCompliance;
