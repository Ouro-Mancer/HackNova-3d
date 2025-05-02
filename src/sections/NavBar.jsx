import clsx from "clsx";
import gsap from "gsap";
import { useWindowScroll } from "react-use";
import { useEffect, useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";
import { motion } from "framer-motion";
import Button from "../components/Button";

const navItems = ["About", "Tracks", "Schedule", "Prizes", "Sponsors", "Team", "Join us"];

const NavBar = () => {
    const [isAudioPlaying, setIsAudioPlaying] = useState(false);
    const [isIndicatorActive, setIsIndicatorActive] = useState(false);

    const audioElementRef = useRef(null);
    const navContainerRef = useRef(null);

    const { y: currentScrollY } = useWindowScroll();
    const [isNavVisible, setIsNavVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const toggleAudioIndicator = () => {
        setIsAudioPlaying((prev) => !prev);
        setIsIndicatorActive((prev) => !prev);
    };

    useEffect(() => {
        if (isAudioPlaying) {
            audioElementRef.current.play();
        } else {
            audioElementRef.current.pause();
        }
    }, [isAudioPlaying]);

    useEffect(() => {
        if (currentScrollY === 0) {
            setIsNavVisible(true);
            navContainerRef.current.classList.remove("floating-nav");
        } else if (currentScrollY > lastScrollY) {
            setIsNavVisible(false);
            navContainerRef.current.classList.add("floating-nav");
        } else if (currentScrollY < lastScrollY) {
            setIsNavVisible(true);
            navContainerRef.current.classList.add("floating-nav");
        }

        setLastScrollY(currentScrollY);
    }, [currentScrollY, lastScrollY]);

    useEffect(() => {
        gsap.to(navContainerRef.current, {
            y: isNavVisible ? 0 : -100,
            opacity: isNavVisible ? 1 : 0,
            duration: 0.25,
        });
    }, [isNavVisible]);

    return (
        <div
            ref={navContainerRef}
            className="fixed inset-x-0 top-0 z-50 h-20 transition-all duration-700 text-white max-w-[1400px] mx-auto"
        >
            <header className="absolute top-0 w-full">
                <nav className="flex size-full items-center justify-between px-6 py-4 backdrop-blur-lg shadow-md">
                    {/* Logo + Product Button */}
                    <div className="flex items-center gap-8">
                        <motion.span
                            initial={{ opacity: 0, scale: 0.9, y: -20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            whileHover={{ scale: 1.15 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >

                            <span className="text-yellow-400 font-['Saiyan-Sans'] text-4xl">Hack</span>
                            <span className="text-red-500 font-['Saiyan-Sans'] text-4xl">Nova</span>
                        </motion.span>

                        <Button
                            id="product-button"
                            title="Register"
                            rightIcon={<TiLocationArrow />}
                            containerClass=" text-black hidden md:flex items-center justify-center gap-1 transition-all duration-300"
                        />
                    </div>

                    {/* Nav Items + Audio Visualizer */}
                    <div className="flex items-center h-full">
                        <motion.div
                            className="hidden md:flex gap-6"
                            initial="hidden"
                            animate="visible"
                            variants={{
                                hidden: {},
                                visible: {
                                    transition: {
                                        staggerChildren: 0.08,
                                        duration: 2.5,
                                    },
                                },
                            }}
                        >
                            {navItems.map((item, index) => (
                                <motion.a
                                    key={index}
                                    href={`#${item.toLowerCase()}`}
                                    variants={{
                                        hidden: { opacity: 0, y: -40 },
                                        visible: { opacity: 1, y: 0 },
                                    }}
                                    whileHover={{
                                        color: "#facc15",
                                        scale: 1.1,
                                        textShadow: "0 0 12px #facc15",
                                    }}
                                    className="cursor-pointer font-semibold text-sm tracking-wider font-mono uppercase"
                                >
                                    {item}
                                </motion.a>
                            ))}
                        </motion.div>

                        <button
                            onClick={toggleAudioIndicator}
                            className="ml-10 flex items-end gap-1"
                        >
                            <audio
                                ref={audioElementRef}
                                className="hidden"
                                src="/audio/Ultra_Insinct.mp3"
                                loop
                            />
                            {[1, 2, 3, 4].map((bar) => (
                                <div
                                    key={bar}
                                    className={clsx(
                                        "w-1 rounded-sm bg-yellow-400",
                                        {
                                            "animate-audio-bar": isIndicatorActive,
                                        }
                                    )}
                                    style={{
                                        height: `${8 + bar * 3}px`,
                                        animationDelay: `${bar * 0.1}s`,
                                    }}
                                />
                            ))}
                        </button>
                    </div>
                </nav>
            </header>
        </div >
    );
};

export default NavBar;
