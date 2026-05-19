import { useEffect, useRef, useState } from 'react'
import Logo from '../assets/Logo.png'

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.01" strokeWidth="3" />
  </svg>
)

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
)

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.65a8.18 8.18 0 0 0 4.82 1.55V6.76a4.85 4.85 0 0 1-1.05-.07z" />
  </svg>
)

const socials = [
  { Icon: InstagramIcon, label: 'Instagram' },
  { Icon: FacebookIcon,  label: 'Facebook'  },
  { Icon: TikTokIcon,    label: 'TikTok'    },
]

const footerLinks = {
  Explore: ['Our Menu', 'Reserve Collection', 'Origin Stories', 'About Us'],
  Visit:   ['Find a Location', 'Catering', 'Franchise', 'Contact Us'],
}

export default function Footer() {
  const footerRef = useRef(null)
  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    const target = footerRef.current
    if (!target) return
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setRevealed(true)
          observer.unobserve(target)
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(target)
    return () => observer.disconnect()
  }, [])

  const stage = revealed ? 'is-revealed' : ''

  return (
    <footer ref={footerRef} className="bg-[#141414] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-16 pb-10">

        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1.6fr_1fr_1fr] gap-12 pb-12 border-b border-white/[0.08]">

          {/* Brand column */}
          <div className="flex flex-col gap-5">
            <img
              src={Logo}
              alt="Coffee Legend"
              className={`footer-fadeup footer-step-1 ${stage} h-14 w-14 rounded-full object-cover`}
            />
            <p className={`footer-fadeup footer-step-2 ${stage} text-sm font-medium leading-relaxed text-stone-500 max-w-[240px]`}>
              Precision roasted, legendarily brewed.
              Every cup is a commitment to quality.
            </p>
            <div className={`footer-fadeup footer-step-3 ${stage} flex items-center gap-2.5 mt-1`}>
              {socials.map(({ Icon, label }) => (
                <button
                  key={label}
                  aria-label={label}
                  className="footer-social w-9 h-9 rounded-full border border-white/10
                             flex items-center justify-center
                             text-stone-500"
                >
                  <Icon />
                </button>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links], colIdx) => (
            <div key={heading}
                 className={`footer-fadeup ${stage}`}
                 style={{ animationDelay: `${240 + colIdx * 80}ms` }}>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-600 mb-5">
                {heading}
              </h4>
              <ul className="flex flex-col gap-3.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="footer-link relative inline-block text-sm font-medium text-stone-500 hover:text-white transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className={`footer-fadeup footer-step-bottom ${stage}
                        flex flex-col sm:flex-row items-center justify-between gap-4 pt-8`}>
          <p className="text-[11px] font-medium text-stone-600">
            © 2026 Coffee Legend™. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {['Privacy Policy', 'Terms of Service'].map((link) => (
              <a
                key={link}
                href="#"
                className="footer-link relative inline-block text-[11px] font-medium text-stone-600 hover:text-stone-400 transition-colors duration-200"
              >
                {link}
              </a>
            ))}
          </div>
        </div>

      </div>

      <style>{`
        .footer-link::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -2px;
          width: 0;
          height: 1px;
          background: rgba(255,255,255,0.4);
          transition: width 300ms cubic-bezier(.22,.61,.36,1);
        }
        .footer-link:hover::after {
          width: 100%;
        }

        .footer-social {
          transition: transform 250ms cubic-bezier(.22,.61,.36,1),
                      border-color 250ms ease,
                      background-color 250ms ease,
                      color 250ms ease,
                      box-shadow 250ms ease;
        }
        .footer-social:hover {
          transform: translateY(-2px);
          color: rgb(214 211 209);
          border-color: rgba(255,255,255,0.25);
          background-color: rgba(255,255,255,0.05);
          box-shadow: 0 0 0 4px rgba(255,255,255,0.06);
        }

        @media (prefers-reduced-motion: no-preference) {
          @keyframes footer-fadeup {
            from { opacity: 0; transform: translateY(14px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          .footer-fadeup:not(.is-revealed) {
            opacity: 0;
          }
          .footer-fadeup.is-revealed {
            animation: footer-fadeup 600ms cubic-bezier(.22,.61,.36,1) both;
          }
          .footer-step-1.is-revealed      { animation-delay: 0ms;   }
          .footer-step-2.is-revealed      { animation-delay: 80ms;  }
          .footer-step-3.is-revealed      { animation-delay: 160ms; }
          .footer-step-bottom.is-revealed { animation-delay: 500ms; }
        }
      `}</style>
    </footer>
  )
}
