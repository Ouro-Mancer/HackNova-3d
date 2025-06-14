import React from 'react'
import ModelCanvas from '../canvas/ModelCanvas'

const About = () => {
    return (
        <div className="w-full px-4 py-14 bg-[#131225] relative overflow-hidden text-white">
            {/* Particle Background */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full " />
                {[...Array(40)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-[6px] h-[6px] bg-white rounded-full opacity-20 animate-ping"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animationDelay: `${i * 0.15}s`,
                        }}
                    ></div>
                ))}
            </div>

            {/* Main Content Layout */}
            <div className="w-full py-12 px-4">
                <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 px-5 relative">

                    {/* Left Side - Text */}
                    <div className="w-full lg:w-2/3 max-w-xl z-10 relative">
                        {/* Optional Glowing Background */}
                        <div className="absolute inset-0 -z-10 hidden lg:block">
                            <div className="w-full h-full bg-[#1f1b3a] rounded-xl blur-2xl opacity-40"></div>
                        </div>

                        <h2 className="text-pink-500 text-5xl sm:text-6xl font-extrabold mb-5 font-['Saiyan-Sans']">
                            About
                            <span className='font-["Saiyan-Sans"] text-yellow-400 text-6xl sm:text-7xl md:text-8xl lg:text-7xl'> Hack</span>
                            <span className='font-["Saiyan-Sans"] text-red-500 text-6xl sm:text-7xl md:text-8xl lg:text-7xl'>Nova</span>
                        </h2>

                        <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed tracking-wide">
                            Welcome to <span className="text-yellow-400 font-bold">HackNova 2025</span> — a 36-hour offline hackathon designed to ignite innovation, creativity, and collaboration.
                            <br /><br />
                            Whether you're building your first app or launching your next big idea, HackNova is the perfect space to push boundaries, learn fast, and bring bold visions to life. With real-world challenges, mentorship from industry experts, and an electrifying atmosphere, this is more than a competition — it’s a journey of discovery and growth.
                            <br /><br />
                            Come for the code. Stay for the community. Leave with new skills, stronger networks, and a story worth telling.
                        </p>
                    </div>

                    {/* Divider for Mobile */}
                    <div className="w-full flex justify-center items-center lg:hidden">
                        <div className="w-[670px] h-[2px] bg-white/10 backdrop-blur-md rounded-full my-10"></div>
                    </div>

                    <div className="absolute right-9 hidden lg:block w-[2px] h-[480px] bg-white/10 backdrop-blur-md rounded-full"></div>

                    {/* Right Side - 3D Canvas */}
                    <div className="relative w-full lg:w-[60%] h-[500px] sm:h-[550px] lg:h-[620px] flex items-center justify-center">
                        {/* Base Glow Behind Character */}
                        <div className="absolute w-[450px] h-[450px] bg-cyan-400/20 rounded-full blur-[120px] opacity-30"></div>



                        {/* Dragon Balls */}
                        {[...Array(7)].map((_, i) => (
                            <div
                                key={i}
                                className="absolute w-8 h-8 bg-orange-400 rounded-full blur-md opacity-40 animate-ping"
                                style={{
                                    top: `${10 + Math.random() * 80}%`,
                                    left: `${55 + Math.random() * 40}%`,
                                    animationDelay: `${i * 0.4}s`,
                                }}
                            />
                        ))}

                        {/* 3D Frieza */}
                        <div className="w-full h-full z-20">
                            {/* <FriezaCanvas /> */}
                            <ModelCanvas
                                // modelPath='/models/frieza.glb'
                                modelPath='/models/frieza_compressed.glb'
                                position={[0, 0.3, 0]}
                                scale={[2.5, 2.5, 2.5]}
                                rotation={[-0.5, 0, 0]}
                                autorotate={true}
                                autorotateSpeed={1}
                            />
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default About
