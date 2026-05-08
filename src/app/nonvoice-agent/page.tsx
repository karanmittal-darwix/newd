"use client";

import React, { useEffect, useMemo, useState } from "react";
import DemoRequestSection from "@/components/DemoRequestSection";
import { Manrope } from "next/font/google";

const manrope = Manrope({ subsets: ["latin"], weight: ["400", "500", "600"] });

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

const handleAgentCatalogueScroll = () => {
  scrollToSection("agent-catalogue");
};

interface Stat {
  value: string;
  label: string;
  isLive?: boolean;
}

interface Agent {
  category: string;
  title: string;
  description: string;
  status: "live" | "soon";
}

interface Squad {
  id: string;
  tag: string;
  tagline: string;
  accentTagline: string;
  description: string;
  badge: string;
  agents: Agent[];
  status: "live" | "soon";
}

interface AgentAction {
  number: string;
  category: string;
  action: string;
}

interface LOSField {
  label: string;
  value: string;
  status: "checked" | "queued" | "computing";
}

const stats: Stat[] = [
  { value: "42 live", label: "Agents live in production", isLive: true },
  { value: "198 ms", label: "avg execution latency" },
  { value: "99.94%", label: "first-try success rate" },
  { value: "130 min", label: "manual ops saved per call" },
];

const squads: Squad[] = [
  {
    id: "01",
    tag: "SQUAD 01 - OPS - LIVE",
    tagline: "Background ops ",
    accentTagline: "that never sleep.",
    description:
      "CRM, LOS, KYC, scoring, profiling, database, all routed from the conversation, all closed before the agent finishes typing the next sentence.",
    badge: "6 minions in production",
    status: "live",
    agents: [
      {
        category: "CRM Agent",
        title: "Auto-disposition + lead routing",
        description:
          "Stage updates, owner assignment, follow-up scheduling. Salesforce, HubSpot, Zoho, LeadSquared.",
        status: "live",
      },
      {
        category: "LOS Agent",
        title: "Loan-application auto-fill",
        description:
          "Pulls customer data from the call, fills the LOS form, and reaches 78% pre-population on first save.",
        status: "live",
      },
      {
        category: "SR Agent",
        title: "Service request creation",
        description:
          "Detects a complaint or request mid-conversation. Raises an SR with priority, owner, and SLA.",
        status: "live",
      },
      {
        category: "Profile Agent",
        title: "Buyer-profile build - data lake",
        description:
          "Extracts intent, life stage, financial signals, and household composition. Writes to the lake, feature-store ready.",
        status: "live",
      },
      {
        category: "DB Agent",
        title: "Database cleanup + dedup",
        description:
          "Identifies dupes, normalises addresses, and fixes mobile-format inconsistencies across the lead lake.",
        status: "live",
      },
      {
        category: "Score Agent",
        title: "Call quality scoring + categorisation",
        description:
          "Categorizes every call into 9 quality buckets and updates the leadership dashboard.",
        status: "live",
      },
    ],
  },
  {
    id: "02",
    tag: "SQUAD 02 - COMMS - COMING SOON",
    tagline: "Communications ",
    accentTagline: "that close themselves.",
    description:
      "Once the call ends, the comms squad picks up outbound emails, WhatsApp templates, SMS reminders, campaign nudges, and payment recon.",
    badge: "6 minions - Q3 2025",
    status: "soon",
    agents: [
      {
        category: "Email Agent",
        title: "Personalised mail composer",
        description:
          "IPSL, MITC, follow-up, escalation. Personalised at customer level with automatic document attachments.",
        status: "soon",
      },
      {
        category: "WhatsApp Agent",
        title: "Template + free-text orchestration",
        description:
          "Approved BSP templates, opt-in management, and two-way reply detection.",
        status: "soon",
      },
      {
        category: "SMS Agent",
        title: "DLT-clean reminders",
        description:
          "EMI dues, KYC pending, and document reminders, all template approved and DLT compliant.",
        status: "soon",
      },
      {
        category: "Campaign Agent",
        title: "Multi-channel marketing flows",
        description:
          "Builds and runs cross-sell, renewal, and upgrade journeys with hands-free decisioning.",
        status: "soon",
      },
      {
        category: "Reminder Agent",
        title: "Calendar + cohort nudges",
        description:
          "Surveyor visits, document deadlines, NACH dates, and EMI reminders.",
        status: "soon",
      },
      {
        category: "Recon Agent",
        title: "Settlement reconciliation",
        description:
          "Matches payment receipts, ledger entries, and NACH bounces before breaks hit the GL.",
        status: "soon",
      },
    ],
  },
];

