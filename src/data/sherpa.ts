export const FEATURE_ITEMS = [
	{ title: "9,800 FOS", subtitle: "equipped", hasDot: true },
	{ title: "Active noise cancellation", subtitle: "built-in" },
	{ title: "8KB on-device", subtitle: "storage" },
];

export const DEVICE_STATS = [
	{ value: "12+ hr", label: "Device Runtime" },
	{ value: "0 KB", label: "On-Device Audio" },
	{ value: "RFID", label: "Identity - Locked" },
	{ value: "Offline", label: "Zero Bandwidth Mode" },
];

export const TRUST_LOGOS = [
	{ src: "/images/company/salesforce.svg", alt: "Salesforce" },
	{ src: "/images/company/razorpay.svg", alt: "Razorpay" },
	{ src: "/images/company/cashfree.svg", alt: "Cashfree" },
	{ src: "/images/company/hubspot.svg", alt: "HubSpot" },
	{ src: "/images/company/slackLogo.svg", alt: "Slack" },
	{ src: "/images/company/whatsapp.svg", alt: "WhatsApp" },
	{ src: "/images/company/zapier.svg", alt: "Zapier" },
	{ src: "/images/company/outlook.svg", alt: "Outlook" },
	{ src: "/images/company/pipedrive.svg", alt: "Pipedrive" },
	{ src: "/images/company/cal.svg", alt: "Cal" },
];

export const ANATOMY_CARDS = [
	{
		step: "01 - Capture",
		title: "IoT-powered audio",
		description:
			"Studio-grade clip-on hardware records every conversation with active noise cancellation and multi-speaker ID.",
		tags: ["12hr battery", "multi-speaker", "RFID-linked"],
	},
	{
		step: "02 - Assist",
		title: "Live nudges",
		description:
			"Context-aware audio prompts on customer intent. Agents stay in conversation, no screens.",
		tags: ["audio nudges", "script adherence", "live transcript"],
	},
	{
		step: "03 - Analyze",
		title: "Real-time speech analytics",
		description:
			"Score, parameters, sentiment, and key-miss flags at call end. One view, full clarity.",
		tags: ["scoring", "sentiment", "PII redaction"],
	},
	{
		step: "04 - Improve",
		title: "Continuous coaching",
		description:
			"Manager loop-in, success/warning/danger feedback tags, repeat winning behaviors across the team.",
		tags: ["manager loop", "action routing", "SLM training"],
	},
];

export const WAVE_BARS = [
	8, 14, 22, 12, 34, 48, 28, 16, 42, 56, 36, 20, 12, 30, 46, 24,
	10, 18, 38, 54, 44, 26, 14, 22, 50, 32, 18, 40, 58, 34, 16, 24,
	12, 28, 20, 10,
];

export const WAVE_BAR_WIDTH = 6;
export const WAVE_BAR_GAP = 4;
export const WAVE_BAR_MAX = 60;

export const WAVE_ROWS = [
	{ color: "text-[#5b5ce8]", db: "67dB", text: "Raw Input" },
	{ color: "text-[#cfd3e6]", db: "42dB", text: "Noise Floor" },
	{ color: "text-[#5b5ce8]", db: "25dB", text: "Clean Out" },
];

