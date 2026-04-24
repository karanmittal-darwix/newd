import Image from "next/image";
import type { DetectedIntent, PostCallAction } from "@/types";

interface Props {
  sentimentResolved: boolean;
  intents: DetectedIntent[];
  postCallActions: PostCallAction[];
}

const ACTION_ICONS: Record<PostCallAction["icon"], string> = {
  whatsapp: "/images/whatsapp.svg",
  calendar: "/images/calen.svg",
  email: "/images/email.svg",
};

export default function SentimentPanel({
  sentimentResolved,
  intents,
  postCallActions,
}: Props) {
  return (
    <div className="flex flex-col gap-6">

      {/* Customer sentiment */}
      <div>
        <p className="text-xs uppercase tracking-wide font-medium text-gray-400 mb-2">
          Customer sentiment
        </p>

        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-gray-500">
            HESITANT
          </span>

          {sentimentResolved && (
            <span className="text-xs font-medium text-green-600 flex items-center gap-1">
              RESOLVED ✓
            </span>
          )}
        </div>

        <div className="h-2 rounded-full overflow-hidden flex">
          <div className="flex-1 bg-red-400" />
          <div className="flex-1 bg-orange-400" />
          <div className="flex-1 bg-yellow-300" />
          <div className="flex-1 bg-green-400" />
          <div className="flex-1 bg-green-500" />
        </div>
      </div>


      {/* Intents */}
      <div>
        <p className="text-xs uppercase tracking-wide font-medium text-gray-400 mb-3">
          Detected intents
        </p>

        <div className="flex flex-col gap-2.5">
          {intents.map((intent, i) => (
            <div
              key={i}
              className="flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <svg
                  className="w-3.5 h-3.5 text-green-500 shrink-0"
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

                <span className="text-xs text-gray-700">
                  {intent.label}
                </span>
              </div>

              <span className="text-xs font-semibold text-gray-800">
                {intent.confidence}%
              </span>
            </div>
          ))}
        </div>
      </div>


      {/* Post-call actions */}
      <div>
        <p className="text-xs uppercase tracking-wide font-medium text-gray-400 mb-3">
          Actions queued post-call
        </p>

        <div className="flex flex-col gap-3">
          {postCallActions.map((action, i) => (
            <div
              key={i}
              className="flex items-start gap-3"
            >
              <span className="shrink-0 mt-0.5">
                <Image
                  src={ACTION_ICONS[action.icon]}
                  alt={action.icon}
                  width={18}
                  height={18}
                  className="w-[18px] h-[18px]"
                />
              </span>

              <span className="text-xs text-gray-600 leading-snug">
                {action.text}
              </span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}