const agentActions: AgentAction[] = [
  {
    number: "01",
    category: "Credit - KYC",
    action: "Generate KYC pack for spouse",
  },
  {
    number: "02",
    category: "Credit - FOIR",
    action: "Recompute eligibility with co-app",
  },
  {
    number: "03",
    category: "Ops - Surveyor",
    action: "Schedule visit Sat 11:00 AM",
  },
  {
    number: "04",
    category: "Comms - WhatsApp",
    action: "e-KYC link to spouse",
  },
  { number: "05", category: "CRM - Stage", action: "Opp to sanction-doc" },
  {
    number: "06",
    category: "Collections - NACH",
    action: "Pre-stage e-mandate - 10th",
  },
  {
    number: "07",
    category: "Compliance - MITC",
    action: "Mark verbal MITC confirmation",
  },
  {
    number: "08",
    category: "Sales - RM",
    action: "Notify RM manager - hot LAP",
  },
  {
    number: "09",
    category: "Training - Coach",
    action: "Tag as best-practice exemplar",
  },
];

const tokens = [
  "tok:co_applicant",
  "tok:fair_recompute",
  "tok:emi_shift",
  "tok:surveyor",
];

const bottomStats = [
  { value: "3.4s", label: "utterance to first action" },
  { value: "9", label: "teams notified" },
  { value: "198ms", label: "avg agent latency" },
  { value: "0", label: "human handoffs needed" },
];

const losFields: LOSField[] = [
  { label: "Applicant Name", value: "Rohan Khanna", status: "checked" },
  { label: "PAN", value: "AKLP****R - masked", status: "checked" },
  {
    label: "Employer",
    value: "Tata Consultancy Services - Sr Architect - 9 yrs",
    status: "checked",
  },
  { label: "Net Monthly Income", value: "INR 2,40,000", status: "checked" },
  { label: "Loan Amount", value: "INR 35,00,000", status: "checked" },
  {
    label: "Loan Purpose",
    value: "Higher Education - daughter - MBA US",
    status: "checked",
  },
  {
    label: "Property Address",
    value: "2BHK - Andheri East - Mumbai - 400069",
    status: "checked",
  },
  {
    label: "Property Market Value",
    value: "INR 1,80,00,000",
    status: "checked",
  },
  { label: "LTV", value: "19% (within LAP policy)", status: "checked" },
  {
    label: "Co-applicant",
    value: "Spouse - KYC pack queued",
    status: "checked",
  },
  {
    label: "FOIR",
    value: "recomputing with co-app - ETA 1.4s",
    status: "computing",
  },
  {
    label: "EMI Date Preference",
    value: "10th of every month",
    status: "checked",
  },
  { label: "Tenure", value: "15 years - 9.15% pa", status: "checked" },
  { label: "EMI", value: "INR 35,800", status: "checked" },
  { label: "CIBIL", value: "762 - band C+ - pulled 09:39", status: "checked" },
  {
    label: "Bank Account",
    value: "ICICI G*5821 - NACH-ready",
    status: "queued",
  },
  {
    label: "MITC Verbal",
    value: "confirmed - audio reference attached",
    status: "checked",
  },
];

const losStats = [
  { value: "78%", label: "avg pre-fill on first save" },
  { value: "42 min", label: "time saved per LAP application" },
  { value: "22", label: "LOS fields auto-filled" },
  { value: "1.4s", label: "FOIR recompute latency" },
];

