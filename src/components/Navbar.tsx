// import Link from "next/link";

// export default function Navbar() {
//   return (
//     <nav className="bg-white sticky top-0 z-50 w-full border-b border-gray-200">

//       <div className="max-w-7xl mx-auto px-6 h-[64px] flex items-center justify-between">

//         {/* LOGO */}
//         <Link href="/" className="flex items-center">
//           <img
//             src="/images/darwix.svg"
//             alt="Darwix AI"
//             className="h-10 w-auto"
//           />
//         </Link>

//         {/* CENTER */}
//         <div className="hidden md:flex items-center gap-6 text-sm text-gray-600">
//           <Link href="#" className="hover:text-black transition">
//             Voice playground
//           </Link>
//           <Link href="#" className="hover:text-black transition">
//             Capabilities
//           </Link>
//           <Link href="#" className="hover:text-black transition">
//             Parallel dialing
//           </Link>
//           <Link href="#" className="hover:text-black transition">
//             Post-call actions
//           </Link>
//           <Link href="#" className="hover:text-black transition">
//             Languages
//           </Link>
//           <Link href="/about" className="hover:text-black transition">
//             About Us
//           </Link>

//         </div>

//         {/* RIGHT */}
//         <div className="flex items-center gap-4">
//           <Link
//             href="#"
//             className="text-sm text-gray-600 hover:text-black transition"
//           >
//             Sign in
//           </Link>

//           <button className="bg-indigo-600 hover:bg-indigo-500 text-white text-sm px-5 py-2 rounded-md font-medium transition-all duration-200">
//             Request a demo
//           </button>
//         </div>

//       </div>
//     </nav>
//   );
// }

"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Store the target section ID to scroll to after navigation
  useEffect(() => {
    const handleRouteChange = () => {
      const targetId = sessionStorage.getItem("scrollTarget");
      if (targetId) {
        sessionStorage.removeItem("scrollTarget");
        // Use setTimeout to ensure DOM is ready
        setTimeout(() => {
          const section = document.getElementById(targetId);
          if (section) {
            const navbarHeight = 64;
            const targetPosition =
              section.getBoundingClientRect().top +
              window.scrollY -
              navbarHeight;
            window.scrollTo({
              top: targetPosition,
              behavior: "smooth",
            });
          }
        }, 100);
      }
    };

    // Scroll on initial load if target was set
    handleRouteChange();
  }, [pathname]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  const handleSectionScroll =
    (sectionId: string) =>
    (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
      e.preventDefault();

      // If already on homepage, scroll directly
      if (pathname === "/") {
        const section = document.getElementById(sectionId);
        if (section) {
          const navbarHeight = 64; // Height of sticky navbar
          const targetPosition =
            section.getBoundingClientRect().top + window.scrollY - navbarHeight;
          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          });
        }
      } else {
        // If not on homepage, navigate to home first, then scroll
        sessionStorage.setItem("scrollTarget", sectionId);
        router.push("/");
      }
    };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-200">
      <div
        ref={menuRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[64px] flex items-center justify-between"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <img
            src="/images/darwix.svg"
            alt="Darwix AI"
            className="h-8 md:h-10 w-auto"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-600">
          <Link href="/" className="hover:text-black transition">
            Home
          </Link>

          <Link href="/sherpa" className="hover:text-black transition">
            Sherpa
          </Link>

          <Link href="/voiceAgent" className="hover:text-black transition">
            Voice Agents
          </Link>

          <Link href="#" className="hover:text-black transition">
            Non-Voice Agents
          </Link>

          <Link href="#" className="hover:text-black transition">
            Nova
          </Link>

          <Link href="/about" className="hover:text-black transition">
            About
          </Link>
        </div>

        {/* Desktop Right */}
        <div className="hidden md:flex items-center gap-4">
          {/* <Link
            href="#"
            className="text-sm text-gray-600 hover:text-black transition"
          >
            Sign in
          </Link> */}

          <button
            onClick={handleSectionScroll("demo-request")}
            className="bg-indigo-600 hover:bg-indigo-500 text-white text-sm px-5 py-2 rounded-md font-medium transition-all duration-200"
          >
            Request a demo
          </button>
        </div>

        {/* Mobile */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={handleSectionScroll("demo-request")}
            className="bg-indigo-600 hover:bg-indigo-500 text-white text-xs px-3 py-2 rounded-md font-medium transition"
          >
            Demo
          </button>

          <button
            onClick={() => setOpen(!open)}
            className="p-2 rounded-md border border-gray-300"
            aria-label="Toggle Menu"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-4 flex flex-col space-y-4 text-sm text-gray-700">
            <Link href="/" onClick={() => setOpen(false)}>
              Home
            </Link>

            <Link href="/sherpa" onClick={() => setOpen(false)}>
              Sherpa
            </Link>

            <Link href="/voiceAgent" onClick={() => setOpen(false)}>
              Voice Agents
            </Link>

            <Link href="#" onClick={() => setOpen(false)}>
              Non-Voice Agents
            </Link>

            <Link href="#" onClick={() => setOpen(false)}>
              Nova
            </Link>

            <Link href="/about" onClick={() => setOpen(false)}>
              About
            </Link>

            <button
              onClick={(e) => {
                handleSectionScroll("demo-request")(e);
                setOpen(false);
              }}
              className="w-full bg-indigo-600 hover:bg-indigo-500 text-white py-3 px-2 rounded-md font-medium text-left"
            >
              Request a demo
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
