import React from 'react'
import GohanCanvas from '../canvas/GohanCanvas'
import GokuCanvas from '../canvas/GokuCanvas'
import Shenron from '../assets/Shenron with code.png'
import HackathonCountdown from '../components/HackathonCountdown'
import ModelCanvas from '../canvas/ModelCanvas'

const Hero = () => {
  return (
    <div className='w-full p-6 bg-[#131225] text-white '>

      {/* Upper Part */}

      <div className="w-full py-16 px-4">
        <div className="max-w-[1200px] mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-10 px-5 relative">
          {/* Left: Text */}
          <div className="w-full lg:w-2/3 max-w-xl z-10">
            <h1 className="text-4xl md:text-5xl whitespace-nowrap font-extrabold leading-tight mb-4 text-left select-none">
              <span className='font-["Saiyan-Sans"] text-yellow-400 text-6xl sm:text-7xl md:text-8xl lg:text-9xl'>Hack</span>
              <span className='font-["Saiyan-Sans"] text-red-500 text-6xl sm:text-7xl md:text-8xl lg:text-9xl pl-4'>Nova</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-300 text-left select-none leading-relaxed">
              Power up your brain and fire your Kamehameha of code at <span className="text-yellow-300 font-bold">HackNova 2025</span> —
              the ultimate <span className="text-orange-400 font-semibold">36-hour showdown</span> for developers, designers, and dreamers!
              <br /><br />
              🚀 Join us on <span className="text-red-400 font-bold">2nd & 3rd August</span> at <span className="text-indigo-300">GTBIT</span> for an adrenaline-fueled journey through code, caffeine, and chaos. From powerful tracks to epic prizes, it's time to go <b className='text-blue-400 font-bold'>Ultra Instinct</b> with your skills.
            </p>
          </div>

          <div
            className="absolute w-[350px] sm:w-[450px] md:w-[600px] lg:w-[720px] h-auto z-0 opacity-90 overflow-hidden shadow-xl left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 lg:left-14 lg:top-1/2 lg:-translate-x-0 lg:-translate-y-1/2">
            <img
              src={Shenron}
              alt="Decorative Shape"
              className="w-full h-full object-contain"
            />
          </div>


          {/* Right: 3D Model */}
          <div className="w-full lg:w-1/3 relative h-[400px] sm:h-[500px] md:h-[550px] lg:h-[600px] flex items-center justify-center">
            <div className="absolute w-[200px] sm:w-[300px] md:w-[350px] lg:w-[400px] h-[200px] sm:h-[300px] md:h-[350px] lg:h-[400px] rounded-full bg-[#57537f] blur-3xl opacity-60 z-0"></div>
            <div className="absolute w-full h-full z-10">
              {/* <GohanCanvas /> */}
              <ModelCanvas
                modelPath='/models/Gohan HD.glb'
                position={[0, 0.3, 0]}
                scale={[5, 5, 5]}
                rotation={[0, 3.6, 0]}
                autorotate={true}
                autorotateSpeed={1}
                intensity={4}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Lower Part */}

      <div className="w-full py-16 px-4">
        <div className="max-w-[1200px] mx-auto relative flex flex-col lg:flex-row items-center justify-between gap-10 px-8 bg-[#7974aa] rounded-xl overflow-visible">

          {/* LEFT: Model + Background Box */}
          <div className="relative w-full lg:w-1/2 h-[300px] sm:h-[320px] flex items-center justify-center">
            <div className="absolute w-[200px] sm:w-[300px] md:w-[350px] lg:w-[400px] h-[200px] sm:h-[300px] md:h-[350px] lg:h-[400px] rounded-full bg-[#171742] blur-3xl opacity-50 z-0"></div>
            <div className="absolute -top-10 sm:-top-14 md:-top-16 left-1/2 -translate-x-1/2 w-[300px] sm:w-[400px] md:w-[450px] lg:w-[500px] h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] z-10 pointer-events-none">
              {/* <GokuCanvas /> */}
              <ModelCanvas
                modelPath='/models/Goku HD.glb'
                position={[0, 0, -0.5]}
                scale={[5.5, 5.5, 5.5]}
                rotation={[0, 3.9, 0]}
                autorotate={false}
                autorotateSpeed={1}
                intensity={1}
              />
            </div>
          </div>

          {/* RIGHT: Text */}
          <HackathonCountdown />
        </div>
      </div>

    </div>
  )
}

export default Hero