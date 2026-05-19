import { useState, useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const categories = [
  { id: 'all',       label: 'All'        },
  { id: 'coffee',    label: 'Coffee'     },
  { id: 'sweet',     label: 'Sweet'      },
  { id: 'redbull',   label: 'Red Bull'   },
  { id: 'noncoffee', label: 'Non-Coffee' },
]

const categoryColor = {
  coffee:    '#6b4226',
  sweet:     '#c8a17d',
  redbull:   '#e05d3d',
  noncoffee: '#737373',
}

const categoryLabel = {
  coffee:    'Coffee',
  sweet:     'Sweet',
  redbull:   'Red Bull',
  noncoffee: 'Non-Coffee',
}

const menuItems = [
  // ── COFFEE ──
  { id: 1,  name: 'Americano',                   category: 'coffee',    hot: 90,   iced: 100  },
  { id: 2,  name: 'Flat White',                  category: 'coffee',    hot: 120,  iced: 130  },
  { id: 3,  name: 'Cafe Latte',                  category: 'coffee',    hot: 120,  iced: 130  },
  { id: 4,  name: 'Cappuccino',                  category: 'coffee',    hot: 120,  iced: null },
  { id: 5,  name: 'Oatmilk Latte',               category: 'coffee',    hot: 180,  iced: 190  },
  { id: 6,  name: 'Cinnamon Latte',              category: 'coffee',    hot: 120,  iced: 130  },
  { id: 7,  name: 'Bulletproof',                 category: 'coffee',    hot: 100,  iced: null },

  // ── SOMETHING SWEET ──
  { id: 8,  name: 'Spanish Latte',               category: 'sweet',     hot: 120,  iced: 130  },
  { id: 9,  name: 'Caramel Latte',               category: 'sweet',     hot: 120,  iced: 130  },
  { id: 10, name: 'Honey Oat Latte',             category: 'sweet',     hot: 180,  iced: 190  },
  { id: 11, name: 'Himalayan Salt Latte',        category: 'sweet',     hot: null, iced: 180  },
  { id: 12, name: 'Biscoff Iced Latte',          category: 'sweet',     hot: null, iced: 160  },
  { id: 13, name: 'Oreo Iced Latte',             category: 'sweet',     hot: null, iced: 160  },
  { id: 14, name: 'Mocha',                       category: 'sweet',     hot: 120,  iced: 130  },
  { id: 15, name: 'Chatuchak Thai Iced Coffee',  category: 'sweet',     hot: null, iced: 140  },
  { id: 16, name: 'Vietnamese Cà Phê Sữa Đá',    category: 'sweet',     hot: null, iced: 140  },
  { id: 17, name: 'Pour Over Coffee',            category: 'sweet',     hot: 160,  iced: 170  },

  // ── RED BULL SERIES ──
  { id: 18, name: 'Red Bull Iced Espresso',      category: 'redbull',   hot: null, iced: 180  },
  { id: 19, name: 'Red Bull Berry Rush',         category: 'redbull',   hot: null, iced: 180  },
  { id: 20, name: 'Red Bull Hawaiian Blue',      category: 'redbull',   hot: null, iced: 180  },

  // ── NON-COFFEE ──
  { id: 21, name: 'Tsokolate',                   category: 'noncoffee', hot: 120,  iced: 130  },
  { id: 22, name: 'Milo Everyday',               category: 'noncoffee', hot: 120,  iced: 130  },
]

export default function MenuSection() {
  const [active, setActive] = useState('all')
  const scrollRef = useRef(null)

  const filtered = active === 'all'
    ? menuItems
    : menuItems.filter((item) => item.category === active)

  function scrollBy(delta) {
    scrollRef.current?.scrollBy({ left: delta, behavior: 'smooth' })
  }

  return (
    <section id="menu" className="bg-[#fafaf8] py-24">
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

          {/* Arrow controls */}
          <div className="flex items-center gap-2">
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
        <div className="flex items-center gap-2 mb-10 flex-wrap">
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

        {/* Scrolling card track */}
        <div
          ref={scrollRef}
          className="overflow-x-auto pb-4 no-scrollbar"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          <div className="flex gap-4">
            {filtered.map((item) => (
              <div
                key={item.id}
                style={{ scrollSnapAlign: 'start' }}
                className="flex-shrink-0 w-[260px] bg-white rounded-xl p-6
                           border border-stone-100
                           hover:shadow-md hover:-translate-y-0.5
                           transition-all duration-200 flex flex-col"
              >
                {/* Category badge */}
                <div className="flex items-center gap-2 mb-5">
                  <div
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{ background: categoryColor[item.category] }}
                  />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">
                    {categoryLabel[item.category]}
                  </span>
                </div>

                {/* Name */}
                <h3 className="text-base font-semibold text-[#1a1a1a] leading-snug flex-1 min-h-[40px]">
                  {item.name}
                </h3>

                {/* Prices */}
                <div className="mt-5 pt-4 border-t border-stone-100 flex items-end gap-8">
                  {item.hot && (
                    <div>
                      <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-stone-400 block mb-1.5">
                        Hot
                      </span>
                      <span className="text-base font-semibold text-[#1a1a1a]">₱{item.hot}</span>
                    </div>
                  )}
                  {item.iced && (
                    <div>
                      <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-stone-400 block mb-1.5">
                        Iced
                      </span>
                      <span className="text-base font-semibold text-[#1a1a1a]">₱{item.iced}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Helper hint */}
        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-stone-300 mt-6 text-center">
          ← Swipe or use arrows to browse →
        </p>

      </div>
    </section>
  )
}
