import React from 'react'
import Hero from './sections/Hero'
import NavBar from './sections/Navbar'
import About from './sections/About'
import Footer from './sections/Footer'

const App = () => {
  return (
    <div className='bg-[#131225] text-white min-h-screen overflow-x-hidden'>
      <NavBar />
      <Hero />
      <About />
      <Footer/>
    </div>
  )
}

export default App
