"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";

// ── Icons ──────────────────────────────────────────────────────────────────────

const MicIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
    <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
    <line x1="12" y1="19" x2="12" y2="23" />
    <line x1="8" y1="23" x2="16" y2="23" />
  </svg>
);

const DocIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
);

const HeadphonesIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z" />
    <path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
  </svg>
);

const MonitorIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2" />
    <line x1="8" y1="21" x2="16" y2="21" />
    <line x1="12" y1="17" x2="12" y2="21" />
  </svg>
);

const ChevronDown = ({ open }: { open: boolean }) => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s ease" }}
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

// ── Types ──────────────────────────────────────────────────────────────────────

interface DropdownItem {
  label: string;
  href: string;
  description: string;
  badge?: string;
  icon: React.ReactNode;
}

// ── Dropdown config ────────────────────────────────────────────────────────────

const PHYSICAL_AI_ITEMS: DropdownItem[] = [
  {
    label: "Sherpa",
    href: "/sherpa",
    description: "Field-agent wearable for live coaching and conversation intelligence.",
    badge: "LIVE",
    icon: <HeadphonesIcon />,
  },
  {
    label: "Nova",
    href: "/nova",
    description: "In-store AI concierge for kiosk, counter and screen.",
    badge: "SOON",
    icon: <MonitorIcon />,
  },
];

const AGENTIC_SUITE_ITEMS: DropdownItem[] = [
  {
    label: "Voice Automation",
    href: "/voiceAgent",
    description: "1,200 parallel dials per second across 22 Indian languages.",
    badge: "LIVE",
    icon: <MicIcon />,
  },
  {
    label: "Non-Voice Agents",
    href: "/nonvoice-agent",
    description: "Background workers that close the loop in CRM, LOS, and ledger.",
    badge: "LIVE",
    icon: <DocIcon />,
  },
];

// ── Badge ──────────────────────────────────────────────────────────────────────

const Badge = ({ label }: { label: string }) => {
  const colorMap: Record<string, string> = {
    LIVE: "bg-emerald-50 text-emerald-700 border-emerald-200",
    NEW: "bg-violet-50 text-violet-700 border-violet-200",
    BETA: "bg-amber-50 text-amber-700 border-amber-200",
    SOON: "bg-sky-50 text-sky-700 border-sky-200",
  };
  return (
    <span
      className={`inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-semibold tracking-wide border ${
        colorMap[label] ?? "bg-gray-100 text-gray-600 border-gray-200"
      }`}
    >
      {label}
    </span>
  );
};

// ── DropdownMenu ───────────────────────────────────────────────────────────────

const DropdownMenu = ({
  items,
  onClose,
}: {
  items: DropdownItem[];
  onClose: () => void;
}) => (
  <div className="absolute top-full left-0 mt-3 w-72 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50 animate-fadeIn">
    {/* small arrow */}
    <div className="absolute -top-[6px] left-6 w-3 h-3 bg-white border-l border-t border-gray-100 rotate-45" />
    <div className="p-2">
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          onClick={onClose}
          className="flex items-start gap-3 px-3 py-3 rounded-lg hover:bg-gray-50 transition-colors group"
        >
          <span className="mt-0.5 flex-shrink-0 w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center group-hover:bg-indigo-100 transition-colors">
            {item.icon}
          </span>
          <div className="min-w-0">
            <div className="flex items-center gap-2 mb-0.5">
              <span className="text-sm font-medium text-gray-900">{item.label}</span>
              {item.badge && <Badge label={item.badge} />}
            </div>
            <p className="text-xs text-gray-500 leading-snug">{item.description}</p>
          </div>
        </Link>
      ))}
    </div>
  </div>
);

