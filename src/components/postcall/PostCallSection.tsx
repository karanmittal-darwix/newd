import CallTimeline from "./CallTimeline";
import ActionTriggers from "./ActionTriggers";

export default function PostCallSection() {
  return (
    <section
      id="post-call-actions"
      className="bg-white py-16 sm:py-20 px-4 sm:px-6"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-indigo-500 mb-4">
            Post-Call Actions
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            <span className="text-indigo-600">The call ends.</span> The work
            begins <span className="text-indigo-600">automatically.</span>
          </h2>
          <p className="mt-5 text-gray-500 text-base max-w-4xl mx-auto leading-relaxed">
            Most voice AI drops the transcript and disappears. Darwix picks up
            where the call ended, firing WhatsApp messages, updating your CRM,
            sending invoices, scheduling follow-ups based on what the customer
            actually said.
          </p>
        </div>

        {/* Two-column body */}
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6 items-start">
          <CallTimeline />
          <ActionTriggers />
        </div>
      </div>
    </section>
  );
}
