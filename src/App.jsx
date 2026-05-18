import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MarqueeStrip from './components/MarqueeStrip'
import MenuSection from './components/MenuSection'
import FindUs from './components/FindUs'
import Footer from './components/Footer'

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
