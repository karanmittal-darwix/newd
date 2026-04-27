import Image from "next/image";
import type { SampleSentiment, DetectedIntent, PostCallAction } from "@/types";

interface Props {
  sentiment: SampleSentiment;
  intents: DetectedIntent[];
  postCallActions: PostCallAction[];
}

const ACTION_ICONS: Record<PostCallAction["icon"], string> = {
  whatsapp: "/images/whatsapp.svg",
  calendar: "/images/calen.svg",
  email: "/images/email.svg",
};

export default function SentimentPanel({ sentiment, intents, postCallActions }: Props) {
  return (
    <div className="h-full flex flex-col p-4 overflow-hidden">
      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto space-y-4 pr-2">
        {/* Customer Sentiment */}
        <div className="flex-shrink-0">
          <p className="text-xs uppercase tracking-wide font-medium text-gray-400 mb-2">
            Customer sentiment
          </p>

          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-gray-900 uppercase">
              {sentiment.from}
            </span>
            {sentiment.resolved && (
              <span className="text-xs font-bold text-green-600 flex items-center gap-1 uppercase">
                RESOLVED ✓
              </span>
            )}
          </div>

          <div className="h-2.5 rounded-full overflow-hidden flex gap-0.5">
            {sentiment.stages.map((stage, i) => (
              <div
                key={i}
                className={`flex-1 rounded-full ${stage.color}`}
              />
            ))}
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
                {/* <span className="text-xs font-bold text-gray-900">
                  {intent.confidence}%
                </span> */}
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