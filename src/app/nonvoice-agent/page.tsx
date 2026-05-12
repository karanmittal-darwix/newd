import type { Metadata } from "next";
import NonVoiceAgentPageClient from "./NonVoiceAgentPageClient";

export const metadata: Metadata = {
  title: "Non-Voice Agents | Darwix AI",
  description:
    "Background workers that close the loop in CRM, LOS, and ledger.",
  keywords:
    "Darwix AI, GenAI platform, omni-channel sales, enterprise AI, sales conversation analytics, AI sales automation, conversation intelligence, customer engagement, sales assistance, AI automation",
  openGraph: {
    images: ["/images/darwixlogo.png"],
  },
};

export default function NonVoiceAgentPage() {
  return <NonVoiceAgentPageClient />;
}
