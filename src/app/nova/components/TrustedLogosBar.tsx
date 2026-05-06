import LogoMarquee from "@/components/LogoMarquee";
import { TRUSTED_LOGOS } from "@/data/compliance";
import { TRUST_LOGOS } from "@/data/sherpa";
import Image from "next/image";

export default function TrustedLogosBar() {
  return (
    <div className=" py-5 overflow-hidden">
      <p className="text-center text-black text-[11px] font-semibold uppercase tracking-[0.3em] mb-4 opacity-80">
        Trusted by Top Enterprises Globally
      </p>
      <LogoMarquee logos={TRUST_LOGOS} barClassName="bg-[#5b5ce8]" />
    </div>
  );
}
