import { useEffect, useState } from 'react'

export default function Navbar({ primary = '#006D77', accent = '#E29578' }) {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`top-0 left-0 right-0 z-50 sticky transition-all ${
      scrolled ? 'bg-white/90 backdrop-blur border-b border-slate-200 shadow-sm' : 'bg-white'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <a href="#/" className="font-semibold tracking-wide text-slate-900 flex items-baseline gap-2">
          <span style={{ color: primary }}>0KM</span>
          <span className="text-slate-600">COUNTRY MILES</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm">
          <a href="#/" className="text-slate-700 hover:text-slate-900">Home</a>
          <a href="#why" className="text-slate-700 hover:text-slate-900">Why Us</a>
          <a href="#packages" className="text-slate-700 hover:text-slate-900">Packages</a>
          <a href="#contact" className="text-slate-700 hover:text-slate-900">Contact</a>
          <a
            href="#contact"
            className="inline-flex items-center rounded-full px-4 py-2 text-white font-medium shadow hover:shadow-md transition"
            style={{ backgroundColor: accent }}
          >
            Book Now
          </a>
        </div>
        <div className="md:hidden">
          <a
            href="#contact"
            className="inline-flex items-center rounded-full px-4 py-2 text-white font-medium shadow hover:shadow-md transition"
            style={{ backgroundColor: accent }}
          >
            Book Now
          </a>
        </div>
      </nav>
    </header>
  )
}
