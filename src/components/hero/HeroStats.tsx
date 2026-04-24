import { HERO_STATS } from "@/data/mockData";

export default function HeroStats() {
  return (
    <div className="w-full border-t border-gray-100 mt-12 pt-8 pb-6">
      <div className="flex flex-wrap justify-center divide-x divide-gray-200">
        {HERO_STATS.map((stat, i) => (
          <div
            key={i}
            className="flex flex-col items-center px-8 py-2 min-w-[120px]"
          >
            <span className="text-3xl font-semibold text-gray-900 tracking-tight">
              {stat.value}
            </span>
            <span className="text-xs text-gray-400 text-center mt-1 leading-snug whitespace-pre-line">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}