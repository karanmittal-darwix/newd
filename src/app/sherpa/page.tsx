import DemoRequestSection from "@/components/DemoRequestSection";
import LogoMarquee from "@/components/LogoMarquee";
import { Manrope } from "next/font/google";
import {
	ANATOMY_CARDS,
	BFSI_SCENARIOS,
	CAPABILITY_DETAIL,
	CAPABILITY_ITEMS,
	COMMITMENTS,
	DEVICE_STATS,
	FEATURE_ITEMS,
	LIVE_CALLS,
	POST_CALL_METRICS,
	POST_CALL_NOTES,
	STAT_TONE,
	STATUS_STYLES,
	TRUST_LOGOS,
	WAVE_BARS,
	WAVE_BAR_GAP,
	WAVE_BAR_MAX,
	WAVE_BAR_WIDTH,
	WAVE_ROWS,
	WEARABLE_FEATURES,
} from "@/data/sherpa";

const manrope = Manrope({
	subsets: ["latin"],
	weight: ["400", "500", "600"],
});

type ScenarioIcon = (typeof BFSI_SCENARIOS)[number]["icon"];

const renderScenarioIcon = (icon: ScenarioIcon) => (
	<svg
		viewBox="0 0 24 24"
		className="h-4 w-4 text-indigo-600"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		aria-hidden="true"
	>
		{icon.shapes.map((shape, index) =>
			shape.type === "path" ? (
				<path key={`path-${index}`} d={shape.d} />
			) : (
				<circle key={`circle-${index}`} cx={shape.cx} cy={shape.cy} r={shape.r} />
			)
		)}
	</svg>
);

