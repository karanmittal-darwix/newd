export default function VoiceWaveGraphic() {
  return (
    <div className="mt-8">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-auto object-contain"
      >
        <source src="/video/wave.mp4" type="video/mp4" />
      </video>

      <div className="mt-3 flex justify-between text-[10px] text-gray-400">
        <span>F0 · 186Hz</span>
        <span>Jitter 1.2%</span>
        <span>MOS 4.38</span>
      </div>
    </div>
  );
}