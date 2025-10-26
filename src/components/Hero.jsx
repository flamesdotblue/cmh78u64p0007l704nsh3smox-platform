export default function Hero({ primary = '#006D77', accent = '#E29578' }) {
  return (
    <section className="relative">
      <div className="relative h-[72vh] min-h-[520px] w-full overflow-hidden rounded-none">
        <img
          src="https://images.unsplash.com/photo-1517665631744-6d2f2aa3b6a3?q=80&w=2070&auto=format&fit=crop"
          alt="Rider on a mountain pass"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <div className="max-w-3xl">
            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight">
              Explore the Northeast with Country Miles
            </h1>
            <p className="mt-4 text-white/90 text-lg md:text-xl">
              Ride, Trek, and Discover the hidden gems of Arunachal — with local experts.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              <a
                href="#packages"
                className="px-5 py-3 rounded-full font-medium text-white shadow hover:shadow-lg transition"
                style={{ backgroundColor: primary }}
              >
                View Packages
              </a>
              <a
                href="#contact"
                className="px-5 py-3 rounded-full font-medium text-white shadow hover:shadow-lg transition"
                style={{ backgroundColor: accent }}
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
