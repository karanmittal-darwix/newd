export default function ObjectionGraphic() {
  const rows = [
    { objection: '"Too expensive"', response: 'Reframe with ROI + EMI', score: 96 },
    { objection: '"Not interested"', response: 'Soft re-engage, value hook', score: 88 },
    { objection: '"Will think about it"', response: 'Time-box + schedule callback', score: 92 },
  ];

  return (
    <div className="mt-4 flex flex-col gap-2">
      {rows.map((row) => (
        <div key={row.objection} className="flex items-center justify-between text-xs gap-2">
          <span className="text-gray-400 border border-gray-200 rounded px-2 py-0.5 whitespace-nowrap">
            {row.objection}
          </span>
          <span className="text-gray-500 flex-1 text-center leading-tight">{row.response}</span>
          <span className="text-indigo-600 font-semibold w-8 text-right">{row.score}%</span>
        </div>
      ))}
    </div>
  );
}