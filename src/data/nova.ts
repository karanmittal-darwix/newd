export const NOVA_HERO_STATS = [
  { value: "3x",      label: "Conversion at the counter" },
  { value: "22",      label: "Customer facing langs"     },
  { value: "< 800ms", label: "First-token to greet"      },
  { value: "Q3₂₆",   label: "General availability"      },
];

export const NOVA_PILLARS = [
  {
    tag: "SENSE & GREET",
    title: "Intelligent first touch.",
    description:
      "Nova detects customers at the counter, understands their language, and greets them instantly — starting the conversation before staff steps in.",
    features: [
      "Person detection · zero PI storage",
      "Auto language pick · 22 langs · code-switch",
      "Dynamic avatar: gender, persona, attire",
      "Tone calibration from approach speed",
    ],
    utteranceLabel: "UTTERANCE · TURN 0",
    utterance: '"Welcome, sir! Looking for something specific or just exploring?"',
    utteranceMeta: "first token · 612ms · Hindi",
  },
  {
    tag: "UNDERSTAND & ASSIST",
    title: "Guided discovery.",
    description:
      "Nova understands needs, surfaces options, asks smart questions, and guides customers like an expert associate in 22 languages, consistently and instantly.",
    features: [
      "Catalogue + inventory aware",
      "Recommendation reasoning visible",
      "Comparison view: spec, price, fit",
      "Loops in human staff for high-touch",
    ],
    utteranceLabel: "DISCOVERY · TURN 4",
    utterance:
      '"For business travel, a TSA-lock carry-on suits you. Polycarbonate or aluminium?"',
    utteranceMeta: 'intent · "frequent traveller, wants premium"',
  },
  {
    tag: "ACT & CONVERT",
    title: "Instant payments + checkout.",
    description:
      "Nova creates a UPI link, completes payment, sends receipt, updates POS and loyalty, all at the counter without staff involvement.",
    features: [
      "UPI · cards · wallets · BNPL",
      "Loyalty + bill auto-emailed",
      "POS · Shopify · Unicommerce hookup",
      "Returns + exchanges with policy guardrails",
    ],
    utteranceLabel: "CHECKOUT",
    utterance: "UPI link sent · ₹14,990 · Tata Premium Carry-on",
    utteranceMeta: "paid · 4.2s · POS updated · 0 human-touch",
  },
];

export const NOVA_ADAPTIVE_CARDS = [
  {
    tag: "ENTERPRISE SYSTEM HOOKUPS",
    title: "Plugs into your stack on day one.",
    description:
      "POS, ERP, OMS, loyalty, helpdesk, payments. REST APIs and pre-built connectors. Same enterprise rails as Voice and Non-Voice.",
    chips: ["Shopify", "Unicommerce", "Razorpay", "SAP"],
    chipStyle: "text",
  },
  {
    tag: "DYNAMIC AVATAR ENGINE",
    title: "Looks the way your brand looks.",
    description:
      "Persona, gender, attire, accent, idiom: fully brand-controlled. The same Nova brain, but one wearing your sari and the other wearing your blazer.",
    chips: ["#5b5ce8", "#e06c34", "#22c55e", "#6b7280"],
    chipStyle: "color",
  },
  {
    tag: "GENAI MULTIMODAL",
    title: "Voice. Vision. Text. Together.",
    description:
      "Nova sees, hears, reads. Walks customers through specifications, holds the receipt up on screen, scans the barcode. All on one model.",
    chips: ["Vision", "Voice", "Text"],
    chipStyle: "text",
  },
  {
    tag: "INSTANT PAYMENTS",
    title: "From greeting to GMV in minutes.",
    description:
      "UPI · cards · wallets · BNPL · loyalty redemption. PCI-aware. The customer pays before they would have located the cashier.",
    chips: ["UPI", "Cards", "Paytm", "BNPL"],
    chipStyle: "text",
  },
];

export const NOVA_SURFACES = [
  {
    number: "SURFACE 01",
    title: "Standalone Kiosk",
    description:
      "Self-contained tower with screen, mic array, camera, NFC payments. Drop-in deploy at the entrance or near checkout.",
    chips: ["portrait 32\"", "far-field mic", "edge GPU"],
  },
  {
    number: "SURFACE 02",
    title: "Counter Tablet",
    description:
      "Tablet form factor for the existing counter. Works alongside your store associate as a guided discovery + recommendation surface.",
    chips: ["12.9\" iPad / Android", "cloud", "low latency"],
  },
  {
    number: "SURFACE 03",
    title: "Smart Display Wall",
    description:
      "Larger format for flagship stores. Catalogue browsing, comparison views, branded experiences with the same conversational brain.",
    chips: ["55–86\" displays", "multi-zone vision"],
  },
];

export const TRUSTED_LOGOS = [
  "kreedo", "brigade", "mashreq", "mokobara",
  "duroflex", "poonawallaFincorp", "adityaBirla",
  "apacfin", "sofi", "homeCredit",
];