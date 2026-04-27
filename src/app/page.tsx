import Hero from "@/components/hero/Hero";
import VoicePlayground from "@/components/voice/VoicePlayground";
import PopularSamples from "@/components/samples/PopularSamples";
import CapabilitiesSection from "@/components/capabilities/CapabilitiesSection";
import ParallelDialingSection from "@/components/parallelDialing/ParallelDialingSection";
import LanguagesSection from "@/components/languages/LanguagesSection";
import PostCallSection from "@/components/postcall/PostCallSection";
import IntegrationsSection from "@/components/integrations/integrationsSection";
import DemoCallSection from "@/components/cta/DemoCallSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <VoicePlayground />
      <PopularSamples />
      <CapabilitiesSection />
      <ParallelDialingSection />
      <LanguagesSection />
      <PostCallSection />
      <IntegrationsSection />
      <DemoCallSection />
    </main>
  );
}