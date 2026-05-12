"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import LogoMarquee from "@/components/LogoMarquee";
import { aboutLogos } from "@/data/aboutLogos";
import MissionVisionCards from "./components/MissionVisionCards";
import FounderCard from "./components/FounderCard";



const stats = [
  { value: "$1.5M", label: "Seed raised · 2025" },
  { value: "50+", label: "CXO & angel backers" },
  { value: "4", label: "Nations served" },
  { value: "22", label: "Languages supported" },
  { value: "1200", label: "Parallel dials / sec" },
];

const timeline = [
  { year: "2022", title: "CUR8 founded", desc: "Started as a revenue intelligence platform for BFSI sales teams." },
  { year: "2023", title: "Sherpa prototyped", desc: "Field-agent wearable for live coaching, built with first BFSI design partners." },
  { year: "2024", title: "Voice automation live", desc: "Outbound dialer engine in production. 1,200 dials/sec across 22 languages." },
  { year: "2025", title: "Rebrand & seed round", desc: "$1.5M raised. Non-Voice Agents and Nova retail kiosk unveiled. 4 nations." },
  { year: "2026", title: "Full agentic OS", desc: "India-hosted SLM in production. Voice, non-voice, and physical AI in lockstep." },
];

const values = [
  { icon: "search", title: "Build on Infinite Curiosity", desc: "We challenge every assumption in workflows, systems, and banking operations because curiosity drives better products." },
  { icon: "bolt", title: "Roll Up Your Sleeves", desc: "Everyone owns the outcome. From client calls to debugging workflows, we step in wherever the work needs to get done." },
  { icon: "star", title: "Chase Rigor-Backed Rewards", desc: "We measure real business impact, not effort. Every feature is tied to outcomes, metrics, and measurable results." },
  { icon: "heart", title: "Built Around Customer Needs", desc: "We build for real banking operations with deep focus on compliance, workflows, and everyday customer realities." },
  { icon: "home", title: "Create Like an Owner", desc: "Ownership is a proactive mindset. We fix problems, build what's missing, and take responsibility for every outcome." },
  { icon: "check", title: "Cause Immediate Impact", desc: "We build for measurable business impact. Every sprint delivers fast, visible value without compromising quality." },
];

