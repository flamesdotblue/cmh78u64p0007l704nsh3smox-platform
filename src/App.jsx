import { useEffect, useMemo, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhyUs from './components/WhyUs'
import FeaturedPackages from './components/FeaturedPackages'
import ContactCTA from './components/ContactCTA'
import Footer from './components/Footer'
import ProductAdventure from './components/ProductAdventure'
import ProductBackpacking from './components/ProductBackpacking'

function useHashRoute() {
  const parse = () => {
    const hash = window.location.hash.replace('#', '') || '/'
    return hash
  }
  const [route, setRoute] = useState(parse())
  useEffect(() => {
    const handler = () => setRoute(parse())
    window.addEventListener('hashchange', handler)
    return () => window.removeEventListener('hashchange', handler)
  }, [])
  return route
}

function ScrollToTopOnRoute({ route }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [route])
  return null
}

const primary = '#006D77'
const accent = '#E29578'

export default function App() {
  const route = useHashRoute()
  const page = useMemo(() => {
    if (route.startsWith('/package/tawang-kaziranga')) return 'adventure'
    if (route.startsWith('/package/tawang-winter')) return 'backpacking'
    return 'home'
  }, [route])

  return (
    <div className="min-h-screen bg-white text-slate-800">
      <ScrollToTopOnRoute route={route} />
      <Navbar primary={primary} accent={accent} />

      {page === 'home' && (
        <main>
          <Hero primary={primary} accent={accent} />
          <WhyUs primary={primary} />
          <FeaturedPackages primary={primary} accent={accent} />
          <ContactCTA primary={primary} accent={accent} />
        </main>
      )}

      {page === 'adventure' && (
        <ProductAdventure primary={primary} accent={accent} />
      )}

      {page === 'backpacking' && (
        <ProductBackpacking primary={primary} accent={accent} />
      )}

      <Footer primary={primary} />
    </div>
  )
}
