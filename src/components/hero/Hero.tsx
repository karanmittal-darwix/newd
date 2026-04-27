import HeroStats from "./HeroStats";
import AgentOrb from "./AgentOrb";

export default function Hero() {
  return (
    <section className="bg-white pt-20 pb-0 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center">

        <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight max-w-4xl mx-auto">
          An <span className="text-indigo-600">AI Agent</span>
          {" "}that actually{" "}
          <span className="text-indigo-600">
            holds the line
          </span>
        </h1>

        <p className="mt-6 text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Darwix dials thousands of your customers in parallel,
          speaks their language, handles objections,
          and triggers the right action the moment
          the call ends.
        </p>


        {/* Dynamic Orb */}
        <div className="mt-10 flex justify-center">
          <div className="max-w-5xl w-full">
            <AgentOrb />
          </div>
        </div>


        <div className="mt-5">
          <button className="bg-indigo-600 hover:bg-indigo-500 text-white text-sm px-5 py-3 rounded-md font-medium shadow-lg transition-all duration-200">
            Book a demo 
          </button>
       </div>

      </div>

      <div className="max-w-7xl mx-auto">
        <HeroStats />
      </div>
    </section>
  );
}