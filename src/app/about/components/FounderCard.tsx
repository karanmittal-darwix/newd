import React from "react";
import Image from "next/image";

const LinkedInIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-white">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const AvatarPlaceholder: React.FC = () => (
  <svg viewBox="0 0 110 110" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect width="110" height="110" fill="#dde0ea" />
    <ellipse cx="55" cy="42" rx="22" ry="24" fill="#b0b4c8" />
    <ellipse cx="55" cy="95" rx="36" ry="28" fill="#b0b4c8" />
    <rect x="38" y="14" width="34" height="10" rx="5" fill="#e8ddd0" />
    <ellipse cx="55" cy="14" rx="18" ry="8" fill="#e8ddd0" />
  </svg>
);

interface LogoProps {
  logo: string;
  name: string;
}

const LogoRenderer: React.FC<LogoProps> = ({ logo, name }) => {
  switch (name) {
    case "IIM Calcutta":
      return (
        <div className="flex items-center gap-2">
          <img src="/images/about/iim_calcutta.png" alt="IIM Calcutta" className="h-8 w-auto" />
        </div>
      );
    default:
      return (
        <img src={logo} alt={name} className="h-6 w-auto object-contain max-w-[90px]" />
      );
  }
};

interface FounderCardProps {
  name: string;
  role: string;
  bio: string;
  avatarUrl?: string;
  linkedinUrl?: string;
  brands?: Array<{ name: string; logo: string }>;
}

const FounderCard: React.FC<FounderCardProps> = ({
  name,
  role,
  bio,
  avatarUrl,
  linkedinUrl = "#",
  brands = [],
}) => (
  <div className="bg-white border border-gray-200 rounded-[20px] p-8 max-w-2xl mx-auto w-full">
    {/* Top section */}
    <div className="flex gap-7 items-start">
      {/* Avatar + LinkedIn */}
      <div className="flex flex-col items-center gap-4 flex-shrink-0">
        <div className="w-[110px] h-[110px] rounded-full bg-[#dde0ea] overflow-hidden flex-shrink-0">
          {avatarUrl ? (
            <img src={avatarUrl} alt={name} className="w-full h-full object-cover" />
          ) : (
            <AvatarPlaceholder />
          )}
        </div>
        <a
          href={linkedinUrl}
          aria-label="LinkedIn profile"
          className="w-9 h-9 rounded-full bg-[#0A66C2] flex items-center justify-center hover:opacity-90 transition-opacity"
        >
          <LinkedInIcon />
        </a>
      </div>

      {/* Info */}
      <div className="flex-1 pt-1">
        <h2 className="text-[26px] font-semibold text-gray-900 leading-tight mb-1">
          {name}
        </h2>
        <p className="text-[11.5px] font-bold tracking-[0.14em] uppercase text-[#5B5BD6] mb-4">
          {role}
        </p>
        <p className="text-[14.5px] text-gray-500 leading-[1.7]">{bio}</p>
      </div>
    </div>

    {/* Divider */}
    <hr className="border-t border-gray-100 my-3" />

    {/* Logos */}
    {brands && brands.length > 0 && (
      <div className="flex items-center gap-4 flex-nowrap overflow-x-auto">
        {brands.map((brand) => (
          <div key={brand.name} className="flex items-center flex-shrink-0">
            <img
              src={brand.logo}
              alt={brand.name}
              className="h-12 w-auto object-contain max-w-[140px]"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          </div>
        ))}
      </div>
    )}
  </div>
);

export default FounderCard;