const angels = [
  { name: "Shashi Bakshi", role: "Strategy & Consulting Leader", company: "Accenture", initials: "SB", image: "/images/about/shashi_bakshi.jpg" },
  { name: "Sanjay Suri", role: "CTO", company: "Nykaa", initials: "SS", image: "/images/about/sanjay_suri.jpg" },
  { name: "Manish Harodia", role: "Chief Business Officer", company: "CarDekho Group", initials: "MH", image: "/images/about/manish_harodia.jpg" },
  { name: "Shravan Tickoo", role: "CEO", company: "Rehvak Systems", initials: "ST", image: "/images/about/Shravan_tickoo.jpg" },
  { name: "Amit Lakhotia", role: "CEO", company: "Park+", initials: "AL", image: "/images/about/amit-lakhotia.jpg" },
  { name: "Pranshu Dwivedi", role: "Executive Director", company: "Goldman Sachs", initials: "PD", image: "/images/about/Pranshu_dwedi.jpg" },
  { name: "Vijay Agicha", role: "Group CTO", company: "Network18", initials: "VA", image: "/images/about/vijay agricha.png" },
  { name: "Naman Sarawagi", role: "Founder", company: "Refrens", initials: "NS", image: "/images/about/naman_sarawagi.png" },
  { name: "Tarun Tiwari", role: "Founder", company: "Interactive AI", initials: "TT", image: "/images/about/tarun tiwari.png" },
  { name: "Vaibhav Vardhan", role: "Founder & CEO", company: "Inc42", initials: "VV", image: "/images/about/vaibhav_vardhan.png" },
  { name: "Abhishek Ayyagari", role: "Co-Founder", company: "Presentations.ai", initials: "AA", image: "/images/about/abhishek_ayyagyari.png" },
  { name: "Mekin Maheshwari", role: "Founder & CEO", company: "Udhyam Learning Foundation", initials: "MM", image: "/images/about/mekin_maheshwari.png" },
  { name: "Shweta Rani", role: "Senior Operations Executive", company: "Zinnov", initials: "SR", image: "/images/about/shweta_rani.png" },
  { name: "Sabhareesh Muralidaran", role: "Partner and CIO", company: "SDG Corporation", initials: "SM", image: "/images/about/sabharesh.png" },
  { name: "Sharath Ramesh Iyengar", role: "Founding Team", company: "Revsure", initials: "SI", image: "/images/about/sharath_ramesha.png" },
  { name: "Adesh Ladha", role: "Associate Director", company: "Auronova", initials: "AL", image: "/images/about/adesh_ladha.png" },
  { name: "Aabhinandan Chatterjee", role: "Co-founder and CEO", company: "GCCX", initials: "AC", image: "/images/about/aabhinandan_chatterjee.png" },
  { name: "Harsh Choudhry", role: "Head of Strategy", company: "nurture.farm", initials: "HC", image: "/images/about/harsh_choudary.png" },
  { name: "Bhavishya Chauraisa", role: "Co-Founder", company: "Education10X", initials: "BC", image: "/images/about/bhavishya_chaurasia.png" },
  { name: "Rajat Gupta", role: "Principal", company: "WTFund", initials: "RG", image: "/images/about/rajat gupta.png" },
  { name: "Vipul Choubey", role: "Sr. Director of Product Management", company: "JioHotstar", initials: "VC", image: "/images/about/vipul_choubey.png" },
  { name: "Pinak Dattaroy", role: "Founder", company: "Ripik.AI", initials: "PD", image: "/images/about/pinak.png" },
  { name: "Sanchay Gupta", role: "Associate Director of Products", company: "PayU", initials: "SG", image: "/images/about/sanchay.png" },
  { name: "Vivek Yelisetti", role: "Associate Partner", company: "McKinsey & Company", initials: "VY", image: "/images/about/vivek.png" },
  { name: "Suhas Motwani", role: "Founder & CEO", company: "The Product Folks", initials: "SM", image: "/images/about/suhas_motwani.png" },
  { name: "Nikhil Jois", role: "Head Of Growth", company: "Bureau", initials: "NJ", image: "/images/about/nikhil_jois.png" },
  { name: "Amit Kulkarni", role: "Senior Director", company: "Alvarez & Marsal", initials: "AK", image: "/images/about/amit_kulkarni.png" },
];

const companyLogos: Record<string, { src: string; alt: string }> = {
  Accenture: { src: "/images/about/accenture.png", alt: "Accenture" },
  Nykaa: { src: "/images/about/nykaa.png", alt: "Nykaa" },
  "CarDekho Group": { src: "/images/about/cardekho.png", alt: "CarDekho" },
  "Park+": { src: "/images/about/park+.jpg", alt: "Park+" },
  Refrens: { src: "/images/about/refrens.png", alt: "Refrens" },
  Inc42: { src: "/images/about/inc42.png", alt: "Inc42" },
  Zinnov: { src: "/images/about/zinnov.png", alt: "Zinnov" },
  Revsure: { src: "/images/about/revsure.png", alt: "Revsure" },
  Auronova: { src: "/images/about/auronova.png", alt: "Auronova" },
  GCCX: { src: "/images/about/gccx.png", alt: "GCCX" },
  "nurture.farm": { src: "/images/about/nurturefarm.png", alt: "nurture.farm" },
  Education10X: { src: "/images/about/education10x.png", alt: "Education10X" },
  JioHotstar: { src: "/images/about/iohotstar.png", alt: "JioHotstar" },
  "Ripik.AI": { src: "/images/about/repikai.png", alt: "Ripik.AI" },
  PayU: { src: "/images/about/payu.png", alt: "PayU" },
  "McKinsey & Company": { src: "/images/about/mckinsey.png", alt: "McKinsey & Company" },
  "The Product Folks": { src: "/images/about/product_folks.png", alt: "The Product Folks" },
  Bureau: { src: "/images/about/bureau-p-500.png", alt: "Bureau" },
  "Goldman Sachs": { src: "/images/about/Goldmansachs.png", alt: "Goldman Sachs" },
  Network18: { src: "/images/about/network18.png", alt: "Network18" },
  "SDG Corporation": { src: "/images/about/sdgcapital.png", alt: "SDG Corporation" },
};

