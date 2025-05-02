import React from 'react'
import Hero from './sections/Hero'
import NavBar from './sections/Navbar'
import About from './sections/About'

const App = () => {
  return (
    <div className='bg-[#131225] text-white min-h-screen overflow-x-hidden'>
      <NavBar />
      <Hero />
      <About />
    </div>
  )
}

export default App
