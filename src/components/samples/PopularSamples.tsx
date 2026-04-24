import SampleCard from "./SampleCard";
import { POPULAR_SAMPLES } from "@/data/mockData";
import Link from "next/link";

export default function PopularSamples() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900">
            Popular samples
          </h2>

          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-400">
              Showing 9 of 240
            </span>

            <Link
              href="#"
              className="text-sm text-indigo-600 hover:text-indigo-500 font-medium"
            >
              Browse library →
            </Link>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {POPULAR_SAMPLES.map((sample, i) => (
            <SampleCard
              key={sample.id}
              sample={sample}
              isActive={i === 0}
            />
          ))}
        </div>

      </div>
    </section>
  );
}