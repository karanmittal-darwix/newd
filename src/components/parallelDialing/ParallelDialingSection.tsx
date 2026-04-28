import StatCard from "./StatCard";

type CallStatus = "DIALING" | "RINGING" | "CONNECTED";

const STATUS_STYLES: Record<CallStatus, string> = {
  DIALING: "text-indigo-400",
  RINGING: "text-orange-400",
  CONNECTED: "text-green-500",
};

const DOT_STYLES: Record<CallStatus, string> = {
  DIALING: "bg-indigo-400",
  RINGING: "bg-orange-400",
  CONNECTED: "bg-green-500",
};

const LIVE_CALLS = [
  { time: "13:22:03", number: "+91 99XXXXXXX", city: "Jaipur", status: "DIALING" },
  { time: "13:22:02", number: "+91 91XXXXXXX", city: "Kochi", status: "RINGING" },
  { time: "13:22:01", number: "+91 94XXXXXXX", city: "Mumbai", status: "CONNECTED" },
  { time: "13:22:00", number: "+91 97XXXXXXX", city: "Bengaluru", status: "DIALING" },
  { time: "13:21:59", number: "+91 95XXXXXXX", city: "Chennai", status: "RINGING" },
] as const;

const STATS = [
  { value: "10,000", label: "customers\nreached per hour" },
  { value: "1.2s", label: "from upload to\nfirst dial" },
  { value: "TRAI", label: "DND, windows,\nconsent baked in" },
  { value: "4 channels", label: "voice, WhatsApp,\nSMS, email handoff" },
];

export default function ParallelDialingSection() {
  return (
    <section className="bg-gray-50 py-16 md:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-500 mb-4">
            Parallel Dialing
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
            Not one call. Ten thousand,
            <span className="text-indigo-600"> simultaneously.</span>
          </h2>

          <p className="mt-6 text-base md:text-lg text-gray-500 max-w-3xl mx-auto leading-relaxed">
            Darwix isn't a voice agent, it's the whole outbound machine.
            <br className="hidden sm:block" />
            Upload a list, set a goal, and our engine dials your entire
            customer base in the time a human agent finishes one call.
          </p>
        </div>

        {/* Body */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-start">

          {/* Left */}
          <div className="w-full lg:w-[480px] flex-shrink-0 flex flex-col gap-6">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {STATS.map((item) => (
                <StatCard
                  key={item.value}
                  value={item.value}
                  label={item.label}
                />
              ))}
            </div>

            <button className="w-fit bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium px-5 py-3 rounded-md flex items-center gap-2 transition-all duration-200">
              See the dialer live

              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>

          </div>

          {/* Right */}
          <div className="w-full flex-1 bg-indigo-50 border border-indigo-100 rounded-2xl p-5 sm:p-8 lg:p-10 lg:ml-16">

            <div className="flex items-center gap-2.5 mb-5">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />

              <span className="text-xs font-semibold tracking-[0.18em] uppercase text-gray-500">
                Live Call Stream
              </span>
            </div>

            <div className="flex flex-col divide-y divide-indigo-100">

              {LIVE_CALLS.map((call) => (
                <div
                  key={call.time + call.number}
                  className="py-4"
                >
                  {/* mobile */}
                  <div className="flex flex-col gap-2 sm:hidden">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400 tabular-nums">
                        {call.time}
                      </span>

                      <div className="flex items-center gap-1.5">
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${DOT_STYLES[call.status]}`}
                        />
                        <span
                          className={`text-xs font-semibold ${STATUS_STYLES[call.status]}`}
                        >
                          {call.status}
                        </span>
                      </div>
                    </div>

                    <div className="font-medium text-gray-700">
                      {call.number}
                    </div>

                    <div className="text-gray-600 text-sm">
                      {call.city}
                    </div>
                  </div>

                  {/* tablet + desktop */}
                  <div className="hidden sm:flex items-center justify-between gap-4">
                    <span className="w-20 text-xs text-gray-400 tabular-nums">
                      {call.time}
                    </span>

                    <span className="w-36 text-sm font-medium text-gray-700 tabular-nums">
                      {call.number}
                    </span>

                    <span className="flex-1 text-sm text-gray-600">
                      {call.city}
                    </span>

                    <div className="flex items-center gap-1.5">
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${DOT_STYLES[call.status]}`}
                      />

                      <span
                        className={`text-xs font-semibold tracking-wide ${STATUS_STYLES[call.status]}`}
                      >
                        {call.status}
                      </span>
                    </div>
                  </div>

                </div>
              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}