export const CAPABILITY_ITEMS = [
	{
		id: "01",
		title: "Agent Assist",
		subtitle: "live nudges",
		description:
			"Real-time, context-aware prompts triggered on customer intent. Audio-enabled so the FO never glances at a screen.",
	},
	{
		id: "02",
		title: "Redact AI",
		subtitle: "PII masking",
		description:
			"Real-time, context-aware prompts triggered on customer intent. Audio-enabled so the FO never glances at a screen.",
	},
	{
		id: "03",
		title: "Verify AI",
		subtitle: "auto-KYC",
		description:
			"Real-time, context-aware prompts triggered on customer intent. Audio-enabled so the FO never glances at a screen.",
	},
	{
		id: "04",
		title: "Commit AI",
		subtitle: "auto-PD & tasks",
		description:
			"Real-time, context-aware prompts triggered on customer intent. Audio-enabled so the FO never glances at a screen.",
	},
	{
		id: "05",
		title: "Sentinel AI",
		subtitle: "manager monitor",
		description:
			"Real-time, context-aware prompts triggered on customer intent. Audio-enabled so the FO never glances at a screen.",
	},
	{
		id: "06",
		title: "Audit AI",
		subtitle: "compliance reports",
		description:
			"Real-time, context-aware prompts triggered on customer intent. Audio-enabled so the FO never glances at a screen.",
	},
	{
		id: "07",
		title: "TrackBot AI",
		subtitle: "summary & commitments",
		description:
			"Real-time, context-aware prompts triggered on customer intent. Audio-enabled so the FO never glances at a screen.",
	},
	{
		id: "08",
		title: "Score AI",
		subtitle: "parameter breakdown",
		description:
			"Real-time, context-aware prompts triggered on customer intent. Audio-enabled so the FO never glances at a screen.",
	},
];

export const CAPABILITY_DETAIL = {
	label: "CAPABILITY",
	title: "Agent Assist",
	subtitle: "Live Nudges",
	description:
		"Real-time prompts triggered on customer intent. Audio-enabled so the FO never glances at a screen.",
	cardLabel: "ATHENA",
	cardTitle: "Eligibility Review & Compliance",
	bullets: [
		"Confirm vehicle details, ownership & eligibility criteria",
		"Check customer income, existing EMIs & repayment capacity",
		"Explain loan amount based on vehicle value, EMI & total cost",
		"Clarify FC transfer, documentation & applicable charges",
		"Inform customer approval depends on verification & documents",
	],
};

export const BFSI_SCENARIOS = [
	{
		title: "Lending - Field Visit & Repayment",
		subtitle: "Application pickup, on-site KYC, repayment follow-ups",
		icon: {
			shapes: [
				{ type: "circle", cx: 12, cy: 8, r: 3 },
				{ type: "path", d: "M6 19c0-3.3 2.7-6 6-6s6 2.7 6 6" },
			],
		},
		whispers: [
			"Doc checklist live during pickup",
			"Co-applicant prompts employer verification",
			"Repayment plan calculator on-call",
			"Cross-sell trigger: top-up eligibility",
		],
		stats: [
			{ label: "Disbursal cycle", value: "-2.3 days", tone: "negative" },
			{ label: "FO productivity", value: "+41%", tone: "positive" },
			{ label: "On-time EMI", value: "+19%", tone: "positive" },
			{ label: "FOs equipped", value: "9,800+", tone: "neutral" },
		],
	},
		{
		title: "Branch Banking Insurance",
		subtitle: "Cross-sell at the teller window, premium pitches, renewals",
		icon: {
			shapes: [
				{ type: "path", d: "M4 10h16" },
				{ type: "path", d: "M6 10V7l6-3 6 3v3" },
				{ type: "path", d: "M6 10v7m6-7v7m6-7v7" },
			],
		},
		whispers: [
			"Eligibility match, in real time",
			"Premium calc + benefit bullets",
			"Pre-existing condition disclosures",
			"KYC pre-fill from existing customer 360",
		],
		stats: [
			{ label: "Cross-sell rate", value: "+44%", tone: "positive" },
			{ label: "Policies / day", value: "11K", tone: "neutral" },
			{ label: "Time-to-issue", value: "-52%", tone: "negative" },
			{ label: "Branches", value: "2,300+", tone: "neutral" },
		],
	},
	
	{
		title: "NPA & Collections",
		subtitle: "Field recovery, soft-collection visits, settlement negotiation",
		icon: {
			shapes: [
				{ type: "circle", cx: 12, cy: 12, r: 9 },
				{ type: "path", d: "M12 7v5l3 3" },
			],
		},
		whispers: [
			"Promise-to-pay date capture, auto-tracked",
			"Settlement bands within policy",
			"RBI fair-practice prompts (tone, threats)",
			"Escalation cue if bucket worsens",
		],
		stats: [
			{ label: "Recovery rate", value: "+34%", tone: "positive" },
			{ label: "Cost per promise", value: "-61%", tone: "negative" },
			{ label: "Compliance breaches", value: "-88%", tone: "negative" },
			{ label: "Visits / month", value: "340k", tone: "neutral" },
		],
	},
		{
		title: "HNI Wealth Management",
		subtitle: "Portfolio reviews, advisory calls, family-office briefings",
		icon: {
			shapes: [
				{ type: "path", d: "M4 15l6-6 4 4 6-7" },
				{ type: "path", d: "M16 6h4v4" },
			],
		},
		whispers: [
			"Risk-band shift since last quarter",
			"Top 3 advisory opportunities, ranked",
			"Compliance: suitability rationale prompts",
			"Client's family event flags from CRM",
		],
		stats: [
			{ label: "Wallet share", value: "+22%", tone: "positive" },
			{ label: "RM productivity", value: "+38%", tone: "positive" },
			{ label: "Mis-sell flags", value: "-71%", tone: "negative" },
			{ label: "RMs on Sherpa", value: "1,400+", tone: "neutral" },
		],
	},

	

	
] as const;

