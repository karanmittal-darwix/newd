"use client";

import DemoRequestSection from "@/components/DemoRequestSection";
import LogoMarquee from "@/components/LogoMarquee";
import { Manrope } from "next/font/google";
import Image from "next/image";
import { useEffect, useState } from "react";
import AgentAssistNudges from "./components/AgentAssistNudges";
import AuditCompliance from "./components/AuditCompilance";
import CommitAutoTasks from "./components/CommitAutoTasks";
import RedactPiiMasking from "./components/RedactPiiMasking";
import ScoreAIBreakdown from "./components/ScoreAIBreakdown";
import SentinelMonitor from "./components/SentinelMonitor";
import TrackBotSummary from "./components/TrackBotSummary";
import VerifyAutoKYC from "./components/VerifyAutoKYC";
import connectorImage from "./images/connector.png";
import watchImage from "./images/watch.png";
import {
  ANATOMY_CARDS,
  BFSI_SCENARIOS,
  CAPABILITY_ITEMS,
  COMMITMENTS,
  DEVICE_STATS,
  FEATURE_ITEMS,
  LIVE_CALLS,
  POST_CALL_METRICS,
  POST_CALL_NOTES,
  STAT_TONE,
  STATUS_STYLES,
  TRUST_LOGOS,
  WAVE_BARS,
  WAVE_BAR_GAP,
  WAVE_BAR_MAX,
  WAVE_BAR_WIDTH,
  WAVE_ROWS,
  WEARABLE_FEATURES,
} from "@/data/sherpa";
import { marLogos } from "@/data/marLogos";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

type ScenarioIcon = (typeof BFSI_SCENARIOS)[number]["icon"];

const renderScenarioIcon = (icon: ScenarioIcon) => (
  <svg
    viewBox="0 0 24 24"
    className="h-4 w-4 text-indigo-600"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {icon.shapes.map((shape, index) =>
      shape.type === "path" ? (
        <path key={`path-${index}`} d={shape.d} />
      ) : (
        <circle
          key={`circle-${index}`}
          cx={shape.cx}
          cy={shape.cy}
          r={shape.r}
        />
      ),
    )}
  </svg>
);

const capabilityCards = [
  AgentAssistNudges,
  RedactPiiMasking,
  VerifyAutoKYC,
  CommitAutoTasks,
  SentinelMonitor,
  AuditCompliance,
  TrackBotSummary,
  ScoreAIBreakdown,
];

