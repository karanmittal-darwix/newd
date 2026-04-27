"use client";

import { useState, useRef, useEffect } from "react";
import type { AudioSample } from "@/types";
import SentimentPanel from "./SentimentPanel";
import Transcript from "./Transcript";

interface Props {
  sample?: AudioSample;
}

export default function AudioPlayer({ sample }: Props) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState("00:00");
  const [duration, setDuration] = useState("00:00");

  if (!sample) {
    return (
      <div className="bg-white border border-gray-200 rounded-xl p-8">
        <p className="text-gray-400 text-center">
          Loading sample...
        </p>
      </div>
    );
  }

  const {
    header,
    sentiment,
    transcript,
    intelligence,
  } = sample;



  /* Sync video play/pause with audio */
  useEffect(() => {
    const audio = audioRef.current;
    const video = videoRef.current;

    if (!audio || !video) return;

    if (isPlaying) {
      video.currentTime = audio.currentTime;

      const playPromise = video.play();

      if (playPromise !== undefined) {
        playPromise.catch(() => {});
      }

    } else {
      video.pause();
    }

  }, [isPlaying]);



  /* Time updates + duration metadata */
  useEffect(() => {

    const audio = audioRef.current;
    const video = videoRef.current;

    if (!audio || !video) return;

    const syncTime = () => {

      if (
        Math.abs(
          video.currentTime -
          audio.currentTime
        ) > 0.1
      ) {
        video.currentTime = audio.currentTime;
      }

      const current =
        Math.floor(audio.currentTime);

      const mins = String(
        Math.floor(current / 60)
      ).padStart(2,"0");

      const secs = String(
        current % 60
      ).padStart(2,"0");

      setCurrentTime(
        `${mins}:${secs}`
      );
    };


    const handleLoadedMetadata = () => {

      if(
        !isFinite(audio.duration) ||
        audio.duration <= 0
      ) return;

      const mins = String(
        Math.floor(audio.duration / 60)
      ).padStart(2,"0");

      const secs = String(
        Math.floor(audio.duration % 60)
      ).padStart(2,"0");

      setDuration(
        `${mins}:${secs}`
      );
    };


    const handleAudioEnded = () => {
      setIsPlaying(false);
    };


    audio.addEventListener(
      "timeupdate",
      syncTime
    );

    audio.addEventListener(
      "loadedmetadata",
      handleLoadedMetadata
    );

    audio.addEventListener(
      "durationchange",
      handleLoadedMetadata
    );

    audio.addEventListener(
      "canplay",
      handleLoadedMetadata
    );

    audio.addEventListener(
      "ended",
      handleAudioEnded
    );


    return () => {

      audio.removeEventListener(
        "timeupdate",
        syncTime
      );

      audio.removeEventListener(
        "loadedmetadata",
        handleLoadedMetadata
      );

      audio.removeEventListener(
        "durationchange",
        handleLoadedMetadata
      );

      audio.removeEventListener(
        "canplay",
        handleLoadedMetadata
      );

      audio.removeEventListener(
        "ended",
        handleAudioEnded
      );
    };

  }, []);



  /* Reset when sample changes */
  useEffect(() => {

    const audio = audioRef.current;
    const video = videoRef.current;

    if (audio && video) {

      audio.load(); // important fix

      audio.currentTime = 0;
      video.currentTime = 0;

      setIsPlaying(false);
      setCurrentTime("00:00");
    }

  }, [sample.id]);



  const handlePlayPause = () => {

    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {

      audio.pause();
      setIsPlaying(false);

    } else {

      const playPromise =
        audio.play();

      if (playPromise !== undefined) {

        playPromise
          .then(()=>{
            setIsPlaying(true);
          })
          .catch(()=>{
            setIsPlaying(true);
          });

      } else {
        setIsPlaying(true);
      }
    }
  };



  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">

      <audio
        ref={audioRef}
        src={header.audioSrc}
        crossOrigin="anonymous"
        preload="metadata"
      />



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
            <p className="text-xs text-gray-500 font-medium">
              Now Playing
            </p>

            <h3 className="text-sm font-semibold text-gray-900">
              {header.title} - {header.useCase}
            </h3>
          </div>

        </div>



        <div className="flex items-center gap-2">
          {header.languages.map((lang)=>(
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

          <span className="text-xs ml-5 font-medium text-gray-500 w-14 text-left shrink-0">
            {currentTime}
          </span>

          <div className="flex-1 flex justify-center">
            <div className="relative h-10 w-[380px] flex items-center overflow-hidden flex-shrink-0">
              <video
                ref={videoRef}
                src="/video/wave.mp4"
                loop
                muted
                playsInline
                preload="metadata"
                crossOrigin="anonymous"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          <span className="text-xs font-medium text-gray-500 w-14 mr-5 text-right shrink-0">
            {duration}
          </span>

        </div>
      </div>



      {/* Two-column */}
      <div className="flex h-[400px]">

        <div className="flex-1 overflow-hidden border-r border-gray-200">
          <Transcript messages={transcript}/>
        </div>

        <div className="flex-1 overflow-hidden">
          <SentimentPanel
            sentiment={sentiment}
            intents={intelligence.intents}
            postCallActions={intelligence.actions}
          />
        </div>

      </div>

    </div>
  );
}