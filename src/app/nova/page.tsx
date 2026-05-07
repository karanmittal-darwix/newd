import { Manrope } from "next/font/google";

import DemoRequestSection from "@/components/DemoRequestSection";
import NovaHero from "./components/NovaHero";
import NovaPillarsSection from "./components/NovaPillarsSection";
import TrustedLogosBar from "./components/TrustedLogosBar";
import NovaAdaptiveSection from "./components/NovaAdaptiveSection";
import NovaSurfacesSection from "./components/NovaSurfacesSection";

const manrope = Manrope({ subsets: ["latin"], weight: ["400", "500", "600"] });

export const metadata = {
  title: "Nova | Darwix AI",
  description:
    "Physical AI for the real world. Voice, agents, and field in lockstep. Nova is the in-store AI concierge a screen, a kiosk, a presence at the counter.",
};

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