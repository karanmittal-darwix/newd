import { CERTIFICATIONS } from "@/data/compliance";

export default function CertificationsSection() {
  return (
    <section className="bg-white px-4 sm:px-6 lg:px-[129px] py-20 sm:py-24">
      <div className="mx-auto max-w-[1182px]">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[11px] tracking-[0.38em] text-[#5b5ce8] font-semibold uppercase mb-4">
            Certifications section
          </p>
          <h2 className="section-heading text-[32px] sm:text-[40px] lg:text-[48px] text-[#4b4b4b] tracking-[-0.03em] leading-[1.1]">
            Eight frames. <span className="text-[#5b5ce8]">Audited</span>{" "}
            annually.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#7a7a7a] max-w-[800px] mx-auto leading-relaxed">
            A robust compliance backbone built on globally recognized
            frameworks, independently audited each year to ensure security,
            availability, and regulatory alignment at scale.
          </p>
        </div>

        {/* 4-col grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.title}
              className="rounded-[16px] border border-[#eceef4] bg-white p-5 sm:p-6 shadow-[0_8px_24px_rgba(37,44,97,0.05)] hover:shadow-[0_12px_32px_rgba(91,92,232,0.08)] hover:border-[#d4d6ff] transition-all duration-200"
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-[#5b5ce8] mb-3">
                {cert.badge}
              </p>
              <h3 className="text-[17px] font-semibold text-[#4b4b4b] tracking-[-0.01em] leading-snug mb-3">
                {cert.title}
              </h3>
              <p className="text-[12px] leading-[1.6] text-[#7a7a7a]">
                {cert.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
