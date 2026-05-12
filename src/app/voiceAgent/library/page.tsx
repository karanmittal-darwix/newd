import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Voice Playground | Darwix AI",
  description: "Interactive voice agent playground for testing and demonstration.",
  keywords: "Darwix AI, GenAI platform, omni-channel sales, enterprise AI, sales conversation analytics, AI sales automation, conversation intelligence, customer engagement, sales assistance, AI automation",
  openGraph: {
    images: ["/images/darwixlogo.png"],
  },
};

import VoicePlayground from "../components/voice/VoicePlayground";

export default function LibraryPage() {
  return (
    <main>
      <VoicePlayground />
    </main>
  );
}
