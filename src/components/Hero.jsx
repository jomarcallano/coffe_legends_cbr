import { ArrowRight } from 'lucide-react'
import CoverPhoto from '../assets/coverphoto.png'

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-10 pt-28 md:pt-32 pb-20">

      <div className="grid lg:grid-cols-2 gap-10 xl:gap-14 items-stretch">

        {/* ── Left: Typography ── */}
        <div className="flex flex-col justify-center py-4">

          <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#0052b4] mb-7">
            Premium Blend · Reserve Collection
          </span>

          <h1 className="font-black leading-[0.9] tracking-tight text-[#1a1a1a]
                         text-5xl md:text-6xl xl:text-7xl">
            Engineering<br />
            <span className="text-[#0052b4]">The Perfect</span><br />
            Extraction.
          </h1>

          <p className="mt-7 text-[17px] font-medium leading-[1.7] text-[#737373] max-w-[400px]">
            Sourced from single-origin farms, roasted fresh to order,
            and pulled with obsessive precision. Your cup deserves nothing less.
          </p>

          <div className="flex items-center gap-6 mt-10">
            <a
              href="#menu"
              className="inline-flex items-center gap-2
                         bg-[#0052b4] hover:bg-[#003d8a] text-white
                         text-[11px] font-bold uppercase tracking-[0.14em]
                         px-7 py-4 rounded-lg
                         shadow-lg shadow-blue-700/20
                         transition-all duration-200 hover:-translate-y-px"
            >
              Browse Menu
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="#location"
              className="text-[11px] font-bold uppercase tracking-[0.14em]
                         text-[#1a1a1a] hover:text-[#0052b4]
                         transition-colors duration-200"
            >
              Find Our Store →
            </a>
          </div>

          <div className="flex items-center mt-14 pt-8 border-t border-stone-100">
            {['Single Origin', 'Fresh Roasted', 'Reserve Grade'].map((label, i) => (
              <div key={label} className="flex items-center">
                {i > 0 && <span className="text-stone-300 mx-4">·</span>}
                <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right: Cover photo — correct 16:9 aspect, fills column height ── */}
        <div className="relative min-h-[280px] rounded-2xl overflow-hidden shadow-xl">
          <img
            src={CoverPhoto}
            alt="Coffee Legend — Premium Blend Coffee"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </div>

      </div>
    </section>
  )
}
