import TriggerCard from "./TriggerCard";

const TRIGGERS = [
  {
    icon: "/images/whatsapp.svg",
    name: "WhatsApp",
    chips: [
      { label: "sanction_letter_v3.pdf" },
      { label: "+91 98•• ••12", arrow: "→" },
    ],
    description:
      "Send sanction letter, invoice, policy document, payment link from pre-approved templates.",
  },
  {
    icon: "/images/postcall/email.svg",
    name: "Email",
    chips: [
      { label: "follow-up" },
      { label: "cc:  relationship-manager@...", arrow: "·" },
    ],
    description:
      "Formatted summaries, next-step emails, attachments, or escalation threads to RMs.",
  },
  {
    icon: "/images/postcall/calend.svg",
    name: "Calendar",
    chips: [
      { label: "site-visit" },
      { label: "24 Apr · 4:30pm IST", arrow: "·" },
    ],
    description:
      "Book, reschedule, or cancel appointments directly into Google / Outlook / Cal.com.",
  },
  {
    icon: "/images/postcall/crm.svg",
    name: "CRM sync",
    chips: [
      { label: "disposition = qualified" },
      { label: "stage → site_visit", arrow: "·" },
    ],
    description:
      "Write disposition, sentiment, intent, tags, next-step into Salesforce / HubSpot / Zoho / LeadSquared.",
  },
  {
    icon: "/images/postcall/payment.svg",
    name: "Payments",
    chips: [
      { label: "₹2,480" },
      { label: "EMI Apr", arrow: "·" },
      { label: "exp 48h", arrow: "·" },
    ],
    description:
      "Generate Razorpay / Cashfree / UPI links mid-call and deliver them on the channel the customer prefers.",
  },
  {
    icon: "/images/postcall/alert.svg",
    name: "Internal alert",
    chips: [
      { label: "#hot-leads" },
      { label: "deal > ₹50L", arrow: "·" },
      { label: "routing to Priya", arrow: "·" },
    ],
    description:
      "Slack / Teams escalation if sentiment drops, regulated word detected, or deal above threshold.",
  },
];

export default function ActionTriggers() {
  return (
    <div className="flex flex-col gap-3">
      {TRIGGERS.map((t) => (
        <TriggerCard key={t.name} {...t} />
      ))}
    </div>
  );
}