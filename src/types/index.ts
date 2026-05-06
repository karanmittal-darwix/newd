export type Speaker = "agent" | "customer";

export interface TranscriptMessage {
  id: number;
  speaker: Speaker;
  name: string;
  time: string;
  start: number;
  end: number;
  text: string;
  tone?: string;
  event?: string;
  trigger?: string;
}

export interface DetectedIntent {
  label: string;
  // confidence: number;
}

export interface PostCallAction {
  icon: "whatsapp" | "calendar" | "email";
  text: string;
}


export interface SentimentStage {
  label: string;
  color: string;
}


export interface SentimentJourneyStage {
  label: string;
  start: number; // seconds
  end: number;   // seconds
  color: string;
}


export interface SampleSentiment {
  from: string;
  to: string;
  resolved: boolean;

  stages: SentimentStage[];

  sentimentJourney: SentimentJourneyStage[];
}


// ── UI-driven AudioSample schema ─────────────────────────

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


export interface SampleIntelligence {
  intents: DetectedIntent[];
  actions: PostCallAction[];
}


export interface SampleSummary {
  text: string;
  outcome: string;
}


export interface AudioSample {
  id: number;

  header: SampleHeader;
  sentiment: SampleSentiment;
  transcript: TranscriptMessage[];
  intelligence: SampleIntelligence;
  summary: SampleSummary;
}


// ── Filter state ─────────────────────────────────────────

export interface FilterState {
  industry: string;
  product: string;
  useCase: string;
  language: string;
}