const ctaStats = [
  { label: "Deploy", value: "14 days" },
  { label: "Pilot", value: "5 Agents" },
  { label: "SLA", value: "99.95%" },
  { label: "Route", value: "VPC/Prem" },
];

const LiveDot: React.FC = () => (
  <span className="relative flex h-2.5 w-2.5 mr-1.5">
    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
  </span>
);

const StatItem: React.FC<{ stat: Stat; isLast: boolean }> = ({
  stat,
  isLast,
}) => (
  <div
    className={`flex flex-col items-center px-6 py-1 ${
      !isLast ? "border-r border-indigo-100" : ""
    }`}
  >
    <div
      className={`flex items-center text-[28px] sm:text-[32px] font-semibold tracking-[-0.03em] leading-none ${
        stat.isLive ? "text-emerald-600" : "text-[#4b4b4b]"
      }`}
    >
      {stat.isLive && <LiveDot />}
      {stat.value}
    </div>
    <p className="mt-1.5 text-[11px] text-[#9498a8] text-center leading-snug">
      {stat.label}
    </p>
  </div>
);

const StatusBadge: React.FC<{ status: "live" | "soon" }> = ({ status }) =>
  status === "live" ? (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-0.5 text-[11px] font-medium text-emerald-700">
      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
      live
    </span>
  ) : (
    <span className="inline-flex items-center rounded-full border border-gray-200 bg-gray-100 px-2.5 py-0.5 text-[11px] font-medium text-gray-500">
      soon
    </span>
  );

const AgentCard: React.FC<{ agent: Agent }> = ({ agent }) => (
  <div className="rounded-xl border border-gray-100 bg-white px-4 py-3.5 shadow-sm">
    <div className="flex items-start justify-between gap-2 mb-1.5">
      <span className="text-[11px] font-medium text-[#5b5ce8] tracking-wide">
        {agent.category}
      </span>
      <StatusBadge status={agent.status} />
    </div>
    <h4 className="text-sm font-semibold text-[#4b4b4b] mb-1 leading-snug">
      {agent.title}
    </h4>
    <p className="text-xs text-[#8a8a8a] leading-relaxed">
      {agent.description}
    </p>
  </div>
);

const SquadCard: React.FC<{ squad: Squad }> = ({ squad }) => (
  <div className="flex-1 min-w-0 rounded-2xl border border-gray-200 bg-[#f8f9ff] p-5 shadow-sm">
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mb-4">
      <div className="inline-flex w-fit items-center gap-1.5 rounded-full border border-[#dddff0] bg-white px-3 py-1 text-[10px] font-semibold tracking-[0.16em] text-[#7b7b7b] uppercase">
        <span
          className={`h-1.5 w-1.5 rounded-full ${
            squad.status === "live" ? "bg-emerald-500" : "bg-gray-400"
          }`}
        />
        {squad.tag}
      </div>
      <span className="text-[11px] text-[#9498a8]">{squad.badge}</span>
    </div>

    <h3 className="text-2xl font-semibold text-[#4b4b4b] mb-2 leading-snug tracking-[-0.02em]">
      {squad.tagline}
      <span className="text-[#5b5ce8]">{squad.accentTagline}</span>
    </h3>
    <p className="text-xs text-[#8a8a8a] leading-relaxed mb-5">
      {squad.description}
    </p>

    <div className="flex flex-col gap-2.5">
      {squad.agents.map((agent) => (
        <AgentCard key={agent.title} agent={agent} />
      ))}
    </div>
  </div>
);

