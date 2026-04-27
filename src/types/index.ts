export type Speaker = "agent" | "customer";

export interface TranscriptMessage {
  id: number;
  speaker: Speaker;
  name: string;
  time: string;
  text: string;
  tone?: string;
  event?: string;
  trigger?: string;
}

export interface DetectedIntent {
  label: string;
  confidence: number;
}

export interface PostCallAction {
  icon: "whatsapp" | "calendar" | "email";
  text: string;
}

export interface SentimentStage {
  label: string;       // e.g. "HESITANT", "CONFUSED", "ANGRY"
  color: string;       // tailwind bg class e.g. "bg-red-400"
}

// ── UI-driven AudioSample schema ──────────────────────────────────────────────

export interface SampleHeader {
  industry: string;
  product: string;
  useCase: string;

  title: string;
  subtitle: string;
  duration: string;

  languages: string[];
  voiceGender: "Male" | "Female";

  audioSrc: string;
  videoSrc?: string;
}

export interface SampleSentiment {
  from: string;           // e.g. "CONFUSED"
  to: string;             // e.g. "RESOLVED"
  resolved: boolean;
  stages: SentimentStage[];
}

export interface SampleIntelligence {
  intents: DetectedIntent[];
  actions: PostCallAction[];
}

export interface SampleSummary {
  text: string;
  outcome: string;        // e.g. "Details shared via WhatsApp"
}

export interface AudioSample {
  id: number;

  header: SampleHeader;
  sentiment: SampleSentiment;
  transcript: TranscriptMessage[];
  intelligence: SampleIntelligence;
  summary: SampleSummary;
}

// ── Filter state ──────────────────────────────────────────────────────────────

export interface FilterState {
  industry: string;
  product: string;
  useCase: string;
  language: string;
}