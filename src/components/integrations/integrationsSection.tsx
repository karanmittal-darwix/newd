import IntegrationCard from "./IntegrationCard";

const INTEGRATIONS: {
  name: string;
  logo: string;
  textLogo?: boolean;
  textColor?: string;
}[][] = [
  // Row 1 — 7 items
  [
    { name: "WhatsApp Business", logo: "/images/int-whatsapp.svg" },
    { name: "Gmail",             logo: "/images/int-gmail.svg" },
    { name: "Outlook",           logo: "/images/int-outlook.svg" },
    { name: "Slack",             logo: "/images/int-slack.svg" },
    { name: "Teams",             logo: "/images/int-teams.svg" },
    { name: "Google Cal",        logo: "/images/int-gcal.svg" },
    { name: "Cal.com",           logo: "/images/int-calccom.svg" },
  ],
  // Row 2 — 4 items
  [
    { name: "Segment",  logo: "/images/int-segment.svg" },
    { name: "Zapier",   logo: "/images/int-zapier.svg" },
    { name: "Webhook",  logo: "/images/int-webhook.svg" },
    { name: "{ REST API }", logo: "/images/int-api.svg", textLogo: true, textColor: "text-gray-500" },
  ],
  // Row 3 — 4 items
  [
    { name: "Razorpay", logo: "/images/int-razorpay.svg" },
    { name: "Cashfree", logo: "/images/int-cashfree.svg" },
    { name: "UPI",      logo: "/images/int-upi.svg",      textLogo: true, textColor: "text-indigo-600" },
    { name: "PayU",     logo: "/images/int-payu.svg",     textLogo: true, textColor: "text-indigo-600" },
  ],
  // Row 4 — 6 items
  [
    { name: "Salesforce",   logo: "/images/int-salesforce.svg" },
    { name: "HubSpot",      logo: "/images/int-hubspot.svg" },
    { name: "Zoho",         logo: "/images/int-zoho.svg",   textLogo: true, textColor: "text-red-500" },
    { name: "LeadSquared",  logo: "/images/int-leadsquared.svg" },
    { name: "Freshsales",   logo: "/images/int-freshsales.svg" },
    { name: "Pipedrive",    logo: "/images/int-pipedrive.svg" },
  ],
];

export default function IntegrationsSection() {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-indigo-500 mb-3">
            Works out of the box with
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Drop <span className="text-indigo-600">Darwix</span> into the stack you already run
          </h2>
        </div>

        {/* Integration rows */}
        <div className="flex flex-col gap-3">
          {INTEGRATIONS.map((row, ri) => (
            <div
              key={ri}
              className="grid gap-3"
              style={{ gridTemplateColumns: `repeat(${row.length}, minmax(0, 1fr))` }}
            >
              {row.map((item) => (
                <IntegrationCard key={item.name} {...item} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}