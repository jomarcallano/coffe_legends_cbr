import { useState } from 'react'
import { ArrowRight, Menu, X } from 'lucide-react'
import Logo from '../assets/Logo.png'

const navLinks = [
  { label: 'Our Menu',  href: '#menu'     },
  { label: 'Our Story', href: '#'         },
  { label: 'Locations', href: '#location' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-stone-100">
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">

        <a href="/" className="flex-shrink-0">
          <img src={Logo} alt="Coffee Legend" className="h-10 w-10 rounded-full object-cover" />
        </a>

        <div className="hidden md:flex items-center gap-9">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#737373]
                         hover:text-[#1a1a1a] transition-colors duration-200"
            >
              {label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2 md:gap-3">
          <a
            href="#location"
            className="flex items-center gap-1.5
                       bg-[#0052b4] hover:bg-[#003d8a] text-white
                       text-[11px] font-bold uppercase tracking-[0.12em]
                       px-5 py-2.5 rounded-lg
                       shadow-md shadow-blue-700/15
                       transition-all duration-200 hover:-translate-y-px"
          >
            Find Us
            <ArrowRight className="w-3 h-3" />
          </a>
          <button
            type="button"
            className="md:hidden -mr-2 flex items-center justify-center
                       w-11 h-11 rounded-lg
                       hover:bg-stone-50 active:bg-stone-100
                       transition-colors touch-manipulation"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open
              ? <X className="w-6 h-6 text-[#1a1a1a] pointer-events-none" />
              : <Menu className="w-6 h-6 text-[#1a1a1a] pointer-events-none" />
            }
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-stone-100 px-4 py-2 flex flex-col shadow-lg">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setOpen(false)}
              className="text-[11px] font-bold uppercase tracking-[0.14em]
                         text-[#737373] hover:text-[#1a1a1a] active:bg-stone-100
                         transition-colors rounded-lg px-3 py-4 touch-manipulation"
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
