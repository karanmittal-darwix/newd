"use client";

import { useRef, useState, useEffect } from "react";
import type { AudioSample } from "@/types";
import Transcript from "./Transcript";
import SentimentPanel from "./SentimentPanel";

interface Props {
  sample: AudioSample;
}

function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export default function AudioPlayer({ sample }: Props) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  // Sync video with audio
  useEffect(() => {
  const audio = audioRef.current;
  const video = videoRef.current;
  if (!audio || !video) return;
  audio.load(); 

  const onPlay = () => {
    video.play().catch(() => {});
    setIsPlaying(true);
  };

  const onPause = () => {
    video.pause();
    setIsPlaying(false);
  };

  const onTimeUpdate = () => setCurrentTime(audio.currentTime);

  const updateDuration = () => {
    if (!isNaN(audio.duration) && audio.duration > 0) {
      setDuration(audio.duration);
    }
  };

  audio.addEventListener("play", onPlay);
  audio.addEventListener("pause", onPause);
  audio.addEventListener("timeupdate", onTimeUpdate);
  audio.addEventListener("loadedmetadata", updateDuration);
  audio.addEventListener("canplay", updateDuration);

  return () => {
    audio.removeEventListener("play", onPlay);
    audio.removeEventListener("pause", onPause);
    audio.removeEventListener("timeupdate", onTimeUpdate);
    audio.removeEventListener("loadedmetadata", updateDuration);
    audio.removeEventListener("canplay", updateDuration);
  };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    isPlaying ? audio.pause() : audio.play();
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;
    const time = Number(e.target.value);
    audio.currentTime = time;
    setCurrentTime(time);
  };

  return (
    <div className="border border-gray-200 rounded-xl bg-white overflow-hidden">
      {/* Top bar */}
      <div className="flex items-center justify-between px-5 py-3.5 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <span className="text-xs text-gray-400">Now Playing ›</span>
          <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
            {sample.industry}
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          {sample.languageTags.map((tag) => (
            <span key={tag} className="text-xs text-gray-500 px-1">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Title row */}
      <div className="px-5 py-3 border-b border-gray-100">
        <p className="text-base font-semibold text-gray-900">
          {sample.title}{" "}
          <span className="font-normal text-gray-400">· {sample.subtitle}</span>
        </p>
      </div>

      {/* Waveform / Video placeholder + controls */}
      <div className="px-5 py-4 border-b border-gray-100">
        <div className="flex items-center gap-4">
          {/* Play / pause */}
          <button
            onClick={togglePlay}
            className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white flex-shrink-0 hover:bg-indigo-500 transition-colors"
          >
            {isPlaying ? (
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 4h4v16H6zm8 0h4v16h-4z" />
              </svg>
            ) : (
              <svg className="w-4 h-4 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>

          {/* Timestamps + seek + video waveform */}
          <div className="flex-1 flex items-center gap-3">
            <span className="text-xs text-gray-400 tabular-nums w-8">
              {formatTime(currentTime)}
            </span>
            <div className="flex-1 relative aspect-[8/1] overflow-hidden rounded">
              {/* Video waveform */}
              {sample.videoSrc ? (
                <video
                  ref={videoRef}
                  src="/video/wave.mp4"
                  loop
                  muted
                  playsInline
                  className="w-full h-3/4 object-contain"
                />
              ) : (
                /* Fallback waveform bars */
                <div className="flex items-center justify-center h-full gap-0.5">
                  {Array.from({ length: 60 }).map((_, i) => (
                    <div
                      key={i}
                      className="bg-indigo-400 rounded-full opacity-80"
                      style={{
                        width: 3,
                        height: `${20 + Math.sin(i * 0.7) * 16 + Math.random() * 14}px`,
                      }}
                    />
                  ))}
                </div>
              )}
              {/* Seek overlay */}
              <input
                type="range"
                min={0}
                max={duration || 100}
                step={0.1}
                value={currentTime}
                onChange={handleSeek}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
            </div>
            <span className="text-xs text-gray-400 tabular-nums w-8">
              {formatTime(duration)}
            </span>
          </div>
        </div>

        {/* Hidden audio element */}
        <audio ref={audioRef} src={sample.audioSrc} preload="metadata" />
      </div>

      {/* Transcript + Sentiment split */}
      <div className="grid grid-cols-2 divide-x divide-gray-100">
        <div className="p-5 h-80 overflow-y-auto">
          <Transcript messages={sample.transcript} />
        </div>
        <div className="p-5 h-80 overflow-y-auto">
          <SentimentPanel
            sentimentResolved={sample.sentimentResolved}
            intents={sample.intents}
            postCallActions={sample.postCallActions}
          />
        </div>
      </div>
    </div>
  );
}