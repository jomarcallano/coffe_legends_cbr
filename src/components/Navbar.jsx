import { useState, useEffect } from 'react'
import { ArrowRight, Menu, X } from 'lucide-react'
import Logo from '../assets/Logo.png'

const navLinks = [
  { label: 'Our Menu',  href: '#menu'     },
  { label: 'Our Story', href: '#'         },
  { label: 'Locations', href: '#location' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`cl-nav fixed top-0 left-0 right-0 z-50 border-b
                  ${scrolled
                    ? 'cl-nav-scrolled bg-white/80 border-stone-200/60 shadow-[0_8px_24px_-18px_rgba(0,0,0,0.25)]'
                    : 'bg-white border-stone-100'}`}
    >
      <div className={`max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between
                       transition-[height] duration-300 ease-out
                       ${scrolled ? 'h-14' : 'h-16'}`}>

        <a href="#" className="cl-logo flex-shrink-0">
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

      {/* Mobile menu — always rendered for smooth height + opacity transition */}
      <div
        className={`cl-mobile-menu md:hidden bg-white border-t border-stone-100 overflow-hidden shadow-lg
                    ${open ? 'is-open' : ''}`}
        aria-hidden={!open}
      >
        <div className="px-4 py-2 flex flex-col">
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
      </div>

      <style>{`
        .cl-nav {
          transition: background-color 300ms ease,
                      backdrop-filter 300ms ease,
                      box-shadow 300ms ease,
                      border-color 300ms ease;
        }
        .cl-nav-scrolled {
          -webkit-backdrop-filter: saturate(180%) blur(12px);
                  backdrop-filter: saturate(180%) blur(12px);
        }

        .cl-mobile-menu {
          max-height: 0;
          opacity: 0;
          pointer-events: none;
          transition: max-height 320ms cubic-bezier(.22,.61,.36,1),
                      opacity   220ms ease;
        }
        .cl-mobile-menu.is-open {
          max-height: 320px;
          opacity: 1;
          pointer-events: auto;
        }

        @media (prefers-reduced-motion: no-preference) {
          .cl-logo img {
            transition: transform 700ms cubic-bezier(.22,.61,.36,1);
          }
          .cl-logo:hover img {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </nav>
  )
}
