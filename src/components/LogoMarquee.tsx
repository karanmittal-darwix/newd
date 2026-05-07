import Image from "next/image";

type Logo = {
  src: string;
  alt: string;
};

type LogoMarqueeProps = {
  logos: readonly Logo[];
  title?: string;
  className?: string;
  barClassName?: string;
  itemClassName?: string;
  imageClassName?: string;
};

export default function LogoMarquee({
  logos,
  title = "Trusted by Top Enterprises Globally",
  className = "",
  barClassName = "",
  itemClassName = "",
  imageClassName = "",
}: LogoMarqueeProps) {
  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      {/* Top heading line */}
      <div className="flex items-center justify-center  bg-white px-6 py-3">
        <p className="text-[14px] sm:text-[15px] font-semibold text-[#4b4b4b] tracking-[-0.01em]">
          {title}
        </p>
      </div>

      {/* Marquee bar */}
      <div
        className={`w-full overflow-hidden bg-[#5b5ce8] py-5 px-6 sm:px-10 ${barClassName}`}
      >
        <div className="logo-marquee__track">
          {/* First Row */}
          <div className="logo-marquee__row">
            {logos.map((logo) => (
              <div
                key={logo.src}
                className={`logo-marquee__item flex items-center justify-center w-[150px] h-10 shrink-0 ${itemClassName}`}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={130}
                  height={35}
                  className={`max-h-full w-auto object-contain opacity-95 brightness-0 invert ${imageClassName}`}
                />
              </div>
            ))}
          </div>

          {/* Duplicate Row */}
          <div className="logo-marquee__row" aria-hidden="true">
            {logos.map((logo, index) => (
              <div
                key={`${logo.src}-dup-${index}`}
                className={`logo-marquee__item flex items-center justify-center w-[140px] h-10 shrink-0 ${itemClassName}`}
              >
                <Image
                  src={logo.src}
                  alt=""
                  width={130}
                  height={35}
                  className={`max-h-full w-auto object-contain opacity-95 brightness-0 invert ${imageClassName}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
