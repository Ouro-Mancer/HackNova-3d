import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {
    FaRobot,
    FaVrCardboard,
    FaCloud,
    FaEthereum,
    FaAndroid,
    FaRocket,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const tracks = [
    { title: "AI / ML", color: "#00BFFF", icon: FaRobot },
    { title: "AR / VR", color: "#FF69B4", icon: FaVrCardboard },
    { title: "IoT", color: "#FFA500", icon: FaCloud },
    { title: "Web3 / Blockchain", color: "#7CFC00", icon: FaEthereum },
    { title: "Android / Web Dev", color: "#9370DB", icon: FaAndroid },
    { title: "Open Innovation", color: "#FF4500", icon: FaRocket },
];

export default function Tracks() {
    const cardsRef = useRef([]);
    const sectionRef = useRef(null);

    useGSAP(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                cardsRef.current,
                { opacity: 0, scale: 0.85 },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 0.6,
                    stagger: 0.2,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                        once: true, // ensures smooth play even on refresh
                    },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative max-w-[1200px] mx-auto w-full min-h-screen bg-[#131225] text-white py-24 px-6 overflow-hidden "
        >
            <div className="max-w-6xl mx-auto text-center mb-12">
                <h2 className="text-5xl font-extrabold tracking-widest text-pink-500 font-[Saiyan-Sans] uppercase">
                    Tracks
                </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto ">
                {tracks.map((track, index) => {
                    const Icon = track.icon;
                    return (
                        <div
                            key={track.title}
                            ref={(el) => (cardsRef.current[index] = el)}
                            className="relative group p-6 rounded-3xl backdrop-blur-md bg-white/5 border border-white/10 transition-all duration-300 transform hover:scale-105 hover:z-10 hover:shadow-[0_0_40px]"
                            style={{
                                boxShadow: `0 0 30px ${track.color}66`,
                            }}
                            onMouseEnter={() => {
                                cardsRef.current.forEach((card, i) => {
                                    if (i !== index) {
                                        gsap.to(card, {
                                            scale: 0.95,
                                            filter: "blur(2px)",
                                            duration: 0.2,
                                            ease: "power1.out",
                                        });
                                    }
                                });
                            }}
                            onMouseLeave={() => {
                                cardsRef.current.forEach((card, i) => {
                                    if (i !== index) {
                                        gsap.to(card, {
                                            scale: 1,
                                            filter: "blur(0px)",
                                            duration: 0.2,
                                            ease: "power1.out",
                                        });
                                    }
                                });
                            }}
                        >
                            <div
                                className="flex flex-col items-center text-center "
                                style={{
                                    background: `radial-gradient(circle at center, ${track.color}22, transparent 70%)`,
                                }}
                            >
                                <Icon
                                    className="text-5xl mb-4 animate-float floating-icon"
                                    style={{ color: track.color }}
                                />
                                <h3 className="text-2xl font-bold " style={{ color: track.color }}>
                                    {track.title}
                                </h3>
                                <p className="mt-2 text-sm text-white/70">
                                    Dive deep into {track.title} with electrifying challenges that test your dev power.
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>


        </section>
    );
}
