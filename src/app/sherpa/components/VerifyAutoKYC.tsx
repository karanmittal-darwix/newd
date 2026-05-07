import React from "react";

interface KYCRowProps {
  label: string;
  value: string;
}

const KYCRow: React.FC<KYCRowProps> = ({ label, value }) => (
  <li className="flex items-center justify-between">
    <span className="flex items-center gap-2 text-sm text-gray-700">
      <span className="w-2 h-2 rounded-full bg-indigo-400 inline-block" />
      {label}
    </span>
    <span className="font-mono text-sm font-medium text-indigo-600">{value}</span>
  </li>
);

const kycChecks: KYCRowProps[] = [
  { label: "Voice biometric match",  value: "98.4%" },
  { label: "Liveness · phrase replay", value: "PASS" },
  { label: "Aadhaar XML signature",  value: "VALID" },
  { label: "PAN + NSDL crosscheck",  value: "MATCH" },
  { label: "Bureau pull",            value: "band 3" },
];

const VerifyAutoKYC: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-8 max-w-lg w-full">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-semibold text-gray-800 tracking-tight">
          Verify AI · Auto-KYC
        </h1>
        <p className="mt-2 text-sm text-gray-500 leading-relaxed">
          Voice-driven KYC with liveness, voice biometrics, and cross-document
          checks. The customer never retypes anything.
        </p>
      </div>

      {/* Card */}
      <div className="bg-indigo-50/60 rounded-xl p-5">
        {/* Card Header */}
        <p className="font-mono text-xs text-gray-400 font-medium tracking-widest uppercase mb-4">
          KYC · ROHIT M · ENROLLED
        </p>

        {/* KYC Rows */}
        <ul className="space-y-3">
          {kycChecks.map((check) => (
            <KYCRow key={check.label} label={check.label} value={check.value} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default VerifyAutoKYC;
