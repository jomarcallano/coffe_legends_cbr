import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import MarqueeStrip from './components/MarqueeStrip.jsx'
import MenuSection from './components/MenuSection.jsx'
import FindUs from './components/FindUs.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <MarqueeStrip />
        <MenuSection />
        <FindUs />
      </main>
      <Footer />
    </div>
  )
}
