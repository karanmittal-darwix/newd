import Image from "next/image";

interface Chip {
  label: string;
  arrow?: string;
}

interface Props {
  icon: string;
  name: string;
  chips: Chip[];
  description: string;
}

export default function TriggerCard({ icon, name, chips, description }: Props) {
  return (
    <div className="border border-gray-200 rounded-xl p-4 bg-white flex flex-col gap-2">
      {/* Top row */}
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 flex-1 flex-wrap">
          {/* Icon + name */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <div className="w-7 h-7 relative flex-shrink-0">
              <Image src={icon} alt={name} fill className="object-contain" />
            </div>
            <span className="text-sm font-semibold text-gray-800">{name}</span>
            <span className="text-[10px] font-semibold tracking-widest text-gray-400 uppercase ml-1">
              Trigger
            </span>
          </div>

          {/* Chips */}
          <div className="flex items-center gap-1.5 flex-wrap">
            {chips.map((chip, i) => (
              <div key={i} className="flex items-center gap-1">
                {i > 0 && chip.arrow && (
                  <span className="text-gray-400 text-xs">→</span>
                )}
                <span className="text-xs bg-gray-100 text-gray-600 border border-gray-200 rounded px-2 py-0.5">
                  {chip.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* WIRED badge */}
        <div className="flex items-center gap-1 flex-shrink-0">
          <svg className="w-3 h-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
          <span className="text-xs font-semibold text-green-400 tracking-wide">WIRED</span>
        </div>
      </div>

      {/* Description */}
      <p className="text-xs text-gray-500 leading-relaxed">{description}</p>
    </div>
  );
}