export const metadata = {
  title: "Terms & Conditions | Darwix AI",
  description: "Read our terms and conditions for using the Darwix AI platform.",
  keywords: "Darwix AI, GenAI platform, omni-channel sales, enterprise AI, sales conversation analytics, AI sales automation, conversation intelligence, customer engagement, sales assistance, AI automation",
  openGraph: {
    images: ["/images/darwixlogo.png"],
  },
};

export default function TermsAndConditionsPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          {/* Header */}
          <div className="bg-indigo-600 px-8 py-12 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Terms & Conditions</h1>
            <p className="text-indigo-100 opacity-80">Last Updated: October 2025</p>
          </div>

          {/* Content */}
          <div className="p-8 md:p-12 prose prose-indigo max-w-none text-gray-600 leading-relaxed">
            <p>
              These Terms of Use set out the terms and conditions for use of this CUR8 ( “Website”) and any content, Public Forums, or services offered on or through the Website and/or through any mobile application(s) ( “Application”) (collectively referred to as the “Platform”).
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">1. ACCESS AND REGISTRATION</h2>
            <p>
              To access any Content offered on the Platform, we require You to register by providing Your name and email address. You represent that the information provided is true and complete, and You meet the eligibility requirements for use of the Platform.
            </p>
            <p>
              If You’re an individual You must be at least 18 years of age, or, if You are between 13 and 18, You must have Your parent or legal guardian's permission.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">2. LICENSE TO USE</h2>
            <p>
              You are granted a limited, non-exclusive license to access and view the Content on the Platform for Your own personal, non-commercial use only. This license does not grant You the right to assign or sublicense the license to anyone else.
            </p>
            <p>You may not:</p>
            <ul className="list-disc pl-6 space-y-3">
              <li>Modify, edit or copy the Content or material on the Platform.</li>
              <li>Attempt to decompile or reverse engineer any software contained in the Platform.</li>
              <li>Remove any copyright or other proprietary notations from the Content.</li>
              <li>Transfer the material to another person or 'mirror' it on any other server.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">3. CODE OF CONDUCT</h2>
            <p>You agree to use the Platform only for lawful purposes. Prohibited activities include:</p>
            <ul className="list-disc pl-6 space-y-3">
              <li>Inciting or promoting violence or illegal activity.</li>
              <li>Posting hateful, defamatory, or harassing content.</li>
              <li>Spamming or scamming other users.</li>
              <li>Impersonating another person or entity.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">4. INTELLECTUAL PROPERTY</h2>
            <p>
              We own all information and materials, including trademarks, logos, illustrations, and the layout, design, and feel of the Platform. You acknowledge that You do not acquire any ownership rights by using the Platform.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">5. PAYMENTS AND REFUNDS</h2>
            <p>
              Payment of Content Fees shall be processed through third-party payment processors. Once You purchase access to Content, the same cannot be cancelled and there shall be no refund unless otherwise stated in our Refund Policy.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">6. DISCLAIMER</h2>
            <p className="italic">
              THE PLATFORM IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTY OF ANY KIND. WE PROVIDE NO WARRANTY THAT THE PLATFORM WILL MEET YOUR REQUIREMENTS OR OPERATE WITHOUT INTERRUPTION.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">7. CONTACT US</h2>
            <p>
              If You have concerns or queries regarding this Agreement, please write to us at:
              <a href="mailto:thecurators@cur8.in" className="text-indigo-600 font-medium ml-1">thecurators@cur8.in</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
