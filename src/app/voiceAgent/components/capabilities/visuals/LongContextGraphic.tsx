const timeline = [
  { date: '14 Apr', text: 'Application initiated · docs pending' },
  { date: '16 Apr', text: 'Follow-up · collected PAN + income proof' },
  { date: '22 Apr', text: 'Sanction letter sent · this call' },
];

export default function LongContextGraphic() {
  return (
    <div className="mt-4">
      <p className="text-[11px] text-gray-600 mb-2">Context retained across 3 calls</p>
      <div className="flex flex-col gap-2">
        {timeline.map((item) => (
          <div key={item.date} className="flex items-start gap-3">
            <span className="text-[11px] font-semibold text-indigo-500 w-12 flex-shrink-0">
              {item.date}
            </span>
            <span className="text-[11px] text-gray-600 leading-snug">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}