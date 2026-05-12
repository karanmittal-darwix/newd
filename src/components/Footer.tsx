import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 text-gray-900 relative shadow-[0_-12px_40px_-12px_rgba(0,0,0,0.12)]">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 lg:gap-8">
          {/* LEFT COLUMN: Logo, Email, Badges, LinkedIn */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center">
              <img
                src="/images/darwixlogo.png"
                alt="Darwix AI"
                className="h-10 w-auto"
              />
            </Link>
            <div className="flex flex-col gap-2">
              <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold ml-1">
                Certifications
              </span>
              <div className="flex gap-4">
                <div className="w-12 h-12 relative">
                  <Image
                    src="/images/iso1.svg"
                    alt="ISO 27001"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="w-12 h-12 relative">
                  <Image
                    src="/images/iso2.svg"
                    alt="SOC 2"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="text-[10px] uppercase tracking-widest text-gray-400 font-bold ml-1">
                FOLLOW US
              </h3>
              <Link
                href="https://www.linkedin.com/company/darwix-ai/"
                target="_blank"
                className="flex items-center gap-3 p-3 rounded-xl border border-gray-100 bg-white shadow-sm hover:shadow-lg hover:border-[#0077B5] transition-all group w-fit pr-8"
              >
                <div className="w-10 h-10 bg-[#0077B5] rounded-lg flex items-center justify-center p-2 shrink-0">
                  <div className="w-full h-full relative">
                    <Image
                      src="/images/linkedin.svg"
                      alt="LinkedIn"
                      fill
                      className="object-contain brightness-0 invert"
                    />
                  </div>
                </div>
                <div className="flex flex-col leading-tight">
                  <span className="font-bold text-gray-900 text-sm">
                    LinkedIn
                  </span>
                  <span className="text-[11px] text-gray-400">
                    Follow Darwix AI
                  </span>
                </div>
              </Link>
            </div>
          </div>

          {/* MIDDLE COLUMN: Offices */}
          <div className="flex flex-col gap-10">
            <div>
              <h3 className="text-indigo-600 font-bold text-sm tracking-widest mb-1">
                INDIA OFFICE
              </h3>
              <div className="w-8 h-[2px] bg-indigo-600 mb-6"></div>
              <div className="text-gray-600 space-y-1 leading-relaxed">
                <p>7th Floor, Imperia MindSpace,</p>
                <p>Golf Course Ext rd, Sec 62,</p>
                <p>Gurugram, Haryana 122001</p>
              </div>
            </div>

            <div>
              <h3 className="text-indigo-600 font-bold text-sm tracking-widest mb-1">
                DUBAI OFFICE
              </h3>
              <div className="w-8 h-[2px] bg-indigo-600 mb-6"></div>
              <div className="text-gray-600 space-y-1 leading-relaxed">
                <p>Innovation One, DIFC</p>
                <p>Dubai, United Arab Emirates</p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Contact Links */}
          <div className="flex flex-col gap-6">
            <h3 className="text-gray-400 font-bold text-sm tracking-widest uppercase">
              CONTACT
            </h3>

            <div className="flex flex-col gap-4">
              {[
                { name: "About Us", href: "/about" },
                { name: "Privacy Policy", href: "/privacy-policy" },
                { name: "Terms & Conditions", href: "/terms-and-conditions" },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-lg font-bold text-gray-900 hover:text-indigo-600 transition-colors flex items-center justify-between group max-w-[240px]"
                >
                  {item.name}
                  <span className="text-indigo-600 opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                    →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="bg-indigo-600 px-6 py-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-indigo-100 text-sm font-medium">
            ©2026 by Darwix AI, CUR8 Ventures Pvt. Ltd. All rights reserved —
            all wrongs reversed!
          </p>
        </div>
      </div>
    </footer>
  );
}
