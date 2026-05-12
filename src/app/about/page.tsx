import type { Metadata } from "next";
import AboutPageClient from "./AboutPageClient";

export const metadata: Metadata = {
  title: "About | Darwix AI",
  description:
    "Darwix AI evolved from CUR8 with a simple belief: every BFSI conversation should drive outcomes, not get lost in disconnected systems.",
  keywords:
    "Darwix AI, GenAI platform, omni-channel sales, enterprise AI, sales conversation analytics, AI sales automation, conversation intelligence, customer engagement, sales assistance, AI automation",
  openGraph: {
    images: ["/images/darwixlogo.png"],
  },
};

export default function AboutPage() {
  return <AboutPageClient />;
}
