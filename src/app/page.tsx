"use client";

import { Manrope } from "next/font/google";
import LogoMarquee from "@/components/LogoMarquee";
import DemoRequestSection from "@/components/DemoRequestSection";
import BFSIScenarios from "@/components/BFSIScenarios";

import { TRUST_LOGOS } from "@/data/sherpa";
import AgentOrb from "./voiceAgent/components/hero/AgentOrb";
import { useEffect, useState } from "react";
import { marLogos } from "@/data/marLogos";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const INITIAL_LIVE_CALL_COUNT = 38;
const INITIAL_ACTIONS_PER_HOUR = 1247;
const heroMetricFormatter = new Intl.NumberFormat("en-US");

type HeroStat = {
  value: string;
  label: string;
  highlight?: boolean;
  metric?: "liveCalls" | "actionsPerHour";
};

const formatHeroMetric = (value: number) => heroMetricFormatter.format(value);

const HERO_STATS: HeroStat[] = [
  {
    value: "38 live",
    label: "Field calls running across India right now.",
    highlight: true,
    metric: "liveCalls",
  },
  {
    value: "1,247 /hr",
    label: "Agent actions orchestrated every hour.",
    metric: "actionsPerHour",
  },
  {
    value: "22 langs",
    label: "Indian languages with Hindi-Eng code-switch.",
  },
  {
    value: "< 400ms",
    label: "SLM round-trip from token to action.",
  },
];

const STACK_ITEMS = [
  {
    id: "01",
    title: "Real-time intelligence",
    description:
      "Proprietary BFSI tokens for risk, intent, sentiment and compliance, extracted live from every conversation.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5 text-[#5b5ce8]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M3 12h4l2-4 4 8 2-4h4" />
      </svg>
    ),
  },
  {
    id: "02",
    title: "Agentic suite",
    description:
      "Voice agents and non-voice agents (CRM, LOS, comms) act on those tokens before the call ends.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5 text-[#5b5ce8]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="6" cy="6" r="2" />
        <circle cx="18" cy="6" r="2" />
        <circle cx="12" cy="18" r="2" />
        <path d="M8 7.5l3.5 7M16 7.5l-3.5 7" />
      </svg>
    ),
  },
  {
    id: "03",
    title: "BFSI Small Language Model",
    description:
      "The SLM at the core. Trained on 4M+ Indian enterprise calls. Each wedge gets sharper from the previous one's experience.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5 text-[#5b5ce8]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 3l2.2 4.6L19 9l-3.6 3.5L16.6 18 12 15.4 7.4 18l1.2-5.5L5 9l4.8-1.4L12 3z" />
      </svg>
    ),
  },
];

const LIVE_FIELD_META = [
  { label: "Tenant", value: "meridian-bank-prod" },
  { label: "Region", value: "ap-south-1" },
  { label: "SLM build", value: "darwix-slm-r24.11.3" },
  { label: "Tokens / min", value: "16,448" },
];

const CALL_TRANSCRIPT = [
  {
    role: "agent",
    time: "00:09",
    text: "Sir, your loan-against-property welcome - disbursement of INR 42 lakhs, correct?",
  },
  {
    role: "cust",
    time: "00:18",
    text: "Haan sahi hai. Lekin EMI date thodi late kar sakte ho? Salary 7th ko aati hai.",
  },
  {
    role: "nudge",
    text: "EMI shift policy permits 5-12. Offer 10th. Confirm via WhatsApp.",
  },
  {
    role: "agent",
    time: "00:35",
    text: "Bilkul, EMI date 10th set kar deti hoon. Approval message WhatsApp pe aayega.",
  },
  {
    role: "cust",
    time: "00:54",
    text: "Theek hai. Aur sanction letter bhi bhej dena.",
  },
  {
    role: "nudge",
    text: "Auto-trigger sanction_letter_v3.pdf via WhatsApp template.",
  },
  {
    role: "agent",
    time: "01:03",
    text: "Of course sir. Bhej rahi hoon abhi.",
  },
];

const ACTION_EVENTS = [
  {
    name: "WhatsApp · sanction_letter_v3",
    subtitle: "LAP-24081 · pre-approved tpl_v3_mr",
    icon: "message",
    status: "wired",
    statusClass: "bg-[#d8eadd] text-[#09a03d]",
  },
  {
    name: "CRM write · disposition + EMI",
    subtitle: "Salesforce · LAP-24081 · stage=disburse",
    icon: "doc",
    status: "wired",
    statusClass: "bg-[#d8eadd] text-[#09a03d]",
  },
  {
    name: "Service request · EMI date change",
    subtitle: "SR-INT-44292 · auto-routing -> ops",
    icon: "clock",
    status: "wired",
    statusClass: "bg-[#d8eadd] text-[#09a03d]",
  },
  {
    name: "KYC re-verify · address proof",
    subtitle: "Customer 360 · risk band B",
    icon: "user",
    status: "queued",
    statusClass: "bg-[#d8eadd] text-[#09a03d]",
  },
  {
    name: "RM email · summary + next-step",
    subtitle: "to: priya.r@meridian · 5-line nb",
    icon: "mail",
    status: "queued",
    statusClass: "bg-[#d8eadd] text-[#09a03d]",
  },
  {
    name: "LOS · disbursement note",
    subtitle: "Finnone · BTM pending · scheduled T+1",
    icon: "file",
    status: "queued",
    statusClass: "bg-[#d8eadd] text-[#09a03d]",
  },
  {
    name: "Slack #hot-leads · deal > INR40L",
    subtitle: "Routing to Priya · sentiment ^",
    icon: "bolt",
    status: "queued",
    statusClass: "bg-[#d8eadd] text-[#09a03d]",
  },
  {
    name: "Razorpay link · INR2,480 EMI",
    subtitle: "Expires +6h · sent on WA",
    icon: "card",
    status: "firing",
    statusClass: "bg-[#4f58de] text-white",
  },
  {
    name: "Calendar · site-visit 24 Apr",
    subtitle: "Google Cal · invite sent",
    icon: "calendar",
    status: "queued",
    statusClass: "border border-[#d6d8df] bg-[#f5f5f5] text-[#9ca0aa]",
  },
  {
    name: "Risk re-score · band B -> A",
    subtitle: "Bureau pull queued · T+8",
    icon: "pulse",
    status: "queued",
    statusClass: "border border-[#d6d8df] bg-[#f5f5f5] text-[#9ca0aa]",
  },
];

