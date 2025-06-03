import React from 'react'
import Hero from './sections/Hero'
import NavBar from './sections/NavBar.jsx'
import About from './sections/About'
import ReachGTBIT from './sections/ReachGTBIT.jsx'
import Footer from './sections/Footer'
import Tracks from './sections/Tracks.jsx'
import FAQSection from './sections/FAQSection.jsx'
import VenueSection from './sections/VenueSection.jsx'
import Schedule from './sections/Schedule.jsx'
import Prizes from './sections/Prizes.jsx'

const App = () => {
  return (
    <div className='bg-[#131225] text-white min-h-screen overflow-hidden'>
      <NavBar />
      <Hero />
      <About />
      <Tracks />
      <Schedule />
      <Prizes />
      <VenueSection />
      <FAQSection />
      <ReachGTBIT />
      <Footer />
    </div>
  )
}

export default App