// ── Main Navbar ────────────────────────────────────────────────────────────────

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isActive = (href: string): boolean =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const isGroupActive = (items: DropdownItem[]) =>
    items.some((i) => isActive(i.href));

  const getNavItemClasses = (active: boolean) =>
    `flex items-center gap-1 text-sm font-medium transition-colors duration-200 ${
      active ? "text-indigo-600" : "text-gray-600 hover:text-gray-900"
    }`;

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Scroll restoration after navigation
  useEffect(() => {
    const targetId = sessionStorage.getItem("scrollTarget");
    if (targetId) {
      sessionStorage.removeItem("scrollTarget");
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) {
          window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 64, behavior: "smooth" });
        }
      }, 100);
    }
  }, [pathname]);

  const handleDemoScroll = (e: React.MouseEvent) => {
    e.preventDefault();
    if (pathname === "/") {
      const el = document.getElementById("demo-request");
      if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 64, behavior: "smooth" });
    } else {
      sessionStorage.setItem("scrollTarget", "demo-request");
      router.push("/");
    }
    setMobileOpen(false);
  };

  const handleMouseEnter = (key: string) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setActiveDropdown(key);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => setActiveDropdown(null), 120);
  };

  return (
    <>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn { animation: fadeIn 0.18s ease; }
      `}</style>

      <nav ref={navRef} className="sticky top-0 z-50 w-full bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[64px] flex items-center justify-between">

          <Link href="/" className="flex items-center shrink-0">
            <img src="/images/darwixlogo.png" alt="Darwix AI" className="h-8 md:h-10 w-auto" />
          </Link>

          {/* ── Desktop Nav ── */}
          <div className="hidden md:flex items-center gap-7 text-sm">

            {/* Home */}
            <Link href="/" className={getNavItemClasses(isActive("/"))}>
              Home
            </Link>

            {/* Physical AI dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("physical")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={getNavItemClasses(isGroupActive(PHYSICAL_AI_ITEMS))}
                onClick={() => setActiveDropdown(activeDropdown === "physical" ? null : "physical")}
              >
                Physical AI
                <ChevronDown open={activeDropdown === "physical"} />
              </button>
              {activeDropdown === "physical" && (
                <DropdownMenu items={PHYSICAL_AI_ITEMS} onClose={() => setActiveDropdown(null)} />
              )}
            </div>

            {/* Agentic Suite dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("agentic")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={getNavItemClasses(isGroupActive(AGENTIC_SUITE_ITEMS))}
                onClick={() => setActiveDropdown(activeDropdown === "agentic" ? null : "agentic")}
              >
                Agentic Suite
                <ChevronDown open={activeDropdown === "agentic"} />
              </button>
              {activeDropdown === "agentic" && (
                <DropdownMenu items={AGENTIC_SUITE_ITEMS} onClose={() => setActiveDropdown(null)} />
              )}
            </div>

            {/* Compliance */}
            <Link href="/compliance" className={getNavItemClasses(isActive("/compliance"))}>
              Compliance
            </Link>

            {/* About */}
            <Link href="/about" className={getNavItemClasses(isActive("/about"))}>
              About Us
            </Link>
          </div>

          {/* ── Desktop CTA ── */}
          <div className="hidden md:flex items-center">
            <button
              onClick={handleDemoScroll}
              className="bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-white text-sm px-5 py-2 rounded-lg font-medium transition-all duration-200 shadow-sm hover:shadow-md"
            >
              Request a demo
            </button>
          </div>

          {/* ── Mobile controls ── */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={handleDemoScroll}
              className="bg-indigo-600 hover:bg-indigo-500 text-white text-xs px-3 py-2 rounded-md font-medium transition"
            >
              Demo
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-md border border-gray-300 text-gray-600"
              aria-label="Toggle menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* ── Mobile Menu ── */}
        {mobileOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-4 py-4 flex flex-col gap-1 text-sm">

              <MobileLink href="/" label="Home" active={isActive("/")} onClick={() => { setMobileOpen(false); router.push("/"); }} />

              {/* Physical AI group */}
              <MobileGroup label="Physical AI" items={PHYSICAL_AI_ITEMS} onClose={() => setMobileOpen(false)} router={router} />

              {/* Agentic Suite group */}
              <MobileGroup label="Agentic Suite" items={AGENTIC_SUITE_ITEMS} onClose={() => setMobileOpen(false)} router={router} />

              <MobileLink href="/compliance" label="Compliance" active={isActive("/compliance")} onClick={() => { setMobileOpen(false); router.push("/compliance"); }} />
              <MobileLink href="/about" label="About Us" active={isActive("/about")} onClick={() => { setMobileOpen(false); router.push("/about"); }} />

              <button
                onClick={handleDemoScroll}
                className="w-full mt-3 bg-indigo-600 hover:bg-indigo-500 text-white py-3 rounded-lg font-medium text-center transition-all duration-200"
              >
                Request a demo
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

// ── Mobile helpers ─────────────────────────────────────────────────────────────

function MobileLink({ href, label, active, onClick }: { href: string; label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
        active ? "text-indigo-600 bg-indigo-50" : "text-gray-700 hover:bg-gray-50"
      }`}
    >
      {label}
    </button>
  );
}

function MobileGroup({
  label,
  items,
  onClose,
  router,
}: {
  label: string;
  items: DropdownItem[];
  onClose: () => void;
  router: ReturnType<typeof useRouter>;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
      >
        {label}
        <ChevronDown open={open} />
      </button>
      {open && (
        <div className="ml-3 mt-1 border-l-2 border-indigo-100 pl-3 flex flex-col gap-1">
          {items.map((item) => (
            <button
              key={item.href}
              onClick={() => { onClose(); router.push(item.href); }}
              className="w-full text-left px-2 py-2 rounded-md hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-gray-800">{item.label}</span>
                {item.badge && <Badge label={item.badge} />}
              </div>
              <p className="text-xs text-gray-500 mt-0.5">{item.description}</p>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

