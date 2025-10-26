export default function FeaturedPackages({ primary = '#006D77', accent = '#E29578' }) {
  const cards = [
    {
      href: '#/package/tawang-kaziranga',
      img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2070&auto=format&fit=crop',
      title: 'Tawang–Kaziranga Adventure (9D/8N)',
      subtitle: 'Bike & SUV Expedition through lakes, monasteries, and Kaziranga Safari.',
      price: 'From ₹22,999',
    },
    {
      href: '#/package/tawang-winter',
      img: 'https://images.unsplash.com/photo-1477414348463-c0eb7f1359b6?q=80&w=2070&auto=format&fit=crop',
      title: 'Tawang Winter Backpacking (6D/5N)',
      subtitle: 'Slow-travel backpacking through passes and valleys.',
      price: 'From ₹17,999',
    },
  ]

  return (
    <section id="packages" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl md:text-4xl font-semibold text-center" style={{ color: primary }}>
        Our Signature Adventures
      </h2>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        {cards.map((c) => (
          <a key={c.title} href={c.href} className="group rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition bg-white block">
            <div className="aspect-[16/9] w-full overflow-hidden">
              <img src={c.img} alt={c.title} className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform" />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-slate-900">{c.title}</h3>
                <span className="text-sm font-medium px-3 py-1 rounded-full text-white" style={{ backgroundColor: primary }}>{c.price}</span>
              </div>
              <p className="text-slate-600 mt-2">{c.subtitle}</p>
              <div className="mt-4">
                <span className="inline-flex items-center text-sm font-medium" style={{ color: accent }}>
                  View Details →
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
