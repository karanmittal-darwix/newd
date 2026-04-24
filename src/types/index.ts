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

export interface AudioSample {
  id: number;
  industry: string;
  duration: string;
  title: string;
  subtitle: string;
  languages: string[];
  audioSrc: string;
  videoSrc?: string;
  transcript: TranscriptMessage[];
  intents: DetectedIntent[];
  postCallActions: PostCallAction[];
  sentimentLabel: string;
  sentimentResolved: boolean;
  languageTags: string[];
  voiceGender: string;
}

export interface PopularSample {
  id: number;
  industry: string;
  duration: string;
  title: string;
  languages: string[];
}