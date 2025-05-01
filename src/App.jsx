import React from 'react'
import Hero from './sections/Hero'
import NavBar from './sections/Navbar'

const App = () => {
  return (
    <div className='text-center bg-[#131225] min-h-screen text-white text-4xl'>
      <NavBar/>
      <Hero />
    </div>
  )
}

export default App