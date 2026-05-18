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
  return (
    <footer className="bg-[#141414] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-16 pb-10">

        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1.6fr_1fr_1fr] gap-12 pb-12 border-b border-white/[0.08]">

          {/* Brand column */}
          <div className="flex flex-col gap-5">
            <img src={Logo} alt="Coffee Legend" className="h-14 w-14 rounded-full object-cover" />
            <p className="text-sm font-medium leading-relaxed text-stone-500 max-w-[240px]">
              Precision roasted, legendarily brewed.
              Every cup is a commitment to quality.
            </p>
            <div className="flex items-center gap-2.5 mt-1">
              {socials.map(({ Icon, label }) => (
                <button
                  key={label}
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-white/10
                             hover:border-white/25 hover:bg-white/5
                             flex items-center justify-center
                             transition-all duration-200 text-stone-500 hover:text-stone-300"
                >
                  <Icon />
                </button>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-600 mb-5">
                {heading}
              </h4>
              <ul className="flex flex-col gap-3.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm font-medium text-stone-500 hover:text-white transition-colors duration-200"
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
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
          <p className="text-[11px] font-medium text-stone-600">
            © 2026 Coffee Legend™. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {['Privacy Policy', 'Terms of Service'].map((link) => (
              <a
                key={link}
                href="#"
                className="text-[11px] font-medium text-stone-600 hover:text-stone-400 transition-colors duration-200"
              >
                {link}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  )
}
