import Image from "next/image";

import CapabilityCard from "./CapabilityCard";

import ObjectionGraphic from "./visuals/ObjectionGraphic";
import VoiceWaveGraphic from "./visuals/VoiceWaveGraphic";
import InterruptionGraphic from "./visuals/InterruptionGraphic";
import ToneResponseGraphic from "./visuals/ToneResponseGraphic";
import LongContextGraphic from "./visuals/LongContextGraphic";
import ParallelEngineGraphic from "./visuals/ParallelEngineGraphic";

const CARDS = [
  {
    icon: <Image src="/images/objection.svg" alt="" width={32} height={32} />,
    title: "Objection handling",
    description:
      "Trained on 4M+ Indian enterprise calls. Darwix recognizes objection patterns and responds with grounded rebuttals.",
    visual: <ObjectionGraphic />,
  },

  {
    icon: <Image src="/images/voice.svg" alt="" width={32} height={32} />,
    title: "Human-like voice",
    description:
      "Natural breath, pauses and inflection tuned per language rather than stitched TTS.",
    visual: <VoiceWaveGraphic />,
  },

  {
    icon: (
      <Image src="/images/interruption.svg" alt="" width={32} height={32} />
    ),
    title: "Interruption handling",
    description:
      "Full-duplex turn taking with intent retention and fast topic recovery.",
    visual: <InterruptionGraphic />,
  },

  {
    icon: <Image src="/images/tone.svg" alt="" width={32} height={32} />,
    title: "Tone-aware responses",
    description:
      "Responses shift in real time based on customer sentiment and tone.",
    visual: <ToneResponseGraphic />,
  },

  {
    icon: <Image src="/images/longContext.svg" alt="" width={32} height={32} />,
    title: "Long-call context",
    description:
      "Dialog memory across holds, transfers and follow-up conversations.",
    visual: <LongContextGraphic />,
  },

  {
    icon: <Image src="/images/plCall.svg" alt="" width={32} height={32} />,
    title: "Parallel calling engine",
    description:
      "1,200+ concurrent conversations per second with compliance built in.",
    visual: <ParallelEngineGraphic />,
  },
];

export default function CapabilitiesSection() {
  return (
    <section
      id="capabilities"
      className="bg-gray-50 py-16 sm:py-24 px-4 sm:px-6"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.2em] text-indigo-500 font-semibold mb-3">
            Capabilities
          </p>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
            Things most voice bots fake.
            <br />
            <span className="text-indigo-600">Darwix</span> actually does them.
          </h2>

          <p className="mt-5 text-gray-500 max-w-2xl mx-auto">
            Each capability is measurable, benchmarked quarterly against human
            agents.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
          {CARDS.map((card) => (
            <CapabilityCard
              key={card.title}
              icon={card.icon}
              title={card.title}
              description={card.description}
              visual={card.visual}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
