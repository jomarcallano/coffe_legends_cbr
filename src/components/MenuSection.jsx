import { useState } from 'react'

const categories = [
  { id: 'all',     label: 'All'     },
  { id: 'hot',     label: 'Hot'     },
  { id: 'iced',    label: 'Iced'    },
  { id: 'reserve', label: 'Reserve' },
]

const categoryColor = {
  hot:     '#e05d3d',
  iced:    '#0052b4',
  reserve: '#c8a17d',
}

const menuItems = [
  { id: 1, name: 'Americano',          category: 'hot',     price: 110, desc: 'Bold espresso and hot water. Clean, uncompromising finish.'              },
  { id: 2, name: 'Signature Latte',    category: 'hot',     price: 145, desc: 'Our house blend with steamed whole milk. Silky, balanced, every time.'   },
  { id: 3, name: 'Caramel Macchiato',  category: 'hot',     price: 165, desc: 'Vanilla foam, espresso shots, salted caramel drizzle.'                   },
  { id: 4, name: 'Cold Brew Classic',  category: 'iced',    price: 155, desc: '12-hour cold steep. Never diluted, never rushed.'                        },
  { id: 5, name: 'Iced Oat Latte',     category: 'iced',    price: 165, desc: 'Single origin espresso over creamy oat milk, served over ice.'           },
  { id: 6, name: 'Spanish Latte',      category: 'iced',    price: 160, desc: 'Condensed milk, double espresso, silky foam. A Manila classic.'           },
  { id: 7, name: 'Reserve Oat Latte',  category: 'reserve', price: 185, desc: 'Our signature reserve blend, premium oat milk. Crafted to order only.'   },
  { id: 8, name: 'Pour Over',          category: 'reserve', price: 220, desc: 'Single origin, hand-poured to order. Limited batches daily.'              },
  { id: 9, name: 'Cold Brew Reserve',  category: 'reserve', price: 195, desc: 'Reserve blend steeped for 18 hours. Served straight, no ice needed.'     },
]

export default function MenuSection() {
  const [active, setActive] = useState('all')

  const filtered = active === 'all'
    ? menuItems
    : menuItems.filter((item) => item.category === active)

  return (
    <section id="menu" className="bg-[#fafaf8] py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#0052b4] mb-4">
            What We Brew
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#1a1a1a] tracking-tight leading-[0.9]">
            Our Menu.
          </h2>
          <p className="mt-4 text-sm font-medium text-[#737373] max-w-sm">
            Every item is made to order. No shortcuts, no premixes.
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`px-5 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-[0.12em]
                          transition-all duration-200
                          ${active === cat.id
                            ? 'bg-[#0052b4] text-white shadow-lg shadow-blue-700/20'
                            : 'bg-white text-[#737373] hover:text-[#1a1a1a] border border-stone-200 hover:border-stone-300'
                          }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Menu grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl p-6 border border-stone-100
                         hover:shadow-md hover:-translate-y-0.5
                         transition-all duration-200 flex flex-col"
            >
              {/* Category label */}
              <div className="flex items-center gap-2 mb-4">
                <div
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ background: categoryColor[item.category] }}
                />
                <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400 capitalize">
                  {item.category}
                </span>
              </div>

              {/* Name + desc */}
              <h3 className="text-base font-semibold text-[#1a1a1a] leading-snug">
                {item.name}
              </h3>
              <p className="mt-1.5 text-sm font-normal text-stone-400 leading-relaxed flex-1">
                {item.desc}
              </p>

              {/* Price */}
              <div className="mt-5 pt-4 border-t border-stone-100">
                <span className="text-sm font-semibold text-[#1a1a1a] tracking-wide">₱{item.price}</span>
              </div>
            </div>
          ))}
        </div>

        {/* View full menu */}
        <div className="text-center mt-14">
          <button className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#0052b4] hover:text-[#003d8a] transition-colors">
            View Full Menu →
          </button>
        </div>

      </div>
    </section>
  )
}
