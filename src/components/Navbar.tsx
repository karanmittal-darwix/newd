import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white sticky top-0 z-50 w-full border-b border-gray-200">

      <div className="max-w-7xl mx-auto px-6 h-[64px] flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <img
            src="/images/darwix.svg"
            alt="Darwix AI"
            className="h-10 w-auto"
          />
        </Link>

        {/* CENTER */}
        <div className="hidden md:flex items-center gap-6 text-sm text-gray-600">
          <Link href="#" className="hover:text-black transition">
            Voice playground
          </Link>
          <Link href="#" className="hover:text-black transition">
            Capabilities
          </Link>
          <Link href="#" className="hover:text-black transition">
            Parallel dialing
          </Link>
          <Link href="#" className="hover:text-black transition">
            Post-call actions
          </Link>
          <Link href="#" className="hover:text-black transition">
            Languages
          </Link>
          <Link href="/about" className="hover:text-black transition">
            About Us
          </Link>

        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-4">
          <Link
            href="#"
            className="text-sm text-gray-600 hover:text-black transition"
          >
            Sign in
          </Link>

          <button className="bg-indigo-600 hover:bg-indigo-500 text-white text-sm px-5 py-2 rounded-md font-medium transition-all duration-200">
            Book a demo
          </button>
        </div>

      </div>
    </nav>
  );
}