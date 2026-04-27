export const metadata = {
  title: "Privacy Policy - Darwix AI",
  description: "Read our privacy policy to understand how we handle your data.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          {/* Header */}
          <div className="bg-indigo-600 px-8 py-12 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Privacy Policy</h1>
            <p className="text-indigo-100 opacity-80">Last Updated: October 2025</p>
          </div>

          {/* Content */}
          <div className="p-8 md:p-12 prose prose-indigo max-w-none text-gray-600 leading-relaxed">
            <p>
              This Privacy Policy (the “Policy”) governs the manner in which the Platform collects, uses, maintains and discloses information of its users. The Policy also describes the practices that We apply to such user information, user’s privacy rights and choices regarding their information.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">1. PERSONAL INFORMATION</h2>
            <p>
              “Personal Information” shall mean the information which identifies a Learner i.e., first and last name, identification number, email address, age, gender, location, photograph and/or phone number provided at the time of registration or any time thereafter on the Platform.
            </p>
            <p>
              “Sensitive Personal Information” shall include passwords, financial data, health data, and other categories defined under applicable Data Protection Laws.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">2. INFORMATION WE COLLECT</h2>
            <p>We may collect both personal and non-personal identifiable information in a variety of ways:</p>
            <ul className="list-disc pl-6 space-y-3">
              <li><strong>Personal Identifiable Information:</strong> Name, email address, and contact details voluntarily submitted by you.</li>
              <li><strong>Non-Personal Identifiable Information:</strong> Browser name, language preference, operating system, and Internet service providers.</li>
              <li><strong>Cookies:</strong> Our Platform may use 'cookies' to enhance user experience. You can choose to set your web browser to refuse cookies.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">3. HOW WE USE COLLECTED INFORMATION</h2>
            <p>We may collect and use your Personal Information for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-3">
              <li>To provide access to our Platform and fulfill purchases.</li>
              <li>To improve our Platform and maintain safety and security.</li>
              <li>To communicate with you or market our services/products (with your consent).</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">4. YOUR RIGHTS</h2>
            <p>You have certain rights regarding your Personal Information, including:</p>
            <ul className="list-disc pl-6 space-y-3">
              <li><strong>Right to Access:</strong> Confirmation and access to your data.</li>
              <li><strong>Right to Correction:</strong> Rectify inaccurate or incomplete data.</li>
              <li><strong>Right to Erasure:</strong> Request the deletion of your Personal Information.</li>
              <li><strong>Right to be Forgotten:</strong> Restrict continuing disclosure under certain circumstances.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">5. DATA PROTECTION</h2>
            <p>
              We take all measures reasonably necessary to protect against unauthorized access, use, or destruction of Personal Information. Access is limited to employees and contractors who need to know that information to process it on our behalf.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">6. THIRD PARTY WEBSITES</h2>
            <p>
              You may find links to third-party websites on our Platform. We do not control the content or links that appear on these sites and are not responsible for their practices.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">7. GRIEVANCES</h2>
            <p>
              If you have any questions about this Policy or wish to exercise your rights, please contact us at:
              <a href="mailto:thecurators@cur8.in" className="text-indigo-600 font-medium ml-1">thecurators@cur8.in</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
