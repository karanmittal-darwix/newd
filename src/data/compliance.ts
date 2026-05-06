export const CERTIFICATIONS = [
  {
    badge: "SOC 2 TYPE II",
    title: "Audited annually",
    description:
      "Independent third-party attestation across security, availability, confidentiality.",
  },
  {
    badge: "ISO 27001",
    title: "Certified ISMS",
    description:
      "Information security management system across people, process, platform.",
  },
  {
    badge: "DPDP ACT",
    title: "Consent + masking",
    description:
      "Aligned with India's Digital Personal Data Protection Act — purpose limitation, masking, retention.",
  },
  {
    badge: "RBI · 2018 PDL",
    title: "Payment data India-only",
    description:
      "Payment system data stored within Indian boundaries per RBI's 2018 directive.",
  },
  {
    badge: "RBI · 2025 OUTSOURCING",
    title: "Supervisory access",
    description:
      "Aligned to the 2025 Outsourcing Directions — supervisory access, exit transition, audit.",
  },
  {
    badge: "FREE-AI",
    title: "Governance trail",
    description:
      "Aligned with the emerging FREE-AI framework for responsible model governance in BFSI.",
  },
  {
    badge: "IRDAI MITC",
    title: "Verbal disclosure trail",
    description:
      "Captures and audits IRDAI Most Important Terms & Conditions disclosures — verbal + written.",
  },
  {
    badge: "TRAI · DLT",
    title: "DND + consent",
    description:
      "DND scrubs, DLT-template messaging, attempt caps, time-window enforcement on every dial.",
  },
];

export const INFRA_STATS = [
  { label: "On-prem · VPC · Cloud" },
  { label: "Industry servers" },
  { label: "AES-256 · TLS 1.3" },
  { label: "Licenced deployable" },
  { label: "99.95% uptime" },
  { label: "24 × 7 × 365 NOC" },
];

export const TRUSTED_LOGOS = [
  "kreedo",
  "brigade",
  "mashreq",
  "mokobara",
  "duroflex",
  "poonawallaFincorp",
  "adityaBirla",
  "apacfin",
  "sofi",
  "homeCredit",
];

export const PLATFORM_GUARANTEES = [
  {
    number: "01",
    title: "Data Residency",
    description:
      "Every byte of customer payment data lives on Indian soil — RBI 2018 Payment Data Localisation directive. On-prem, VPC, or sovereign cloud. Your choice. Never US-routed.",
    tags: ["RBI 2018", "India-only"],
  },
  {
    number: "04",
    title: "Consent Framework",
    description:
      "Granular customer consent capture — purpose, retention, withdrawal. DPDP-aligned, IRDAI-aligned, TRAI-aligned. One trail across voice, SMS, WhatsApp.",
    tags: ["DPDP", "withdrawal"],
  },
  {
    number: "02",
    title: "Supervisory Access",
    description:
      "RBI 2025 Outsourcing Directions compliance — your regulator gets read access to controls, logs, and audit trails. Exit transition is rehearsed quarterly.",
    tags: ["RBI 2025", "read-access"],
  },
  {
    number: "05",
    title: "Model Governance",
    description:
      "FREE-AI aligned governance — model lineage, training-data provenance, drift monitoring, override audit. Your CISO gets a dashboard. Your regulator gets the trail.",
    tags: ["FREE-AI", "drift mon"],
  },
  {
    number: "03",
    title: "PI Masking · Live",
    description:
      "Mobile, Aadhaar, PAN, DOB masked from transcript and replay — both at speech time and at storage time. Live PI shield indicator visible to the agent.",
    tags: ["DPDP", "at-source"],
  },
  {
    number: "06",
    title: "Encryption + Key Mgmt",
    description:
      "AES-256 at rest, TLS 1.3 in transit. Customer-managed keys (BYOK / HYOK) supported. Role-based access, just-in-time admin, MFA everywhere.",
    tags: ["BYOK", "JIT admin"],
  },
];

export const AUDIT_CALL_DETAILS = [
  { label: "Call ID",   value: "LAP-2025-10-8731" },
  { label: "Customer",  value: "Rohan K." },
  { label: "Agent",     value: "Priya S." },
  { label: "Duration",  value: "06:42" },
  { label: "Surface",   value: "Sherpa Device(V3)" },
  { label: "Model",     value: "SLM V4.2" },
  { label: "Deploy",    value: "VPC(Ap-South-1)" },
];

export const AUDIT_TRAIL_EVENTS = [
  { event: "Consent Captured · Purpose: LAP Onboarding",          time: "09:36:02" },
  { event: "PI Shield: ON · PAN/DOB Masked",                       time: "09:36:02" },
  { event: "MITC: Verbal Disclosure · IRDAI Clauses 1–4",          time: "09:38:14" },
  { event: "CIBIL Pull · With Consent · Ref #BU-7741",             time: "09:39:21" },
  { event: "FDIR Computed · Within RBI Band",                      time: "09:40:03" },
  { event: "Model Decision Logged · V4.2 · Score 78 · Drift OK",   time: "09:42:48" },
  { event: "Exit + Retention · 7-Yr WORM · DPDP-Aligned",          time: "09:42:50" },
];