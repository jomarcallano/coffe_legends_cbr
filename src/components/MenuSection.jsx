import { useState, useRef, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const categories = [
  { id: 'all',     label: 'All'      },
  { id: 'coffee',  label: 'Coffee'   },
  { id: 'sweet',   label: 'Sweet'    },
  { id: 'redbull', label: 'Red Bull' },
]

const categoryColor = {
  coffee:  '#6b4226',
  sweet:   '#c8a17d',
  redbull: '#e05d3d',
}

const categoryLabel = {
  coffee:  'Coffee',
  sweet:   'Sweet',
  redbull: 'Red Bull',
}

// Only items with product imagery — others are hidden until artwork is provided.
const menuItems = [
  { id: 1,  name: 'Americano',           category: 'coffee',  hot: 90,   iced: 100, image: '/products/Untitled-design-1.png' },
  { id: 2,  name: 'Flat White',          category: 'coffee',  hot: 120,  iced: 130, image: '/products/ceo_latte.png' },
  { id: 8,  name: 'Spanish Latte',       category: 'sweet',   hot: 120,  iced: 130, image: '/products/spanish_latte.png' },
  { id: 9,  name: 'Caramel Latte',       category: 'sweet',   hot: 120,  iced: 130, image: '/products/Irish-Cream.png' },
  { id: 19, name: 'Red Bull Berry Rush', category: 'redbull', hot: null, iced: 180, image: '/products/Berry-Cheesecake.png' },
]

function MenuCard({ item, index, revealed }) {
  const tint = categoryColor[item.category]
  const cardNum = String(index + 1).padStart(2, '0')

  return (
    <div
      style={{ scrollSnapAlign: 'start', '--i': index, '--tint': tint }}
      className="menu-card group relative flex-shrink-0
                 w-[78vw] max-w-[280px] sm:w-[260px] lg:w-[270px]
                 bg-white border border-stone-100 rounded-3xl
                 pt-28 pb-7 px-6
                 flex flex-col"
      data-revealed={revealed}
    >
      {/* Signature number stamp, top-left */}
      <span className="absolute top-5 left-6 text-[10px] font-black tracking-[0.18em] text-stone-300">
        №&nbsp;{cardNum}
      </span>

      {/* Brand-color spotlight halo behind the cup */}
      <div
        className="menu-card-halo absolute left-1/2 top-2 -translate-x-1/2
                   w-44 h-44 rounded-full pointer-events-none"
        style={{ background: `radial-gradient(closest-side, ${tint}33, ${tint}00 75%)` }}
      />

      {/* Cup — transparent PNG overflowing above the card */}
      <div className="absolute inset-x-0 -top-12 flex justify-center pointer-events-none">
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          className="menu-card-img h-44 w-auto object-contain
                     drop-shadow-[0_22px_18px_rgba(15,30,80,0.22)]"
        />
      </div>

      {/* Category eyebrow */}
      <div className="text-center">
        <span
          className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.22em]"
          style={{ color: tint }}
        >
          <span className="inline-block w-1.5 h-1.5 rounded-full" style={{ background: tint }} />
          {categoryLabel[item.category]}
        </span>
      </div>

      {/* Drink name — editorial weight */}
      <h3 className="text-center mt-2.5 text-[19px] font-black leading-[1.1] tracking-tight text-[#1a1a1a] min-h-[46px] flex items-center justify-center px-1">
        {item.name}
      </h3>

      {/* Ornamental divider */}
      <div className="my-4 flex items-center gap-3 text-stone-300">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent to-stone-200" />
        <span className="text-[10px] tracking-widest">✦</span>
        <div className="flex-1 h-px bg-gradient-to-l from-transparent to-stone-200" />
      </div>

      {/* Price pills */}
      <div className="flex items-center justify-center gap-2">
        {item.hot && (
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-stone-100 text-[11px] font-bold text-[#1a1a1a]">
            <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-stone-500">Hot</span>
            ₱{item.hot}
          </span>
        )}
        {item.iced && (
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0052b4] text-[11px] font-bold text-white shadow-sm shadow-blue-700/15">
            <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-white/70">Iced</span>
            ₱{item.iced}
          </span>
        )}
      </div>
    </div>
  )
}

