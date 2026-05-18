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

        <div className="flex items-center gap-3">
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
            className="md:hidden p-2 rounded-lg hover:bg-stone-50 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open
              ? <X className="w-5 h-5 text-[#1a1a1a]" />
              : <Menu className="w-5 h-5 text-[#1a1a1a]" />
            }
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-stone-100 px-6 py-5 flex flex-col gap-4">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setOpen(false)}
              className="text-[11px] font-bold uppercase tracking-[0.14em]
                         text-[#737373] hover:text-[#1a1a1a] transition-colors py-1"
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
