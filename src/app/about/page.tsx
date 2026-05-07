// import React from 'react';
// import Link from 'next/link';

// export const metadata = {
//   title: "About Us | Darwix AI",
//   description: "Learn more about Darwix AI and our mission to level up customer conversations.",
// };

// export default function AboutPage() {
//   return (
//     <div className="bg-white min-h-screen">
//       {/* Hero Section */}
//       <section className="relative bg-indigo-600 py-24 md:py-32 overflow-hidden">
//         {/* Abstract Globe Pattern */}
//         <div className="absolute inset-0 opacity-20 pointer-events-none">
//           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white rounded-full opacity-20 animate-pulse" />
//           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white rounded-full opacity-10" />
//           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] border border-white rounded-full opacity-5" />
//         </div>

//         <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
//           <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/30 text-indigo-100 text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-sm">
//             Our Journey
//           </span>
//           <h1 className="text-4xl md:text-7xl font-extrabold text-white leading-tight mb-8 max-w-5xl mx-auto">
//             Building the <span className="text-indigo-200 italic">agent-led</span> future to level up customer conversations
//           </h1>
//           <p className="text-indigo-100 text-lg md:text-xl max-w-3xl mx-auto opacity-90 leading-relaxed">
//             We are on a mission to empower omni-channel sales teams across the world with AI that doesn't just respond, but understands and executes.
//           </p>
//         </div>
//       </section>

//       {/* Mission Section */}
//       <section className="py-24 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//             <div>
//               <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Leveling up customer conversations</h2>
//               <p className="text-gray-600 text-lg leading-relaxed mb-8">
//                 At Darwix AI, we believe that the gap between businesses and customers can only be bridged through authentic, intelligent, and timely interactions. Our platform is built by veterans from India's top colleges and global tech firms to solve complex conversational challenges.
//               </p>
//               <div className="flex gap-4">
//                 <div className="p-4 bg-white rounded-2xl shadow-sm border border-gray-100 flex-1">
//                   <div className="text-3xl font-bold text-indigo-600 mb-1">10M+</div>
//                   <div className="text-sm text-gray-500 uppercase tracking-wider font-bold">Minutes Processed</div>
//                 </div>
//                 <div className="p-4 bg-white rounded-2xl shadow-sm border border-gray-100 flex-1">
//                   <div className="text-3xl font-bold text-indigo-600 mb-1">500+</div>
//                   <div className="text-sm text-gray-500 uppercase tracking-wider font-bold">Global Clients</div>
//                 </div>
//               </div>
//             </div>
//             <div className="relative aspect-video rounded-3xl bg-indigo-100 overflow-hidden shadow-2xl">
//               <img
//                 src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200"
//                 alt="Team collaborating"
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute inset-0 bg-indigo-600/10 backdrop-grayscale-[0.5]"></div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Values Section */}
//       <section className="py-24 bg-white">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Our Values</h2>
//             <div className="w-20 h-1.5 bg-indigo-600 mx-auto rounded-full"></div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {[
//               {
//                 title: "Human-Centric",
//                 desc: "We build AI that complements human intelligence, not replaces it. Empathy is at our core.",
//                 icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197"
//               },
//               {
//                 title: "Innovation-Led",
//                 desc: "Pushing the boundaries of what's possible in NLP and LLM orchestration every single day.",
//                 icon: "M13 10V3L4 14h7v7l9-11h-7z"
//               },
//               {
//                 title: "Radical Transparency",
//                 desc: "Honesty with our clients and our team is how we build trust and long-term partnerships.",
//                 icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04M12 2.944v18.112"
//               }
//             ].map((val, idx) => (
//               <div key={idx} className="p-10 rounded-3xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-xl transition-all group">
//                 <div className="w-14 h-14 bg-indigo-100 rounded-2xl flex items-center justify-center mb-6 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
//                   <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={val.icon} />
//                   </svg>
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-900 mb-4">{val.title}</h3>
//                 <p className="text-gray-600 leading-relaxed">{val.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* AI Recognition & Honours */}
//       <section className="py-24 bg-gray-50 border-t border-gray-100">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Recognition & Honours</h2>
//             <p className="text-gray-500 max-w-2xl mx-auto">Acknowledged globally for our commitment to innovation and excellence in the AI space.</p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {[
//               {
//                 title: "Top AI Startup 2024",
//                 org: "TechGlobal Awards",
//                 icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
//               },
//               {
//                 title: "Excellence in NLP",
//                 org: "AI Innovation Forum",
//                 icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
//               },
//               {
//                 title: "Most Secure Platform",
//                 org: "CyberTrust Review",
//                 icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04M12 2.944v18.112"
//               },
//               {
//                 title: "Customer Choice",
//                 org: "B2B Software Hub",
//                 icon: "M14 10h2a2 2 0 012 2v1a2 2 0 01-2 2H8a2 2 0 01-2-2v-1a2 2 0 012-2h2V7a2 2 0 114 0v3z"
//               }
//             ].map((honour, idx) => (
//               <div key={idx} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all text-center group">
//                 <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
//                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={honour.icon} />
//                   </svg>
//                 </div>
//                 <h4 className="text-lg font-bold text-gray-900 mb-1">{honour.title}</h4>
//                 <p className="text-sm text-indigo-600 font-medium">{honour.org}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Leadership Section */}
//       <section className="py-24 bg-indigo-900 text-white overflow-hidden relative">
//         {/* Background Accents */}
//         <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500 rounded-full blur-[120px] opacity-20 -mr-48 -mb-48"></div>

