interface Props {
  value: string;
  label: string;
}

export default function StatCard({ value, label }: Props) {
  return (
    <div className="border border-gray-200 rounded-2xl bg-white px-5 md:px-7 py-5 md:py-7 min-h-[150px] md:min-h-[173px] flex flex-col justify-between">
      
      <span className="text-2xl sm:text-3xl text-gray-500 tracking-tight leading-tight whitespace-pre-line">
        {value}
      </span>

      <span className="text-sm sm:text-base text-gray-400 leading-snug mt-4 whitespace-pre-line">
        {label}
      </span>

    </div>
  );
}