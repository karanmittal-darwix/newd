import Filters from "./Filters";
import AudioPlayer from "./AudioPlayer";
import { FEATURED_SAMPLE } from "@/data/mockData";

export default function VoicePlayground() {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-xs font-semibold tracking-widest text-indigo-500 uppercase mb-3">
            Voice Playground
          </p>
          <h2 className="text-4xl font-bold text-gray-900 leading-tight">
            Hear exactly how{" "}
            <span className="text-indigo-600">Darwix</span> sounds for your
            industry, in your language, with your tone.
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto text-base">
            Pick a combination below. Every sample was produced by the live
            Darwix agent — no pre-recorded actors, no post-editing.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-5">
          <Filters />
        </div>

        {/* Audio Player */}
        <AudioPlayer sample={FEATURED_SAMPLE} />
      </div>
    </section>
  );
}