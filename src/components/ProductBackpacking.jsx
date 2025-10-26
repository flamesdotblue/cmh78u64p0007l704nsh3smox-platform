import Accordion from './Accordion'

export default function ProductBackpacking({ primary = '#006D77', accent = '#E29578' }) {
  const itinerary = [
    { title: 'Day 1: Guwahati to Shergaon', content: 'Pickup by 11 a.m., acclimatization in Shergaon.' },
    { title: 'Day 2: Shergaon to Tawang', content: 'Nyukmadung, Sela Pass Tunnel (13,700 ft), Jaswant Garh, Jang Waterfalls.' },
    { title: 'Day 3: Tawang Sightseeing & Bum La', content: 'P.T. Tso, Madhuri Tso, Tawang Monastery, War Memorial.' },
    { title: 'Day 4: Tawang to Zemithang', content: 'Dolma Lhakhang, Gorsam Chorten, KentseMani (Lhasa Dwar).' },
    { title: 'Day 5: Zemithang to Dirang', content: 'Se La Pass, Sangti Valley.' },
    { title: 'Day 6: Dirang to Guwahati', content: 'Return drive, drop-off between 6:30–7:30 p.m.' },
  ]

  return (
    <main>
      <section className="relative">
        <div className="relative h-[56vh] min-h-[420px] w-full overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1482192505345-5655af888cc4?q=80&w=2069&auto=format&fit=crop"
            alt="Snowy mountain landscape"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
          <div className="absolute inset-0 flex items-end md:items-center justify-center text-center px-6 pb-10">
            <div className="max-w-4xl">
              <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-semibold">Tawang Winter Backpacking (6 Days / 5 Nights)</h1>
              <p className="text-white/90 mt-3 md:text-lg">Backpack through snow valleys, monasteries, and hidden passes — a slow-travel experience for the curious traveler.</p>
              <div className="mt-6 flex flex-wrap gap-3 justify-center">
                <a href="#contact" className="px-5 py-3 rounded-full text-white font-medium shadow" style={{ backgroundColor: accent }}>Book Now</a>
                <a href="#dates" className="px-5 py-3 rounded-full font-medium border border-white/60 text-white">View Dates</a>
                <a href="#" className="px-5 py-3 rounded-full font-medium border border-white/60 text-white">Download Itinerary (PDF)</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl font-semibold" style={{ color: primary }}>Overview</h2>
            <p className="text-slate-700 mt-3">A scenic winter journey through the tranquil passes and monasteries of Arunachal. Designed for backpackers who prefer culture and calm over chaos.</p>
          </div>
          <div className="rounded-2xl border border-slate-200 p-6 shadow-sm">
            <h3 className="font-semibold text-slate-900">Quick Facts</h3>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <Fact label="Duration" value="6 Days / 5 Nights" />
              <Fact label="Route" value="Guwahati → Shergaon → Tawang → Zemithang → Dirang → Guwahati" />
              <Fact label="Travel Style" value="Backpacking / Shared SUV" />
              <Fact label="Difficulty" value="Easy to Moderate" />
              <Fact label="Group Size" value="Minimum 10 participants" />
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-slate-200 p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900">Package Price</h3>
            <p className="text-3xl font-semibold mt-4" style={{ color: primary }}>₹17,999</p>
          </div>
          <div className="rounded-2xl border border-slate-200 p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900">Inclusions</h3>
            <ul className="mt-4 list-disc pl-5 space-y-1 text-slate-700">
              <li>Shared SUVs (Innova, Scorpio, Bolero, Ertiga)</li>
              <li>ILP & Bum-La Permits</li>
              <li>Experienced Driver & Assistance</li>
              <li>Oxygen Cylinder & First-Aid Kit</li>
              <li>Complimentary Breakfast (Day 2–6)</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-200 p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900">Exclusions</h3>
            <ul className="mt-4 list-disc pl-5 space-y-1 text-slate-700">
              <li>Private SUVs available on request</li>
              <li>Dinner as add-on</li>
              <li>5% GST & personal expenses</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <h2 className="text-2xl font-semibold" style={{ color: primary }}>Itinerary</h2>
        <div className="mt-4">
          <Accordion items={itinerary} />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <h2 className="text-2xl font-semibold" style={{ color: primary }}>Booking & Cancellation</h2>
        <div className="mt-4">
          <Accordion
            items={[
              { title: 'Booking Amount', content: '₹2,500 (non-refundable)' },
              {
                title: 'Cancellation Policy',
                content: (
                  <ul className="list-disc pl-5 space-y-1">
                    <li>≥45 days — 25%</li>
                    <li>45–30 days — 50%</li>
                    <li>30–20 days — 75%</li>
                    <li>&lt;20 days — 100%</li>
                  </ul>
                ),
              },
            ]}
          />
        </div>
      </section>

      <section className="fixed md:hidden bottom-4 inset-x-4 z-40">
        <a href="#contact" className="w-full block text-center px-5 py-3 rounded-full text-white font-medium shadow-lg" style={{ backgroundColor: accent }}>
          Book Now
        </a>
      </section>
    </main>
  )
}

function Fact({ label, value }) {
  return (
    <div className="rounded-xl bg-slate-50 p-3">
      <div className="text-slate-500 text-xs uppercase tracking-wide">{label}</div>
      <div className="text-slate-900 mt-0.5">{value}</div>
    </div>
  )
}
