import React from "react";
import SLMCoreCard from "./SLMCoreCard";

interface ActionItem {
  title: string;
  status: "fired" | "firing" | "queued";
  details?: string;
}

const actions: ActionItem[] = [
  {
    title: "WhatsApp · sanction_letter_v3",
    status: "fired",
    details: "LAP-24081 · pre-approved tpl_v3_mr",
  },
  {
    title: "CRM write · disposition + EMI",
    status: "fired",
    details: "Salesforce · LAP-24081 · stage=disburse",
  },
  {
    title: "Service request · EMI date change",
    status: "fired",
    details: "SR-INT-44292 · auto-routing -> ops",
  },
  {
    title: "KYC re-verify · address proof",
    status: "fired",
    details: "Customer 360 · risk band B",
  },
  {
    title: "RM email · summary + next-step",
    status: "fired",
    details: "to: priya.r@meridian · 5-line nb",
  },
  {
    title: "LOS · disbursement note",
    status: "firing",
    details: "Finnone · BTM pending · scheduled T+1",
  },
  {
    title: "Slack #hot-leads · deal > INR40L",
    status: "queued",
    details: "Routing to Priya · sentiment ^",
  },
  {
    title: "Razorpay link · INR2,480 EMI",
    status: "queued",
    details: "Expires +6h · sent on WA",
  },
  {
    title: "Calendar · site-visit 24 Apr",
    status: "queued",
    details: "Google Cal · invite sent",
  },
  {
    title: "Risk re-score · band B -> A",
    status: "queued",
    details: "Bureau pull queued · T+8",
  },
];

const getStatusStyles = (status: "fired" | "firing" | "queued") => {
  switch (status) {
    case "fired":
      return "border border-emerald-600 bg-emerald-600 text-white";
    case "firing":
      return "text-indigo-600 bg-indigo-50 border border-indigo-100";
    case "queued":
      return "text-amber-600 bg-amber-50 border border-amber-100";
  }
};

