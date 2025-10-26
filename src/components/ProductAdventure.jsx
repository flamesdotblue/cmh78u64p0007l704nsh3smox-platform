import Accordion from './Accordion'

export default function ProductAdventure({ primary = '#006D77', accent = '#E29578' }) {
  const itinerary = [
    { title: 'Day 1: Arrival at Guwahati', content: 'Check-in, orientation & briefing.' },
    { title: 'Day 2: Ride to Bomdilla/Shergaon', content: 'Mountain views, Nyukmadung & Jaswant Garh memorials.' },
    { title: 'Day 3: Bomdila to Tawang', content: 'Scenic ride via Sela Tunnel to the land of monasteries.' },
    { title: 'Day 4: Tawang sightseeing', content: 'PT Tso, Bum La, Monastery, War Memorial.' },
    { title: 'Day 5: Tawang to Zemithang', content: 'Riverside ride, Gorsam Chorten, Dolma & Jampa Lhakhang.' },
    { title: 'Day 6: Zemithang to Dirang', content: 'Via Se La, hidden gem Sangti Valley.' },
    { title: 'Day 7: Dirang to Kaziranga', content: 'Long valley ride.' },
    { title: 'Day 8: Kaziranga Safari & return to Guwahati', content: 'Jungle safari, last night meet-up.' },
    { title: 'Day 9: Departure', content: 'End of expedition.' },
  ]

  return (
    <main>
      <section className="relative">
        <div className="relative h-[56vh] min-h-[420px] w-full overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1517265035603-faefa163c84e?q=80&w=2016&auto=format&fit=crop"
            alt="Bikers on mountain roads"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
          <div className="absolute inset-0 flex items-end md:items-center justify-center text-center px-6 pb-10">
            <div className="max-w-4xl">
              <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-semibold">Tawang–Kaziranga Adventure (9 Days / 8 Nights)</h1>
              <p className="text-white/90 mt-3 md:text-lg">Ride through mountain passes, visit high-altitude lakes, and experience Kaziranga Safari — with trusted local experts.</p>
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
            <p className="text-slate-700 mt-3">A thrilling expedition across the Eastern Himalayas — through Sela Pass, monasteries, and Kaziranga’s wilderness. Led by certified road captains and backed by the Arunachal Tourism Board.</p>
          </div>
          <div className="rounded-2xl border border-slate-200 p-6 shadow-sm">
            <h3 className="font-semibold text-slate-900">Quick Facts</h3>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <Fact label="Duration" value="9 Days / 8 Nights" />
              <Fact label="Route" value="Guwahati → Tawang → Zemithang → Dirang → Kaziranga → Guwahati" />
              <Fact label="Travel Style" value="Bike / SUV Expedition" />
              <Fact label="Difficulty" value="Moderate" />
              <Fact label="Group Size" value="Minimum 10 participants" />
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6">
        <h2 className="text-2xl font-semibold" style={{ color: primary }}>Pricing</h2>
        <div className="mt-4 overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-slate-50">
              <tr className="text-slate-600">
                <th className="px-5 py-3 font-medium">Package Type</th>
                <th className="px-5 py-3 font-medium">Price (₹)</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Solo Rider', '42,999'],
                ['Dual Rider', '34,999'],
                ['BYOB (Bring Your Own Bike)', '25,999'],
                ['SUV Seat', '22,999'],
                ['Himalayan 450 Upgrade', '+5,000'],
                ['Double Sharing', '+7,000'],
                ['Single Room', '+10,000'],
              ].map(([type, price]) => (
                <tr key={type} className="border-t border-slate-200">
                  <td className="px-5 py-3 text-slate-900">{type}</td>
                  <td className="px-5 py-3">{price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-slate-500 mt-2">*Minimum 10 participants required.*</p>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-2xl font-semibold" style={{ color: primary }}>Itinerary</h2>
        <div className="mt-4">
          <Accordion items={itinerary} />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-slate-200 p-6 shadow-sm bg-white">
            <h3 className="text-xl font-semibold text-slate-900">Included</h3>
            <ul className="mt-4 list-disc pl-5 space-y-1 text-slate-700">
              <li>Royal Enfield Himalayan 411cc / SUV option</li>
              <li>Backup vehicle & mechanic</li>
              <li>Inner Line & Bum-La permits</li>
              <li>Safety gear (helmet, guards)</li>
              <li>Fuel for rented bikes</li>
              <li>Meals: Breakfast (Day 2–9), Dinner (Day 1–8)</li>
              <li>Triple-sharing accommodation</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-200 p-6 shadow-sm bg-white">
            <h3 className="text-xl font-semibold text-slate-900">Not Included</h3>
            <ul className="mt-4 list-disc pl-5 space-y-1 text-slate-700">
              <li>Refundable bike deposit ₹5,000</li>
              <li>Lunch & personal expenses</li>
              <li>5% GST</li>
              <li>Delay/weather costs</li>
              <li>Entry fees, airfare/train tickets</li>
            </ul>
          </div>
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