export default function SherpaPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const ActiveCapabilityCard =
    capabilityCards[activeIndex] || AgentAssistNudges;

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex(
        (currentIndex) => (currentIndex + 1) % CAPABILITY_ITEMS.length,
      );
    }, 1800);

    return () => window.clearInterval(intervalId);
  }, []);

  const handleDemoScroll = () => {
    const section = document.getElementById("demo-request");
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

  return (
    <main className={manrope.className}>
      <section
        className={`${manrope.className} relative w-full overflow-hidden px-4 sm:px-6 pt-16 sm:pt-20 lg:pt-[88px] pb-14 text-center`}
        style={{
          backgroundImage:
            "linear-gradient(90deg, #565ADD1F 0%, #565ADD00 100%)",
        }}
      >
        <div className="relative max-w-[1182px] mx-auto text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#e3e7f5] bg-white px-3.5 py-1.5 text-[11px] font-medium text-[#7b7b7b] shadow-sm">
            <img src="/images/star.svg" alt="Star" />
            <span>Physical AI Assist</span>
            <span className="text-[#d0d3e4]">&middot;</span>
            <span>BFSI field-grade</span>
          </div>

          <h1 className="hero-heading mt-8">
            The voice in your on{" "}
            <span className="text-[#5b5ce8]">ground team&apos;s </span>
            ear.
          </h1>

          <p className="hero-subheading max-w-[780px]">
            Sherpa rides alongside the agent on every in-person call, capturing
            studio-grade audio, scoring the script live, and whispering nudges
            before the customer finishes their objection.
          </p>

          <div className="mt-7 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-[640px] mx-auto">
            {FEATURE_ITEMS.map((item) => (
              <div
                key={item.title}
                className="flex items-center justify-center gap-2"
              >
                <span
                  className={`h-2 w-2 rounded-full ${
                    item.hasDot ? "bg-green-500" : "bg-green-500 opacity-0"
                  }`}
                  aria-hidden="true"
                />
                <div className="text-left">
                  <div className="text-[13px] font-semibold text-[#4b4b4b] leading-tight">
                    {item.title}
                  </div>
                  <div className="mt-1 text-[11px] text-[#8a8a8a] leading-tight">
                    {item.subtitle}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-center justify-center gap-3 sm:gap-4">
            {/* <button
              type="button"
              className="rounded-[12px] border border-[#5b5ce8] bg-white px-6 py-2.5 text-[13px] font-semibold text-[#5b5ce8] shadow-sm transition hover:border-[#4e4fd9]"
            >
              Meet the device
            </button> */}
            <button
              type="button"
              onClick={handleDemoScroll}
              className="mt-10 rounded-[12px] bg-[#5b5ce8] px-6 py-2.5 text-[13px] font-semibold text-white shadow-lg shadow-indigo-200/80 transition hover:bg-[#5152d8]"
            >
              Book a demo
            </button>
          </div>
        </div>

        <div className="mt-12 sm:mt-14">
         <div className="mt-12 sm:mt-14">
          <div className="w-full max-w-[920px] mx-auto min-h-[151px] grid grid-cols-2 sm:grid-cols-4">
            {DEVICE_STATS.map((stat) => (
              <div
                key={stat.value}
                className="flex h-[76px] w-[230px] flex-col items-center justify-center border-l-[0.8px] border-gray-200"
              >
                <span className="text-xl sm:text-2xl font-semibold text-[#4b4b4b] tracking-tight">
                  {stat.value}
                </span>
                <span className="mt-1 text-[11px] sm:text-xs text-[#8a8a8a]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
        </div> 
      </section>

      <section className="bg-white">
        <div className="mt-10 overflow-hidden py-5">
          <LogoMarquee logos={marLogos} barClassName="bg-[#5b5ce8]" />
        </div>

        <div className="px-4 sm:px-6">
          <div className="max-w-6xl mx-auto pt-14 sm:pt-16 pb-12 sm:pb-16">
            <div className="text-center">
              <p className="text-xs font-semibold tracking-[0.3em] text-indigo-500 uppercase">
                Anatomy of Sherpa
              </p>
              <h2 className="section-heading mt-4 text-3xl sm:text-4xl md:text-5xl text-gray-600 tracking-tight">
                Capture. Assist. Analyze.{" "}
                <span className="text-indigo-600">Improve.</span>
              </h2>
              <p className="mt-4 text-sm sm:text-base text-[#686868]">
                Four primitives running every moment Sherpa is in the field.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {ANATOMY_CARDS.map((card) => (
                <div
                  key={card.step}
                  className="rounded-2xl border border-gray-200 bg-white p-5 sm:p-6 shadow-sm"
                >
                  <p className="text-[11px] font-semibold text-indigo-500">
                    {card.step}
                  </p>
                  <h3 className="mt-3 text-base font-semibold text-gray-700">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                    {card.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {card.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-[11px] text-indigo-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-6xl mx-auto pb-10 sm:pb-14">
            <div className="rounded-3xl bg-[#eef0ff] p-6 sm:p-10 md:p-12">
              <div className="flex flex-col lg:flex-row lg:items-center gap-10">
                <div className="flex-1">
                  <h3 className="max-w-[578px] text-3xl sm:text-4xl lg:text-[46px] font-semibold text-[#4b4b4b] leading-tight lg:leading-[50.6px] tracking-tight lg:tracking-[-0.92px]">
                    Branch noise
                    <br />
                    <span className="text-[#5b5ce8]">cancelled.</span>
                    <br />
                    Agent voice clear.
                    <br />
                    Customer voice clear.
                  </h3>
                  <p className="mt-4 text-sm sm:text-base text-[#7a7a7a] max-w-lg">
                    Sherpa&apos;s active noise cancellation isolates agent and
                    customer voices on busy branch floors. Noise is suppressed,
                    transcripts stay clean, nudges accurate, scoring fair.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-6 text-[11px] tracking-[0.2em] text-[#9aa0b2]">
                    <div>
                      SNR{" "}
                      <span className="ml-2 text-[#5b5ce8] font-semibold">
                        +18 DB
                      </span>
                    </div>
                    <div>
                      NER{" "}
                      <span className="ml-2 text-[#5b5ce8] font-semibold">
                        2.1%
                      </span>
                    </div>
                    <div>
                      SPK-SEP{" "}
                      <span className="ml-2 text-[#5b5ce8] font-semibold">
                        98.4%
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex-1">
                  <div className="min-h-[240px] rounded-2xl border border-[#e0e4f6] bg-[#f8f9ff] p-6 shadow-md shadow-indigo-100/60">
                    <div className="space-y-10">
                      {WAVE_ROWS.map((row, index) => (
                        <div
                          key={`${row.db}-${index}`}
                          className="flex items-center gap-4"
                        >
                          <span className="text-[11px] text-[#9aa0b2] tracking-[0.2em]">
                            {row.text}
                          </span>
                          <svg
                            viewBox="0 0 360 60"
                            className={`h-8 flex-1 ${row.color}`}
                            fill="currentColor"
                          >
                            {WAVE_BARS.map((height, barIndex) => {
                              const x =
                                barIndex * (WAVE_BAR_WIDTH + WAVE_BAR_GAP);
                              const y = (WAVE_BAR_MAX - height) / 2;
                              return (
                                <rect
                                  key={`${row.db}-${barIndex}`}
                                  x={x}
                                  y={y}
                                  width={WAVE_BAR_WIDTH}
                                  height={height}
                                  rx={3}
                                  className="wave-rect"
                                  style={{
                                    animationDelay: `${(index * 0.12 + (barIndex % 6) * 0.06).toFixed(2)}s`,
                                  }}
                                />
                              );
                            })}
                          </svg>
                          <span className="text-sm font-semibold text-[#2d2f3a]">
                            {row.db}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-6xl mx-auto pt-6 sm:pt-10 pb-16 sm:pb-24">
            <div className="text-center">
              <p className="text-xs font-semibold tracking-[0.3em] text-indigo-500 uppercase">
                Sherpa AI Capabilities
              </p>
              <h2 className="section-heading mt-4 text-3xl sm:text-4xl md:text-5xl text-gray-600 tracking-tight">
                Eight named AI services.{" "}
                <span className="text-indigo-600">One device. One brain.</span>
              </h2>
            </div>

            <div className="mt-10 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8">
              <div className="rounded-2xl border border-gray-200 bg-white p-3 sm:p-4 shadow-sm">
                <div className="space-y-0">
                  {CAPABILITY_ITEMS.map((item, index) => {
                    const isActive = index === activeIndex;
                    const isHovered = index === hoveredIndex;
                    const status = isHovered ? "fired" : isActive ? "firing" : "queued";

                    const statusClasses =
                      status === "queued"
                        ? "text-amber-600 bg-amber-50 border border-amber-100"
                        : status === "firing"
                        ? "text-indigo-600 bg-indigo-50 border border-indigo-100"
                        : "border border-emerald-600 bg-emerald-600 text-white";

                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setActiveIndex(index)}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        onFocus={() => setHoveredIndex(index)}
                        onBlur={() => setHoveredIndex(null)}
                        className={`w-full text-left rounded-xl border px-4 sm:px-5 py-3 sm:py-4 ${
                          isActive ? "border-indigo-300 bg-indigo-50/60" : "border-gray-200 bg-white"
                        }`}
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex items-start gap-4">
                            <span className="text-[11px] font-semibold text-gray-400 mt-1">
                              {item.id}
                            </span>
                            <div>
                              <p
                                className={`text-sm sm:text-base font-semibold ${isActive ? "text-indigo-600" : "text-gray-700"}`}
                              >
                                {item.title}{" "}
                                <span className="text-gray-500 font-medium">&middot; {item.subtitle}</span>
                                <span className={`ml-3 inline-flex items-center text-[10px] font-semibold rounded-full px-2 py-0.5 ${statusClasses}`}>
                                  {status}
                                </span>
                              </p>
                              {isActive && item.description && (
                                <p className="mt-2 text-xs sm:text-sm text-gray-400 leading-relaxed max-w-md">
                                  {item.description}
                                </p>
                              )}
                            </div>
                          </div>
                          <span className="text-gray-400 text-lg">{isActive ? "×" : "+"}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="flex justify-center lg:justify-end">
                <ActiveCapabilityCard />
              </div>
            </div>
          </div>

          <div className="max-w-6xl mx-auto pt-4 sm:pt-8 pb-16 sm:pb-24">
            <div className="text-center">
              <p className="text-xs font-semibold tracking-[0.3em] text-indigo-500 uppercase">
                Built for field Calls
              </p>
              <h2 className="section-heading mt-4 text-3xl sm:text-4xl md:text-5xl text-gray-600 tracking-tight">
                <span className="text-indigo-600">Scenarios</span> already in
                production.
              </h2>
            </div>

            <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
              {BFSI_SCENARIOS.map((scenario) => (
                <div
                  key={scenario.title}
                  className="rounded-2xl border border-gray-200 bg-white p-5 sm:p-6 shadow-sm"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold text-gray-700">
                        {scenario.title}
                      </h3>
                      <p className="mt-1 text-xs sm:text-sm text-gray-400">
                        {scenario.subtitle}
                      </p>
                    </div>
                    <div className="h-9 w-9 rounded-lg border border-indigo-200 bg-indigo-50 flex items-center justify-center">
                      {renderScenarioIcon(scenario.icon)}
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-[1.2fr_0.8fr] gap-4">
                    <div>
                      <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-[0.2em]">
                        Sherpa whispers
                      </p>
                      <ul className="mt-3 space-y-2 text-xs sm:text-sm text-gray-500">
                        {scenario.whispers.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="text-indigo-500 mt-0.5">
                              -&gt;
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-xl bg-indigo-50/70 border border-indigo-100 p-4">
                      <div className="space-y-2 text-xs sm:text-sm text-gray-600">
                        {scenario.stats.map((stat) => (
                          <div
                            key={stat.label}
                            className="flex items-center justify-between gap-4"
                          >
                            <span>{stat.label}</span>
                            <span
                              className={`font-semibold ${STAT_TONE[stat.tone]}`}
                            >
                              {stat.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-6xl mx-auto pt-4 sm:pt-8 pb-16 sm:pb-24">
            <div className="rounded-3xl bg-[#f1f2ff] p-6 sm:p-10 md:p-12">
              <div className="flex flex-col lg:flex-row lg:items-center gap-10">
                <div className="flex-1">
                  <h3 className="text-3xl sm:text-4xl font-semibold text-gray-600 leading-tight">
                    Loop in. Tag. Coach.{" "}
                    <span className="text-indigo-600">Mid-call.</span>
                  </h3>
                  <p className="mt-4 text-sm sm:text-base text-gray-400 max-w-lg">
                    Managers see the floor live. They can join any call, drop a
                    Success / Warning / Danger flag tagged to a transcript
                    moment, and the FO sees it as an in-ear feedback message
                    without breaking the conversation.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <span className="rounded-full bg-indigo-100 px-3 py-1 text-[11px] font-semibold text-indigo-600">
                      SUCCESS · repeatable behaviour
                    </span>
                    <span className="rounded-full bg-indigo-100 px-3 py-1 text-[11px] font-semibold text-indigo-600">
                      WARNING · script drift
                    </span>
                    <span className="rounded-full bg-indigo-100 px-3 py-1 text-[11px] font-semibold text-indigo-600">
                      DANGER · compliance miss
                    </span>
                  </div>
                </div>

                <div className="flex-1">
                  <div className="rounded-2xl border border-indigo-100 bg-white p-5 sm:p-6 shadow-lg shadow-indigo-100/70">
                    <div className="flex items-center justify-between text-[11px] text-gray-400">
                      <span>FLOOR · MUMBAI-CST · 14 LIVE</span>
                      <span className="flex items-center gap-2 text-emerald-500">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        LIVE
                      </span>
                    </div>
                    <div className="mt-3 divide-y divide-gray-100">
                      {LIVE_CALLS.map((call) => (
                        <div
                          key={call.name}
                          className="grid grid-cols-[minmax(0,1fr)_92px_86px] items-center gap-3 py-3.5 sm:grid-cols-[minmax(0,1fr)_140px_104px] sm:gap-4"
                        >
                          <div className="min-w-0">
                            <p className="truncate text-sm font-semibold leading-tight text-gray-700">
                              {call.name}
                            </p>
                            <p className="mt-1 truncate text-xs leading-tight text-gray-400">
                              {call.location}
                            </p>
                          </div>
                          <p className="w-full text-left text-xs text-gray-500">
                            {call.metric}
                          </p>
                          <span
                            className={`justify-self-end whitespace-nowrap rounded-full px-3 py-1 text-[11px] font-semibold ${
                              STATUS_STYLES[call.statusTone]
                            }`}
                          >
                            {call.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-6xl mx-auto pt-2 sm:pt-6 pb-16 sm:pb-24">
            <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 items-center">
              <div>
                <p className="text-xs font-semibold tracking-[0.3em] text-indigo-500 uppercase">
                  Sherpa Wearable
                </p>
                <h2 className="section-heading mt-4 text-3xl sm:text-4xl md:text-5xl text-gray-600 tracking-tight">
                  A device built to do{" "}
                  <span className="text-indigo-600">multiple things well.</span>
                </h2>
                <p className="mt-4 text-sm sm:text-base text-gray-400 max-w-md">
                  Phone capture works in quiet settings. For noisy field
                  environments, Sherpa is the purpose-built clip-on with
                  always-on listening and low-latency in-ear nudges.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {/* <button
                  type="button"
                  className="rounded-xl border border-indigo-300 bg-white px-5 sm:px-6 py-2.5 text-sm font-semibold text-indigo-600 shadow-sm shadow-indigo-100/80 transition hover:border-indigo-400"
                >
                  Hardware brief (PDF)
                </button>
                <button
                  type="button"
                  className="rounded-xl bg-indigo-600 px-5 sm:px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-200/80 transition hover:bg-indigo-500"
                >
                  Order eval kit
                </button> */}
                </div>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-5 sm:p-6 shadow-sm">
                <div className="relative min-h-[320px] overflow-hidden rounded-2xl bg-[#f1f2ff] p-4 sm:p-6">
                  <span className="absolute left-4 top-4 rounded-md bg-indigo-600 px-2 py-1 text-[11px] font-semibold text-white">
                    RFID
                  </span>
                  <Image
                    src={watchImage}
                    alt="Sherpa watch"
                    width={196}
                    height={196}
                    className="absolute right-5 top-5 h-[196px] w-[196px] object-contain"
                    priority
                  />
                  <Image
                    src={connectorImage}
                    alt="Sherpa connector"
                    width={282}
                    height={181}
                    className="absolute bottom-5 left-5 w-[236px] sm:w-[282px] h-auto object-contain"
                  />
                </div>
                <p className="mt-4 text-center text-[11px] tracking-[0.3em] text-gray-400">
                  CLIP-ON · 38G · IP54 · BLUETOOTH + LTE
                </p>
              </div>
            </div>

            <div className="mt-10 rounded-2xl border border-gray-200 bg-white divide-y divide-gray-200 sm:divide-y-0 sm:divide-x grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {WEARABLE_FEATURES.map((feature) => (
                <div key={feature.label} className="p-5 sm:p-6">
                  <p className="text-[11px] font-semibold tracking-[0.2em] text-indigo-500 uppercase">
                    {feature.label}
                  </p>
                  <p className="mt-3 text-sm font-semibold text-gray-700">
                    {feature.title}
                  </p>
                  <p className="mt-2 text-xs sm:text-sm text-gray-400">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-6xl mx-auto pt-2 sm:pt-6 pb-16 sm:pb-24">
            <div className="text-center">
              <p className="text-xs font-semibold tracking-[0.3em] text-indigo-500 uppercase">
                Post-call Analysis
              </p>
              <h2 className="section-heading mt-4 text-3xl sm:text-4xl md:text-5xl text-gray-600 tracking-tight">
                No noise. Just <span className="text-indigo-600">clarity</span>{" "}
                on performance and next steps.
              </h2>
              <p className="mt-4 text-sm sm:text-base text-gray-400 max-w-2xl mx-auto">
                The moment a conversation ends, Sherpa breaks it down into
                clear, actionable insights. One screen. Every signal.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-7 shadow-sm">
                <div className="flex items-center justify-between text-[11px] tracking-[0.2em] text-gray-400">
                  <span>CALL · LAP-24081 · ROHIT M</span>
                  <span className="text-gray-300"> </span>
                </div>
                <div className="mt-4 flex items-center justify-between gap-4">
                  <p className="text-sm font-semibold text-gray-700">
                    02:48 · loan-against-property welcome
                  </p>
                  <p className="text-3xl font-semibold text-emerald-500">
                    94
                    <span className="text-base text-gray-400">/100</span>
                  </p>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  {POST_CALL_METRICS.map((metric) => (
                    <div key={metric.label}>
                      <p className="text-[11px] font-semibold text-gray-400 tracking-[0.2em] uppercase">
                        {metric.label}
                      </p>
                      <div className="mt-2 h-1.5 rounded-full bg-gray-100">
                        <div
                          className={`h-1.5 rounded-full ${metric.color}`}
                          style={{ width: `${metric.value * 100}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 space-y-3">
                  {POST_CALL_NOTES.map((note) => (
                    <div key={note.text} className="flex items-start gap-3">
                      {note.status === "check" ? (
                        <span className="h-5 w-5 rounded-full border border-indigo-200 bg-indigo-50 text-indigo-600 flex items-center justify-center text-xs">
                          ✓
                        </span>
                      ) : (
                        <span className="h-5 w-5 rounded-full border border-amber-200 bg-amber-50 text-amber-600 flex items-center justify-center text-xs">
                          !
                        </span>
                      )}
                      <p className="text-xs sm:text-sm text-gray-500">
                        {note.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-7 shadow-sm">
                <div className="flex items-center justify-between text-[11px] tracking-[0.2em] text-gray-400">
                  <span>COMMITMENTS · TRACKBOT AI</span>
                  <span>3 CAPTURED</span>
                </div>
                <div className="mt-4 space-y-3">
                  {COMMITMENTS.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3"
                    >
                      <p className="text-[11px] font-semibold text-indigo-500 tracking-[0.2em] uppercase">
                        {item.label}
                      </p>
                      <p className="mt-2 text-xs sm:text-sm text-gray-500">
                        {item.text}
                      </p>
                    </div>
                  ))}
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