const renderActionIcon = (kind: string) => {
  const cls = "h-3.5 w-3.5 text-[#8d919d]";

  if (kind === "message") {
    return (
      <svg
        viewBox="0 0 24 24"
        className={cls}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M21 12a8.5 8.5 0 0 1-8.5 8.5c-1.2 0-2.4-.2-3.5-.7L3 21l1.3-4.5A8.5 8.5 0 1 1 21 12z" />
      </svg>
    );
  }

  if (kind === "doc" || kind === "file") {
    return (
      <svg
        viewBox="0 0 24 24"
        className={cls}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
        <path d="M14 3v5h5" />
      </svg>
    );
  }

  if (kind === "clock") {
    return (
      <svg
        viewBox="0 0 24 24"
        className={cls}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="8" />
        <path d="M12 8v4l2.8 1.6" />
      </svg>
    );
  }

  if (kind === "user") {
    return (
      <svg
        viewBox="0 0 24 24"
        className={cls}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="8" r="3" />
        <path d="M5 19c1.8-2.7 4.2-4 7-4s5.2 1.3 7 4" />
      </svg>
    );
  }

  if (kind === "mail") {
    return (
      <svg
        viewBox="0 0 24 24"
        className={cls}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M4 8l8 5 8-5" />
      </svg>
    );
  }

  if (kind === "bolt") {
    return (
      <svg
        viewBox="0 0 24 24"
        className={cls}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M13 2L4 14h7l-1 8 10-13h-7z" />
      </svg>
    );
  }

  if (kind === "card") {
    return (
      <svg
        viewBox="0 0 24 24"
        className={cls}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 10h18" />
      </svg>
    );
  }

  if (kind === "calendar") {
    return (
      <svg
        viewBox="0 0 24 24"
        className={cls}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M8 3v4M16 3v4M3 10h18" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      className={cls}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 12h4l2-4 3 8 2-4h7" />
    </svg>
  );
};

const STREAMING_TOKENS = [
  "consent_captured",
  "doc_sanction_v1",
  "channel_as_pref",
  "next_disburse",
  "objection_timing",
  "rebuttal_policy_emi",
  "score_band",
  "lan_marathi",
  "branch_npa_84",
  "payment_calendar",
];

const ACTION_TOKEN_SETS = [
  ["doc_sanction_v1", "channel_as_pref", "wa_template_v3", "consent_captured"],
  ["crm_stage_disburse", "emi_shift_10th", "next_disburse", "owner_sync"],
  ["sr_emi_change", "ops_auto_route", "sla_clock_started", "payment_calendar"],
  ["kyc_reverify", "address_proof_needed", "risk_band_b", "customer_360"],
  [
    "rm_summary_email",
    "next_step_owner",
    "hot_lead_context",
    "sentiment_resolved",
  ],
  ["los_disbursement_note", "btm_pending", "scheduled_t1", "lap_24081"],
  ["hot_lead_inr40l", "manager_route_priya", "sentiment_up", "priority_notify"],
  ["payment_link_generated", "emi_inr2480", "wa_delivery", "expires_6h"],
  [
    "site_visit_24_apr",
    "calendar_invite_sent",
    "rm_availability",
    "branch_followup",
  ],
  ["risk_rescore", "band_b_to_a", "bureau_pull_t8", "score_band"],
];

const SLM_METRICS = [
  { label: "Params", value: "3.7B" },
  { label: "Calls trained", value: "4.2M" },
  { label: "Inference p50", value: "74ms" },
  { label: "Inference p99", value: "312ms" },
  { label: "Nudges live", value: "4 of 4" },
  { label: "Hosting", value: "VPC - in-region" },
];

const WEDGE_CARDS = [
  {
    id: "WEDGE 01",
    title: "Voice intent",
    description:
      "62 BFSI objection patterns, 22 Indian languages, code-switch native. Tagged in real time.",
    metricLabel: "Quarter-on-quarter",
    metricValue: "+18% resolved-first-try",
    metricTone: "text-[#19a84b]",
  },
  {
    id: "WEDGE 02",
    title: "Field nudges",
    description:
      "Live prompts during in-person Sherpa calls, scoring agents on script, compliance, and tone.",
    metricLabel: "Quarter-on-quarter",
    metricValue: "+27% conversion lift",
    metricTone: "text-[#19a84b]",
  },
  {
    id: "WEDGE 03",
    title: "Agentic ops",
    description:
      "Auto-CRM, auto-LOS, auto-SR - every BFSI workflow wired before the call ends.",
    metricLabel: "Quarter-on-quarter",
    metricValue: "-42% cycle time",
    metricTone: "text-[#19a84b]",
  },
  {
    id: "WEDGE 04 · LAUNCHING SOON",
    title: "SLM flywheel",
    description:
      "Each wedge feeds proprietary tokens back to the SLM. Three months in, the model knows your customers.",
    metricLabel: "Per quarter",
    metricValue: "+12% nudge accuracy",
    metricTone: "text-[#19a84b]",
    featured: true,
  },
];

const VALUE_METRICS = [
  { value: "10×", label: "Agent Productivity" },
  { value: "5×", label: "Field Value" },
  { value: "-42%", label: "Cycle Time" },
  { value: "+27%", label: "Conversion Lift" },
];

const SUITE_CARDS = [
  {
    title: "Sherpa",
    description:
      "Physical AI assist. Live nudges, scoring, transcripts during in-person BFSI conversations.",
    cta: "Read more →",
  },
  {
    title: "Voice Agents",
    description:
      "1,200 parallel dials/sec. 22 languages. The outbound machine.",
    cta: "Read more →",
  },
  {
    title: "Non-Voice Agents",
    description:
      "A factory of minions. Ops + comms agents running 24/7 in the background.",
    cta: "Read more →",
  },
  {
    title: "Nova",
    description: "Same brain as Sherpa. New embodiment. Launching in stealth.",
    cta: "Get notified →",
    featured: true,
  },
];

const SCENARIO_CARDS = [
  {
    title: "Home Loan & MSME Underwriting",
    description: "Sherpa briefs underwriters live with key checks and cues.",
    metricLeft: "Applications: 4,200+",
    metricRight: "Speed: +29%",
    visual: "checklist",
  },
  {
    title: "Insurance Customer Profiling",
    description:
      "Sherpa captures details live with profiling and eligibility cues.",
    metricLeft: "Profiles: 12K+",
    metricRight: "Conversion: +18%",
    visual: "form",
  },
  {
    title: "HNI Proposal Creation",
    description:
      "Sherpa briefs RMs live with portfolio signals, client goals, risk bands, and opportunity cues.",
    metricLeft: "RMs: 1,480+",
    metricRight: "Proposals: 8.6K",
    visual: "bars",
  },
  {
    title: "Asset Verification Visits",
    description:
      "Sherpa supports field visits with asset checks, prompts, and on-the-spot verification and updates.",
    metricLeft: "Visits: 24K+",
    metricRight: "Case closure: +21%",
    visual: "pin",
  },
  {
    title: "HNI Wealth Management",
    description:
      "Sherpa briefs the RM live during portfolio reviews. Risk band, last quarter's nudges, opportunity scoring.",
    metricLeft: "RMs: 1,480+",
    metricRight: "AUM: ₹38K Cr",
    visual: "chart",
  },
  {
    title: "NPA & Collections",
    description:
      "Voice agents soft-collect at scale, escalate to field via Sherpa only when negotiation needs a human.",
    metricLeft: "Recovery: +34%",
    metricRight: "Cost / promise: -61%",
    visual: "list",
  },
  {
    title: "Branch Banking Insurance",
    description:
      "Cross-sell at the teller window, real-time eligibility, KYC pre-fill, compliance checks all baked in.",
    metricLeft: "Branches: 2,300+",
    metricRight: "Policies / day: 11K",
    visual: "network",
  },
  {
    title: "Lending · Field Visit & Loan Repayment",
    description:
      "Sherpa briefs RM live risk band, nudges, opportunity scoring insights.",
    metricLeft: "FOs: 9.8K",
    metricRight: "Tickets / month: 340K",
    visual: "steps",
  },
];

export default function HomePage() {
  const [activeActionIndex, setActiveActionIndex] = useState(-1);
  const [liveCallCount, setLiveCallCount] = useState(INITIAL_LIVE_CALL_COUNT);
  const [actionsPerHour, setActionsPerHour] = useState(
    INITIAL_ACTIONS_PER_HOUR,
  );
  const [heroMetricTick, setHeroMetricTick] = useState(0);
  const activeActionTokens =
    ACTION_TOKEN_SETS[activeActionIndex] || STREAMING_TOKENS;

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveActionIndex((currentIndex) =>
        currentIndex >= ACTION_EVENTS.length - 1 ? -1 : currentIndex + 1,
      );
    }, 1200);

    return () => window.clearInterval(intervalId);
  }, []);

  useEffect(() => {
    let timeoutId: number;

    const scheduleNextUpdate = () => {
      const delay = 2800 + Math.random() * 2600;

      timeoutId = window.setTimeout(() => {
        const liveCallIncrease = Math.floor(Math.random() * 3) + 1;
        const actionIncrease =
          liveCallIncrease * (12 + Math.floor(Math.random() * 9)) +
          Math.floor(Math.random() * 17);

        setLiveCallCount((currentCount) => currentCount + liveCallIncrease);
        setActionsPerHour((currentCount) => currentCount + actionIncrease);
        setHeroMetricTick((currentTick) => currentTick + 1);
        scheduleNextUpdate();
      }, delay);
    };

    scheduleNextUpdate();

    return () => window.clearTimeout(timeoutId);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const navbarHeight = 64;
      const targetPosition =
        section.getBoundingClientRect().top + window.scrollY - navbarHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleDemoScroll = () => {
    scrollToSection("demo-request");
  };

  const handleLiveCallScroll = () => {
    scrollToSection("live-field-intelligence");
  };

  const getHeroStatValue = (stat: HeroStat) => {
    if (stat.metric === "liveCalls") {
      return `${formatHeroMetric(liveCallCount)} live`;
    }

    if (stat.metric === "actionsPerHour") {
      return `${formatHeroMetric(actionsPerHour)} /hr`;
    }

    return stat.value;
  };

  const renderScenarioVisual = (visual: string) => {
    switch (visual) {
      case "checklist":
        return (
          <div className="space-y-2">
            {[
              "Income · Form 16",
              "Bureau · 762",
              "Address · proof",
              "Co-applicant ID",
              "GST mismatch",
            ].map((item, i) => (
              <div
                key={item}
                className="flex items-center gap-2 text-[10px] text-[#65697a]"
              >
                <span
                  className={`inline-flex h-3 w-3 items-center justify-center rounded-[3px] ${i < 4 ? "bg-[#5b5ce8] text-white" : "border border-[#d5d7df] text-[#c4c7d2]"}`}
                >
                  {i < 4 ? "✓" : "×"}
                </span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        );
      case "form":
        return (
          <div className="space-y-2">
            {[
              ["Age band", "36 - 45"],
              ["Risk profile", "Moderate"],
              ["Goal", "Child · 12y"],
              ["NBA", "ULIP"],
            ].map(([label, value], i) => (
              <div
                key={label}
                className={`flex items-center justify-between rounded-full px-3 py-1.5 text-[10px] ${i === 1 ? "bg-[#5b5ce8] text-white" : "bg-white text-[#6f7485]"}`}
              >
                <span>{label}</span>
                <span className="font-semibold">{value}</span>
              </div>
            ))}
          </div>
        );
      case "bars":
        return (
          <div className="flex h-full items-end gap-3 px-5 pb-2 pt-3">
            {[34, 40, 52, 64, 72, 56].map((h, i) => (
              <div
                key={i}
                className={`w-6 rounded-t-md ${i === 4 ? "bg-[#5b5ce8]" : "bg-[#c9cbf4]"}`}
                style={{ height: h }}
              />
            ))}
          </div>
        );
      case "pin":
        return (
          <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
            <div className="absolute left-6 right-6 top-6 h-px bg-[#f0f1f5]" />
            <div className="absolute left-6 top-6 bottom-[52px] w-px bg-[#f0f1f5]" />
            <div className="absolute right-6 top-6 bottom-[52px] w-px bg-transparent" />
            <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
              <svg
                viewBox="0 0 24 24"
                className="h-16 w-16 text-[#5b5ce8]"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 2.5c-4.1 0-7.5 3.3-7.5 7.4 0 4.9 7.5 11.6 7.5 11.6s7.5-6.7 7.5-11.6c0-4.1-3.4-7.4-7.5-7.4Zm0 10.2a2.8 2.8 0 1 1 0-5.6 2.8 2.8 0 0 1 0 5.6Z" />
              </svg>
              <p className="mt-4 text-center text-[9px] tracking-[0.06em] text-[#a3a7b3]">
                12.9716° N · 77.5946° E
              </p>
            </div>
          </div>
        );
      case "chart":
        return (
          <div className="flex h-full items-end gap-2 px-4 pb-2 pt-4">
            {[24, 36, 32, 48, 56, 72, 64].map((h, i) => (
              <div
                key={i}
                className={`w-5 rounded-t-md ${i === 5 ? "bg-[#5b5ce8]" : "bg-[#cfd0f6]"}`}
                style={{ height: h }}
              />
            ))}
          </div>
        );
      case "list":
        return (
          <div className="space-y-2">
            {[
              "Skip → Soft collection",
              "Negotiate → EMI shift",
              "Promise → Track date",
              "Recovered → Close case",
            ].map((item, i) => (
              <div
                key={item}
                className="flex items-center gap-2 text-[10px] text-[#6b7182]"
              >
                <span
                  className={`h-3 w-3 rounded-[2px] ${i < 4 ? "bg-[#5b5ce8]" : "bg-[#e6e8ef]"}`}
                />
                <span>{item}</span>
              </div>
            ))}
          </div>
        );
      case "network":
        return (
          <div className="relative h-full">
            <svg
              viewBox="0 0 200 110"
              className="h-full w-full px-4 py-4"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M28 58 C55 30, 72 82, 98 58 S145 30, 172 58"
                stroke="#d8dcf7"
                strokeDasharray="4 4"
                strokeWidth="1.5"
              />
              {[28, 60, 92, 124, 156, 178].map((x, i) => (
                <g key={x}>
                  <circle
                    cx={x}
                    cy={i % 2 === 0 ? 54 : 58}
                    r="5"
                    fill={i === 2 ? "#5b5ce8" : "#d2d6f7"}
                  />
                </g>
              ))}
            </svg>
          </div>
        );
      case "steps":
        return (
          <div className="space-y-3">
            {["T-0 visit", "T+1 verify", "T+2 disburse"].map((item, i) => (
              <div
                key={item}
                className="flex items-center gap-2 text-[10px] text-[#6b7182]"
              >
                <span
                  className={`h-2.5 w-2.5 rounded-full ${i === 0 ? "bg-[#5b5ce8]" : i === 1 ? "bg-[#9a9df1]" : "bg-[#d6d8e7]"}`}
                />
                <span>{item}</span>
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <main className={manrope.className}>
      <section
        className="relative w-full pt-16 sm:pt-20 lg:pt-[88px] pb-12 sm:pb-16 lg:pb-[88px] px-4 sm:px-6 lg:px-[129px]"
        style={{
          backgroundImage:
            "linear-gradient(90deg, #565ADD1F 0%, #565ADD00 100%)",
        }}
      >
        <div className="relative mx-auto max-w-[1182px] text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#e3e7f5] bg-white px-3.5 py-1.5 text-[11px] font-medium text-[#7b7b7b] shadow-sm">
            <img src="/images/star.svg" />
            <span>Built for BFSI</span>
            <span className="text-[#d0d3e4]">&middot;</span>
            <span>Powered by an in-house SLM</span>
          </div>

          <h1 className="mt-8 text-4xl sm:text-5xl lg:text-[64px] font-semibold text-[#4b4b4b] tracking-tight lg:tracking-[-2px] leading-[1.1]">
            One BFSI brain. Voice, agents, and field{" "}
            <span className="text-[#5b5ce8]">in lockstep.</span>
          </h1>

          <p className="mt-5 text-sm sm:text-base text-[#7a7a7a] max-w-[820px] mx-auto leading-relaxed">
            Darwix orchestrates the Sherpa field call, the parallel voice
            campaign and a hundred back-office agents from a single proprietary
            stack. Real-time tokens flow into an in-house SLM that learns from
            every wedge.
          </p>

          <div className="mt-8 flex items-center justify-center gap-3 sm:gap-4">
            <button
              type="button"
              onClick={handleLiveCallScroll}
              className="rounded-[12px] border border-[#5b5ce8] bg-white px-6 py-2.5 text-[13px] font-semibold text-[#5b5ce8] shadow-sm transition hover:border-[#4e4fd9]"
            >
              Watch a live call
            </button>
            <button
              type="button"
              onClick={handleDemoScroll}
              className="rounded-[12px] bg-[#5b5ce8] px-6 py-2.5 text-[13px] font-semibold text-white shadow-lg shadow-indigo-200/80 transition hover:bg-[#5152d8]"
            >
              Book a demo
            </button>
          </div>
        </div>

        <div className="mt-12 sm:mt-14">
          <div className="w-full max-w-[980px] mx-auto grid grid-cols-2 gap-y-6 sm:grid-cols-4">
            {HERO_STATS.map((stat, index) => (
              <div
                key={stat.label}
                className={`flex flex-col items-center gap-1 px-4 text-center sm:gap-2 ${
                  index === 0 ? "" : "sm:border-l sm:border-gray-200"
                }`}
              >
                <div
                  className={`flex items-center gap-2 text-xl sm:text-2xl font-semibold tracking-tight ${
                    stat.highlight ? "text-green-600" : "text-[#4b4b4b]"
                  }`}
                >
                  {stat.highlight && (
                    <span
                      className="hero-live-dot h-2 w-2 rounded-full bg-green-500"
                      aria-hidden="true"
                    />
                  )}
                  <span
                    key={
                      stat.metric
                        ? `${stat.metric}-${heroMetricTick}`
                        : stat.value
                    }
                    className={`tabular-nums ${
                      stat.metric ? "hero-stat-value" : ""
                    }`}
                  >
                    {getHeroStatValue(stat)}
                  </span>
                </div>
                <span className="text-[11px] sm:text-xs text-[#8a8a8a] leading-snug">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-12 bg-white px-4 sm:px-6 lg:px-[129px] pb-16 sm:pb-20 lg:pb-24">
        <div className="mx-auto max-w-[1182px] grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <div>
            <p className="text-[11px] tracking-[0.3em] text-[#5b5ce8] font-semibold uppercase">
              The Darwix stack
            </p>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-[46px] font-semibold text-[#4b4b4b] leading-tight">
              <span className="text-[#5b5ce8]">Omnichannel</span> layers,
              <br />
              one proprietary brain.
            </h2>
            <p className="mt-4 text-sm sm:text-base text-[#7a7a7a] max-w-[520px] leading-relaxed">
              Most vendors sell you one of these. Darwix is the only place all
              three are built in-house, and each layer feeds the next on every
              conversation.
            </p>
          </div>

          <div className="space-y-4">
            {STACK_ITEMS.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl border border-[#e5e7f5] bg-[#f7f8ff] px-5 py-4 sm:px-6 sm:py-5 flex items-start justify-between gap-4"
              >
                <div className="flex items-start gap-4">
                  <div className="h-10 min-h-10 w-10 min-w-10 shrink-0 rounded-full border border-[#e5e7f5] bg-white text-xs font-semibold text-[#5b5ce8] flex items-center justify-center">
                    {item.id}
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-semibold text-[#4b4b4b]">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm text-[#7a7a7a] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
                <div className="h-10 w-10 rounded-full border border-[#e5e7f5] bg-white flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="live-field-intelligence"
        className="bg-white px-4 sm:px-6 lg:px-[129px] pb-20 sm:pb-24 lg:pb-28"
      >
        <div className="mx-auto max-w-[1182px]">
          <div className="text-center">
            <p className="text-[11px] tracking-[0.4em] text-[#5b5ce8] font-semibold uppercase">
              Live field intelligence
            </p>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-[46px] font-semibold text-[#4b4b4b] leading-tight">
              One meeting.{" "}
              <span className="text-[#5b5ce8]">Multiple actions</span> firing
              simultaneously.
            </h2>
            <div className="mt-4 flex flex-wrap justify-center gap-4 text-[11px] text-[#8a8a8a]">
              {LIVE_FIELD_META.map((item) => (
                <div key={item.label} className="flex items-center gap-2">
                  <span className="uppercase tracking-[0.2em] text-[#b0b3c5]">
                    {item.label}
                  </span>
                  <span className="font-semibold text-[#4b4b4b]">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <div className="flex h-full flex-col rounded-[18px] border border-[#e4e4e8] bg-[#F8F8F8] p-5 sm:p-6 shadow-[0_6px_18px_rgba(46,55,88,0.08)]">
              <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.28em] text-[#9698a3]">
                <span>SHERPA &middot; FIELD CALL &middot; IN PROGRESS</span>
                <span className="flex items-center gap-1 text-green-600 font-semibold">
                  <span className="h-2 w-2 rounded-full bg-green-500" />
                  Live
                </span>
              </div>

              <div className="mt-4 border-b border-dashed border-[#d8d9df]" />

              <div className="mt-4 min-h-[430px] space-y-4 text-[13px] text-[#4b4b4b]">
                {CALL_TRANSCRIPT.map((line, index) => {
                  const isNudge = line.role === "nudge";
                  const roleLabel =
                    line.role === "agent"
                      ? "AGENT"
                      : line.role === "cust"
                        ? "CUST"
                        : "";

                  return (
                    <div key={`${line.role}-${index}`} className="flex gap-3">
                      <div className="w-[66px] shrink-0 pt-0.5">
                        {!isNudge && (
                          <>
                            <p className="text-[10px] uppercase tracking-[0.24em] text-[#9da0ab]">
                              {roleLabel}
                            </p>
                            <p className="mt-0.5 text-[11px] text-[#a6a9b5] tabular-nums">
                              {line.time}
                            </p>
                          </>
                        )}
                      </div>
                      <div className="flex-1">
                        {isNudge ? (
                          <div className="rounded-[11px] border border-dashed border-[#6770ee] bg-[#f3f4ff] px-4 py-3 text-[#4f58de]">
                            <p className="text-[10px] font-semibold uppercase tracking-[0.2em]">
                              + Nudge
                            </p>
                            <p className="text-[13px] leading-[1.45]">
                              {line.text}
                            </p>
                          </div>
                        ) : (
                          <p className="text-[13px] leading-[1.45] text-[#4b4b4b]">
                            {line.text}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-auto border-t border-dashed border-[#d8d9df] pt-5">
                <div className="grid grid-cols-3 gap-3 text-[10px] uppercase tracking-[0.2em] text-[#9aa0b2]">
                  <div>
                    Sentiment
                    <span className="block mt-1 text-green-600 font-semibold">
                      Resolved &uarr;
                    </span>
                  </div>
                  <div>
                    Script fit
                    <span className="block mt-1 text-[#5b5ce8] font-semibold">
                      94% &uarr;
                    </span>
                  </div>
                  <div>
                    Risk flags
                    <span className="block mt-1 text-orange-500 font-semibold">
                      0 &darr;
                    </span>
                  </div>
                </div>

                <div className="mt-4 border-t border-dashed border-[#d8d9df]" />

                <div className="mt-4">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#9aa0b2]">
                    BFSI tokens streaming to SLM
                  </p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {activeActionTokens.map((token) => (
                      <span
                        key={token}
                        className="rounded-md border border-[#e7e9f7] bg-[#f2f3fb] px-2.5 py-1 text-[10px] font-semibold text-[#4f58de]"
                      >
                        {token}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[18px] border border-[#e4e4e8] bg-[#F8F8F8] p-5 sm:p-6 shadow-[0_6px_18px_rgba(46,55,88,0.08)]">
              <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.28em] text-[#9698a3]">
                <span>Agentic suite - 8 actions parallel</span>
                <span className="text-[#4b4b4b] font-semibold">02:09</span>
              </div>

              <div className="mt-4 border-b border-dashed border-[#d8d9df]" />

              <div className="mt-5 space-y-2.5">
                {ACTION_EVENTS.map((event, index) => {
                  const isActiveAction = index === activeActionIndex;
                  const isCompletedAction =
                    activeActionIndex >= 0 && index < activeActionIndex;
                  const isPendingAction =
                    activeActionIndex >= 0 && index > activeActionIndex;
                  const actionButtonClass = isActiveAction
                    ? "border-[#4f58de] bg-[#f3f4ff] shadow-[0_0_0_1px_rgba(79,88,222,0.14)]"
                    : isCompletedAction
                      ? "border-[#19a84b] bg-[#effaf3]"
                      : "border-[#e4e4e8] bg-white";
                  const statusBadgeClass = isActiveAction
                    ? "border border-[#4f58de] bg-[#4f58de] text-white"
                    : isCompletedAction
                      ? "border border-[#19a84b] bg-[#19a84b] text-white"
                      : "border border-[#d6d8df] bg-white text-[#9ca0aa]";
                  const statusLabel = isActiveAction
                    ? "firing"
                    : isCompletedAction
                      ? "wired"
                      : event.status;

                  return (
                    <button
                      type="button"
                      key={event.name}
                      onClick={() => setActiveActionIndex(index)}
                      className={`w-full rounded-xl border px-3.5 py-3 flex items-start justify-between gap-3 text-left transition ${actionButtonClass}`}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md border ${isActiveAction ? "border-[#c8cdfa] bg-white" : isCompletedAction ? "border-[#bfe6cb] bg-white" : "border-[#d8d9df] bg-[#f7f7f8]"}`}
                        >
                          {renderActionIcon(event.icon)}
                        </div>
                        <div>
                          <p className="align-middle text-[12px] font-semibold leading-[14.4px] tracking-[0] text-[#27304d]">
                            {event.name}
                          </p>
                          <p className="mt-0.5 text-[12px] leading-tight text-[#7d808c]">
                            {event.subtitle}
                          </p>
                        </div>
                      </div>
                      <span
                        className={`mt-0.5 rounded-md px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] ${statusBadgeClass}`}
                      >
                        {statusLabel}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="flex h-full flex-col rounded-[18px] border border-[#e4e4e8] bg-[#F8F8F8] p-5 sm:p-6 shadow-[0_6px_18px_rgba(46,55,88,0.08)]">
              <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.28em] text-[#9698a3]">
                <span>SLM core</span>
                <span className="flex items-center gap-2 text-green-600 font-semibold">
                  <span className="h-2 w-2 rounded-full bg-green-500" />
                  v24.11
                </span>
              </div>

              <div className="mt-4 border-b border-dashed border-[#d8d9df]" />

              <div className="mt-7 flex justify-center">
                <div className="h-[190px] w-[190px] overflow-hidden rounded-full">
                  <AgentOrb />
                </div>
              </div>

              <div className="mt-8">
                {SLM_METRICS.map((metric) => (
                  <div
                    key={metric.label}
                    className="border-b border-dashed border-[#d8d9df] py-3 first:pt-0"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[12px] text-[#6f717a]">
                        {metric.label}
                      </span>
                      <span className="text-[12px] font-semibold text-[#232846]">
                        {metric.value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-auto pt-10">
                <div className="border-t border-dashed border-[#d8d9df]" />
                <p className="mt-5 text-[10px] leading-[1.6] text-[#a0a2ac]">
                  No tenant data leaves your VPC. Model updates ship as data
                  weights.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <LogoMarquee logos={marLogos} barClassName="bg-[#5b5ce8]" />
          </div>

          <div className="mt-20 sm:mt-24">
            <div className="text-center max-w-[760px] mx-auto">
              <p className="text-[11px] tracking-[0.38em] text-[#5b5ce8] font-semibold uppercase">
                Proprietary BFSI Wedges
              </p>
              <h2 className="mt-4 text-[28px] sm:text-[36px] lg:text-[42px] font-semibold text-[#4b4b4b] leading-[1.15] tracking-[-0.02em]">
                Each wedge gets sharper from
                <br />
                <span className="text-[#5b5ce8]">
                  the previous one’s experience.
                </span>
              </h2>
              <p className="mt-4 text-sm sm:text-base text-[#7a7a7a] leading-relaxed">
                Voice intent → field nudges → ops actions → SLM training. The
                flywheel compounds with every call.
              </p>
            </div>

            <div className="mt-12 grid gap-3 sm:gap-4 lg:grid-cols-4">
              {WEDGE_CARDS.map((card) => (
                <div
                  key={card.id}
                  className={`rounded-[14px] border bg-white p-5 sm:p-6 shadow-[0_8px_24px_rgba(37,44,97,0.06)] ${
                    card.featured
                      ? "border-[#cfd3ff] bg-[#f7f7ff]"
                      : "border-[#eceef4]"
                  }`}
                >
                  <p
                    className={`text-[10px] font-semibold uppercase tracking-[0.26em] ${
                      card.featured ? "text-[#5b5ce8]" : "text-[#9aa0b2]"
                    }`}
                  >
                    {card.id}
                  </p>
                  <h3 className="mt-4 text-[19px] font-semibold tracking-[-0.01em] text-[#4b4b4b]">
                    {card.title}
                  </h3>
                  <p className="mt-4 text-[13px] leading-[1.55] text-[#7a7a7a]">
                    {card.description}
                  </p>
                  <div className="mt-7 border-t border-dashed border-[#e6e8ef] pt-4 flex items-end justify-between gap-4">
                    <div className="text-[10px] leading-none text-[#a0a4b3]">
                      {card.metricLabel}
                    </div>
                    <div
                      className={`text-right text-[12px] font-semibold leading-none ${card.metricTone}`}
                    >
                      {card.metricValue}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 sm:mt-24">
          <BFSIScenarios />
        </div>

        <div className="mt-20 sm:mt-24">
          <div className="rounded-[28px] border border-[#d9dcff] bg-[#eef0ff] px-6 py-8 sm:px-10 sm:py-12 lg:px-12 lg:py-14 shadow-[0_10px_30px_rgba(91,92,232,0.05)]">
            <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
              <div className="max-w-[520px]">
                <h2 className="text-[32px] sm:text-[42px] lg:text-[52px] font-semibold leading-[1.03] tracking-[-0.03em] text-[#4b4b4b]">
                  This is what buys
                  <br />
                  you <span className="text-[#5b5ce8]">
                    10× productivity
                  </span>{" "}
                  and <span className="text-[#5b5ce8]">5× more value</span> on
                  field.
                </h2>
                <p className="mt-6 max-w-[470px] text-[15px] leading-[1.65] text-[#6e7390]">
                  Most BFSI vendors give you a feature. Darwix gives you a
                  stack, proprietary tokens, agentic suite, in-house SLM that
                  compounds every quarter your customers stay on the platform.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
                {VALUE_METRICS.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-[14px] border border-[#d9dcff] bg-[#f8f8ff] px-5 py-5 shadow-[0_1px_0_rgba(255,255,255,0.9)_inset]"
                  >
                    <div className="text-[42px] font-semibold leading-none tracking-[-0.04em] text-[#4b4b4b]">
                      {metric.value}
                    </div>
                    <p className="mt-5 text-[13px] leading-none text-[#6e7390]">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 sm:mt-24">
          <div className="text-center">
            <p className="text-[11px] tracking-[0.38em] text-[#5b5ce8] font-semibold uppercase">
              Explore the suite
            </p>
            <h2 className="mt-4 text-[32px] sm:text-[40px] lg:text-[44px] font-semibold text-[#4b4b4b] leading-[1.1] tracking-[-0.03em]">
              <span className="text-[#5b5ce8]">Multiple Agents one brain.</span>
            </h2>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {SUITE_CARDS.map((card) => (
              <div
                key={card.title}
                className={`min-h-[250px] rounded-[18px] border px-6 py-6 shadow-[0_8px_22px_rgba(37,44,97,0.05)] ${
                  card.featured
                    ? "border-[#cfd3ff] bg-[#f7f7ff]"
                    : "border-[#eceef4] bg-white"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-[21px] font-semibold leading-none tracking-[-0.02em] text-[#4b4b4b]">
                    {card.title}
                  </h3>
                  {card.featured && (
                    <span className="mt-1 text-[10px] font-medium uppercase tracking-[0.18em] text-[#8d90a3]">
                      Launching SOON!
                    </span>
                  )}
                </div>

                <p className="mt-8 max-w-[220px] text-[14px] leading-[1.5] text-[#6f7485]">
                  {card.description}
                </p>

                <div className="mt-10 pt-5">
                  <a
                    href="#"
                    className="text-[12px] font-semibold text-[#5b5ce8]"
                  >
                    {card.cta}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-7 text-center text-[16px] sm:text-[15px] font-medium text-[#6b6b74] tracking-[-0.01em]">
          Add many more agents...
        </p>

        <div className="mt-20 sm:mt-24">
          <div className="mx-auto max-w-[1182px] text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-[#5b5ce8]">
              How the products work together
            </p>
            <h2 className="mt-6 text-[34px] font-semibold leading-tight tracking-[-0.03em] text-[#4b4b4b] sm:text-[44px] lg:text-[52px]">
              One conversation.{" "}
              <span className="text-[#5b5ce8]">Every system in motion.</span>
            </h2>
          </div>

          <div className="mx-auto mt-8 max-w-[1320px] rounded-[18px] border border-[#ececf3] bg-[#fbfbfd] px-5 py-8 shadow-[0_12px_38px_rgba(37,44,97,0.04)] sm:px-6 lg:px-6 lg:py-12">
            <div className="grid items-stretch gap-5 lg:grid-cols-[1fr_44px_1fr_44px_1fr_44px_1fr]">
              <div className="flex min-h-[338px] flex-col rounded-[14px] border border-[#eceef6] bg-white p-5 text-left shadow-[0_10px_24px_rgba(37,44,97,0.04)]">
                <div className="flex items-start justify-between">
                  <span className="text-[11px] font-semibold text-[#5b5ce8]">
                    01
                  </span>
                  <span className="rounded-full bg-[#f0efff] px-3 py-1 text-[11px] font-semibold text-[#5b5ce8]">
                    Physical
                  </span>
                </div>
                <h3 className="mt-5 text-[20px] font-semibold tracking-[-0.02em] text-[#4b4b4b]">
                  Sherpa
                </h3>
                <p className="mt-1 text-[13px] text-[#9498a4]">
                  At the client site - field visit
                </p>
                <div className="mt-4 rounded-[9px] border border-[#eff0f5] bg-[#fbfbfd] px-3 py-3 text-[10px] leading-relaxed text-[#858995]">
                  <p>
                    14:08&nbsp;&nbsp; Customer: &quot;We need to settle...&quot;
                  </p>
                  <p>
                    14:08&nbsp;&nbsp;{" "}
                    <span className="font-semibold text-[#5b5ce8]">
                      Sherpa - EMI shift, band 4
                    </span>
                  </p>
                </div>
                <p className="mt-4 text-[13px] leading-[1.45] text-[#767a85]">
                  Live face-to-face capture. Contextual prompts in-ear. Rich
                  fidelity consumer signals from every visit.
                </p>
                <div className="mt-auto border-t border-dashed border-[#e6e8ef] pt-4">
                  <div className="flex items-center justify-between gap-3 text-[9px] text-[#8f94a3]">
                    <span className="flex items-center gap-2 font-semibold text-[#4f5567]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#5b5ce8]" />
                      Next-actions initiated
                    </span>
                    <span>CRM</span>
                  </div>
                  <div className="mt-2 flex items-center justify-between gap-3 text-[9px] text-[#8f94a3]">
                    <span className="flex items-center gap-2 font-semibold text-[#4f5567]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#5b5ce8]" />
                      Consumer persona updated
                    </span>
                    <span>Data</span>
                  </div>
                </div>
              </div>

              <div className="hidden items-center justify-center lg:flex">
                <div className="relative h-px w-full bg-[#5b5ce8]">
                  <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[125%] whitespace-nowrap rounded-full border border-[#dfe1ea] bg-white px-2 py-1 text-[10px] font-semibold text-[#686d7a]">
                    Handoff
                  </span>
                  <span className="absolute -right-1 top-1/2 h-2 w-2 -translate-y-1/2 rotate-45 border-r border-t border-[#5b5ce8]" />
                </div>
              </div>

              <div className="flex min-h-[338px] flex-col rounded-[14px] border border-[#eceef6] bg-white p-5 text-left shadow-[0_10px_24px_rgba(37,44,97,0.04)]">
                <div className="flex items-start justify-between">
                  <span className="text-[11px] font-semibold text-[#5b5ce8]">
                    02
                  </span>
                  <span className="rounded-full bg-[#f0efff] px-3 py-1 text-[11px] font-semibold text-[#5b5ce8]">
                    Support
                  </span>
                </div>
                <h3 className="mt-5 text-[20px] font-semibold tracking-[-0.02em] text-[#4b4b4b]">
                  Voice agent
                </h3>
                <p className="mt-1 text-[13px] text-[#9498a4]">
                  Reminders - Confirm - Follow-Ups
                </p>
                <div className="mt-4 flex items-center gap-3 rounded-[9px] border border-[#eff0f5] bg-[#fbfbfd] px-3 py-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#5b5ce8] text-[11px] font-semibold text-white">
                    ▶
                  </span>
                  <div className="flex flex-1 items-center gap-1">
                    {[18, 26, 19, 30, 24, 34, 23, 31, 20, 28, 18].map(
                      (height, index) => (
                        <span
                          key={index}
                          className="w-1 rounded-full bg-[#9ea3f6]"
                          style={{ height }}
                        />
                      ),
                    )}
                  </div>
                  <span className="text-[10px] text-[#a0a4b0]">00:42</span>
                </div>
                <p className="mt-4 text-[13px] leading-[1.45] text-[#767a85]">
                  The silent connective tissue. Branch-visit reminders,
                  confirmation calls, follow-throughs, placed at scale, exactly
                  when needed.
                </p>
                <div className="mt-auto border-t border-dashed border-[#e6e8ef] pt-4">
                  <div className="flex items-center justify-between gap-3 text-[9px] text-[#8f94a3]">
                    <span className="flex items-center gap-2 font-semibold text-[#4f5567]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#5b5ce8]" />
                      Voice reminder triggered
                    </span>
                    <span>Voice</span>
                  </div>
                  <div className="mt-2 flex items-center justify-between gap-3 text-[9px] text-[#8f94a3]">
                    <span className="flex items-center gap-2 font-semibold text-[#4f5567]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#5b5ce8]" />
                      Welcome asset triggered
                    </span>
                    <span>Comms</span>
                  </div>
                </div>
              </div>

              <div className="hidden items-center justify-center lg:flex">
                <div className="relative h-px w-full bg-[#5b5ce8]">
                  <span className="absolute left-1/2 top-1/2 min-w-[54px] -translate-x-1/2 -translate-y-[125%] whitespace-nowrap rounded-full border border-[#dfe1ea] bg-white px-2 py-1 text-center text-[10px] font-semibold text-[#686d7a] [word-break:keep-all]">
                    Walk&#8209;in
                  </span>
                  <span className="absolute -right-1 top-1/2 h-2 w-2 -translate-y-1/2 rotate-45 border-r border-t border-[#5b5ce8]" />
                </div>
              </div>

              <div className="flex min-h-[338px] flex-col rounded-[14px] border border-[#eceef6] bg-white p-5 text-left shadow-[0_10px_24px_rgba(37,44,97,0.04)]">
                <div className="flex items-start justify-between">
                  <span className="text-[11px] font-semibold text-[#5b5ce8]">
                    03
                  </span>
                  <span className="rounded-full bg-[#f0efff] px-3 py-1 text-[11px] font-semibold text-[#5b5ce8]">
                    Physical
                  </span>
                </div>
                <h3 className="mt-5 text-[20px] font-semibold tracking-[-0.02em] text-[#4b4b4b]">
                  Nova
                </h3>
                <p className="mt-1 text-[13px] text-[#9498a4]">
                  At the branch - Assisted visit
                </p>
                <div className="mt-4 rounded-[9px] border border-[#eff0f5] bg-[#fbfbfd] px-3 py-3 text-[10px] leading-relaxed text-[#858995]">
                  <div className="grid grid-cols-[1fr_auto] gap-3">
                    <span>Context loaded:</span>
                    <span className="font-semibold text-[#5b5ce8]">
                      Sherpa visit
                    </span>
                    <span>Pre-approval:</span>
                    <span className="font-semibold text-[#5b5ce8]">
                      EMI shift
                    </span>
                    <span>Stage:</span>
                    <span className="font-semibold text-[#5b5ce8]">
                      04 - 05
                    </span>
                  </div>
                </div>
                <p className="mt-4 text-[13px] leading-[1.45] text-[#767a85]">
                  Branch-officer-side assist with everything Sherpa captured
                  plus everything voice confirmed. Real-time fulfilment,
                  structured capture.
                </p>
                <div className="mt-auto border-t border-dashed border-[#e6e8ef] pt-4">
                  <div className="flex items-center justify-between gap-3 text-[9px] text-[#8f94a3]">
                    <span className="flex items-center gap-2 font-semibold text-[#4f5567]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#5b5ce8]" />
                      Workflow initiated
                    </span>
                    <span>LOS</span>
                  </div>
                  <div className="mt-2 flex items-center justify-between gap-3 text-[9px] text-[#8f94a3]">
                    <span className="flex items-center gap-2 font-semibold text-[#4f5567]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#5b5ce8]" />
                      Next-step push triggered
                    </span>
                    <span>Comms</span>
                  </div>
                </div>
              </div>

              <div className="hidden items-center justify-center lg:flex">
                <div className="relative h-px w-full bg-[#5b5ce8]">
                  <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[125%] whitespace-nowrap rounded-full border border-[#dfe1ea] bg-white px-2 py-1 text-[10px] font-semibold text-[#686d7a]">
                    Closed
                  </span>
                  <span className="absolute -right-1 top-1/2 h-2 w-2 -translate-y-1/2 rotate-45 border-r border-t border-[#5b5ce8]" />
                </div>
              </div>

              <div className="flex min-h-[338px] flex-col rounded-[14px] border border-[#ccd1ff] bg-[#f0f1ff] p-5 text-left shadow-[0_10px_24px_rgba(91,92,232,0.06)]">
                <div className="flex items-start justify-between">
                  <span className="text-[11px] font-semibold text-[#5b5ce8]">
                    04
                  </span>
                  <span className="text-[11px] font-semibold text-[#5b5ce8]">
                    Outcome
                  </span>
                </div>
                <h3 className="mt-5 text-[20px] font-semibold leading-snug tracking-[-0.02em] text-[#4b4b4b]">
                  Consumer journey progressed.
                </h3>
                <div className="mt-6 space-y-3 text-[13px] leading-snug text-[#686d7a]">
                  {[
                    "Profile enriched across touchpoints",
                    "Actions triggered across systems",
                    "Reminders & support activated",
                    "Onboarding moves forward",
                  ].map((item) => (
                    <div key={item} className="flex gap-3">
                      <span className="font-semibold text-[#5b5ce8]">✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-auto border-t border-[#d9ddff] pt-4">
                  <div className="grid grid-cols-3 gap-3 text-[10px] text-[#9297a8]">
                    <div>
                      Touchpoints
                      <span className="block pt-1 text-center text-[11px] font-semibold text-[#4b4b4b]">
                        4
                      </span>
                    </div>
                    <div>
                      Time
                      <span className="block pt-1 text-center text-[11px] font-semibold text-[#4b4b4b]">
                        6m
                      </span>
                    </div>
                    <div>
                      Systems
                      <span className="block pt-1 text-center text-[11px] font-semibold text-[#4b4b4b]">
                        12
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <DemoRequestSection />
    </main>
  );
}
