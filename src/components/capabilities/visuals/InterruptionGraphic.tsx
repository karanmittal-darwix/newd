export default function InterruptionGraphic() {
  return (
    <div className="mt-4 flex flex-col gap-2.5">
      {[
        { label: 'AGENT', width: '72%', note: '0.0 – 2.1s', color: 'bg-indigo-500' },
        { label: 'USER', width: '44%', note: '1.8 – 2.3s', color: 'bg-gray-800' },
        { label: 'AGENT', width: '60%', note: 'yields · 120ms', color: 'bg-indigo-300', highlight: true },
      ].map((row, i) => (
        <div key={i} className="flex items-center gap-2">
          <span className="text-[10px] font-semibold text-gray-400 w-10">{row.label}</span>
          <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
            <div className={`h-full rounded-full ${row.color}`} style={{ width: row.width }} />
          </div>
          <span className={`text-[10px] w-20 text-right ${row.highlight ? 'text-indigo-500 font-medium' : 'text-gray-400'}`}>
            {row.note}
          </span>
        </div>
      ))}
    </div>
  );
}