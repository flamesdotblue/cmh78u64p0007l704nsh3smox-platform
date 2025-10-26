import { MapPin, ShieldCheck, BadgeCheck } from 'lucide-react'

export default function WhyUs({ primary = '#006D77' }) {
  const items = [
    {
      icon: MapPin,
      title: 'Local Expertise',
      text: 'Our crew & road captains are Northeast natives.',
    },
    {
      icon: ShieldCheck,
      title: 'Govt. Backed',
      text: 'Supported by the Arunachal Tourism Board.',
    },
    {
      icon: BadgeCheck,
      title: 'Transparent Pricing',
      text: 'No middlemen, no hidden costs.',
    },
  ]

  return (
    <section id="why" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl md:text-4xl font-semibold text-center" style={{ color: primary }}>
        Why Travel With Country Miles?
      </h2>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map(({ icon: Icon, title, text }) => (
          <div key={title} className="rounded-2xl border border-slate-200 shadow-sm p-6 hover:shadow-md transition bg-white">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: primary + '10' }}>
              <Icon color={primary} />
            </div>
            <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
            <p className="text-slate-600 mt-2">{text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