const OneCallManyActionsSection: React.FC = () => {
  return (
    <div className="px-4 sm:px-6 max-w-7xl mx-auto py-16 sm:py-20">
      <div className="mb-12 text-center">
        <p className="text-xs font-semibold tracking-[0.3em] text-indigo-500 uppercase">
          Live Intelligence
        </p>
        <h2 className="section-heading mt-4 text-3xl sm:text-4xl md:text-5xl text-gray-600 tracking-tight">
          One meeting.{" "}
          <span className="text-indigo-600">Multiple actions firing simultaneously.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8">
        {/* Left Side - Call Details */}
        <div className="space-y-6">
          {/* Header Info */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 space-y-4 shadow-sm">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-[0.2em]">
                  Tenant
                </p>
                <p className="mt-2 text-sm font-semibold text-gray-700">
                  meridian-bank-prod
                </p>
              </div>
              <div>
                <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-[0.2em]">
                  Region
                </p>
                <p className="mt-2 text-sm font-semibold text-gray-700">
                  ap-south-1
                </p>
              </div>
              <div>
                <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-[0.2em]">
                  SLM build
                </p>
                <p className="mt-2 text-sm font-semibold text-gray-700">
                  darwix-slm-r24.11.3
                </p>
              </div>
              <div>
                <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-[0.2em]">
                  Tokens / min
                </p>
                <p className="mt-2 text-sm font-semibold text-gray-700">
                  16,448
                </p>
              </div>
            </div>
          </div>

          {/* Call Transcript */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 space-y-4 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[11px] font-semibold text-indigo-500 uppercase tracking-[0.2em]">
                SHERPA · FIELD CALL
              </span>
              <span className="flex items-center gap-1.5 text-[11px] font-semibold text-emerald-500">
                <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
                IN PROGRESS
              </span>
            </div>

            <div className="text-sm text-gray-400">00:09</div>
            <div className="rounded-lg bg-indigo-50 p-3 border border-indigo-100">
              <p className="text-xs font-semibold text-indigo-600 mb-1.5">AGENT</p>
              <p className="text-sm text-gray-700">
                Sir, your loan-against-property welcome - disbursement of INR 42 lakhs, correct?
              </p>
            </div>

            <div className="text-sm text-gray-400">00:18</div>
            <div className="rounded-lg bg-amber-50 p-3 border border-amber-100">
              <p className="text-xs font-semibold text-amber-600 mb-1.5">CUSTOMER</p>
              <p className="text-sm text-gray-700">
                Haan sahi hai. Lekin EMI date thodi late kar sakte ho? Salary 7th ko aati hai.
              </p>
            </div>

            <div className="rounded-lg bg-indigo-100/30 p-3 border border-indigo-200">
              <p className="text-[11px] font-semibold text-indigo-600 mb-1.5">+ NUDGE</p>
              <p className="text-xs text-gray-600">
                EMI shift policy permits 5-12. Offer 10th. Confirm via WhatsApp.
              </p>
            </div>

            <div className="text-sm text-gray-400">00:35</div>
            <div className="rounded-lg bg-indigo-50 p-3 border border-indigo-100">
              <p className="text-xs font-semibold text-indigo-600 mb-1.5">AGENT</p>
              <p className="text-sm text-gray-700">
                Bilkul, EMI date 10th set kar deti hoon. Approval message WhatsApp pe aayega.
              </p>
            </div>

            <div className="text-sm text-gray-400">00:54</div>
            <div className="rounded-lg bg-amber-50 p-3 border border-amber-100">
              <p className="text-xs font-semibold text-amber-600 mb-1.5">CUSTOMER</p>
              <p className="text-sm text-gray-700">
                Theek hai. Aur sanction letter bhi bhej dena.
              </p>
            </div>

            <div className="rounded-lg bg-indigo-100/30 p-3 border border-indigo-200">
              <p className="text-[11px] font-semibold text-indigo-600 mb-1.5">+ NUDGE</p>
              <p className="text-xs text-gray-600">
                Auto-trigger sanction_letter_v3.pdf via WhatsApp template.
              </p>
            </div>

            <div className="text-sm text-gray-400">01:03</div>
            <div className="rounded-lg bg-indigo-50 p-3 border border-indigo-100">
              <p className="text-xs font-semibold text-indigo-600 mb-1.5">AGENT</p>
              <p className="text-sm text-gray-700">
                Of course sir. Bhej rahi hoon abhi.
              </p>
            </div>
          </div>

          {/* Call Metrics */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="grid grid-cols-3 gap-4">
              <div>
                <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-[0.2em]">
                  Sentiment
                </p>
                <p className="mt-2 text-base font-semibold text-emerald-600">
                  Resolved ↑
                </p>
              </div>
              <div>
                <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-[0.2em]">
                  Script fit
                </p>
                <p className="mt-2 text-base font-semibold text-emerald-600">
                  94% ↑
                </p>
              </div>
              <div>
                <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-[0.2em]">
                  Risk flags
                </p>
                <p className="mt-2 text-base font-semibold text-emerald-600">
                  0 ↓
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - SLM Core Cards & Actions */}
        <div className="space-y-6">
          {/* SLM Core Card */}
          <SLMCoreCard />

          {/* Actions Section */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="mb-4">
              <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-[0.2em]">
                BFSI tokens streaming to SLM
              </p>
              <p className="text-xs text-gray-400 mt-1">
                02:09
              </p>
              <p className="text-xs text-gray-500 mt-2">
                Agentic suite - 8 actions parallel
              </p>
            </div>

            <div className="space-y-2 max-h-[400px] overflow-y-auto">
              {actions.map((action, index) => (
                <div
                  key={`${action.title}-${index}`}
                  className="flex items-start justify-between gap-3 p-3 rounded-lg border border-gray-100 hover:bg-gray-50 transition"
                >
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold text-gray-700">
                      {action.title}
                    </p>
                    {action.details && (
                      <p className="text-[10px] text-gray-400 mt-0.5">
                        {action.details}
                      </p>
                    )}
                  </div>
                  <span
                    className={`text-[10px] font-semibold rounded-full px-2 py-1 whitespace-nowrap ${getStatusStyles(
                      action.status,
                    )}`}
                  >
                    {action.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneCallManyActionsSection;
