const hours = [
  { day: 'Monday – Saturday', time: '5:00 PM – 12:00 AM' },
  { day: 'Sunday',            time: 'Closed'             },
]

export default function FindUs() {
  return (
    <section id="location" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Header */}
        <div className="mb-14">
          <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#0052b4]">
            Our Location
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#1a1a1a] tracking-tight leading-[0.9] mt-3">
            Find Us.
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-14 items-start">

          {/* Left: Info */}
          <div className="flex flex-col divide-y divide-stone-100">

            {/* Address */}
            <div className="pb-8">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400 mb-3">
                Address
              </p>
              <p className="text-lg font-semibold text-[#1a1a1a] leading-snug">
                Kauswagan, Cabadbaran City
              </p>
              <p className="text-sm text-[#737373] mt-1">
                Agusan del Norte, Philippines
              </p>
            </div>

            {/* Hours */}
            <div className="py-8">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400 mb-4">
                Opening Hours
              </p>
              <ul className="flex flex-col gap-3">
                {hours.map(({ day, time }) => (
                  <li key={day} className="flex items-center justify-between">
                    <span className="text-sm text-[#737373]">{day}</span>
                    <span className={`text-sm font-medium ${time === 'Closed' ? 'text-stone-300' : 'text-[#1a1a1a]'}`}>
                      {time}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Directions CTA */}
            <div className="pt-8">
              <a
                href="https://maps.app.goo.gl/vgFBZ2pCura18TAx7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[11px] font-bold uppercase
                           tracking-[0.14em] text-[#0052b4] hover:text-[#003d8a] transition-colors"
              >
                Get Directions
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>

          </div>

          {/* Right: Map */}
          <div className="rounded-2xl overflow-hidden h-[400px] bg-stone-50">
            <iframe
              title="Coffee Legend Location"
              src="https://maps.google.com/maps?q=9.1333883,125.5356866&z=16&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>
      </div>
    </section>
  )
}
