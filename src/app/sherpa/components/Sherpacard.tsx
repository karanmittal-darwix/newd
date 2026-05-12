// SherpaCard.tsx – pixel-perfect Tailwind + TypeScript

import IMG1 from "../images/image1.png";
import IMG2 from "../images/image2.png";
import IMG3 from "../images/image3.png";

interface Section {
  tagNumber: string;
  tag: string;
  headline: string[];
  body: string;
  features: string[];
  image: { src: string } | string;
  imageAlt: string;
  imageRight: boolean;
}

const sections: Section[] = [
  {
    tagNumber: "01",
    tag: "LIVE TRANSCRIPTION & SUMMARY",
    headline: ["Every word, captured.", "Every objection, surfaced."],
    body:
      "Sherpa transcribes conversations in real time across Hindi, English & 11 Indic languages. The agent speaks naturally. The system listens, tags intent, and whispers the right next line.",
    features: [
      "150Hz multi-speaker capture, on-device ANC",
      "Code-mix Hindi-English supported out of the box",
      "Auto-tagged: TA, commitments, objections, disclosures",
    ],
    image: IMG1,
    imageAlt: "Agent and customer conversation",
    imageRight: true,
  },
  {
    tagNumber: "02",
    tag: "COACH & FAQ INTELLIGENCE",
    headline: ["The right answer.", "In the right moment."],
    body:
      "A unified intelligence layer that feeds field officers the exact FAQ — pulled from product circulars, policy docs, and historic resolutions — the second a customer asks. Boosts consistency, compliance and skill growth, call after call.",
    features: [
      "Sub-200ms response time on the in-ear prompt",
      "Trained on circulars, not the public internet",
      "Coaching cards auto-routed to manager after every visit",
    ],
    image: IMG2,
    imageAlt: "Live transcription and call summary UI",
    imageRight: false,
  },
  {
    tagNumber: "03",
    tag: "AUTO-KYC & COMPLIANCE",
    headline: ["Verify, in conversation.", "Not in a queue."],
    body:
      "Sherpa cross-checks the spoken disclosure script against the document on file — name, DOB, address, mandate, consent. Drift, mismatches, missed disclosures are flagged before the visit closes, not on a Monday-morning audit.",
    features: [
      "74 parameter compliance scoring, per visit",
      "SBI fair-practice prompts built-in",
      "One-click audit report, signed and timestamped",
    ],
    image: IMG3,
    imageAlt: "KYC compliance dashboard",
    imageRight: true,
  },
];

function FeatureBullet({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3 text-slate-600 text-[13.5px] leading-relaxed">
      <span className="mt-[3px] flex-shrink-0 w-[18px] h-[18px] rounded-full bg-indigo-100 flex items-center justify-center">
        <svg width="7" height="7" viewBox="0 0 7 7" fill="none">
          <circle cx="3.5" cy="3.5" r="3" fill="#5B5FC7" />
        </svg>
      </span>
      <span>{text}</span>
    </li>
  );
}

function SectionCard({ section }: { section: Section }) {
  const textCol = (
    <div className="flex flex-col justify-center">
      <div className="inline-flex items-center gap-2 mb-5 w-fit">
        <span className="text-[10px] font-bold tracking-[0.18em] text-indigo-500 uppercase bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-full whitespace-nowrap">
          {section.tagNumber} · {section.tag}
        </span>
      </div>

      <h2 className="text-[28px] sm:text-[32px] font-extrabold text-slate-900 leading-[1.15] tracking-[-0.5px] mb-4">
        {section.headline.map((line, i) => (
          <span key={i} className="block">
            {line}
          </span>
        ))}
      </h2>

      <p className="text-slate-500 text-[13.5px] leading-[1.7] mb-7 max-w-[420px]">
        {section.body}
      </p>

      <ul className="space-y-3">
        {section.features.map((f, i) => (
          <FeatureBullet key={i} text={f} />
        ))}
      </ul>
    </div>
  );

  const imageSrc =
    typeof section.image === "string" ? section.image : section.image.src;

  const imageCol = (
    <div className="w-full h-full min-h-[260px] flex items-center justify-center">
      <img
        src={imageSrc}
        alt={section.imageAlt}
        className="w-full h-auto max-h-[340px] object-cover rounded-2xl shadow-md"
        style={{ objectPosition: "center" }}
      />
    </div>
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center py-14 border-b border-slate-100 last:border-0">
      {section.imageRight ? (
        <>
          {textCol}
          {imageCol}
        </>
      ) : (
        <>
          {imageCol}
          {textCol}
        </>
      )}
    </div>
  );
}

export default function SherpaCard() {
  return (
    <div className="w-full max-w-[1120px] bg-white rounded-[28px] shadow-none border border-slate-100 overflow-hidden mx-auto py-12 px-4">
      {/* ── Hero ── */}
      <div className="text-center px-8 sm:px-16 pt-14 pb-12 border-b border-slate-100">
        <p className="text-[10px] font-bold tracking-[0.25em] text-indigo-500 uppercase mb-4">
          Sherpa for BFSI
        </p>

        <h1 className="text-[38px] sm:text-[46px] font-extrabold text-slate-900 tracking-[-1px] leading-[1.1] mb-5">
          Wearable Gen-AI for the{" "}
          <span className="text-indigo-500 italic">frontline.</span>
        </h1>

        <p className="text-slate-500 text-[14px] leading-[1.75] max-w-[580px] mx-auto">
          Sherpa brings live guidance, instant knowledge, and post-call coaching
          together in one place. Field officers get smart prompts while they
          speak, quick answers from a growing knowledge base, and clear feedback
          after every interaction.
        </p>
      </div>

      {/* ── Sections ── */}
      <div className="px-8 sm:px-14">
        {sections.map((s, i) => (
          <SectionCard key={i} section={s} />
        ))}
      </div>
    </div>
  );
}