import type { TranscriptMessage } from "@/types";

interface Props {
  messages: TranscriptMessage[];
}

function AgentAvatar({ name }: { name: string }) {
  return (
    <div className="w-7 h-7 rounded-full bg-indigo-600 flex items-center justify-center text-white text-xs font-semibold flex-shrink-0">
      {name[0]}
    </div>
  );
}

function CustomerAvatar({ name }: { name: string }) {
  return (
    <div className="w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 text-xs font-semibold flex-shrink-0">
      {name[0]}
    </div>
  );
}

export default function Transcript({ messages }: Props) {
  return (
    <div className="flex flex-col gap-4 h-full overflow-y-auto pr-1">
      <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">
        Live transcript
      </p>
      {messages.map((msg) => {
        const isAgent = msg.speaker === "agent";
        return (
          <div key={msg.id} className="flex gap-2 items-start">
            {isAgent ? (
              <AgentAvatar name={msg.name} />
            ) : (
              <CustomerAvatar name={msg.name} />
            )}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-0.5">
                <span className="text-xs font-medium text-gray-700">
                  {isAgent ? "Agent" : "Customer"} · {msg.name}
                </span>
                <span className="text-xs text-gray-400">{msg.time}</span>
                {/* Tone pill */}
                {msg.tone && (
                  <span className="inline-flex items-center gap-1 text-xs bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full">
                    tone · {msg.tone}
                  </span>
                )}
                {/* Event pill */}
                {msg.event && (
                  <span className="inline-flex items-center gap-1 text-xs bg-orange-50 text-orange-600 px-2 py-0.5 rounded-full">
                    {msg.event}
                  </span>
                )}
              </div>
              <p className="text-sm text-gray-700 leading-snug">{msg.text}</p>
              {/* Trigger tag */}
              {msg.trigger && (
                <span className="inline-flex items-center gap-1 mt-1.5 text-xs border border-dashed border-gray-300 text-gray-500 px-2 py-0.5 rounded">
                  ⚡ Trigger: {msg.trigger}
                </span>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}