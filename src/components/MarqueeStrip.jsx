const items = [
  'Single Origin',
  'Fresh Roasted Daily',
  'Reserve Grade',
  'Precision Extraction',
  'Ethiopian Yirgacheffe',
  'Coffee Legend™',
  'Now Brewing',
  'Premium Blend',
]

const ticker = [...items, ...items]

export default function MarqueeStrip() {
  return (
    <div className="bg-[#0052b4] overflow-hidden py-3.5 select-none">
      <div className="flex whitespace-nowrap animate-marquee">
        {ticker.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center text-[10px] font-bold uppercase tracking-[0.2em] text-white"
          >
            <span className="px-6">{item}</span>
            <span className="text-white/30">·</span>
          </span>
        ))}
      </div>
    </div>
  )
}