//         <div className="max-w-7xl mx-auto px-6 relative z-10">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-5xl font-bold mb-4">Leadership Team</h2>
//             <p className="text-indigo-200 opacity-80">Built by leaders from India’s top colleges with global expertise</p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
//             {[
//               {
//                 name: "Ajay Pal Singh Sethi",
//                 role: "Co-Founder",
//                 img: "/images/company/ajay.webp",
//                 linkedin: "https://www.linkedin.com/in/ajaypalsinghsethi/"
//               },
//               {
//                 name: "Hanit Awal",
//                 role: "Co-Founder",
//                 img: "/images/company/hanit.webp",
//                 linkedin: "https://www.linkedin.com/in/hanitawal/"
//               }
//             ].map((leader, idx) => (
//               <div key={idx} className="bg-white rounded-[32px] p-8 text-center shadow-2xl">
//                 <div className="w-48 h-48 mx-auto mb-8 relative rounded-full border-4 border-gray-50 overflow-hidden shadow-inner">
//                   <img 
//                     src={leader.img} 
//                     alt={leader.name}
//                     className="w-full h-full object-cover grayscale"
//                   />
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-900 mb-1">{leader.name}</h3>
//                 <p className="text-gray-400 font-medium mb-6">{leader.role}</p>
//                 <div className="flex justify-center">
//                    <Link 
//                      href={leader.linkedin} 
//                      target="_blank" 
//                      className="w-6 h-6 text-[#0077B5] hover:scale-110 transition-transform"
//                    >
//                      <svg fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
//                    </Link>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Footer Call to Action */}
//       <section className="py-24 bg-white text-center">
//         <div className="max-w-4xl mx-auto px-6">
//           <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8">Ready to join the future?</h2>
//           <div className="flex flex-col md:flex-row gap-4 justify-center">
//             <Link href="/" className="px-10 py-4 bg-indigo-600 text-white rounded-full font-bold hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100">
//               Explore Platform
//             </Link>
//             <button className="px-10 py-4 border-2 border-gray-200 text-gray-900 rounded-full font-bold hover:bg-gray-50 transition-all">
//               Contact Sales
//             </button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }


import { Manrope } from "next/font/google";

import DemoRequestSection from "@/components/DemoRequestSection";
import ComplianceHero from "./components/ComplianceHero";
import CertificationsSection from "./components/CertificationsSection";
import TrustedLogosBar from "./components/TrustedLogosBar";
import PlatformGuaranteesSection from "./components/PlatformGuaranteesSection";
import AuditTrailSection from "./components/AuditTrailSection";

const manrope = Manrope({ subsets: ["latin"], weight: ["400", "500", "600"] });

export const metadata = {
  title: "Compliance | Darwix AI",
  description:
    "Built for India's regulated stack RBI, DPDP, IRDAI MITC, FREE-AI, TRAI. SOC 2, ISO 27001 certified.",
};

export default function CompliancePage() {
  return (
    <main className={manrope.className}>
      <ComplianceHero />
      <CertificationsSection />
      <TrustedLogosBar />
      <PlatformGuaranteesSection />
      <AuditTrailSection />
      <DemoRequestSection />
    </main>
  );
}