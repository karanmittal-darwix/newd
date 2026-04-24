import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      {/* Main Footer */}
      <div className="bg-gray-50 border-t border-gray-200 px-6 py-14">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-14">

          {/* Left Side */}
          <div className="flex flex-col gap-8">

            {/* Logo */}
            <div className="w-52 h-14 relative">
              <Image
                src="/images/darwix.svg"
                alt="Darwix AI"
                fill
                className="object-contain object-left"
              />
            </div>


            {/* Offices */}
            <div className="flex flex-col gap-6">

              <div>
                <p className="text-sm font-semibold text-indigo-500 mb-1">
                  India Office
                </p>

                <p className="text-xs text-gray-500 leading-relaxed">
                  7th Floor, Imperia MindSpace,
                  Golf Course Ext rd, Sec 62,
                  <br />
                  Gurugram, Haryana 122001
                </p>
              </div>


              <div>
                <p className="text-sm font-semibold text-indigo-500 mb-1">
                  Dubai Office
                </p>

                <p className="text-xs text-gray-500 leading-relaxed">
                  Innovation One, DIFC Dubai United Arab Emirates
                </p>
              </div>

            </div>


            {/* Email + Badges */}
            <div className="flex items-center gap-5 flex-wrap">

              <span className="text-xs text-gray-500">
                transform@darwix.ai
              </span>

              <div className="flex items-center gap-3">

                <div className="w-10 h-10 relative">
                  <Image
                    src="/images/iso1.svg"
                    alt="ISO badge"
                    fill
                    className="object-contain"
                  />
                </div>

                <div className="w-10 h-10 relative">
                  <Image
                    src="/images/iso2.svg"
                    alt="SOC badge"
                    fill
                    className="object-contain"
                  />
                </div>

              </div>
            </div>

          </div>


          {/* Right Side */}
          <div className="md:pr-24 flex flex-col gap-5 md:mt-20">
            <p className="text-xs font-semibold uppercase tracking-widest text-indigo-500">
              Contact
            </p>

            {[
              "About Us",
              "Privacy Policy",
              "Terms & Conditions",
            ].map((item) => (
              <Link
                key={item}
                href="#"
                className="text-sm text-gray-600 hover:text-indigo-600 transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>

        </div>
      </div>



      {/* Bottom Strip */}
      <div className="bg-indigo-600 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center">

          {/* left linkedin */}
          <div className="w-7 h-7 relative">
            <Image
              src="/images/linkedin.svg"
              alt="LinkedIn"
              fill
              className="object-contain"
            />
          </div>


          {/* centered copyright */}
          <p className="flex-1 text-center pl-140 text text-indigo-200">
            ©2025 by Darwix AI, CUR8 Ventures Pvt. Ltd.
            All rights reserved, all wrongs reversed!
          </p>


          {/* right spacer */}
          <div className="w-5" />

        </div>
      </div>
    </footer>
  );
}