import React from 'react'
import Hero from './sections/Hero'
import NavBar from './sections/NavBar.jsx'
import About from './sections/About'
import ReachMIET from './sections/ReachMIET'
import Footer from './sections/Footer'

const App = () => {
  return (
    <div className='bg-[#131225] text-white min-h-screen overflow-hidden'>
      <NavBar />
      <Hero />
      <About />
      <ReachMIET />
      <Footer/>
    </div>
  )
}

export default App
