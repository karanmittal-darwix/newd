const shifts = [
  'frustrated → calm',
  'curious → confident',
  'hurried → concise',
];

export default function ToneResponseGraphic() {
  return (
    <div className="mt-4">
      <div className="flex flex-wrap gap-2">
        {shifts.map((s) => (
          <span
            key={s}
            className="text-xs border border-gray-400 rounded-full px-3 py-1 text-gray-700"
          >
            {s}
          </span>
        ))}
      </div>
      <p className="text-[11px] text-gray-400 mt-3 leading-snug">
        Live calibration from prosody, lexical choice, response latency and prior turns.
      </p>
    </div>
  );
}