import type { AudioSample, PopularSample } from "@/types";

export const HERO_STATS = [
  { value: "22", label: "Indian & global\nlanguages" },
  { value: "1,200+", label: "Parallel dials /\nsecond" },
  { value: "< 400ms", label: "End-to-end\nvoice latency" },
  { value: "94%", label: "Objection handled\nfirst-try" },
  { value: "30+", label: "Post-call\naction triggers" },
  { value: "4hr", label: "Max call context\nretained" },
];

export const FEATURED_SAMPLE: AudioSample = {
  id: 1,
  industry: "BFSI",
  duration: "2:48",
  title: "Loan-against-property",
  subtitle: "Welcome call",
  languages: ["English", "Hindi", "Indian", "Female"],
  audioSrc: "/audio/voice4.mp3",
  videoSrc: "/video/waveform.mp4",
  sentimentLabel: "HESITANT → RESOLVED",
  sentimentResolved: true,
  languageTags: ["English", "Hindi", "Indian", "Female"],
  voiceGender: "Female",
  transcript: [
    {
      id: 1,
      speaker: "agent",
      name: "Ananya",
      time: "00:02",
      text: "Namaste, main Darwix se Ananya bol rahi hoon. Kya yeh Rohit ji ka number hai?",
    },
    {
      id: 2,
      speaker: "customer",
      name: "Rohit",
      time: "00:06",
      text: "Haan bol rahi hoon, batao?",
    },
    {
      id: 3,
      speaker: "agent",
      name: "Ananya",
      time: "00:09",
      text: "Sir, aapka loan-against-property welcome call hai. Main ek minute ke liye confirm karna chahti hoon, disbursement amount ₹42 lakhs correct hai?",
      tone: "warm",
    },
    {
      id: 4,
      speaker: "customer",
      name: "Rohit",
      time: "00:18",
      text: "Haan sahi hai. Lekin EMI date thodi late kar sakte ho? Salary 7th ko aati hai.",
      event: "objection detected",
    },
    {
      id: 5,
      speaker: "agent",
      name: "Ananya",
      time: "00:26",
      text: "Bilkul, main samajh sakti hoon. Aapke liye EMI date 10th set kar deti hoon, ek approval message aayega WhatsApp par, aap confirm kar dijiye.",
      tone: "reassuring",
      trigger: "EMI shift · 7 → 10",
    },
    {
      id: 6,
      speaker: "customer",
      name: "Rohit",
      time: "00:31",
      text: "Theek hai, thanks.",
    },
  ],
  intents: [
    { label: "EMI date change request", confidence: 94 },
    { label: "Document request · Sanction letter", confidence: 88 },
    { label: "Disbursement confirmation", confidence: 97 },
  ],
  postCallActions: [
    { icon: "whatsapp", text: "WhatsApp: sanction letter + EMI schedule → Rohit" },
    { icon: "calendar", text: "EMI date updated to 10th of month in CRM" },
    { icon: "email", text: "Internal summary emailed to RM" },
  ],
};

export const POPULAR_SAMPLES: PopularSample[] = [
  { id: 1, industry: "BFSI", duration: "2:48", title: "Loan-against-property · Welcome call", languages: ["English", "Hindi", "Indian F"] },
  { id: 2, industry: "BFSI", duration: "3:12", title: "NPA recovery · Soft collection", languages: ["Hindi", "English", "Indian M"] },
  { id: 3, industry: "BFSI", duration: "1:54", title: "Vehicle loan · Pre-dues reminder", languages: ["Marathi", "Hindi", "Indian F"] },
  { id: 4, industry: "HEALTHCARE", duration: "1:22", title: "Appointment confirmation & prep", languages: ["English", "Tamil", "Indian F"] },
  { id: 5, industry: "INSURANCE", duration: "2:05", title: "Renewal nudge + payment link", languages: ["Hindi", "English", "Indian M"] },
  { id: 6, industry: "ED-TECH", duration: "4:30", title: "Lead qualification · B.Tech aspirant", languages: ["Hindi", "English", "Indian F"] },
  { id: 7, industry: "TELECOM", duration: "3:48", title: "Broadband churn-save intervention", languages: ["Kannada", "English", "Indian M"] },
  { id: 8, industry: "E-COMMERCE", duration: "0:50", title: "Delivery reschedule & COD confirm", languages: ["Hindi", "Indian F"] },
  { id: 9, industry: "REAL ESTATE", duration: "2:36", title: "Site-visit booking + directions", languages: ["English", "Hindi", "Indian M"] },
];

export const INDUSTRY_OPTIONS = ["All", "BFSI", "Healthcare", "Insurance", "Ed-Tech", "Telecom", "E-Commerce", "Real Estate"];
export const PRODUCT_OPTIONS = ["All", "Outbound", "Inbound", "Blended"];
export const USE_CASE_OPTIONS = ["All", "Welcome call", "Collections", "Lead qualification", "Appointment", "Renewal"];
export const LANGUAGE_OPTIONS = ["All", "English", "Hindi", "Tamil", "Marathi", "Kannada", "Telugu"];