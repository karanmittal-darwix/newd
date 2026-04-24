"use client";

import type { PopularSample } from "@/types";

interface Props {
  sample: PopularSample;
  isActive?: boolean;
}

export default function SampleCard({ sample, isActive = false }: Props) {
  return (
    <div
      className={`flex items-start gap-3 p-4 rounded-xl border transition-all cursor-pointer ${
        isActive
          ? "border-indigo-300 bg-indigo-50 ring-1 ring-indigo-200"
          : "border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm"
      }`}
    >
      {/* Play button */}
      <button
        className={`w-8 h-8 rounded-full border flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors ${
          isActive
            ? "bg-indigo-600 border-indigo-600 text-white"
            : "border-gray-300 text-gray-500 hover:border-indigo-400 hover:text-indigo-600"
        }`}
      >
        {isActive ? (
          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6 4h4v16H6zm8 0h4v16h-4z" />
          </svg>
        ) : (
          <svg className="w-3.5 h-3.5 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        )}
      </button>

      <div className="flex-1 min-w-0">
        {/* Industry + duration */}
        <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-0.5">
          {sample.industry} · {sample.duration}
        </p>
        {/* Title */}
        <p className="text-sm font-medium text-gray-800 leading-snug mb-2">
          {sample.title}
        </p>
        {/* Language chips */}
        <div className="flex flex-wrap gap-1">
          {sample.languages.map((lang) => (
            <span
              key={lang}
              className="text-[11px] border border-gray-200 text-gray-500 rounded px-1.5 py-0.5"
            >
              {lang}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}