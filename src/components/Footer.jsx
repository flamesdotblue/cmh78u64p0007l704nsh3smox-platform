export default function Footer({ primary = '#006D77' }) {
  return (
    <footer className="border-t border-slate-200 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <a href="#/" className="font-semibold tracking-wide text-slate-900 flex items-baseline gap-2">
            <span style={{ color: primary }}>0KM</span>
            <span className="text-slate-600">COUNTRY MILES</span>
          </a>
          <div className="flex flex-wrap gap-5 text-sm text-slate-700">
            <a href="#/">Home</a>
            <a href="#packages">Packages</a>
            <a href="#contact">Contact</a>
            <a href="#/terms">Terms</a>
          </div>
        </div>
        <p className="text-xs text-slate-500 mt-6">©2025 Country Miles. All Rights Reserved.</p>
      </div>
    </footer>
  )
}
