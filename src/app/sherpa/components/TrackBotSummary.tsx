import React from "react";

interface TagProps {
  label: string;
}

const Tag: React.FC<TagProps> = ({ label }) => (
  <span className="text-xs border border-gray-300 rounded-full px-3 py-1 text-gray-600">
    {label}
  </span>
);

const tags: string[] = ["EMI shift · 10th", "Sanction letter", "Top-up @ 11.4%"];

const TrackBotSummary: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-8 max-w-lg w-full">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-semibold text-gray-800 tracking-tight">
          TrackBot AI · Summary &amp; commitments
        </h1>
        <p className="mt-2 text-sm text-gray-500 leading-relaxed">
          Auto-generated compliance reports per call: disclosures, mis-selling
          flags, regulated-word triggers pre-formatted for your auditor.
        </p>
      </div>

      {/* Card */}
      <div className="bg-indigo-50/60 rounded-xl p-5">
        {/* Card Header */}
        <p className="font-mono text-xs text-gray-400 font-medium tracking-widest uppercase mb-3">
          CALL SUMMARY ·{" "}
          <span className="text-gray-600 font-semibold">02:48</span>
        </p>

        {/* Summary Box */}
        <div className="bg-white rounded-lg p-4 mb-3 shadow-sm">
          <p className="text-sm text-gray-600 leading-relaxed mb-3">
            Customer Rohit M confirmed disbursement of ₹42L for LAP. Negotiated
            EMI shift to 10th of month. Requested sanction letter via WhatsApp.
            Sentiment trended positive (hesitant→resolved).
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Tag key={tag} label={tag} />
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-dashed border-indigo-200 mt-4 pt-3 flex items-center justify-between">
          <span className="text-xs text-gray-400">3 commitments tracked</span>
          <span className="text-xs font-semibold text-indigo-600">
            5 actions auto-fired
          </span>
        </div>
      </div>
    </div>
  );
};

export default TrackBotSummary;
