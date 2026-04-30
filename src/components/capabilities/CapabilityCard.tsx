import type { ReactNode } from "react";

interface Props {
  icon: ReactNode;
  title: string;
  description: string;
  visual: ReactNode;
}

export default function CapabilityCard({
  icon,
  title,
  description,
  visual,
}: Props) {
  return (
    <div className="bg-white border border-gray-100 rounded-1xl p-4 sm:p-6 flex flex-col min-h-[320px] sm:min-h-[390px] hover:shadow-sm transition">
      <div className="flex items-center gap-3 mb-4">
        <span className="shrink-0 flex items-center justify-center">
          {icon}
        </span>

        <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
      </div>

      <p className="text-sm text-gray-500 leading-relaxed">{description}</p>

      <div className="mt-auto pt-8">{visual}</div>
    </div>
  );
}