const SquadAgents: React.FC = () => (
  <section
    id="agent-catalogue"
    className={`${manrope.className} w-full bg-white px-4 sm:px-6 py-16`}
  >
    <div className="text-center mb-12">
      <p className="text-[11px] font-semibold tracking-[0.3em] text-[#5b5ce8] uppercase mb-3">
        Two squads of agents
      </p>
      <h2 className="mx-auto max-w-4xl text-3xl sm:text-4xl md:text-5xl font-semibold text-[#4b4b4b] leading-tight tracking-[-0.035em] mb-4">
        Squad 01 runs ops <span className="text-[#5b5ce8]">today.</span> Squad
        02 runs comms <span className="text-[#5b5ce8]">next.</span>
      </h2>
      <p className="mx-auto max-w-[620px] text-sm sm:text-[15px] text-[#6e6e80] leading-[1.7]">
        Today, the back-office agents are live in production. The communications
        agents follow next quarter. After that, reconciliation, marketing, and
        reminders.
      </p>
    </div>

    <div className="flex flex-col lg:flex-row gap-5 max-w-5xl mx-auto">
      {squads.map((squad) => (
        <SquadCard key={squad.id} squad={squad} />
      ))}
    </div>
  </section>
);

const UtteranceToActions: React.FC = () => (
  <section
    className={`${manrope.className} w-full bg-white px-4 sm:px-6 py-16`}
  >
    <div className="text-center mb-10">
      <p className="text-[11px] font-semibold tracking-[0.3em] text-[#5b5ce8] uppercase mb-3">
        How one utterance becomes nine actions
      </p>
      <h2 className="mx-auto max-w-4xl text-3xl sm:text-4xl md:text-5xl font-semibold text-[#4b4b4b] leading-tight tracking-[-0.035em] mb-4">
        From <span className="text-[#5b5ce8]">one sentence</span> the customer
        said, to <span className="text-[#5b5ce8]">nine teams</span> on the move.
      </h2>
      <p className="mx-auto max-w-[620px] text-sm sm:text-[15px] text-[#6e6e80] leading-[1.7]">
        The agent stays in the conversation. The brain tokenizes the intent.
        Nine background agents move in parallel before the next sentence is
        spoken.
      </p>
    </div>

    <div className="max-w-5xl mx-auto">
      <div className="flex flex-col lg:flex-row items-stretch gap-3">
        <div className="flex-none w-full lg:w-56 rounded-2xl border border-indigo-100 bg-indigo-50/60 p-4">
          <div className="flex items-center justify-between gap-3 mb-3">
            <span className="text-[9px] font-bold tracking-widest text-[#9498a8] uppercase">
              Source Utterance
            </span>
            <span className="shrink-0 text-[9px] font-semibold text-[#5b5ce8] bg-white border border-indigo-100 rounded-full px-2 py-0.5">
              Customer - 01:08
            </span>
          </div>
          <p className="text-sm text-[#4b4b4b] leading-relaxed">
            &ldquo;My spouse is also a co-applicant. Please send the surveyor on
            Saturday at 11 AM, and keep the EMI date as the 10th rakh
            dijiye.&rdquo;
          </p>
        </div>

        <div className="hidden lg:flex items-center text-gray-300 text-lg font-light self-center">
          -&gt;
        </div>

        <div className="flex-none w-full lg:w-56 rounded-2xl border border-gray-200 bg-white p-4 flex flex-col justify-between shadow-sm">
          <div>
            <p className="text-[9px] font-bold tracking-widest text-[#9498a8] uppercase mb-2">
              BFSI Brain
            </p>
            <h3 className="text-2xl font-semibold text-[#4b4b4b] leading-tight mb-1 tracking-[-0.02em]">
              Tokenize+Route
            </h3>
            <p className="text-[10px] text-[#9498a8] mb-4">
              14,602 toks - 218ms p50
            </p>
          </div>
          <div className="flex flex-col gap-1.5">
            {tokens.map((token) => (
              <span
                key={token}
                className="inline-block rounded-lg bg-indigo-50 border border-indigo-100 px-3 py-1.5 text-[10px] font-mono text-[#5b5ce8]"
              >
                {token}
              </span>
            ))}
          </div>
        </div>

        <div className="hidden lg:flex items-center text-gray-300 text-lg font-light self-center">
          -&gt;
        </div>

        <div className="flex-1 min-w-0 rounded-2xl border border-dashed border-gray-300 bg-[#f8f9ff] p-4">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between mb-3">
            <span className="text-[9px] font-bold tracking-widest text-[#7b7b7b] uppercase">
              9 Agents firing simultaneously
            </span>
            <span className="w-fit text-[9px] font-semibold text-emerald-600 bg-emerald-50 border border-emerald-100 rounded-full px-2 py-0.5">
              Dispatched in 3.4s
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {agentActions.map((agent) => (
              <div
                key={agent.number}
                className="rounded-xl border border-gray-100 bg-white p-3 shadow-sm"
              >
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="text-[9px] font-medium text-[#5b5ce8] leading-tight">
                    {agent.category}
                  </span>
                  <span className="text-[9px] text-[#b0b4c4] font-mono">
                    {agent.number}
                  </span>
                </div>
                <p className="text-[11px] text-[#4b4b4b] font-medium leading-snug">
                  {agent.action}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 w-full">
        <div className="rounded-2xl border border-gray-200 bg-white overflow-hidden">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-gray-100">
            {bottomStats.map((stat) => (
              <div key={stat.label} className="px-8 py-6">
                <p className="text-2xl font-semibold text-[#4b4b4b] tracking-[-0.02em] leading-none mb-1">
                  {stat.value}
                </p>
                <p className="text-xs text-[#9498a8]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const CheckIcon: React.FC = () => (
  <svg
    className="w-3.5 h-3.5 text-[#9498a8] flex-shrink-0"
    fill="none"
    viewBox="0 0 16 16"
    aria-hidden="true"
  >
    <path
      d="M3 8l3.5 3.5L13 5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const FieldRow: React.FC<{ field: LOSField; isLast: boolean }> = ({
  field,
  isLast,
}) => (
  <div
    className={`flex items-center justify-between py-2.5 gap-4 ${
      !isLast ? "border-b border-gray-100" : ""
    }`}
  >
    <span className="text-xs text-[#9498a8] flex-shrink-0 w-36">
      {field.label}
    </span>
    <span
      className={`text-xs flex-1 ${
        field.status === "computing"
          ? "text-[#9498a8] italic"
          : "text-[#4b4b4b]"
      } font-medium`}
    >
      {field.value}
    </span>
    <div className="flex-shrink-0 w-10 text-right">
      {field.status === "checked" && <CheckIcon />}
      {field.status === "queued" && (
        <span className="text-[10px] font-medium text-amber-500">queued</span>
      )}
      {field.status === "computing" && (
        <span className="text-[10px] font-medium text-[#5b5ce8]">...</span>
      )}
    </div>
  </div>
);

const LOSAgent: React.FC = () => {
  const filledCount = losFields.filter(
    (field) => field.status === "checked",
  ).length;
  const totalCount = losFields.length;
  const initialLiveElapsedSeconds = 74;
  const [activeFieldIndex, setActiveFieldIndex] = useState(0);
  const [liveElapsedSeconds, setLiveElapsedSeconds] = useState(
    initialLiveElapsedSeconds,
  );

  useEffect(() => {
    const tickLoopId = window.setInterval(() => {
      setActiveFieldIndex((currentIndex) => {
        if (currentIndex >= totalCount - 1) {
          setLiveElapsedSeconds(initialLiveElapsedSeconds);
          return 0;
        }

        return currentIndex + 1;
      });
    }, 900);

    return () => window.clearInterval(tickLoopId);
  }, [initialLiveElapsedSeconds, totalCount]);

  useEffect(() => {
    const timerId = window.setInterval(() => {
      setLiveElapsedSeconds((currentSeconds) => currentSeconds + 1);
    }, 1000);

    return () => window.clearInterval(timerId);
  }, []);

  const displayFields = useMemo(
    () =>
      losFields.map((field, index) => {
        if (index < activeFieldIndex) {
          return { ...field, status: "checked" as const };
        }

        if (index === activeFieldIndex) {
          return { ...field, status: "computing" as const };
        }

        return { ...field, status: "queued" as const };
      }),
    [activeFieldIndex],
  );

  const filledCount = displayFields.filter(
    (field) => field.status === "checked",
  ).length;
  const completionPct = Math.round((filledCount / totalCount) * 100);
  const liveMinutes = Math.floor(liveElapsedSeconds / 60)
    .toString()
    .padStart(2, "0");
  const liveSeconds = (liveElapsedSeconds % 60).toString().padStart(2, "0");

  return (
    <section
      className={`${manrope.className} w-full bg-[#F8F8F8] px-4 sm:px-6 py-16`}
    >
      <div className="w-full px-5 sm:px-8 lg:px-10 py-12">
        <div className="text-center mb-12">
          <p className="text-[11px] font-semibold tracking-[0.3em] text-[#5b5ce8] uppercase mb-3">
            A single agent in detail
          </p>
          <h2 className="mx-auto max-w-4xl text-3xl sm:text-4xl md:text-5xl font-semibold text-[#4b4b4b] leading-tight tracking-[-0.035em] mb-4">
            The LOS Agent.{" "}
            <span className="text-[#5b5ce8]">Always running.</span>
          </h2>
          <p className="mx-auto max-w-[620px] text-sm sm:text-[15px] text-[#6e6e80] leading-[1.7]">
            One of 42. Listens live, captures customer details, and pre-fills
            your LOS across Finnone, Newgen, and Lentra to 78% before agent
            input.
            One of 42. Listens live, captures customer details, and pre-fills your
            LOS to 78% before agent input.
          </p>
        </div>

        <div className="max-w-4xl mx-auto flex flex-col lg:flex-row gap-8 items-start">
          <div className="grid grid-cols-2 gap-3 w-full lg:w-72 flex-shrink-0">
            {losStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-gray-200 bg-white p-5 flex flex-col items-center justify-center text-center aspect-square shadow-sm"
              >
                <p className="text-[28px] sm:text-[32px] font-semibold text-[#5b5ce8] tracking-[-0.03em] leading-none mb-2">
                  {stat.value}
                </p>
                <p className="text-xs text-[#9498a8] leading-snug">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="flex-1 min-w-0 rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between px-5 py-3 border-b border-gray-100 bg-[#f8f9ff]">
              <span className="text-[10px] font-semibold tracking-widest text-[#9498a8] uppercase">
                LOS - FINNONE - LAP-2025-10-0731
              </span>
              <span className="flex items-center gap-1.5 text-[10px] font-semibold text-emerald-600">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Live - 00:{liveMinutes}:{liveSeconds}
              </span>
            </div>

            <div className="px-5">
              {displayFields.map((field, index) => (
                <FieldRow
                  key={field.label}
                  field={field}
                  isLast={index === displayFields.length - 1}
                />
              ))}
            </div>

            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between px-5 py-3 border-t border-gray-100 bg-[#f8f9ff]">
              <span className="text-[10px] text-[#9498a8]">
                {filledCount} of {totalCount} fields auto-filled
              </span>
              <span className="text-[10px] font-semibold text-[#5b5ce8]">
                overall completion - {completionPct}%
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const StopHiringCTA: React.FC = () => (
  <section
    className={`${manrope.className} w-full bg-white px-4 sm:px-6 py-14 sm:py-16`}
  >
    <div className="max-w-4xl mx-auto rounded-2xl bg-indigo-50 px-6 sm:px-10 py-12">
      <div className="flex flex-col lg:flex-row items-start gap-10">
        <div className="flex-1 min-w-0">
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#4b4b4b] leading-tight tracking-[-0.035em] mb-5">
            Stop hiring people
            <br />
            to copy data{" "}
            <span className="text-[#5b5ce8]">
              between
              <br />
              systems.
            </span>
          </h2>
          <p className="text-sm sm:text-[15px] text-[#6e6e80] leading-[1.7] mb-7 max-w-md">
            The agents never quit, never get sick, never lose context. They show
            up at 9 AM and they show up at 9 PM. Your team gets to focus on the
            conversation. The factory takes care of the rest.
          </p>
          <div className="flex flex-wrap gap-3">
            {/* <button className="rounded-[10px] border border-[#5b5ce8] bg-white px-6 py-2.5 text-[13px] font-semibold text-[#5b5ce8] shadow-sm transition-all hover:bg-[#f5f5ff]">
              View the agent catalogue
            </button>
            <button className="rounded-[10px] bg-[#5b5ce8] px-6 py-2.5 text-[13px] font-semibold text-white shadow-lg shadow-indigo-200/70 transition-all hover:bg-[#4e4fd9]">
              Book a non-voice pilot
            </button> */}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 w-full lg:w-72 flex-shrink-0">
          {ctaStats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-gray-200 bg-white px-5 py-4 shadow-sm"
            >
              <p className="text-[10px] font-semibold tracking-widest text-[#9498a8] uppercase mb-2">
                {stat.label}
              </p>
              <p className="text-xl sm:text-[22px] font-semibold text-[#4b4b4b] tracking-[-0.01em] leading-none">
                {stat.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const NonVoiceAgentHero: React.FC = () => {
  return (
    <section
      className={`${manrope.className} relative w-full overflow-hidden lg:min-h-[720px] px-4 sm:px-6 pt-16 sm:pt-20 lg:pt-[88px] pb-14 text-center`}
      style={{
        backgroundImage: "linear-gradient(90deg, #565ADD1F 0%, #565ADD00 100%)",
      }}
    >
      {/* Subtle radial glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2"
        style={{
          width: 900,
          height: 560,
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(91,92,232,0.10) 0%, transparent 68%)",
        }}
      />

      <div className="relative mx-auto max-w-[1182px]">
        {/* Pill badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-[#dddff0] bg-white/80 px-4 py-1.5 text-[11px] font-medium text-[#7b7b7b] shadow-sm backdrop-blur-sm mb-8">
          <img src="/images/star.svg" alt="Star" />
          42 agents
          <span className="text-indigo-200 mx-0.5">·</span>
          198ms avg
          <span className="text-indigo-200 mx-0.5">·</span>
          99.94% success
        </div>

        {/* Headline */}
        <h1 className="hero-heading">
          Agents that
          <br />
          <span className="text-[#5b5ce8]">never sleep</span>
          <span>, never slip, never miss.</span>
        </h1>

        {/* Subheading */}
        <p className="hero-subheading max-w-[680px] mb-9">
          An always-on factory of background workers. Each minion picks up an
          intent from the conversation and quietly closes the loop in CRM, LOS,
          data lake, ledger and database. The agent talks. The minion finishes
          the work.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          <button
            type="button"
            onClick={handleAgentCatalogueScroll}
            className="rounded-[10px] bg-[#5b5ce8] px-6 py-2.5 text-[13px] font-semibold text-white shadow-lg shadow-indigo-200/70 transition-all hover:bg-[#4e4fd9]"
          >
            View the agent catalogue
          </button>
          {/* <button className="rounded-[10px] bg-[#5b5ce8] px-6 py-2.5 text-[13px] font-semibold text-white shadow-lg shadow-indigo-200/70 transition-all hover:bg-[#4e4fd9]">
          Book a non-voice pilot
        </button> */}
        </div>

        {/* Stats row */}
        <div className="mt-16 pt-4">
          <div className="grid grid-cols-2 gap-y-4 sm:grid-cols-4">
            {stats.map((stat, i) => (
              <StatItem
                key={stat.label}
                stat={stat}
                isLast={i === stats.length - 1}
              />
            ))}
          </div>
      {/* Stats row */}
      <div className="mt-16 pt-8">
        <div className="grid grid-cols-2 gap-y-6 sm:grid-cols-4">
          {stats.map((stat, i) => (
            <StatItem key={stat.label} stat={stat} isLast={i === stats.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default function NonVoiceAgentPage() {
  return (
    <main>
      <NonVoiceAgentHero />
      <SquadAgents />
      <UtteranceToActions />
      <LOSAgent />
      <StopHiringCTA />
      <DemoRequestSection />
    </main>
  );
}
