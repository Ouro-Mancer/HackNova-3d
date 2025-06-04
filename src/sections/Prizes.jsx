import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { FaCrown, FaMedal, FaAward } from "react-icons/fa";
import Shenron from "../assets/Shenron with code.png";
import KidGokuCanvas from "../canvas/KidGokuCanvas";
import FriezaCanvas from "../canvas/FriezaCanvas";
import GohanCanvas from "../canvas/GohanCanvas"
import ModelCanvas from "../canvas/ModelCanvas";

gsap.registerPlugin(ScrollTrigger);

export default function Prizes() {
    const sectionRef = useRef(null);
    const cardsRef = useRef([]);

    const counterRef = useRef(null);
    const [prizeAmount, setPrizeAmount] = useState(0);

    useGSAP(() => {
        let triggered = false;
        ScrollTrigger.create({
            trigger: sectionRef.current,
            start: "top 70%",
            onEnter: () => {
                if (!triggered) {
                    triggered = true;
                    gsap.to({}, {
                        duration: 3,
                        onUpdate: function () {
                            const progress = this.progress();
                            setPrizeAmount(Math.floor(progress * 1000000));
                        },
                        ease: "power3.out"
                    });
                }
            }
        });
    }, []);

    const prizeCards = [
        {
            title: "Silver Winner",
            amount: "₹50,000",
            icon: <FaMedal className="text-slate-300 text-4xl mb-2" />,
            glow: "shadow-[0_0_40px_#C0C0C0]",
            aura: "bg-gradient-to-b from-slate-200/20 to-slate-400/5",
        },
        {
            title: "Gold Winner",
            amount: "₹1,00,000",
            icon: <FaCrown className="text-yellow-300 text-4xl mb-2" />,
            glow: "shadow-[0_0_60px_#FFD700]",
            aura: "bg-gradient-to-b from-yellow-400/30 to-yellow-600/10",
        },

        {
            title: "Bronze Winner",
            amount: "₹25,000",
            icon: <FaAward className="text-orange-400 text-4xl mb-2" />,
            glow: "shadow-[0_0_40px_#CD7F32]",
            aura: "bg-gradient-to-b from-orange-400/20 to-orange-700/10",
        },
    ];

    return (
        <section
            ref={sectionRef}
            className="relative bg-[#131225] py-32 px-6 text-white overflow-hidden z-10"
        >
            {/* Shenron background */}
            <div className="absolute inset-0 -z-10 bg-[url('/dragonball-bg.png')] bg-cover bg-center opacity-10 pointer-events-none" />

            {/* Particle Grid Overlay */}
            <div className="absolute inset-0 pointer-events-none -z-10">
                <div className="w-full h-full bg-[radial-gradient(circle,_rgba(255,255,255,0.1)_1px,_transparent_1px)] bg-[size:40px_40px] opacity-10 animate-pulse" />
            </div>

            {/* Blurry Background Orbs */}
            <div className="absolute -top-20 left-20 w-72 h-72 bg-purple-500 opacity-30 blur-3xl rounded-full animate-pulse -z-10" />
            {/* <div className="absolute bottom-0 right-20 w-72 h-72 bg-red-500 opacity-30 blur-3xl rounded-full animate-pulse -z-10" /> */}

            <div className="max-w-6xl mx-auto text-center mb-16">
                <h2 className="text-5xl uppercase tracking-widest font-[Saiyan-Sans] text-yellow-400 drop-shadow-[0_0_20px_orange]">
                    Prize <span className="text-red-500 ">Pool</span>
                </h2>
                <p className="mt-4 text-4xl font-bold text-yellow-300 drop-shadow-md">
                    ₹{prizeAmount.toLocaleString()}
                </p>
            </div>

            <div className="flex flex-row h-[470px]">

                {/* <TrunksCanvas /> */}
                <ModelCanvas
                    // modelPath='/models/future_trunks_dbz.glb'
                    modelPath='/models/future_trunks_dbz_compressed.glb'
                    position={[-2, -1.8, 0]}
                    scale={[2.8, 2.8, 2.8]}
                    rotation={[0.1, 0, 0]}
                    autorotate={true}
                    autorotateSpeed={1}
                />

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-5xl mx-auto py-3">

                {prizeCards.map((prize, idx) => (
                    <motion.div
                        key={idx}
                        ref={(el) => (cardsRef.current[idx] = el)}
                        initial={{ opacity: 0, scale: 0.8, y: 40 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 1, delay: idx * 0.2, ease: "easeOut" }}
                        viewport={{ once: true }}
                        onMouseEnter={() => gsap.to(cardsRef.current[idx], { scale: 1.05, duration: 0.3 })}
                        onMouseLeave={() => gsap.to(cardsRef.current[idx], { scale: 1, duration: 0.3 })}

                        className={`rounded-3xl p-6 text-center border border-white/10 backdrop-blur-md relative overflow-hidden h-[200px] cursor-pointer ${prize.glow}`}
                    >
                        <div className={`absolute inset-0 ${prize.aura} blur-xl -z-10`} />
                        {prize.icon}
                        <h3 className="text-2xl font-bold tracking-wider mb-1">{prize.title}</h3>
                        <p className="text-xl text-white/80">{prize.amount}</p>
                    </motion.div>
                ))}
            </div>

            {/* Shenron and 3D Model */}
            <img
                src={Shenron}
                className="absolute bottom-0 right-0 w-[300px] opacity-30 rotate-12 z-0"
                alt="shenron"
            />

        </section>
    );
}
