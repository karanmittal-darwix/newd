type Status = 'live' | 'ringing' | 'none';

function getStatus(i: number): Status {
  if (i % 7 === 0) return 'none';
  if (i % 4 === 0) return 'ringing';
  return 'live';
}

const colorMap: Record<Status, string> = {
  live: 'bg-indigo-500',
  ringing: 'bg-indigo-300',
  none: 'bg-gray-200',
};

export default function ParallelEngineGraphic() {
  const cells = Array.from({ length: 80 });

  return (
    <div className="mt-4">
      <div className="grid gap-1" style={{ gridTemplateColumns: 'repeat(16, minmax(0, 1fr))' }}>
        {cells.map((_, i) => (
          <div
            key={i}
            className={`rounded-sm aspect-square ${colorMap[getStatus(i)]}`}
          />
        ))}
      </div>
      <div className="flex gap-4 mt-2.5">
        {[
          { color: 'bg-indigo-500', label: '38 LIVE' },
          { color: 'bg-indigo-300', label: '8 RINGING' },
          { color: 'bg-gray-200', label: '2 NO-ANSWER' },
        ].map((item) => (
          <div key={item.label} className="flex items-center gap-1.5">
            <span className={`w-2 h-2 rounded-full ${item.color}`} />
            <span className="text-[10px] text-gray-400">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}