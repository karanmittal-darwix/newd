export default function RequestDemoSection() {
  return (
    <section className="bg-[#eef0ff] py-20 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="grid md:grid-cols-2 gap-20 items-start">

          {/* Left Content */}
          <div>

            <h2 className="text-4xl font-bold text-gray-900 leading-tight">
              Request a{" "}
              <span className="text-indigo-600">
                Demo
              </span>
            </h2>

            <p className="mt-6 text-lg text-gray-500 leading-relaxed max-w-md">
              See how voice automation can transform your operations.
            </p>
          </div>


          {/* Form */}
        

            <form className="space-y-4">

              <input
                type="text"
                placeholder="Enter your Name"
                className="bg-white w-full h-12 px-4 rounded-lg border border-gray-200
                focus:outline-none focus:ring-2 focus:ring-indigo-100
                focus:border-indigo-400"
              />

              <input
                type="text"
                placeholder="Enter Company Name"
                className="bg-white w-full h-12 px-4 rounded-lg border border-gray-200
                focus:outline-none focus:ring-2 focus:ring-indigo-100
                focus:border-indigo-400"
              />

              <input
                type="email"
                placeholder="Enter Business Email"
                className="bg-white w-full h-12 px-4 rounded-lg border border-gray-200
                focus:outline-none focus:ring-2 focus:ring-indigo-100
                focus:border-indigo-400"
              />

              <input
                type="tel"
                placeholder="Enter Phone Number"
                className="bg-white w-full h-12 px-4 rounded-lg border border-gray-200
                focus:outline-none focus:ring-2 focus:ring-indigo-100
                focus:border-indigo-400"
              />

              <input
                type="text"
                placeholder="Enter Use Case"
                className="bg-white w-full h-12 px-4 rounded-lg border border-gray-200
                focus:outline-none focus:ring-2 focus:ring-indigo-100
                focus:border-indigo-400"
              />


              <div className="pt-4 flex justify-center">
                          <button className="bg-indigo-600 hover:bg-indigo-500 text-white text-sm px-5 py-3 rounded-md font-medium transition-all duration-200">
            Request a demo
          </button>
              </div>

            </form>

          </div>

      </div>
    </section>
  );
}