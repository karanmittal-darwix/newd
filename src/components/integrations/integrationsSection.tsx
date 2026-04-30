// import IntegrationCard from "./IntegrationCard";

// const INTEGRATIONS: {
//   name: string;
//   logo: string;
//   textLogo?: boolean;
//   textColor?: string;
//   logoClass?: string;
// }[][] = [
//   // Row 1 — 7 items
//   [
//     { name: "WhatsApp Business", logo: "/images/whatsapp.svg" },
//     { name: "Gmail",             logo: "/images/company/gmail.svg" },
//     { name: "Outlook",           logo: "/images/company/outlook.svg" },
//     { name: "Slack",             logo: "/images/company/slackLogo.svg" },
//     { name: "Teams",             logo: "/images/company/teams.svg" },
//     { name: "Google Cal",        logo: "/images/company/calen.svg" },
//     { name: "",           logo: "/images/company/cal.svg", logoClass: "w-15 h-12" },
//   ],
//   // Row 2 — 4 items
//   [
//     { name: "Segment",  logo: "/images/company/segement.svg" },
//     { name: "Zapier",   logo: "/images/company/zapier.svg" },
//     { name: "Webhook",  logo: "/images/company/webhook.svg" },
//     { name: "{ REST API }", logo: "/images/int-api.svg", textLogo: true, textColor: "text-gray-500" },
//   ],
//   // Row 3 — 4 items
//   [
//     { name: "Razorpay", logo: "/images/company/razorpay.svg" },
//     { name: "Cashfree", logo: "/images/company/cashfree.svg" },
//     { name: "UPI",      logo: "/images/int-upi.svg",      textLogo: true, textColor: "text-indigo-600" },
//     { name: "PayU",     logo: "/images/int-payu.svg",     textLogo: true, textColor: "text-indigo-600" },
//   ],
//   // Row 4 — 6 items
//   [
//     { name: "Salesforce",   logo: "/images/company/salesforce.svg" },
//     { name: "HubSpot",      logo: "/images/company/hubspot.svg" },
//     { name: "Zoho",         logo: "",   textLogo: true, textColor: "text-red-500" },
//     { name: "LeadSquared",  logo: "/images/int-leadsquared.svg" },
//     { name: "",   logo: "/images/company/freshsales.svg"  },
//     { name: "",    logo: "/images/company/pipedrive.svg", logoClass: "w-15 h-12" },
//   ],
// ];

// export default function IntegrationsSection() {
//   return (
//     <section className="bg-gray-50 py-20 px-6">
//       <div className="max-w-5xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-10">
//           <p className="text-xs font-semibold uppercase tracking-widest text-indigo-500 mb-3">
//             Works out of the box with
//           </p>
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
//             Drop <span className="text-indigo-600">Darwix</span> into the stack you already run
//           </h2>
//         </div>

//         {/* Integration rows */}
//         <div className="flex flex-col gap-3">
//           {INTEGRATIONS.map((row, ri) => (
//             <div
//               key={ri}
//               className="grid gap-3"
//               style={{ gridTemplateColumns: `repeat(${row.length}, minmax(0, 1fr))` }}
//             >
//               {row.map((item) => (
//                 <IntegrationCard key={item.name} {...item} />
//               ))}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import IntegrationCard from "./IntegrationCard";

const INTEGRATIONS: {
  name: string;
  logo: string;
  textLogo?: boolean;
  textColor?: string;
  logoClass?: string;
}[][] = [
  // Row 1 — 7 items
  [
    { name: "WhatsApp Business", logo: "/images/whatsapp.svg" },
    { name: "Gmail", logo: "/images/company/gmail.svg" },
    { name: "Outlook", logo: "/images/company/outlook.svg" },
    { name: "Slack", logo: "/images/company/slackLogo.svg" },
    { name: "Teams", logo: "/images/company/teams.svg" },
    { name: "Google Cal", logo: "/images/company/calen.svg" },
    { name: "", logo: "/images/company/cal.svg", logoClass: "w-15 h-12" },
  ],
  // Row 2 — 4 items
  [
    { name: "Segment", logo: "/images/company/segement.svg" },
    { name: "Zapier", logo: "/images/company/zapier.svg" },
    { name: "Webhook", logo: "/images/company/webhook.svg" },
    {
      name: "{ REST API }",
      logo: "/images/int-api.svg",
      textLogo: true,
      textColor: "text-gray-500",
    },
  ],
  // Row 3 — 4 items
  [
    { name: "Razorpay", logo: "/images/company/razorpay.svg" },
    { name: "Cashfree", logo: "/images/company/cashfree.svg" },
    {
      name: "UPI",
      logo: "/images/int-upi.svg",
      textLogo: true,
      textColor: "text-indigo-600",
    },
    {
      name: "PayU",
      logo: "/images/int-payu.svg",
      textLogo: true,
      textColor: "text-indigo-600",
    },
  ],
  // Row 4 — 6 items
  [
    { name: "Salesforce", logo: "/images/company/salesforce.svg" },
    { name: "HubSpot", logo: "/images/company/hubspot.svg" },
    { name: "Zoho", logo: "", textLogo: true, textColor: "text-red-500" },
    { name: "LeadSquared", logo: "/images/int-leadsquared.svg" },
    { name: "FreshSales", logo: "/images/company/freshsales.svg" },
    { name: "", logo: "/images/company/pipedrive.svg", logoClass: "w-15 h-12" },
  ],
];

export default function IntegrationsSection() {
  return (
    <section className="bg-gray-50 py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-indigo-500 mb-3">
            Works out of the box with
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Drop <span className="text-indigo-600">Darwix</span> into the stack
            you already run
          </h2>
        </div>

        {/* Integration rows */}
        <div className="flex flex-col gap-2 sm:gap-3">
          {INTEGRATIONS.map((row, ri) => (
            <div
              key={ri}
              className="grid gap-2 sm:gap-3"
              style={{
                gridTemplateColumns: `repeat(auto-fit, minmax(100px, 1fr))`,
              }}
            >
              {row.map((item, ci) => (
                // key uses row+col index — guaranteed unique even when name is ""
                <IntegrationCard key={`${ri}-${ci}`} {...item} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
