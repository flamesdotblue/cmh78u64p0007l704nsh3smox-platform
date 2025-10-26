import { Phone } from 'lucide-react'

export default function ContactCTA({ primary = '#006D77', accent = '#E29578' }) {
  return (
    <section id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="rounded-3xl border border-slate-200 shadow-sm p-8 md:p-12 bg-white">
        <h3 className="text-2xl md:text-3xl font-semibold" style={{ color: primary }}>Ready to Ride the Northeast?</h3>
        <p className="text-slate-600 mt-2">Connect with our team and plan your next adventure.</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href="#/package/tawang-kaziranga" className="px-5 py-3 rounded-full text-white font-medium shadow hover:shadow-md transition" style={{ backgroundColor: accent }}>Book Now</a>
          <a href="https://wa.me/918257053344" target="_blank" rel="noreferrer" className="px-5 py-3 rounded-full font-medium border border-slate-300 hover:border-slate-400 hover:shadow-sm transition">WhatsApp</a>
          <a href="tel:+918257053344" className="px-5 py-3 rounded-full font-medium border border-slate-300 hover:border-slate-400 hover:shadow-sm transition inline-flex items-center gap-2">
            <Phone size={18} /> Call Now
          </a>
        </div>
        <div className="mt-4 text-slate-700 text-sm">
          Phone: +91 82570 53344 | +91 91470 66477 • Instagram: @Country_Miles
        </div>
      </div>
    </section>
  )
}
