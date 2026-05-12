import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nova | Darwix AI",
  description: "Nova is the Darwix's brain, re-imagined for stores, kiosks, dealerships and showrooms. Out of the cloud, into the floor. Listens, speaks, responds in real time, in the customer's language.",
  keywords: "Darwix AI, GenAI platform, omni-channel sales, enterprise AI, sales conversation analytics, AI sales automation, conversation intelligence, customer engagement, sales assistance, AI automation",
  openGraph: {
    images: ["/images/darwixlogo.png"],
  },
};

import { Manrope } from "next/font/google";

import DemoRequestSection from "@/components/DemoRequestSection";
import NovaHero from "./components/NovaHero";
import NovaPillarsSection from "./components/NovaPillarsSection";
import TrustedLogosBar from "./components/TrustedLogosBar";
import NovaAdaptiveSection from "./components/NovaAdaptiveSection";
import NovaSurfacesSection from "./components/NovaSurfacesSection";

const manrope = Manrope({ subsets: ["latin"], weight: ["400", "500", "600"] });

export default function NovaPage() {
  return (
    <main className={manrope.className}>
      <NovaHero />
      <NovaPillarsSection />
      <TrustedLogosBar />
      <NovaAdaptiveSection />
      <NovaSurfacesSection />
      <DemoRequestSection />
    </main>
  );
}