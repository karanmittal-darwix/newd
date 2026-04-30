"use client";

import React, { useState } from "react";
import { submitDemoRequest } from "@/app/actions/demo";

export default function RequestDemoSection() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    useCase: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await submitDemoRequest(formData);

      if (response.success) {
        setIsSuccess(true);
      } else {
        setError(response.error || "Failed to submit request");
      }
    } catch (err) {
      setError(
        "An error occurred while submitting the request. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (isSuccess) {
    return (
      <section className="bg-[#eef0ff] py-24 px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-[40px] p-12 text-center shadow-xl shadow-indigo-100 border border-indigo-50">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-10 h-10 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Request Received!
          </h2>
          <p className="text-gray-500 text-lg mb-8">
            Thank you,{" "}
            <span className="text-indigo-600 font-bold">{formData.name}</span>.
            Our team will reach out to you within 24 hours to schedule your
            demo.
          </p>
          <button
            onClick={() => setIsSuccess(false)}
            className="text-indigo-600 font-bold hover:underline"
          >
            Submit another request
          </button>
        </div>
      </section>
    );
  }

  return (
    <section
      id="demo-request"
      className="bg-[#eef0ff] py-16 sm:py-24 px-4 sm:px-6 overflow-hidden relative"
    >
      <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-200 rounded-full blur-[100px] opacity-40 -mr-32 -mt-32"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 lg:gap-24 items-center">
          {/* Left Content */}
          <div className="max-w-lg">
            <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-100 text-indigo-600 text-xs font-bold tracking-widest uppercase mb-6">
              Get Started
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Request a <span className="text-indigo-600">Personalized</span>{" "}
              Demo
            </h2>
            <p className="mt-6 text-lg text-gray-500 leading-relaxed">
              Experience the power of agent-led AI. Fill out the form, and we'll
              show you how Darwix AI can scale your operations and level up your
              customer conversations.
            </p>

            <div className="mt-10 space-y-6">
              {[
                "Customized walkthrough of features",
                "Pricing discussion for your scale",
                "Strategy session with our AI experts",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-indigo-600 flex items-center justify-center shrink-0">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Form Card */}
          <div className="bg-white rounded-[32px] p-6 sm:p-8 md:p-10 shadow-2xl shadow-indigo-100/50 border border-white">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 gap-5">
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 ml-1">
                    Full Name
                  </label>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    type="text"
                    placeholder="John Doe"
                    className="w-full h-14 px-5 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:ring-4 focus:ring-indigo-50 focus:border-indigo-400 transition-all text-gray-900 font-medium placeholder:text-gray-300"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 ml-1">
                    Company Name
                  </label>
                  <input
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    type="text"
                    placeholder="Acme Inc."
                    className="w-full h-14 px-5 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:ring-4 focus:ring-indigo-50 focus:border-indigo-400 transition-all text-gray-900 font-medium placeholder:text-gray-300"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 ml-1">
                      Business Email
                    </label>
                    <input
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      type="text"
                      placeholder="john@company.com"
                      className="w-full h-14 px-5 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:ring-4 focus:ring-indigo-50 focus:border-indigo-400 transition-all text-gray-900 font-medium placeholder:text-gray-300"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 ml-1">
                      Phone Number
                    </label>
                    <input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      type="tel"
                      placeholder="+91 98XXX XXXXX"
                      className="w-full h-14 px-5 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:ring-4 focus:ring-indigo-50 focus:border-indigo-400 transition-all text-gray-900 font-medium placeholder:text-gray-300"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 ml-1">
                    Use Case / Requirements
                  </label>
                  <input
                    name="useCase"
                    value={formData.useCase}
                    onChange={handleChange}
                    type="text"
                    placeholder="What can we help you solve?"
                    className="w-full h-14 px-5 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:ring-4 focus:ring-indigo-50 focus:border-indigo-400 transition-all text-gray-900 font-medium placeholder:text-gray-300"
                  />
                </div>
              </div>

              {error && (
                <div className="bg-red-50 border border-red-100 text-red-600 px-4 py-3 rounded-xl text-sm font-medium">
                  {error}
                </div>
              )}

              <div className="pt-4">
                <button
                  disabled={isSubmitting}
                  type="submit"
                  className={`w-full h-14 rounded-2xl font-bold text-white transition-all duration-300 shadow-xl shadow-indigo-200 flex items-center justify-center gap-3
                    ${isSubmitting ? "bg-indigo-400 cursor-not-allowed" : "bg-indigo-600 hover:bg-indigo-700 hover:-translate-y-1"}`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Processing...
                    </>
                  ) : (
                    "Request My Demo"
                  )}
                </button>
                <p className="text-center text-[11px] text-gray-400 mt-4">
                  By clicking, you agree to our Terms of Service and Privacy
                  Policy.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
