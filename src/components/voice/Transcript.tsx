import type { TranscriptMessage } from "@/types";
import { useEffect, useRef } from "react";

interface Props {
  messages: TranscriptMessage[];
  currentTimeSec?: number;
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

export default function Transcript({
  messages,
  currentTimeSec = -1,
}: Props) {

  const containerRef = useRef<HTMLDivElement>(null);
  const activeRef = useRef<HTMLDivElement>(null);

  // prevents scrolling immediately on first transcript line
  const hasStartedScrolling = useRef(false);



  const activeId =
    currentTimeSec >= 0
      ? messages.reduce<number | null>(
          (found, msg) => {
            if (msg.start <= currentTimeSec) {
              return msg.id;
            }
            return found;
          },
          null
        )
      : null;



  // reset scroll logic when sample/transcript changes
  useEffect(() => {
    hasStartedScrolling.current = false;

    if (containerRef.current) {
      containerRef.current.scrollTop = 0;
    }
  }, [messages]);



  /* gentle follow scrolling */
  useEffect(() => {

    if (!containerRef.current || !activeRef.current) return;

    // do not scroll on first transcript line
    if (activeId === messages[0]?.id) {
      return;
    }

    // skip first active change after audio starts
    if (!hasStartedScrolling.current) {
      hasStartedScrolling.current = true;
      return;
    }

    const container = containerRef.current;
    const row = activeRef.current;

    const rowTop = row.offsetTop;
    const scrollTop = container.scrollTop;
    const containerHeight = container.clientHeight;

    // nudge only when active line enters lower region
    const threshold =
      scrollTop + containerHeight * 0.72;

    if (rowTop > threshold) {
      container.scrollTo({
        top: scrollTop + 75,
        behavior: "smooth",
      });
    }

  }, [activeId, messages]);



  return (
    <div className="h-full flex flex-col p-4">

      <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-3 shrink-0">
        Live transcript
      </p>


      <div
        ref={containerRef}
        className="flex-1 overflow-y-auto space-y-3 pr-2"
      >
        {messages.map((msg) => {

          const isAgent =
            msg.speaker === "agent";

          const isActive =
            msg.id === activeId;

          return (
            <div
              key={msg.id}
              ref={isActive ? activeRef : null}
              className={[
                "flex gap-2 items-start rounded-lg px-2 py-1.5 transition-all duration-300",
                isActive
                  ? "bg-indigo-50 border-l-2 border-indigo-400"
                  : "border-l-2 border-transparent"
              ].join(" ")}
            >

              {isAgent ? (
                <AgentAvatar name={msg.name} />
              ) : (
                <CustomerAvatar name={msg.name} />
              )}


              <div className="flex-1 min-w-0">

                <div className="flex items-center gap-2 mb-1 flex-wrap">

                  <span
                    className={[
                      "text-xs font-semibold",
                      isActive
                        ? "text-indigo-700"
                        : "text-gray-900"
                    ].join(" ")}
                  >
                    {isAgent ? "Agent" : "Customer"} • {msg.name}
                  </span>

                  <span className="text-xs text-gray-400">
                    {msg.time}
                  </span>


                  {msg.tone && (
                    <span className="inline-flex items-center text-[11px] bg-indigo-50 text-indigo-600 px-2 py-0.5 rounded-full font-medium">
                      Tone · {msg.tone}
                    </span>
                  )}


                  {msg.event && (
                    <span className="inline-flex items-center text-[11px] bg-orange-50 text-orange-600 px-2 py-0.5 rounded-full font-medium">
                      {msg.event}
                    </span>
                  )}

                </div>


                <p
                  className={[
                    "text-xs leading-relaxed transition-all duration-300",
                    isActive
                      ? "text-gray-900 font-medium"
                      : "text-gray-700"
                  ].join(" ")}
                >
                  {msg.text}
                </p>


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