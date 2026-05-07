// RedactAIPIIMasking.tsx
import React from "react";

interface HighlightedToken {
  text: string;
  variant: "raw" | "redacted";
}

type TextSegment = string | HighlightedToken;

interface PIIRow {
  label: string;
  segments: TextSegment[];
}

const isToken = (seg: TextSegment): seg is HighlightedToken =>
  typeof seg === "object";

const piiRows: PIIRow[] = [
  {
    label: "Raw",
    segments: [
      '"My account is ',
      { text: "8842 **** 1296", variant: "raw" },
      " and Aadhaar ",
      { text: "4421 **** **91", variant: "raw" },
      ' "',
    ],
  },
  {
    label: "Out",
    segments: [
      '"My account is ',
      { text: "[ACCT_REDACTED]", variant: "redacted" },
      " and Aadhaar ",
      { text: "[AADHAAR_REDACTED]", variant: "redacted" },
      ' "',
    ],
  },
];

const tokenStyles: Record<HighlightedToken["variant"], string> = {
  raw: "bg-orange-200/70 text-orange-700",
  redacted: "bg-indigo-200/70 text-indigo-700",
};

const PIIRowComponent: React.FC<{ row: PIIRow }> = ({ row }) => (
  <div className="flex items-start gap-3 flex-wrap">
    <span className="font-mono text-[11px] font-semibold text-gray-400 uppercase pt-0.5 w-7 flex-shrink-0">
      {row.label}
    </span>
    <p className="font-mono text-sm text-gray-700 leading-relaxed flex flex-wrap items-center gap-x-1">
      {row.segments.map((seg, i) =>
        isToken(seg) ? (
          <span
            key={i}
            className={`inline-flex items-center px-2 py-0.5 rounded-md font-medium text-sm ${tokenStyles[seg.variant]}`}
          >
            {seg.text}
          </span>
        ) : (
          <span key={i}>{seg}</span>
        )
      )}
    </p>
  </div>
);

const RedactAIPIIMasking: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-8 max-w-lg w-full">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800 tracking-tight mb-1">
          Redact AI· PII masking
        </h1>
        <p className="text-sm text-gray-500 leading-relaxed">
          Card numbers, account IDs, OTPs and Aadhaar digits are stripped before
          transcripts ever leave the device.
        </p>
      </div>

      {/* Inner panel */}
      <div className="rounded-xl border border-indigo-100 bg-indigo-50/60 p-5">
        {/* Panel label */}
        <p className="font-mono text-[10px] font-semibold tracking-widest text-indigo-300 uppercase mb-4">
          Raw + Redacted · On-Device
        </p>

        {/* Rows */}
        <div className="space-y-3">
          {piiRows.map((row) => (
            <PIIRowComponent key={row.label} row={row} />
          ))}
        </div>

        {/* Footer */}
        <div className="mt-5 pt-4 border-t border-dashed border-indigo-200 flex items-center justify-between">
          <span className="text-xs text-gray-400">
            2 PII tokens masked · vault key kv-08
          </span>
          <span className="text-xs font-semibold text-indigo-500">
            Reversible
          </span>
        </div>
      </div>
    </div>
  );
};

export default RedactAIPIIMasking;