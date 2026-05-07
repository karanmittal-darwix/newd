import LogoMarquee from "@/components/LogoMarquee";
import { TRUSTED_LOGOS } from "@/data/compliance";
import { marLogos } from "@/data/marLogos";
import Image from "next/image";

export default function TrustedLogosBar() {
  return (
    <div className=" py-5 overflow-hidden">
      <LogoMarquee logos={marLogos} barClassName="bg-[#5b5ce8]" />
    </div>
  );
}