export default function MenuSection() {
  const [active, setActive] = useState('all')
  const [revealed, setRevealed] = useState(false)
  const scrollRef = useRef(null)
  const sectionRef = useRef(null)

  useEffect(() => {
    const target = sectionRef.current
    if (!target) return
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setRevealed(true)
          observer.unobserve(target)
        }
      },
      { threshold: 0.12 }
    )
    observer.observe(target)
    return () => observer.disconnect()
  }, [])

  const filtered = active === 'all'
    ? menuItems
    : menuItems.filter((item) => item.category === active)

  function scrollBy(delta) {
    scrollRef.current?.scrollBy({ left: delta, behavior: 'smooth' })
  }

  return (
    <section ref={sectionRef} id="menu" className="bg-[#fafaf8] py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Header */}
        <div className="flex items-end justify-between gap-6 flex-wrap mb-10">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#0052b4]">
              What We Brew
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-[#1a1a1a] tracking-tight leading-[0.9] mt-3">
              Our Menu.
            </h2>
            <p className="mt-4 text-sm font-medium text-[#737373] max-w-sm">
              Every drink made to order. No shortcuts, no premixes.
            </p>
          </div>

          {/* Arrow controls — desktop only */}
          <div className="hidden lg:flex items-center gap-2">
            <button
              onClick={() => scrollBy(-320)}
              aria-label="Scroll left"
              className="w-11 h-11 rounded-full border border-stone-200 bg-white text-stone-500
                         hover:border-[#0052b4] hover:text-[#0052b4]
                         flex items-center justify-center transition-all duration-200"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scrollBy(320)}
              aria-label="Scroll right"
              className="w-11 h-11 rounded-full border border-stone-200 bg-white text-stone-500
                         hover:border-[#0052b4] hover:text-[#0052b4]
                         flex items-center justify-center transition-all duration-200"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Category tabs */}
        <div className="flex items-center gap-2 mb-14 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`px-5 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-[0.12em]
                          transition-all duration-200
                          ${active === cat.id
                            ? 'bg-[#0052b4] text-white shadow-md shadow-blue-700/15'
                            : 'bg-white text-[#737373] hover:text-[#1a1a1a] border border-stone-200 hover:border-stone-300'
                          }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Horizontal snap scroller — same swipe behavior at every breakpoint */}
        <div
          ref={scrollRef}
          className="overflow-x-auto pt-14 md:pt-16 pb-4 no-scrollbar"
          style={{ scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch' }}
        >
          <div className="flex gap-5 pr-6">
            {filtered.map((item, i) => (
              <MenuCard key={item.id} item={item} index={i} revealed={revealed} />
            ))}
          </div>
        </div>

        {/* Swipe hint — visible at all sizes */}
        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-stone-300 mt-6 text-center lg:hidden">
          ← Swipe to browse →
        </p>
        <p className="hidden lg:block text-[10px] font-bold uppercase tracking-[0.18em] text-stone-300 mt-6 text-center">
          ← Swipe or use arrows to browse →
        </p>

      </div>

      <style>{`
        .menu-card {
          transition: transform 400ms cubic-bezier(.22,.61,.36,1),
                      box-shadow 400ms cubic-bezier(.22,.61,.36,1),
                      border-color 400ms ease;
        }
        .menu-card:hover {
          transform: translateY(-6px);
          border-color: #d6d3d1;
          box-shadow: 0 28px 50px -24px rgba(0,82,180,0.22),
                      0 8px 18px -8px rgba(15,15,15,0.10);
        }

        .menu-card-halo {
          opacity: 0.85;
          transition: opacity 400ms ease, transform 600ms cubic-bezier(.22,.61,.36,1);
        }
        .menu-card:hover .menu-card-halo {
          opacity: 1;
          transform: translateX(-50%) scale(1.08);
        }

        .menu-card-img {
          transition: transform 600ms cubic-bezier(.22,.61,.36,1);
        }
        .menu-card:hover .menu-card-img {
          transform: translateY(-6px) rotate(-3deg) scale(1.05);
        }

        @media (prefers-reduced-motion: no-preference) {
          @keyframes menu-card-rise {
            from { opacity: 0; transform: translateY(22px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          .menu-card[data-revealed='false'] { opacity: 0; }
          .menu-card[data-revealed='true'] {
            animation: menu-card-rise 700ms cubic-bezier(.22,.61,.36,1) both;
            animation-delay: calc(var(--i, 0) * 70ms);
          }
        }
      `}</style>
    </section>
  )
}