export const STAT_TONE = {
	positive: "text-emerald-500",
	negative: "text-rose-500",
	neutral: "text-gray-600",
} as const;

export const LIVE_CALLS = [
	{
		name: "Alex Morgan",
		location: "LAP · New York",
		metric: "script ↑ 96%",
		status: "Live · 04:08",
		statusTone: "live",
	},
	{
		name: "Jordan Lee",
		location: "Wealth · London",
		metric: "smnt ↑ +8.4",
		status: "Success",
		statusTone: "success",
	},
	{
		name: "Taylor Smith",
		location: "Collections · Singapore",
		metric: "script drift",
		status: "Warning",
		statusTone: "warning",
	},
	{
		name: "Meera Gupta",
		location: "Insurance · Pune",
		metric: "eligibility match",
		status: "Live · 04:08",
		statusTone: "live",
	},
	{
		name: "Riley Patel",
		location: "LAP · Toronto",
		metric: "on commit",
		status: "Success",
		statusTone: "success",
	},
] as const;

export const STATUS_STYLES = {
	live: "bg-indigo-100 text-indigo-600",
	success: "bg-emerald-100 text-emerald-600",
	warning: "bg-amber-100 text-amber-700",
} as const;

export const WEARABLE_FEATURES = [
	{
		label: "Audio",
		title: "Studio-grade",
		description: "ANC, multi-speaker diarization, 16kHz capture.",
	},
	{
		label: "Privacy",
		title: "0 KB on-device",
		description: "Stateless. RFID-linked. Encrypted upstream.",
	},
	{
		label: "Connectivity",
		title: "LTE · Wi-Fi · Offline",
		description: "Zero-bandwidth offline mode for any environment.",
	},
	{
		label: "Battery",
		title: "12+ hours",
		description: "Full field shift, hot-swappable cell.",
	},
];

export const POST_CALL_METRICS = [
	{ label: "Script", value: 0.92, color: "bg-indigo-500" },
	{ label: "Compliance", value: 0.78, color: "bg-indigo-500" },
	{ label: "Empathy", value: 0.64, color: "bg-indigo-500" },
	{ label: "Close", value: 0.48, color: "bg-amber-500" },
];

export const POST_CALL_NOTES = [
	{
		status: "check",
		text: "Welcome script delivered, all 7 mandatory disclosures",
	},
	{ status: "check", text: "EMI shift offered within policy" },
	{ status: "alert", text: "Did not confirm next-step deadline verbally" },
];

export const COMMITMENTS = [
	{
		label: "Customer · by 22 Apr",
		text: "Submit signed sanction letter via WhatsApp",
	},
	{
		label: "Agent · by EOD",
		text: "Update EMI date in CRM & trigger approval",
	},
	{
		label: "System · t+0",
		text: "Schedule follow-up call · 25 Apr 11:00",
	},
];
