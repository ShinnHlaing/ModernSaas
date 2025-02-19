import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import HowItWork from './components/HowItWork'
import KeyPoint from './components/KeyPoint'
import PricingPlant from './components/PricingPlant'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function App() {

  return (
    <main className='text-sm text-neutral-300 antialiased'>
      <Navbar />
      <HeroSection />
      <HowItWork />
      <KeyPoint />
      <PricingPlant />
      <Testimonials />
      <Footer />
    </main>
  )
}

export default App
