import SampleCard from "./SampleCard";
import type { AudioSample } from "@/types";

interface Props {
  samples: AudioSample[];
  selectedId: number;
  isPlaying?: boolean;
  onSelect: (sample: AudioSample) => void;
}

export default function PopularSamples({
  samples = [],
  selectedId,
  isPlaying = false,
  onSelect,
}: Props) {
  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Popular samples</h2>

        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-400">
            Showing 9 of {samples.length} samples
          </span>

          <a
            href="#"
            className="text-sm text-indigo-600 hover:text-indigo-500 font-medium"
          >
            Browse library →
          </a>
        </div>
      </div>

      {samples.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {samples.map((sample) => (
            <SampleCard
              key={sample.id}
              sample={sample}
              isActive={sample.id === selectedId}
              isPlaying={isPlaying && sample.id === selectedId}
              onSelect={onSelect}
            />
          ))}
        </div>
      ) : (
        <div className="py-16 text-center">
          <p className="text-gray-500 font-medium mb-2">
            No audio available for selected filters.
          </p>
        </div>
      )}
    </section>
  );
}