export default function SherpaPage() {
	return (
		<main className={manrope.className}>
			<section
				className="relative w-full pt-16 sm:pt-20 lg:pt-[88px] pb-12 sm:pb-16 lg:pb-[96px] px-4 sm:px-6 lg:px-[129px] lg:min-h-[500px]"
				style={{
					backgroundImage:
						"linear-gradient(90deg, #565ADD1F 0%, #565ADD00 100%)",
				}}
			>
				<div className="relative max-w-[1182px] mx-auto text-center">
						<div className="inline-flex items-center gap-2 rounded-full border border-[#e3e7f5] bg-white px-3.5 py-1.5 text-[11px] font-medium text-[#7b7b7b] shadow-sm">
							<span className="inline-flex h-2.5 w-2.5 rotate-45 rounded-[2px] bg-[#5b5ce8]" />
							<span>Physical AI Assist</span>
							<span className="text-[#d0d3e4]">&middot;</span>
							<span>BFSI field-grade</span>
						</div>

						<h1 className="mt-8 text-4xl sm:text-5xl lg:text-[69px] font-semibold text-[#4b4b4b] tracking-tight lg:tracking-[-2.13px] leading-[1.1] lg:leading-[77.52px] lg:whitespace-nowrap">
							The voice in your on{" "}
							<span className="text-[#5b5ce8]">ground team's ear.</span>
						</h1>

						<p className="mt-5 text-sm sm:text-base text-[#7a7a7a] max-w-[780px] mx-auto leading-relaxed">
							Sherpa rides alongside the agent on every in-person BFSI call,
							capturing studio-grade audio, scoring the script live, and
							whispering nudges before the customer finishes their objection.
						</p>

						<div className="mt-7 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-[640px] mx-auto">
							{FEATURE_ITEMS.map((item) => (
								<div
									key={item.title}
									className="flex items-center justify-center gap-2"
								>
									<span
										className={`h-2 w-2 rounded-full ${
											item.hasDot
												? "bg-green-500"
												: "bg-green-500 opacity-0"
										}`}
										aria-hidden="true"
									/>
									<div className="text-left">
										<div className="text-[13px] font-semibold text-[#4b4b4b] leading-tight">
											{item.title}
										</div>
										<div className="mt-1 text-[11px] text-[#8a8a8a] leading-tight">
											{item.subtitle}
										</div>
									</div>
								</div>
							))}
						</div>

						<div className="mt-8 flex items-center justify-center gap-3 sm:gap-4">
							<button
								type="button"
								className="rounded-[12px] border border-[#5b5ce8] bg-white px-6 py-2.5 text-[13px] font-semibold text-[#5b5ce8] shadow-sm transition hover:border-[#4e4fd9]"
							>
								Meet the device
							</button>
							<button
								type="button"
								className="rounded-[12px] bg-[#5b5ce8] px-6 py-2.5 text-[13px] font-semibold text-white shadow-lg shadow-indigo-200/80 transition hover:bg-[#5152d8]"
							>
								Book a demo
							</button>
						</div>
					</div>

				<div className="mt-12 sm:mt-14">
					<div className="w-full max-w-[920px] mx-auto min-h-[151px] grid grid-cols-2 sm:grid-cols-4">
						{DEVICE_STATS.map((stat) => (
							<div
								key={stat.value}
								className="flex h-[76px] w-[230px] flex-col items-center justify-center border-l-[0.8px] border-gray-200"
							>
								<span className="text-xl sm:text-2xl font-semibold text-[#4b4b4b] tracking-tight">
									{stat.value}
								</span>
								<span className="mt-1 text-[11px] sm:text-xs text-[#8a8a8a]">
									{stat.label}
								</span>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="bg-white px-4 sm:px-6">
				<div className="max-w-6xl mx-auto pt-10 sm:pt-12">
					<p className="text-center text-xs sm:text-sm text-gray-500 font-semibold">
						Trusted by Top Enterprises Globally
					</p>
					<LogoMarquee logos={TRUST_LOGOS} className="mt-3" />
				</div>

				<div className="max-w-6xl mx-auto pt-14 sm:pt-16 pb-12 sm:pb-16">
					<div className="text-center">
						<p className="text-xs font-semibold tracking-[0.3em] text-indigo-500 uppercase">
							Anatomy of Sherpa
						</p>
						<h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-600 tracking-tight">
							Capture. Assist. Analyze.{" "}
							<span className="text-indigo-600">Improve.</span>
						</h2>
						<p className="mt-4 text-sm sm:text-base text-[#686868]">
							Four primitives running every moment Sherpa is in the field.
						</p>
					</div>

					<div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
						{ANATOMY_CARDS.map((card) => (
							<div
								key={card.step}
								className="rounded-2xl border border-gray-200 bg-white p-5 sm:p-6 shadow-sm"
							>
								<p className="text-[11px] font-semibold text-indigo-500">
									{card.step}
								</p>
								<h3 className="mt-3 text-base font-semibold text-gray-700">
									{card.title}
								</h3>
								<p className="mt-2 text-sm text-gray-400 leading-relaxed">
									{card.description}
								</p>
								<div className="mt-4 flex flex-wrap gap-2">
									{card.tags.map((tag) => (
										<span
											key={tag}
											className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-[11px] text-indigo-600"
										>
											{tag}
										</span>
									))}
								</div>
							</div>
						))}
					</div>
				</div>

				<div className="max-w-6xl mx-auto pb-10 sm:pb-14">
					<div className="rounded-3xl bg-[#eef0ff] p-6 sm:p-10 md:p-12">
						<div className="flex flex-col lg:flex-row lg:items-center gap-10">
							<div className="flex-1">
								<h3 className="w-[577.756px] h-[203px] text-[46px] font-semibold text-[#4b4b4b] leading-[50.6px] tracking-[-0.92px]">
									Branch noise
									<br />
									<span className="text-[#5b5ce8]">cancelled.</span>
									<br />
									Agent voice clear.
									<br />
									Customer voice clear.
								</h3>
								<p className="mt-4 text-sm sm:text-base text-[#7a7a7a] max-w-lg">
									Sherpa's active noise cancellation isolates agent and customer
									voices on busy branch floors. Noise is suppressed, transcripts
									stay clean, nudges accurate, scoring fair.
								</p>
								<div className="mt-6 flex flex-wrap gap-6 text-[11px] tracking-[0.2em] text-[#9aa0b2]">
									<div>
										SNR{" "}
										<span className="ml-2 text-[#5b5ce8] font-semibold">+18 DB</span>
									</div>
									<div>
										NER{" "}
										<span className="ml-2 text-[#5b5ce8] font-semibold">2.1%</span>
									</div>
									<div>
										SPK-SEP{" "}
										<span className="ml-2 text-[#5b5ce8] font-semibold">98.4%</span>
									</div>
								</div>
							</div>

							<div className="flex-1">
								<div className="min-h-[240px] rounded-2xl border border-[#e0e4f6] bg-[#f8f9ff] p-6 shadow-md shadow-indigo-100/60">
									<div className="space-y-10">
										{WAVE_ROWS.map((row, index) => (
											<div
												key={`${row.db}-${index}`}
												className="flex items-center gap-4"
											>
												<span className="text-[11px] text-[#9aa0b2] tracking-[0.2em]">
													RAW INPUT
												</span>
												<svg
													viewBox="0 0 360 60"
													className={`h-8 flex-1 ${row.color}`}
													fill="currentColor"
												>
													{WAVE_BARS.map((height, barIndex) => {
														const x = barIndex * (WAVE_BAR_WIDTH + WAVE_BAR_GAP);
														const y = (WAVE_BAR_MAX - height) / 2;
														return (
															<rect
																key={`${row.db}-${barIndex}`}
																x={x}
																y={y}
																width={WAVE_BAR_WIDTH}
																height={height}
																rx={3}
															/>
														);
													})}
												</svg>
												<span className="text-sm font-semibold text-[#2d2f3a]">
													{row.db}
												</span>
											</div>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="max-w-6xl mx-auto pt-6 sm:pt-10 pb-16 sm:pb-24">
					<div className="text-center">
						<p className="text-xs font-semibold tracking-[0.3em] text-indigo-500 uppercase">
							Sherpa AI Capabilities
						</p>
						<h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-600 tracking-tight">
							Eight named AI services.{" "}
							<span className="text-indigo-600">One device. One brain.</span>
						</h2>
					</div>

					<div className="mt-10 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8">
						<div className="rounded-2xl border border-gray-200 bg-white p-3 sm:p-4 shadow-sm">
							<div className="space-y-0">
								{CAPABILITY_ITEMS.map((item, index) => {
									const isActive = index === 0;
									return (
										<div
											key={item.id}
											className={`rounded-xl border px-4 sm:px-5 py-3 sm:py-4 ${
												isActive
													? "border-indigo-300 bg-indigo-50/60"
													: "border-gray-200 bg-white"
											}`}
										>
											<div className="flex items-start justify-between gap-4">
												<div className="flex items-start gap-4">
													<span className="text-[11px] font-semibold text-gray-400 mt-1">
														{item.id}
													</span>
													<div>
														<p
															className={`text-sm sm:text-base font-semibold ${
																isActive ? "text-indigo-600" : "text-gray-700"
															}`}
														>
															{item.title}{" "}
															<span className="text-gray-500 font-medium">
																&middot; {item.subtitle}
															</span>
														</p>
														{isActive && item.description && (
															<p className="mt-2 text-xs sm:text-sm text-gray-400 leading-relaxed max-w-md">
																{item.description}
															</p>
														)}
													</div>
												</div>
												<span className="text-gray-400 text-lg">
													{isActive ? "×" : "+"}
												</span>
											</div>
										</div>
									);
								})}
							</div>
						</div>

						<div className="rounded-2xl border border-[#e6e9f6] bg-white p-6 sm:p-7 shadow-sm">
							<p className="text-[11px] font-semibold tracking-[0.3em] text-[#5b5ce8] uppercase">
								{CAPABILITY_DETAIL.label}
							</p>
							<h3 className="mt-3 text-xl sm:text-2xl font-semibold text-[#4b4b4b]">
								{CAPABILITY_DETAIL.title}{" "}
								<span className="text-[#7b7b7b] font-medium">
									&middot; {CAPABILITY_DETAIL.subtitle}
								</span>
							</h3>
							<p className="mt-3 text-sm text-[#7a7a7a] leading-relaxed">
								{CAPABILITY_DETAIL.description}
							</p>

							<div className="mt-6 rounded-2xl border border-[#6f6ff5] bg-[#eff0ff] p-4 sm:p-5">
								<div className="flex items-start gap-4">
									<div className="h-12 w-12 rounded-full bg-[#5b5ce8] text-white flex items-center justify-center">
										<svg
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
											className="h-6 w-6"
											aria-hidden="true"
										>
											<path d="M8 9h8M10 13h4" />
											<rect x="4" y="5" width="16" height="14" rx="3" />
										</svg>
									</div>
									<div>
										<p className="text-xs font-semibold tracking-[0.2em] text-[#7b7b7b]">
											{CAPABILITY_DETAIL.cardLabel}:
										</p>
										<p className="mt-1 text-sm font-semibold text-[#1f1f1f]">
											{CAPABILITY_DETAIL.cardTitle}
										</p>
									</div>
								</div>

								<div className="mt-4 h-px w-full bg-[#6f6ff5]" />

								<div className="mt-4 rounded-xl bg-white p-4 shadow-sm">
									<ul className="space-y-2 text-sm text-[#5a5a5a] list-disc pl-5">
										{CAPABILITY_DETAIL.bullets.map((bullet) => (
											<li key={bullet}>{bullet}</li>
										))}
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="max-w-6xl mx-auto pt-4 sm:pt-8 pb-16 sm:pb-24">
					<div className="text-center">
						<p className="text-xs font-semibold tracking-[0.3em] text-indigo-500 uppercase">
							Built for BFSI
						</p>
						<h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-600 tracking-tight">
							Four <span className="text-indigo-600">field scenarios</span>
							{" "}
							already in production.
						</h2>
					</div>

					<div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
						{BFSI_SCENARIOS.map((scenario) => (
							<div
								key={scenario.title}
								className="rounded-2xl border border-gray-200 bg-white p-5 sm:p-6 shadow-sm"
							>
								<div className="flex items-start justify-between gap-4">
									<div>
										<h3 className="text-base sm:text-lg font-semibold text-gray-700">
											{scenario.title}
										</h3>
										<p className="mt-1 text-xs sm:text-sm text-gray-400">
											{scenario.subtitle}
										</p>
									</div>
									<div className="h-9 w-9 rounded-lg border border-indigo-200 bg-indigo-50 flex items-center justify-center">
										{renderScenarioIcon(scenario.icon)}
									</div>
								</div>

								<div className="mt-4 grid grid-cols-1 sm:grid-cols-[1.2fr_0.8fr] gap-4">
									<div>
										<p className="text-[11px] font-semibold text-gray-400 uppercase tracking-[0.2em]">
											Sherpa whispers
										</p>
										<ul className="mt-3 space-y-2 text-xs sm:text-sm text-gray-500">
											{scenario.whispers.map((item) => (
												<li key={item} className="flex items-start gap-2">
													<span className="text-indigo-500 mt-0.5">-&gt;</span>
													<span>{item}</span>
												</li>
											))}
										</ul>
									</div>
									<div className="rounded-xl bg-indigo-50/70 border border-indigo-100 p-4">
										<div className="space-y-2 text-xs sm:text-sm text-gray-600">
											{scenario.stats.map((stat) => (
												<div
													key={stat.label}
													className="flex items-center justify-between gap-4"
												>
													<span>{stat.label}</span>
													<span
														className={`font-semibold ${STAT_TONE[stat.tone]}`}
													>
														{stat.value}
													</span>
												</div>
											))}
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>

				<div className="max-w-6xl mx-auto pt-4 sm:pt-8 pb-16 sm:pb-24">
					<div className="rounded-3xl bg-[#f1f2ff] p-6 sm:p-10 md:p-12">
						<div className="flex flex-col lg:flex-row lg:items-center gap-10">
							<div className="flex-1">
								<h3 className="text-3xl sm:text-4xl font-semibold text-gray-600 leading-tight">
									Loop in. Tag. Coach. Mid-call.
								</h3>
								<p className="mt-4 text-sm sm:text-base text-gray-400 max-w-lg">
									Managers see the floor live. They can join any call, drop a
									Success / Warning / Danger flag tagged to a transcript moment, and
									the FO sees it as an in-ear feedback message without breaking the
									conversation.
								</p>
								<div className="mt-6 flex flex-wrap gap-3">
									<span className="rounded-full bg-indigo-100 px-3 py-1 text-[11px] font-semibold text-indigo-600">
										SUCCESS · repeatable behaviour
									</span>
									<span className="rounded-full bg-indigo-100 px-3 py-1 text-[11px] font-semibold text-indigo-600">
										WARNING · script drift
									</span>
									<span className="rounded-full bg-indigo-100 px-3 py-1 text-[11px] font-semibold text-indigo-600">
										DANGER · compliance miss
									</span>
								</div>
							</div>

							<div className="flex-1">
								<div className="rounded-2xl border border-indigo-100 bg-white p-5 sm:p-6 shadow-lg shadow-indigo-100/70">
									<div className="flex items-center justify-between text-[11px] text-gray-400">
										<span>FLOOR · MUMBAI-CST · 14 LIVE</span>
										<span className="flex items-center gap-2 text-emerald-500">
											<span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
											LIVE
										</span>
									</div>
									<div className="mt-3 divide-y divide-gray-100">
										{LIVE_CALLS.map((call) => (
											<div
												key={call.name}
												className="flex items-center justify-between gap-4 py-3"
											>
												<div>
													<p className="text-sm font-semibold text-gray-700">
														{call.name}
													</p>
													<p className="text-xs text-gray-400">
														{call.location}
													</p>
												</div>
												<p className="text-xs text-gray-500 flex-1 text-center">
													{call.metric}
												</p>
												<span
													className={`rounded-full px-3 py-1 text-[11px] font-semibold ${
														STATUS_STYLES[call.statusTone]
													}`}
												>
													{call.status}
												</span>
											</div>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="max-w-6xl mx-auto pt-2 sm:pt-6 pb-16 sm:pb-24">
					<div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 items-center">
						<div>
							<p className="text-xs font-semibold tracking-[0.3em] text-indigo-500 uppercase">
								Sherpa Wearable
							</p>
							<h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-600 tracking-tight">
								A device built to do{" "}
								<span className="text-indigo-600">multiple things well.</span>
							</h2>
							<p className="mt-4 text-sm sm:text-base text-gray-400 max-w-xl">
								Phone capture works in quiet settings. For noisy field
								environments, Sherpa is the purpose-built clip-on with always-on
								listening and low-latency in-ear nudges.
							</p>
							<div className="mt-6 flex flex-wrap gap-3">
								<button
									type="button"
									className="rounded-xl border border-indigo-300 bg-white px-5 sm:px-6 py-2.5 text-sm font-semibold text-indigo-600 shadow-sm shadow-indigo-100/80 transition hover:border-indigo-400"
								>
									Hardware brief (PDF)
								</button>
								<button
									type="button"
									className="rounded-xl bg-indigo-600 px-5 sm:px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-200/80 transition hover:bg-indigo-500"
								>
									Order eval kit
								</button>
							</div>
						</div>

						<div className="rounded-2xl border border-gray-200 bg-white p-5 sm:p-6 shadow-sm">
							<div className="relative rounded-2xl bg-[#f1f2ff] p-4 sm:p-6">
								<span className="absolute right-4 top-4 rounded-md bg-indigo-600 px-2 py-1 text-[11px] font-semibold text-white">
									RFID
								</span>
								<div className="relative h-48 sm:h-56">
									<svg
										viewBox="0 0 420 240"
										className="h-full w-full"
										aria-hidden="true"
									>
										<defs>
											<linearGradient id="clip" x1="0" y1="0" x2="1" y2="1">
												<stop offset="0" stopColor="#0f1115" />
												<stop offset="1" stopColor="#2a2d36" />
											</linearGradient>
											<linearGradient id="disc" x1="0" y1="0" x2="1" y2="1">
												<stop offset="0" stopColor="#1f2128" />
												<stop offset="1" stopColor="#3b3f4b" />
											</linearGradient>
										</defs>
										<rect x="40" y="140" width="170" height="70" rx="18" fill="url(#clip)" />
										<rect x="62" y="162" width="20" height="8" rx="4" fill="#6ee7b7" />
										<rect x="170" y="162" width="12" height="8" rx="4" fill="#6ee7b7" />
										<rect x="96" y="150" width="40" height="40" rx="10" fill="#111318" />
										<text
											x="115"
											y="176"
											fill="#f8fafc"
											fontSize="18"
											fontFamily="Arial, sans-serif"
											fontWeight="700"
										>
											D
										</text>
										<circle cx="300" cy="90" r="64" fill="url(#disc)" />
										<circle cx="300" cy="90" r="54" fill="#111318" />
										<rect x="284" y="80" width="32" height="32" rx="8" fill="#1f2937" />
										<text
											x="294"
											y="102"
											fill="#f8fafc"
											fontSize="14"
											fontFamily="Arial, sans-serif"
											fontWeight="700"
										>
											D
										</text>
										<circle cx="120" cy="118" r="10" fill="none" stroke="#60a5fa" strokeWidth="2" />
										<circle cx="120" cy="118" r="18" fill="none" stroke="#93c5fd" strokeWidth="2" />
										<circle cx="120" cy="118" r="26" fill="none" stroke="#bfdbfe" strokeWidth="2" />
									</svg>
								</div>
							</div>
							<p className="mt-4 text-center text-[11px] tracking-[0.3em] text-gray-400">
								CLIP-ON · 38G · IP54 · BLUETOOTH + LTE
							</p>
						</div>
					</div>

					<div className="mt-10 rounded-2xl border border-gray-200 bg-white divide-y divide-gray-200 sm:divide-y-0 sm:divide-x grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
						{WEARABLE_FEATURES.map((feature) => (
							<div key={feature.label} className="p-5 sm:p-6">
								<p className="text-[11px] font-semibold tracking-[0.2em] text-indigo-500 uppercase">
									{feature.label}
								</p>
								<p className="mt-3 text-sm font-semibold text-gray-700">
									{feature.title}
								</p>
								<p className="mt-2 text-xs sm:text-sm text-gray-400">
									{feature.description}
								</p>
							</div>
						))}
					</div>
				</div>

				<div className="max-w-6xl mx-auto pt-2 sm:pt-6 pb-16 sm:pb-24">
					<div className="text-center">
						<p className="text-xs font-semibold tracking-[0.3em] text-indigo-500 uppercase">
							Post-call Analysis
						</p>
						<h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-600 tracking-tight">
							No noise. Just <span className="text-indigo-600">clarity</span> on
							 performance and next steps.
						</h2>
						<p className="mt-4 text-sm sm:text-base text-gray-400 max-w-2xl mx-auto">
							The moment a conversation ends, Sherpa breaks it down into clear,
							actionable insights. One screen. Every signal.
						</p>
					</div>

					<div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
						<div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-7 shadow-sm">
							<div className="flex items-center justify-between text-[11px] tracking-[0.2em] text-gray-400">
								<span>CALL · LAP-24081 · ROHIT M</span>
								<span className="text-gray-300"> </span>
							</div>
							<div className="mt-4 flex items-center justify-between gap-4">
								<p className="text-sm font-semibold text-gray-700">
									02:48 · loan-against-property welcome
								</p>
								<p className="text-3xl font-semibold text-emerald-500">
									94
									<span className="text-base text-gray-400">/100</span>
								</p>
							</div>

							<div className="mt-6 grid grid-cols-2 gap-4">
								{POST_CALL_METRICS.map((metric) => (
									<div key={metric.label}>
										<p className="text-[11px] font-semibold text-gray-400 tracking-[0.2em] uppercase">
											{metric.label}
										</p>
										<div className="mt-2 h-1.5 rounded-full bg-gray-100">
											<div
												className={`h-1.5 rounded-full ${metric.color}`}
												style={{ width: `${metric.value * 100}%` }}
											/>
										</div>
									</div>
								))}
							</div>

							<div className="mt-6 space-y-3">
								{POST_CALL_NOTES.map((note) => (
									<div key={note.text} className="flex items-start gap-3">
										{note.status === "check" ? (
											<span className="h-5 w-5 rounded-full border border-indigo-200 bg-indigo-50 text-indigo-600 flex items-center justify-center text-xs">
												✓
											</span>
										) : (
											<span className="h-5 w-5 rounded-full border border-amber-200 bg-amber-50 text-amber-600 flex items-center justify-center text-xs">
												!
											</span>
										)}
										<p className="text-xs sm:text-sm text-gray-500">
											{note.text}
										</p>
									</div>
								))}
							</div>
						</div>

						<div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-7 shadow-sm">
							<div className="flex items-center justify-between text-[11px] tracking-[0.2em] text-gray-400">
								<span>COMMITMENTS · TRACKBOT AI</span>
								<span>3 CAPTURED</span>
							</div>
							<div className="mt-4 space-y-3">
								{COMMITMENTS.map((item) => (
									<div
										key={item.label}
										className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3"
									>
										<p className="text-[11px] font-semibold text-indigo-500 tracking-[0.2em] uppercase">
											{item.label}
										</p>
										<p className="mt-2 text-xs sm:text-sm text-gray-500">
											{item.text}
										</p>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>

			<DemoRequestSection />
		</main>
	);
}
