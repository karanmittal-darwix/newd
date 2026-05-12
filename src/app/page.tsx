import type { Metadata } from "next";
import HomePageClient from "./HomePageClient";

export const metadata: Metadata = {
  title: "Home | Darwix AI",
  description:
    "Real-time intelligence, agentic suite, and BFSI Small Language Model for enterprise sales conversations.",
  keywords:
    "Darwix AI, GenAI platform, omni-channel sales, enterprise AI, sales conversation analytics, AI sales automation, conversation intelligence, customer engagement, sales assistance, AI automation",
  openGraph: {
    images: ["/images/darwixlogo.png"],
  },
};

export default function HomePage() {
  return <HomePageClient />;
}
