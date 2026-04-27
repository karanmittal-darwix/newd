import type { TranscriptMessage } from "@/types";

interface Props {
  messages: TranscriptMessage[];
}

function AgentAvatar({ name }: { name: string }) {
  return (
    <div className="w-7 h-7 rounded-full bg-indigo-600 flex items-center justify-center text-white text-xs font-semibold shrink-0">
      {name[0]}
    </div>
  );
}

function CustomerAvatar({ name }: { name: string }) {
  return (
    <div className="w-7 h-7 rounded-full bg-gray-300 flex items-center justify-center text-gray-700 text-xs font-semibold shrink-0">
      {name[0]}
    </div>
  );
}

export default function Transcript({ messages }: Props) {
  return (
    <div className="h-full flex flex-col p-4">
      <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-3 shrink-0">
        Live transcript
      </p>

      <div className="flex-1 overflow-y-auto space-y-3 pr-2">
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

                {/* Name + time + chips inline */}
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <span className="text-xs font-semibold text-gray-900">
                    {isAgent ? "Agent" : "Customer"} • {msg.name}
                  </span>

                  <span className="text-xs text-gray-400">
                    {msg.time}
                  </span>

                  {msg.tone && (
                    <span className="inline-flex items-center text-[11px] bg-indigo-50 text-indigo-600 px-2 py-0.5 rounded-full font-medium">
                      Tone - {msg.tone}
                    </span>
                  )}

                  {msg.event && (
                    <span className="inline-flex items-center text-[11px] bg-orange-50 text-orange-600 px-2 py-0.5 rounded-full font-medium">
                      {msg.event}
                    </span>
                  )}
                </div>

                <p className="text-xs text-gray-700 leading-relaxed">
                  {msg.text}
                </p>

                {/* trigger remains below */}
                {msg.trigger && (
                  <span className="inline-flex items-center gap-1 mt-1.5 text-[11px] border border-dashed border-blue-300 bg-blue-50 text-blue-600 px-2 py-0.5 rounded font-medium">
                    ⚡ Trigger: {msg.trigger}
                  </span>
                )}

              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}