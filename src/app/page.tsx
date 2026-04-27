import Hero from "@/components/hero/Hero";
import VoicePlayground from "@/components/voice/VoicePlayground";
import CapabilitiesSection from "@/components/capabilities/CapabilitiesSection";
import ParallelDialingSection from "@/components/parallelDialing/ParallelDialingSection";
import LanguagesSection from "@/components/languages/LanguagesSection";
import PostCallSection from "@/components/postcall/PostCallSection";
import IntegrationsSection from "@/components/integrations/integrationsSection";
import DemoCallSection from "@/components/cta/DemoCallSection";
import DemoRequestSection from "@/components/cta/DemoRequestSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <VoicePlayground />
      <CapabilitiesSection />
      <ParallelDialingSection />
      <LanguagesSection />
      <PostCallSection />
      <IntegrationsSection />
      <DemoCallSection />
      <DemoRequestSection />
    </main>
  );
}