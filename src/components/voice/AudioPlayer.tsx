"use client";

import {
  useState,
  useRef,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from "react";
import type { AudioSample } from "@/types";
import SentimentPanel from "./SentimentPanel";
import Transcript from "./Transcript";
import WaveSurfer from "wavesurfer.js";

interface Props {
  sample?: AudioSample;
  onPlayingStateChange?: (isPlaying: boolean) => void;
}

export interface AudioPlayerRef {
  play: () => void;
  pause: () => void;
}

const AudioPlayer = forwardRef<AudioPlayerRef, Props>(
  ({ sample, onPlayingStateChange }, ref) => {
    const waveformRef = useRef<HTMLDivElement>(null);
    const wavesurferRef = useRef<WaveSurfer | null>(null);
    const shouldAutoPlayRef = useRef(false);

    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState("00:00");
    const [duration, setDuration] = useState("00:00");
    const [remainingTime, setRemainingTime] = useState("00:00");
    const [currentSeconds, setCurrentSeconds] = useState(0);

    useImperativeHandle(ref, () => ({
      play: () => wavesurferRef.current?.play(),
      pause: () => wavesurferRef.current?.pause(),
    }));

    useEffect(() => {
      if (!waveformRef.current || !sample) return;

      // Reset UI immediately
      setCurrentTime("00:00");
      setDuration("00:00");
      setRemainingTime("00:00");
      setIsPlaying(false);
      onPlayingStateChange?.(false);

      // Only autoplay if switching samples (previous instance existed).
      // On first mount wavesurferRef.current is null — skip autoplay
      // to avoid browser autoplay policy violation.
      const isSwitch = wavesurferRef.current !== null;
      shouldAutoPlayRef.current = isSwitch;

      // Destroy previous instance cleanly
      if (wavesurferRef.current) {
        wavesurferRef.current.destroy();
        wavesurferRef.current = null;
      }

      const ws = WaveSurfer.create({
        container: waveformRef.current,
        url: sample.header.audioSrc,
        height: 52,
        waveColor: "#c7d2fe",
        progressColor: "#4f46e5",
        barWidth: 4,
        barGap: 1.5,
        barRadius: 10,
        cursorWidth: 0,
        normalize: true,
      });

      wavesurferRef.current = ws;

      ws.on("ready", () => {
        const dur = ws.getDuration();
        const mins = String(Math.floor(dur / 60)).padStart(2, "0");
        const secs = String(Math.floor(dur % 60)).padStart(2, "0");
        setDuration(`${mins}:${secs}`);
        setRemainingTime(`${mins}:${secs}`);

        // Only play if this was a user-triggered sample switch
        if (shouldAutoPlayRef.current) {
          shouldAutoPlayRef.current = false;
          ws.play();
        }
      });

      ws.on("audioprocess", () => {
        const current = ws.getCurrentTime();
        setCurrentSeconds(Math.floor(current));

        const total = ws.getDuration();
        const remain = Math.max(0, total - current);

        setCurrentTime(
          `${String(Math.floor(current / 60)).padStart(2, "0")}:${String(
            Math.floor(current % 60),
          ).padStart(2, "0")}`,
        );
        setRemainingTime(
          `${String(Math.floor(remain / 60)).padStart(2, "0")}:${String(
            Math.floor(remain % 60),
          ).padStart(2, "0")}`,
        );
      });

      ws.on("play", () => {
        setIsPlaying(true);
        onPlayingStateChange?.(true);
      });

      ws.on("pause", () => {
        setIsPlaying(false);
        onPlayingStateChange?.(false);
      });

      ws.on("finish", () => {
        setIsPlaying(false);
        onPlayingStateChange?.(false);
      });

      return () => {
        ws.destroy();
      };
    }, [sample?.id]);

    if (!sample) {
      return (
        <div className="bg-white border border-gray-200 rounded-xl p-8">
          <p className="text-gray-400 text-center">Loading sample...</p>
        </div>
      );
    }

    const { header, sentiment, transcript, intelligence } = sample;

    const handlePlayPause = () => {
      wavesurferRef.current?.playPause();
    };

    return (
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
        {/* Top Bar */}
        <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={handlePlayPause}
              className="w-10 h-10 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white flex items-center justify-center transition-colors flex-shrink-0"
            >
              {isPlaying ? (
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5 ml-0.5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>

            <div>
              <p className="text-xs text-gray-500 font-medium">Now Playing</p>
              <h3 className="text-sm font-semibold text-gray-900">
                {header.industry} {header.product} - {header.useCase}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {header.languages.map((lang) => (
              <span
                key={lang}
                className="text-xs font-medium text-gray-600 bg-gray-100 px-2.5 py-1 rounded"
              >
                {lang}
              </span>
            ))}
            {header.voiceGender && (
              <span className="text-xs font-medium text-gray-600 bg-gray-100 px-2.5 py-1 rounded">
                {header.voiceGender}
              </span>
            )}
          </div>
        </div>

        {/* Waveform */}
        <div className="px-6 py-4 border-b border-gray-200">
          <div className="flex items-center w-full">
            <span className="text-xs ml-5 font-medium text-gray-500 w-28 text-left shrink-0 whitespace-nowrap">
              {currentTime} / {duration}
            </span>

            <div className="flex-1 flex justify-center">
              <div className="relative h-12 w-[420px] flex items-center overflow-hidden flex-shrink-0">
                <div ref={waveformRef} className="w-[420px] h-12" />
              </div>
            </div>

            <span className="text-xs font-medium text-gray-500 w-28 mr-5 text-right shrink-0 whitespace-nowrap">
              -{remainingTime} / {duration}
            </span>
          </div>
        </div>

        {/* Transcript + Sentiment */}
        <div className="flex h-[400px]">
          <div className="flex-1 overflow-hidden border-r border-gray-200">
            <Transcript messages={transcript} />
          </div>
          <div className="flex-1 overflow-hidden">
            <SentimentPanel
              sentiment={sentiment}
              currentTimeSec={currentSeconds}
              intents={intelligence.intents}
              postCallActions={intelligence.actions}
            />
          </div>
        </div>
      </div>
    );
  },
);

AudioPlayer.displayName = "AudioPlayer";
export default AudioPlayer;
