import Image from "next/image";

interface Props {
  name: string;
  logo: string;
  textLogo?: boolean;
  textColor?: string;
}

export default function IntegrationCard({ name, logo, textLogo = false, textColor }: Props) {
  return (
    <div className="border border-gray-200 rounded-xl bg-white px-4 py-3.5 flex items-center justify-center gap-2 min-h-[52px]">
      {textLogo ? (
        <span className={`text-base font-bold ${textColor ?? "text-gray-800"}`}>
          {name}
        </span>
      ) : (
        <>
          <div className="w-5 h-5 relative flex-shrink-0">
            <Image src={logo} alt={name} fill className="object-contain" />
          </div>
          <span className="text-sm text-gray-700 font-medium">{name}</span>
        </>
      )}
    </div>
  );
}