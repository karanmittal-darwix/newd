// "use client";

// import { useState } from "react";
// import Image from "next/image";

// export default function PhoneInput() {
//   const [phone, setPhone] = useState("");

//   return (
//     <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm max-w-md w-full mx-auto">
//       {/* Country code */}
//       <div className="flex items-center gap-1.5 px-4 border-r border-gray-200 h-14 flex-shrink-0">
//         <span className="text-sm font-medium text-gray-600">+91</span>
//       </div>

//       {/* Input */}
//       <input
//         type="tel"
//         value={phone}
//         onChange={(e) => setPhone(e.target.value)}
//         placeholder="98•• ••••"
//         className="flex-1 h-14 px-4 text-sm text-gray-700 placeholder-gray-300 focus:outline-none bg-transparent"
//       />

//       {/* CTA button */}
//       <button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium px-5 h-14 transition-colors flex-shrink-0">
//         <Image src="/images/call.svg" alt="Call" width={16} height={16}  />
//         Call me
//       </button>
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import Image from "next/image";

export default function PhoneInput() {
  const [phone, setPhone] = useState("");

  return (
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm max-w-md w-full mx-auto">

      {/* Country + Input */}
      <div className="flex items-center flex-1 min-w-0">
        <div className="flex items-center gap-1.5 px-4 border-r border-gray-200 h-14 flex-shrink-0">
          <span className="text-sm font-medium text-gray-600">
            +91
          </span>
        </div>

        <input
          type="tel"
          inputMode="numeric"
          autoComplete="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="98•• ••••"
          className="flex-1 min-w-0 h-14 px-4 text-sm text-gray-700 placeholder-gray-300 focus:outline-none bg-transparent"
        />
      </div>

      {/* CTA button */}
      <button className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium px-5 h-14 transition-colors flex-shrink-0 w-full sm:w-auto">
        <Image
          src="/images/call.svg"
          alt="Call"
          width={16}
          height={16}
        />
        Call me
      </button>

    </div>
  );
}