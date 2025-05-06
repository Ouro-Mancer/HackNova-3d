import React from 'react'
import Hero from './sections/Hero'
import NavBar from './sections/NavBar.jsx'
import About from './sections/About'
import ReachGTBIT from './sections/ReachGTBIT.jsx'
import Footer from './sections/Footer'
import Tracks from './sections/Tracks.jsx'

const App = () => {
  return (
    <div className='bg-[#131225] text-white min-h-screen overflow-hidden'>
      <NavBar />
      <Hero />
      <About />
      <Tracks />
      <ReachGTBIT/>
      <Footer />
    </div>
  )
}

export default App
