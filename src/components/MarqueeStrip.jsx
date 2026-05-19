const items = [
    'Cabadbaran Coffee',
    'Open from 5pm to 12:00 AM',
    'Coffee Legend™',
    'https://facebook.com/CoffeeLegendOfficial',
    'Ethiopian Cheffing',
    'Now Brewing',
    'Premium Blend',
]

const ticker = [...items, ...items]

export default function MarqueeStrip() {
    return (
        <div className="cl-marquee-wrap bg-[#0052b4] overflow-hidden py-3.5 select-none">
            <div className="cl-marquee flex whitespace-nowrap">
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

            <style>{`
        .cl-marquee-wrap {
          -webkit-mask-image: linear-gradient(to right,
            transparent 0,
            #000 64px,
            #000 calc(100% - 64px),
            transparent 100%);
                  mask-image: linear-gradient(to right,
            transparent 0,
            #000 64px,
            #000 calc(100% - 64px),
            transparent 100%);
        }

        @keyframes cl-marquee-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .cl-marquee {
          animation: cl-marquee-scroll 14s linear infinite;
          will-change: transform;
        }
        .cl-marquee-wrap:hover .cl-marquee {
          animation-play-state: paused;
        }

        @media (max-width: 767px) {
          .cl-marquee { animation-duration: 10s; }
        }
      `}</style>
        </div>
    )
}
