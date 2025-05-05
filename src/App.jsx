import React from 'react'
import Hero from './sections/Hero'
import NavBar from './sections/NavBar.jsx'
import About from './sections/About'
import ReachGTBIT from './sections/ReachGTBIT.jsx'
import Footer from './sections/Footer'

const App = () => {
  return (
    <div className='bg-[#131225] text-white min-h-screen overflow-hidden'>
      <NavBar />
      <Hero />
      <About />
      <ReachGTBIT />
      <Footer/>
    </div>
  )
}

export default App
