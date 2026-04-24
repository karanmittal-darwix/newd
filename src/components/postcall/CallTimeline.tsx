const TIMELINE_EVENTS = [
  { time: "00:00", label: "Dial",                    color: "bg-gray-300",   textColor: "text-gray-700",   bold: false },
  { time: "00:08", label: "Identity confirmed",       color: "bg-gray-300",   textColor: "text-gray-700",   bold: false },
  { time: "00:24", label: "Objection: EMI timing",    color: "bg-orange-400", textColor: "text-orange-500", bold: true  },
  { time: "00:42", label: "Resolution: shift EMI to 10th", color: "bg-indigo-600", textColor: "text-indigo-600", bold: true },
  { time: "01:08", label: "Consent captured",         color: "bg-green-500",  textColor: "text-green-600",  bold: true  },
  { time: "01:14", label: "Call ends",                color: "bg-gray-300",   textColor: "text-gray-700",   bold: false },
  { time: "01:14", label: "→ 6 actions fire in <2s",  color: "bg-indigo-600", textColor: "text-indigo-600", bold: true  },
];

export default function CallTimeline() {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 h-full">
      <p className="text-sm font-semibold text-indigo-500 mb-6">
        Anatomy of Darwix AI
      </p>
      <div className="relative flex flex-col gap-0">
        {TIMELINE_EVENTS.map((event, i) => (
          <div key={i} className="flex items-start gap-3 relative">
            {/* Left: timestamp */}
            <span className="text-xs text-gray-400 tabular-nums w-10 pt-0.5 flex-shrink-0">
              {event.time}
            </span>

            {/* Center: dot + line */}
            <div className="flex flex-col items-center flex-shrink-0">
              <div className={`w-3 h-3 rounded-full mt-0.5 flex-shrink-0 ${event.color}`} />
              {i < TIMELINE_EVENTS.length - 1 && (
                <div className="w-px flex-1 bg-gray-200 my-1" style={{ minHeight: 54 }} />
              )}
            </div>

            {/* Right: label */}
            <span className={`text-sm pt-0.5 pb-6 ${event.bold ? `font-semibold ${event.textColor}` : "text-gray-600"}`}>
              {event.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}