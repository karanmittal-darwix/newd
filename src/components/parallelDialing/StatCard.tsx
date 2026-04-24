interface Props {
  value: string;
  label: string;
}

export default function StatCard({ value, label }: Props) {
  return (
    <div className="border border-gray-200 rounded-2xl bg-white px-7 py-7 min-h-[173px] flex flex-col justify-between">
      
      <span className="text-3xl text-gray-500 tracking-tight leading-tight whitespace-pre-line">
        {value}
      </span>

      <span className="text-base text-gray-400 leading-snug mt-4 whitespace-pre-line">
        {label}
      </span>

    </div>
  );
}