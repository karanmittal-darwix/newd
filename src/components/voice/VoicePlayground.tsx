"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import Filters from "./Filters";
import AudioPlayer from "./AudioPlayer";
import PopularSamples from "@/components/samples/PopularSamples";
import { AUDIO_SAMPLES } from "@/data/mockData";
import type { AudioSample, FilterState } from "@/types";

export default function VoicePlayground() {
  const playerRef = useRef<HTMLDivElement>(null);
  const audioPlayerRef = useRef<any>(null);

  const [selectedSample, setSelectedSample] = useState<AudioSample>(
    AUDIO_SAMPLES[0],
  );
  const [isPlaying, setIsPlaying] = useState(false);
  const [filters, setFilters] = useState<FilterState>({
    industry: "All",
    product: "All",
    useCase: "All",
    language: "All",
  });

  // Stop and reset audio on component unmount
  useEffect(() => {
    return () => {
      if (audioPlayerRef.current) {
        audioPlayerRef.current.pause();
      }
      setIsPlaying(false);
    };
  }, []);

  const filteredSamples = AUDIO_SAMPLES.filter((s) => {
    const { industry, product, useCase, language } = filters;
    if (industry !== "All" && s.header.industry !== industry) return false;
    if (product !== "All" && s.header.product !== product) return false;
    if (useCase !== "All" && s.header.useCase !== useCase) return false;
    if (language !== "All" && !s.header.languages.includes(language))
      return false;
    return true;
  });

  const handleSelectSample = useCallback((sample: AudioSample) => {
    setSelectedSample(sample);

    setTimeout(() => {
      if (playerRef.current) {
        window.scrollTo({
          top: playerRef.current.offsetTop - 90,
          behavior: "smooth",
        });
      }
    }, 50);
    // No imperative play() call here — AudioPlayer owns playback entirely
  }, []);

  const handleFilterChange = useCallback(
    (key: keyof FilterState, value: string) => {
      setFilters((prev) => ({ ...prev, [key]: value }));
    },
    [],
  );

  return (
    <section
      id="voice-playground"
      className="bg-gray-50 py-16 sm:py-20 px-4 sm:px-6"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-xs font-semibold tracking-widest text-indigo-500 uppercase mb-3">
            Voice Playground
          </p>
          <h2 className="text-4xl font-bold text-gray-900 leading-tight">
            Hear exactly how <span className="text-indigo-600">Darwix</span>{" "}
            sounds for your industry, in your language, with your tone.
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto text-base">
            Pick a combination below. Every sample was produced by the live
            Darwix agent — no pre-recorded actors, no post-editing.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-5">
          <Filters filters={filters} onFilterChange={handleFilterChange} />
        </div>

        {/* Audio Player */}
        <div ref={playerRef}>
          <AudioPlayer
            ref={audioPlayerRef}
            sample={selectedSample}
            onPlayingStateChange={setIsPlaying}
          />
        </div>

        {/* Popular Samples */}
        <div className="mt-12">
          <PopularSamples
            samples={filteredSamples}
            selectedId={selectedSample.id}
            isPlaying={isPlaying}
            onSelect={handleSelectSample}
          />
        </div>
      </div>
    </section>
  );
}
