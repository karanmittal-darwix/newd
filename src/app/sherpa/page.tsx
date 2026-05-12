import type { Metadata } from "next";
import SherpaPageClient from "./SherpaPageClient";

export const metadata: Metadata = {
  title: "Sherpa | Darwix AI",
  description:
    "Field-agent wearable for live coaching and conversation intelligence.",
  keywords:
    "Darwix AI, GenAI platform, omni-channel sales, enterprise AI, sales conversation analytics, AI sales automation, conversation intelligence, customer engagement, sales assistance, AI automation",
  openGraph: {
    images: ["/images/darwixlogo.png"],
  },
};

export default function SherpaPage() {
  return <SherpaPageClient />;
}