const pressLogos: Record<string, string> = {
  "The Economic Times": "/images/about/economic time.svg",
  "Economic Times": "/images/about/economic time.svg",
  PTI: "/images/about/pti.svg",
  indianstartuptimes: "/images/about/ist.svg",
  YOURSTORY: "/images/about/your story.svg",
  ENTRACKR: "/images/about/entracker.svg",
  VCCIRCLE: "/images/about/vc.svg",
  "Indian Startup Times": "/images/about/ist.svg",
  VCCircle: "/images/about/vc.svg",
};

/* ─── SMALL HELPERS ──────────────────────────────────────────── */

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] font-semibold uppercase tracking-[0.3em]" style={{ color: "#5b5ce8" }}>
      {children}
    </p>
  );
}

function ValueIcon({ type }: { type: string }) {
  const cls = "h-4 w-4";
  const stroke = { fill: "none", stroke: "#5b5ce8", strokeWidth: 2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  if (type === "search") return <svg viewBox="0 0 24 24" className={cls} {...stroke}><circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" /></svg>;
  if (type === "bolt") return <svg viewBox="0 0 24 24" className={cls} {...stroke}><path d="M13 2 3 14h9l-1 8 10-12h-9z" /></svg>;
  if (type === "star") return <svg viewBox="0 0 24 24" className={cls} {...stroke}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>;
  if (type === "heart") return <svg viewBox="0 0 24 24" className={cls} {...stroke}><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>;
  if (type === "home") return <svg viewBox="0 0 24 24" className={cls} {...stroke}><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>;
  return <svg viewBox="0 0 24 24" className={cls} {...stroke}><polyline points="9 11 12 14 22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></svg>;
}

function AngelCard({ angel }: { angel: typeof angels[0] }) {
  const companyLogo = companyLogos[angel.company];

  return (
    <div className="flex items-center gap-3 rounded-[14px] border border-[#eceef4] bg-white px-4 py-3 shadow-[0_4px_12px_rgba(37,44,97,0.05)]">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-semibold text-white overflow-hidden" style={{ backgroundColor: "#5b5ce8" }}>
        {angel.image ? (
          <img
            src={angel.image}
            alt={angel.name}
            className="h-full w-full object-cover"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.nextElementSibling?.classList.remove('hidden');
            }}
          />
        ) : null}
        <span className={angel.image ? 'hidden' : ''}>
          {angel.initials}
        </span>
      </div>
      <div className="min-w-0">
        <p className="truncate text-[12px] font-semibold" style={{ color: "#4b4b4b" }}>{angel.name}</p>
        <p className="truncate text-[10px]" style={{ color: "#9aa0b2" }}>{angel.role}</p>
        <div className="flex items-center gap-2">
          {companyLogo ? (
            <img
              src={companyLogo.src}
              alt={`${companyLogo.alt} logo`}
              className="h-4 object-contain"
            />
          ) : (
            <p className="truncate text-[10px] font-semibold tracking-wide" style={{ color: "#5b5ce8" }}>
              {angel.company}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

/* ─── MAIN PAGE ──────────────────────────────────────────────── */

export default function BFSIPage() {
  const [mounted, setMounted] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const visibleAngels = expanded ? angels : angels.slice(0, 5);

  useEffect(() => { setMounted(true); }, []);

  return (
    <div className="w-full font-sans" style={{ fontFamily: "Manrope, sans-serif" }}>

      {/* ── HERO ── */}
      <section
        className="relative w-full flex flex-col items-center justify-center px-6 py-20 sm:py-28 text-center overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(135deg, #f0f1ff 0%, #f7f7ff 50%, #eef0ff 100%)",
        }}
      >
        {/* Badge */}
        <div
          className={`mb-8 inline-flex items-center gap-2 rounded-full border border-[#e3e7f5] bg-white px-4 py-1.5 text-[11px] font-medium shadow-sm transition-all duration-700 ${mounted
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-2"
            }`}
          style={{ color: "#7b7b7b" }}
        >
          <span style={{ color: "#5b5ce8" }}>✦</span>
          <span
            className="font-semibold"
            style={{ color: "#4b4b4b" }}
          >
            IIM Alumni Ventures
          </span>
          <span style={{ color: "#d0d3e4" }}>·</span>
          <span>Backed by 50+ CXOS</span>
        </div>

        {/* Headline */}
        <h1
          className={`mx-auto max-w-7xl text-4xl sm:text-5xl lg:text-[72px] font-medium leading-[1.08] tracking-[-2px] transition-all duration-700 delay-75 ${mounted
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
            }`}
          style={{ color: "#4b4b4b" }}
        >
          Building the BFSI <br />
          <span style={{ color: "#5b5ce8" }}>
            operating system
          </span>{" "}
          for the agentic decade.
        </h1>

        {/* Subtext */}
        <p
          className={`mx-auto mt-5 max-w-4xl text-base sm:text-lg leading-relaxed transition-all duration-700 delay-150 ${mounted
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4"
            }`}
          style={{ color: "#7a7a7a" }}
        >
          An applied research company turning every customer
          conversation, voice, text, and physical, into a coordinated
          agentic workflow. Purpose-built for Indian banking, lending,
          insurance and wealth management.
        </p>

        {/* CTA */}
        <button
          className={`mt-9 rounded-[12px] px-7 py-2.5 text-[13px] font-semibold text-white shadow-lg transition-all duration-200 active:scale-95 delay-200 ${mounted
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4"
            }`}
          style={{
            backgroundColor: "#5b5ce8",
            boxShadow: "0 8px 24px rgba(91,92,232,0.28)",
            transitionDelay: mounted ? "200ms" : "0ms",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "#5152d8")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "#5b5ce8")
          }
        >
          Book a demo
        </button>

        {/* Stats */}
        <div
          className={`mt-14 flex flex-wrap justify-center w-full max-w-5xl transition-all duration-700 ${mounted
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4"
            }`}
          style={{ transitionDelay: mounted ? "300ms" : "0ms" }}
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center gap-1 px-10 py-3 text-center ${i !== 0 ? "border-l border-[#e3e7f5]" : ""
                }`}
            >
              <span
                className="text-2xl sm:text-3xl font-semibold tabular-nums tracking-tight"
                style={{ color: "#4b4b4b" }}
              >
                {stat.value}
              </span>
              <span
                className="text-[11px] leading-snug"
                style={{ color: "#8a8a8a" }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── FROM CUR8 TO DARWIX ── */}
      <section className="w-full bg-white px-6 py-20 flex flex-col items-center">
        <SectionLabel>Certifications Section</SectionLabel>
        <h2 className="mt-4 text-3xl sm:text-4xl lg:text-[46px] font-semibold leading-tight tracking-[-0.02em] text-center" style={{ color: "#4b4b4b" }}>
          From CUR8 to <span style={{ color: "#5b5ce8" }}>Darwix AI</span>
        </h2>
        <p className="mt-4 max-w-2xl text-center text-sm sm:text-base leading-relaxed" style={{ color: "#7a7a7a" }}>
          Darwix AI evolved from CUR8 with a simple belief — every <strong style={{ color: "#4b4b4b" }}>BFSI conversation</strong> should drive outcomes, not get lost in disconnected systems. Built for banks, NBFCs, and insurers, <strong style={{ color: "#4b4b4b" }}>Darwix AI</strong> transforms customer interactions into intelligent, compliant, and automated workflows that improve revenue, operations & customer experience.
        </p>

        {/* Timeline */}
        <div className="mt-14 w-full max-w-5xl overflow-x-auto">
          <div className="relative flex items-start min-w-[600px]">
            <div className="absolute top-[10px] left-0 right-0 h-px z-0" style={{ backgroundColor: "#d5d7f0" }} />
            {timeline.map((item) => (
              <div key={item.year} className="relative flex-1 flex flex-col items-center px-3">
                <div className="w-5 h-5 rounded-full border-4 border-white z-10 mb-3 shadow-sm flex-shrink-0" style={{ backgroundColor: "#5b5ce8", outline: "2px solid #d5d7f0" }} />
                <span className="text-[10px] font-semibold tracking-[0.2em] mb-1" style={{ color: "#5b5ce8" }}>{item.year}</span>
                <span className="text-[12px] font-semibold text-center mb-1" style={{ color: "#4b4b4b" }}>{item.title}</span>
                <p className="text-[11px] text-center leading-relaxed" style={{ color: "#9aa0b2" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission / Vision */}
        <div className="mt-14 w-full">
          <MissionVisionCards />
        </div>
      </section>

      {/* ── LEADERSHIP ── */}
      <section className="w-full px-6 py-20 flex flex-col items-center" style={{ backgroundColor: "#fbfbfd" }}>
        <SectionLabel>Leadership</SectionLabel>
        <h2 className="mt-4 text-3xl sm:text-4xl lg:text-[46px] font-semibold leading-tight tracking-[-0.02em] text-center" style={{ color: "#4b4b4b" }}>
          Built by leaders from <span style={{ color: "#5b5ce8" }}>India's</span> top institutions.
        </h2>
        <p className="mt-4 max-w-lg text-center text-sm sm:text-base leading-relaxed" style={{ color: "#7a7a7a" }}>
          Battle-tested at the world's best firms. Deep BFSI domain expertise across operations, product engineering, and go-to-market.
        </p>

        <div className="mt-12 w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Ajay Sethi - Using New FounderCard Component */}
          <FounderCard
            name="Ajay Sethi"
            role="Co-Founder"
            bio="14+ years of experience in revenue and product transformation at top firms. Led the original CUR8 vision of fixing the broken conversation layer in Indian banking and insurance."
            avatarUrl="/images/about/ajay_sethi.png"
            linkedinUrl="https://www.linkedin.com/in/ajaypalsinghsethi/"
            brands={[
              { name: "IIM Calcutta", logo: "/images/about/IIMcalcutta.png" },
              { name: "Accenture", logo: "/images/about/accenture.png" },
              { name: "PayU", logo: "/images/about/payu.png" },
              { name: "CARS24", logo: "/images/about/cars24.png" },
            ]}
          />

          {/* Hanit Awal - Using New FounderCard Component */}
          <FounderCard
            name="Hanit Awal"
            role="Co-Founder"
            bio="12+ years of experience leading M&A, business, and operations across India's top corporates & unicorns. Architects the scalable, intelligent technical backbone of Darwix AI."
            avatarUrl="/images/about/Hanit_awal.png"
            linkedinUrl="https://www.linkedin.com/in/hanitawal/"
            brands={[
              { name: "IIM Indore", logo: "/images/about/IIMindore.png" },
              { name: "Accenture", logo: "/images/about/accenture.png" },
              { name: "Udaan", logo: "/images/about/udaan.png" },
              { name: "EXL", logo: "/images/about/exl.png" },
              { name: "S&P Global", logo: "/images/about/S&P.png" },
            ]}
          />
        </div>
      </section>

      {/* ── OUR VALUES ── */}
      <section className="w-full bg-white px-6 py-20 flex flex-col items-center">
        <SectionLabel>Our Values</SectionLabel>
        <h2 className="mt-4 text-3xl sm:text-4xl lg:text-[46px] font-semibold leading-tight tracking-[-0.02em] text-center" style={{ color: "#4b4b4b" }}>
          A unique team, a <span style={{ color: "#5b5ce8" }}>unique value system.</span>
        </h2>
        <p className="mt-4 max-w-lg text-center text-sm sm:text-base leading-relaxed" style={{ color: "#7a7a7a" }}>
          Six principles that shape every product decision, every client conversation, and every hire at Darwix AI.
        </p>

        <div className="mt-12 w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {values.map((v) => (
            <div key={v.title} className="rounded-[18px] border border-[#eceef4] bg-[#f7f8ff] p-6 flex flex-col gap-4 shadow-[0_8px_24px_rgba(37,44,97,0.04)] hover:border-[#d5d7f0] transition-colors duration-200">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#e5e7f5] bg-white">
                <ValueIcon type={v.icon} />
              </div>
              <h3 className="text-[15px] font-semibold" style={{ color: "#4b4b4b" }}>{v.title}</h3>
              <p className="text-[13px] leading-[1.55]" style={{ color: "#7a7a7a" }}>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── RECOGNITION ── */}
      <section className="w-full px-6 py-20 flex flex-col items-center" style={{ backgroundColor: "#fbfbfd" }}>
        <SectionLabel>Recognition</SectionLabel>
        <h2 className="mt-4 text-3xl sm:text-4xl lg:text-[46px] font-semibold leading-tight tracking-[-0.02em] text-center" style={{ color: "#4b4b4b" }}>
          AI recognition <span style={{ color: "#5b5ce8" }}>& honours</span>
        </h2>

        <div className="mt-12 w-full max-w-5xl grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            {
              logo: (
                <img
                  src="/images/about/Aditya%20birla.svg"
                  alt="Aditya Birla Capital"
                  className="h-12 object-contain"
                />
              ),
              title: "Aditya Birla Capital · Innovation Winner",
              desc: "Handpicked to present at the Annual Innovation & Business Showcase, recognised for our agentic AI approach to BFSI revenue transformation.",
            },
            {
              logo: (
                <img
                  src="/images/about/nasscom.svg"
                  alt="NASSCOM AI"
                  className="h-12 object-contain"
                />
              ),
              title: "NASSCOM AI · National Finalist 2025",
              desc: "Recognised nationally by NASSCOM for innovative AI-first solutions addressing real enterprise challenges in the Indian BFSI sector.",
            },
            {
              logo: (
                <img
                  src="/images/about/google.svg"
                  alt="Google for Startups"
                  className="h-12 object-contain"
                />
              ),
              title: "Google for Startups · AI First India 2025",
              desc: "Selected for the Google for Startups Accelerator as part of the AI-First India cohort, for differentiated AI infrastructure for financial services.",
            },
          ].map((card) => (
            <div key={card.title} className="rounded-[18px] border border-[#eceef4] bg-white p-8 flex flex-col items-center text-center gap-5 shadow-[0_8px_22px_rgba(37,44,97,0.05)]">
              <div className="flex h-14 items-center justify-center">{card.logo}</div>
              <div className="border-t border-dashed w-full" style={{ borderColor: "#e6e8ef" }} />
              <div>
                <p className="text-[13px] font-semibold mb-2" style={{ color: "#4b4b4b" }}>{card.title}</p>
                <p className="text-[12px] leading-[1.55]" style={{ color: "#7a7a7a" }}>{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── IN THE NEWS ── */}
      <section className="w-full bg-white px-6 py-20 flex flex-col items-center">
        <SectionLabel>In The News</SectionLabel>
        <h2 className="mt-4 text-3xl sm:text-4xl lg:text-[46px] font-semibold leading-tight tracking-[-0.02em] text-center" style={{ color: "#4b4b4b" }}>
          We've been <span style={{ color: "#5b5ce8" }}>making headlines.</span>
        </h2>

        {/* Media row */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-5">
          {[
            { label: "The Economic Times", bg: "#C8102E", prefix: "ET" },
            { label: "PTI", bg: "#1a1a1a", prefix: "PTI" },
            { label: "indianstartuptimes", bg: "#e63329", prefix: "IST" },
            { label: "YOURSTORY", bg: null, prefix: "YS", border: "#e63329" },
            { label: "ENTRACKR", bg: "#FF6B35", prefix: "ENT" },
            { label: "VCCIRCLE", bg: "#0066FF", prefix: "VCC" },
          ].map((pub) => (
            <div key={pub.label} className={`flex items-center gap-2 ${pub.border ? "border rounded px-2 py-0.5" : ""}`} style={pub.border ? { borderColor: pub.border } : {}}>
              {pressLogos[pub.label] ? (
                <img src={pressLogos[pub.label]} alt={pub.label} className="h-6 w-auto" />
              ) : pub.prefix && pub.bg ? (
                <span className="rounded px-1.5 py-0.5 text-[10px] font-black text-white" style={{ backgroundColor: pub.bg }}>{pub.prefix}</span>
              ) : pub.prefix ? (
                <span className="text-[10px] font-black" style={{ color: "#e63329" }}>{pub.prefix}</span>
              ) : null}
              {!pressLogos[pub.label] && (
                <span className="text-[12px] font-bold" style={{ color: pub.bg || "#4b4b4b" }}>{pub.label}</span>
              )}
            </div>
          ))}
        </div>

        {/* Article cards */}
        <div className="mt-10 w-full max-w-5xl grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { source: "Economic Times", title: "GenAI startup Darwix AI raises $1.5 million in seed funding.", desc: "Darwix AI raised $1.5M to build a GenAI stack for omni-channel sales conversations in global BFSI enterprises." },
            { source: "Indian Startup Times", title: "Darwix AI raises $1.5M to build industry-first Gen AI stack.", desc: "Coverage of Darwix AI's seed round and its mission to level up omni-channel sales conversations across global BFSI enterprises." },
            { source: "VCCircle", title: "Darwix AI secures funding in latest BFSI AI round.", desc: "VCCircle covers Darwix AI's funding alongside other prominent Indian startups raising capital in the AI-for-enterprise space." },
          ].map((a) => (
            <div key={a.title} className="rounded-[18px] border border-[#eceef4] bg-[#f7f8ff] p-6 flex flex-col gap-3 shadow-[0_8px_22px_rgba(37,44,97,0.04)] hover:border-[#d5d7f0] transition-colors duration-200">
              {pressLogos[a.source] ? (
                <img src={pressLogos[a.source]} alt={a.source} className="h-6 w-auto" />
              ) : (
                <span className="self-start rounded-full border border-[#e5e7f5] bg-white px-3 py-1 text-[10px] font-semibold" style={{ color: "#6e7390" }}>{a.source}</span>
              )}
              <h3 className="text-[14px] font-semibold leading-snug" style={{ color: "#4b4b4b" }}>{a.title}</h3>
              <p className="flex-1 text-[12px] leading-[1.55]" style={{ color: "#7a7a7a" }}>{a.desc}</p>
              <a href="#" className="mt-1 text-[12px] font-semibold hover:opacity-75 transition-opacity" style={{ color: "#5b5ce8" }}>Read article →</a>
            </div>
          ))}
        </div>
      </section>

      {/* ── BACKED BY THE BEST ── */}
      <section className="w-full px-6 py-20 flex flex-col items-center" style={{ backgroundColor: "#fbfbfd" }}>
        <SectionLabel>Backed By The Best</SectionLabel>
        <h2 className="mt-4 text-3xl sm:text-4xl lg:text-[46px] font-semibold leading-tight tracking-[-0.02em] text-center" style={{ color: "#4b4b4b" }}>
          Leading institutional investors & <span style={{ color: "#5b5ce8" }}>50+ angels.</span>
        </h2>
        <p className="mt-4 max-w-xl text-center text-sm sm:text-base leading-relaxed" style={{ color: "#7a7a7a" }}>
          We're backed by institutional funds and CXO-level angels who bring more than capital, they bring BFSI domain depth, GTM networks, and operator credibility
        </p>

        <div className="mt-12 w-full max-w-5xl grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {[
            { name: "rebalance", desc: "India's only fund focused on diverse founders", logo: <img src="/images/about/rebalance.png" alt="rebalance" className="h-14 object-contain" /> },
            { name: "Inflection Point", desc: "India's most active VC investor for 3 years", logo: <img src="/images/about/inflection%20point%20ventures.png" alt="Inflection Point Ventures" className="h-14 object-contain" /> },
            { name: "Growth91", desc: "Leading jewelry house backed family office", logo: <img src="/images/about/growth%2091.png" alt="Growth91" className="h-14 object-contain" /> },
            { name: "RR", desc: "Backed by 3 key legacy unicorn LPs", logo: <div className="flex h-11 w-11 items-center justify-center rounded-full border-2" style={{ borderColor: "#4b4b4b" }}><span className="text-[15px] font-black" style={{ color: "#4b4b4b" }}>RR</span></div> },
            { name: "JITO", desc: "Shaping growth opportunities for start-ups", logo: <img src="/images/about/jito%20incubation.webp" alt="JITO Incubation & Innovation Foundation" className="h-14 object-contain" /> },
          ].map((inv) => (
            <div key={inv.name} className="rounded-[18px] border border-[#eceef4] bg-white p-5 flex flex-col items-center text-center gap-3 shadow-[0_8px_22px_rgba(37,44,97,0.05)]">
              <div className="flex h-14 items-center justify-center">{inv.logo}</div>
              <p className="text-[11px] leading-relaxed" style={{ color: "#7a7a7a" }}>{inv.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── ANGEL INVESTORS ── */}
      <section className="w-full bg-white px-6 py-12 flex flex-col items-center border-t border-dashed" style={{ borderColor: "#e6e8ef" }}>
        <p className="text-[13px] text-center" style={{ color: "#7a7a7a" }}>
          Also backed by{" "}
          <span className="font-semibold" style={{ color: "#5b5ce8" }}>50+ angel investors</span>
        </p>
        <p className="mt-1 text-[11px] text-center" style={{ color: "#9aa0b2" }}>
          Industry operators from McKinsey, Goldman Sachs, Jio-Hotstar, PayU, Darwinbox, and more.
        </p>

        <div className="mt-8 w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {visibleAngels.map((angel, i) => (
            <AngelCard key={`${angel.name}-${i}`} angel={angel} />
          ))}
        </div>

        <button
          onClick={() => setExpanded((e) => !e)}
          className="mt-6 flex h-9 w-9 items-center justify-center rounded-full border border-[#e5e7f5] bg-white transition-colors duration-200 hover:border-[#d5d7f0]"
          aria-label={expanded ? "Collapse" : "Expand"}
        >
          <svg className={`h-4 w-4 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`} style={{ color: "#9aa0b2" }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>
      </section>

      {/* ── OUR OFFICES ── */}
      <section className="w-full px-6 py-20 flex flex-col items-center" style={{ backgroundColor: "#fbfbfd" }}>
        <SectionLabel>Our Offices</SectionLabel>
        <h2 className="mt-4 text-3xl sm:text-4xl lg:text-[46px] font-semibold leading-tight tracking-[-0.02em] text-center" style={{ color: "#4b4b4b" }}>
          Headquartered in Gurugram. <span style={{ color: "#5b5ce8" }}>Expanding globally.</span>
        </h2>

        <div className="mt-12 w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { tag: "Headquarters", city: "Gurugram, India", address: "7th Floor, Imperia MindSpace\nGolf Course Extension Road, Sector 62\nGurugram, Haryana 122001", footer: "Engineering · Product · GTM In-Office" },
            { tag: "Regional Office", city: "Dubai, UAE", address: "Innovation One\nDIFC (Dubai International Financial Centre)\nDubai, United Arab Emirates", footer: "MENA HQ · GCC Partnerships" },
          ].map((office) => (
            <div key={office.city} className="rounded-[18px] border border-[#eceef4] bg-white p-8 flex flex-col gap-4 shadow-[0_8px_22px_rgba(37,44,97,0.05)]">
              <div className="flex items-center gap-2">
                <svg className="h-4 w-4" style={{ color: "#5b5ce8" }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                </svg>
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em]" style={{ color: "#5b5ce8" }}>{office.tag}</span>
              </div>
              <div>
                <h3 className="text-[20px] font-semibold tracking-[-0.01em]" style={{ color: "#4b4b4b" }}>{office.city}</h3>
                <p className="mt-2 text-[13px] leading-[1.65] whitespace-pre-line" style={{ color: "#9aa0b2" }}>{office.address}</p>
              </div>
              <div className="mt-auto border-t border-dashed pt-4" style={{ borderColor: "#e6e8ef" }}>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em]" style={{ color: "#9aa0b2" }}>{office.footer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CAREERS ── */}
      <section
        className="w-full px-6 py-24 flex flex-col items-center text-center"
        style={{ backgroundImage: "linear-gradient(135deg, #eef0fb 0%, #e8eaf8 50%, #ede8f8 100%)" }}
      >
        <SectionLabel>Careers at Darwix AI</SectionLabel>
        <h2 className="mt-4 text-3xl sm:text-4xl lg:text-[46px] font-semibold leading-tight tracking-[-0.02em]" style={{ color: "#4b4b4b" }}>
          Join the team building BFSI's agentic future
        </h2>
        <p className="mt-5 max-w-lg text-sm sm:text-base leading-relaxed" style={{ color: "#7a7a7a" }}>
          We're hiring across engineering, product, and operations. If you want to build AI that runs inside India's most regulated industry, we'd love to talk.
        </p>
        <button
          className="mt-9 rounded-[12px] px-7 py-2.5 text-[13px] font-semibold text-white shadow-lg transition-all duration-200 active:scale-95"
          style={{ backgroundColor: "#5b5ce8", boxShadow: "0 8px 24px rgba(91,92,232,0.28)" }}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#5152d8")}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#5b5ce8")}
        >
          Explore all openings
        </button>
      </section>

    </div>
  );
}
