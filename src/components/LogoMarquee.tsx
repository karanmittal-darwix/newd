import Image from "next/image";

type Logo = {
	src: string;
	alt: string;
};

type LogoMarqueeProps = {
	logos: readonly Logo[];
	className?: string;
	barClassName?: string;
	itemClassName?: string;
	imageClassName?: string;
};

export default function LogoMarquee({
	logos,
	className = "",
	barClassName = "",
	itemClassName = "",
	imageClassName = "",
}: LogoMarqueeProps) {
	return (
		<div
			className={`relative left-1/2 right-1/2 w-screen -ml-[50vw] -mr-[50vw] ${className}`}
		>
			<div
				className={`w-screen logo-marquee rounded-xl bg-indigo-600 py-4 px-6 sm:px-10 ${barClassName}`}
			>
				<div className="logo-marquee__track">
					<div className="logo-marquee__row">
						{logos.map((logo) => (
							<div
								key={logo.src}
								className={`logo-marquee__item h-6 sm:h-7 ${itemClassName}`}
							>
								<Image
									src={logo.src}
									alt={logo.alt}
									width={110}
									height={28}
									className={`h-full w-auto opacity-90 brightness-0 invert ${imageClassName}`}
								/>
							</div>
						))}
					</div>
					<div className="logo-marquee__row" aria-hidden="true">
						{logos.map((logo, index) => (
							<div
								key={`${logo.src}-dup-${index}`}
								className={`logo-marquee__item h-6 sm:h-7 ${itemClassName}`}
							>
								<Image
									src={logo.src}
									alt=""
									width={110}
									height={28}
									className={`h-full w-auto opacity-90 brightness-0 invert ${imageClassName}`}
								/>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
