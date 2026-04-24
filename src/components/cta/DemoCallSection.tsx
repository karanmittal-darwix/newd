import PhoneInput from "./PhoneInput";

export default function DemoCallSection() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-indigo-500 mb-4">
          Book a live call with Darwix
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Put your own number in. Get a call in{" "}
          <span className="text-indigo-600">30 seconds</span>
        </h2>
        <p className="mt-4 text-gray-500 text-base max-w-xl mx-auto leading-relaxed">
          Drop your number, Darwix will call you with a real, unscripted conversation, the same
          agent your customer will meet
        </p>

        <div className="mt-10">
          <PhoneInput />
        </div>
      </div>
    </section>
  );
}