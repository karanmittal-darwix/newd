import Image from "next/image";

interface Props {
  script: string;
  name: string;
  speakers: string;
  accents: number;
  isCodeSwitch?: boolean;
  codeSwitchLabel?: string;
  isActive?: boolean;
}

export default function LanguageCard({
  script,
  name,
  speakers,
  accents,
  isCodeSwitch = false,
  codeSwitchLabel,
  isActive = false,
}: Props) {
  return (
    <div
      className={`relative flex items-start justify-between px-3 sm:px-5 py-3 sm:py-4 rounded-2xl border transition-all ${
        isActive
          ? "bg-indigo-50 border-indigo-200"
          : "bg-white border-gray-200 hover:border-gray-300"
      }`}
    >
      <div className="flex-1 min-w-0">
        {/* Script */}
        <p
          className={`text-2xl font-semibold leading-tight ${
            isCodeSwitch ? "italic" : ""
          } text-gray-700`}
        >
          {script}
        </p>

        {/* English name */}
        <p className="text-sm text-gray-500 mt-1">{name}</p>

        {/* Speakers / accents */}
        <p className="text-xs text-gray-400 mt-2">
          {isCodeSwitch ? (
            <span className="text-indigo-500">{codeSwitchLabel} ·</span>
          ) : (
            <>{speakers} ·</>
          )}{" "}
          {accents} accent{accents !== 1 ? "s" : ""}
        </p>
      </div>

      {/* Play Button using your SVG */}
      <button className="ml-4 mt-1 flex-shrink-0 hover:scale-105 transition">
        <Image
          src="/images/play.svg"
          alt="Play sample"
          width={24}
          height={24}
          //  className="w-8 h-8"
        />
      </button>
    </div>
  );
}
