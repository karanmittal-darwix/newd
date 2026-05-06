import Image from "next/image";
import { useState } from "react";
import type { SampleSentiment, DetectedIntent, PostCallAction } from "@/types";

interface Props {
  sentiment: SampleSentiment;
  currentTimeSec?: number;
  intents: DetectedIntent[];
  postCallActions: PostCallAction[];
  onSeekToSentiment?: (startTime: number, duration: number) => void;
}

const ACTION_ICONS: Record<PostCallAction["icon"], string> = {
  whatsapp: "/images/whatsapp.svg",
  calendar: "/images/calen.svg",
  email: "/images/email.svg",
};

export default function SentimentPanel({
  sentiment,
  currentTimeSec,
  intents,
  postCallActions,
  onSeekToSentiment,
}: Props) {
  const [hoveredSegmentIndex, setHoveredSegmentIndex] = useState<number | null>(
    null,
  );

  const colorMap: Record<string, string> = {
    red: "bg-red-500",
    orange: "bg-orange-500",
    amber: "bg-amber-500",
    yellow: "bg-yellow-400",
    green: "bg-green-500",
    blue: "bg-blue-500",
  };

  const glowRgb: Record<string, string> = {
    red: "239,68,68",
    orange: "249,115,22",
    amber: "245,158,11",
    yellow: "234,179,8",
    green: "34,197,94",
    blue: "59,130,246",
  };

  const activeStage = sentiment.sentimentJourney.findIndex(
    (s) => (currentTimeSec ?? 0) >= s.start && (currentTimeSec ?? 0) < s.end,
  );

  const total =
    sentiment.sentimentJourney[sentiment.sentimentJourney.length - 1].end;

  return (
    <div className="h-full flex flex-col p-4 overflow-hidden">
      <div className="flex-1 overflow-y-auto space-y-4 pr-2">
        {/* Customer Sentiment */}
        <div className="flex-shrink-0">
          <p className="text-xs uppercase tracking-wide font-medium text-gray-400 mb-2">
            Customer sentiment
          </p>

          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold text-gray-900 uppercase">
              {sentiment.from}
            </span>

            {sentiment.resolved && (
              <span className="text-xs font-bold text-green-600 flex items-center gap-1 uppercase">
                RESOLVED ✓
              </span>
            )}
          </div>

          <div className="px-2 py-1 -my-1">
            <div
              className="flex gap-0.5 h-4 rounded-full"
              style={{
                overflow: "visible",
                isolation: "isolate",
              }}
            >
              {sentiment.sentimentJourney.map((stage, i) => {
                const width = ((stage.end - stage.start) / total) * 100;

                const isActive = i === activeStage;

                const isHovered = i === hoveredSegmentIndex;

                const rgb = glowRgb[stage.color];

                const handleSegmentClick = () => {
                  if (onSeekToSentiment) {
                    onSeekToSentiment(stage.start, total);
                  }
                };

                const handleSegmentMouseEnter = () => {
                  setHoveredSegmentIndex(i);
                };

                const handleSegmentMouseLeave = () => {
                  setHoveredSegmentIndex(null);
                };

                return (
                  <div
                    key={i}
                    title={`${stage.label} (${Math.round(stage.start)}s - ${Math.round(stage.end)}s)`}
                    onClick={handleSegmentClick}
                    onMouseEnter={handleSegmentMouseEnter}
                    onMouseLeave={handleSegmentMouseLeave}
                    style={{
                      width: `${width}%`,
                      borderRadius: "9999px",

                      opacity: 1,

                      filter:
                        isActive || isHovered ? "brightness(1.2)" : "none",

                      transform:
                        isActive || isHovered ? "translateY(-2px)" : "none",

                      transition: "all .2s ease",

                      boxShadow: isActive
                        ? [
                            `0 0 0 2px #ffffff`,
                            `0 0 10px rgba(${rgb},.9)`,
                            `0 0 20px rgba(${rgb},.7)`,
                            `0 0 30px rgba(${rgb},.45)`,
                          ].join(", ")
                        : isHovered
                          ? [
                              `0 0 8px rgba(${rgb},.6)`,
                              `0 0 16px rgba(${rgb},.4)`,
                            ].join(", ")
                          : "none",

                      cursor: "pointer",
                    }}
                    className={`
                      ${colorMap[stage.color]}
                    `}
                  />
                );
              })}
            </div>
          </div>
        </div>

        {/* Detected Intents */}
        <div className="flex-shrink-0">
          <p className="text-xs uppercase tracking-wide font-medium text-gray-400 mb-2.5">
            Detected intents
          </p>

          <div className="flex flex-col gap-2">
            {intents.map((intent, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-green-500 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>

                  <span className="text-xs text-gray-700">{intent.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Post-call Actions */}
        <div className="flex-shrink-0">
          <p className="text-xs uppercase tracking-wide font-medium text-gray-400 mb-2.5">
            Actions queued post-call
          </p>

          <div className="flex flex-col gap-2">
            {postCallActions.map((action, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-0.5">
                  <Image
                    src={ACTION_ICONS[action.icon]}
                    alt={action.icon}
                    width={16}
                    height={16}
                    className="w-4 h-4"
                  />
                </span>

                <span className="text-xs text-gray-700 leading-snug">
                  {action.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
