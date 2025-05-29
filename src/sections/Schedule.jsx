
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
    FaUserCheck,
    FaPlayCircle,
    FaCode,
    FaUtensils,
    FaChalkboardTeacher,
    FaUpload,
    FaTrophy,
    FaGamepad,
    FaGavel,
    FaAward,
    FaHandshake,
} from "react-icons/fa";

const Schedule = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    const schedule = [
        {
            time: "08:00 AM",
            date: "2025-08-02",
            title: "Registration and Check-in",
            description: "Register and get ready for the ultimate coding challenge.",
            icon: <FaUserCheck className="w-6 h-6 text-yellow-500" />,
        },
        {
            time: "10:30 AM",
            date: "2025-08-02",
            title: "Opening Ceremony",
            description: "Kickstart the event with our hosts and keynote speakers.",
            icon: <FaPlayCircle className="w-6 h-6 text-red-500" />,
        },
        {
            time: "11:00 AM",
            date: "2025-08-02",
            title: "Coding Time",
            description: "Participants start hacking and working on their projects.",
            icon: <FaCode className="w-6 h-6 text-yellow-500" />,
        },
        {
            time: "01:30 PM",
            date: "2025-08-02",
            title: "Lunch Break",
            description: "Take a break, grab some food, and recharge.",
            icon: <FaUtensils className="w-6 h-6 text-red-500" />,
        },
        {
            time: "02:30 PM",
            date: "2025-08-02",
            title: "Coding Time",
            description: "Continue developing your projects with your team.",
            icon: <FaCode className="w-6 h-6 text-yellow-500" />,
        },
        {
            time: "05:00 PM",
            date: "2025-08-02",
            title: "Evening Tea and Snacks",
            description: "Enjoy some snacks and refreshments.",
            icon: <FaUtensils className="w-6 h-6 text-red-500" />,
        },
        {
            time: "06:00 PM",
            date: "2025-08-02",
            title: "Mentoring Round 1",
            description: "Get expert guidance and refine your project.",
            icon: <FaChalkboardTeacher className="w-6 h-6 text-yellow-500" />,
        },
        {
            time: "08:00 PM",
            date: "2025-08-02",
            title: "Dinner Break",
            description: "Take a break, grab some food, and recharge.",
            icon: <FaUtensils className="w-6 h-6 text-red-500" />,
        },
        {
            time: "09:00 PM",
            date: "2025-08-02",
            title: "Coding Time",
            description: "Continue building your project late into the night.",
            icon: <FaCode className="w-6 h-6 text-yellow-500" />,
        },
        {
            time: "11:30 PM",
            date: "2025-08-02",
            title: "Game and Masti Time",
            description: "Unwind with fun games and activities.",
            icon: <FaGamepad className="w-6 h-6 text-yellow-500" />,
        },
        {
            time: "01:00 AM",
            date: "2025-08-03",
            title: "Coding Time",
            description: "Push through the night and complete your project.",
            icon: <FaCode className="w-6 h-6 text-yellow-500" />,
        },
        {
            time: "07:00 AM",
            date: "2025-08-03",
            title: "Breakfast",
            description: "Enjoy a morning meal to fuel up for the final stretch.",
            icon: <FaUtensils className="w-6 h-6 text-red-500" />,
        },
        {
            time: "08:00 AM",
            date: "2025-08-03",
            title: "Mentoring Round 2",
            description: "Final mentoring session to polish your project.",
            icon: <FaChalkboardTeacher className="w-6 h-6 text-yellow-500" />,
        },
        {
            time: "11:00 AM",
            date: "2025-08-03",
            title: "Top 10 Announcement",
            description: "Announcement of the top 10 teams moving to final judging.",
            icon: <FaTrophy className="w-6 h-6 text-yellow-500" />,
        },
        {
            time: "11:30 AM",
            date: "2025-08-03",
            title: "Final Judgement Round",
            description: "Final presentations and evaluation by judges.",
            icon: <FaGavel className="w-6 h-6 text-yellow-500" />,
        },
        {
            time: "02:00 PM",
            date: "2025-08-03",
            title: "Lunch",
            description: "Enjoy a well-deserved meal before the final ceremonies.",
            icon: <FaUtensils className="w-6 h-6 text-red-500" />,
        },
        {
            time: "03:00 PM",
            date: "2025-08-03",
            title: "Felicitation Ceremony",
            description: "Recognizing the top teams and winners.",
            icon: <FaAward className="w-6 h-6 text-red-500" />,
        },
        {
            time: "04:00 PM",
            date: "2025-08-03",
            title: "Closing Ceremony",
            description: "Wrap-up and bid farewell to an amazing hackathon.",
            icon: <FaHandshake className="w-6 h-6 text-red-500" />,
        },
    ];


    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000 * 60); // Update every minute

        return () => clearInterval(interval);
    }, []);

    const convertToIndianTime = (dateString, timeString) => {
        const [time, modifier] = timeString.split(" ");
        let [hours, minutes] = time.split(":");

        if (modifier === "PM" && hours !== "12") {
            hours = String(Number(hours) + 12);
        }
        if (modifier === "AM" && hours === "12") {
            hours = "00";
        }

        const dateTimeString = `${dateString}T${hours}:${minutes}:00`;
        const date = new Date(dateTimeString);

        return date.toLocaleString("en-IN", {
            timeZone: "Asia/Kolkata",
            hour: "numeric",
            minute: "numeric",
            hour12: true,
        });
    };

    const convertToIndianDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("en-IN", {
            timeZone: "Asia/Kolkata",
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
        });
    };

    const calculateProgress = () => {
        const now = currentTime.getTime();
        const firstEventTime = new Date(`${schedule[0].date}T${schedule[0].time}`).getTime();
        const lastEventTime = new Date(
            `${schedule[schedule.length - 1].date}T${schedule[schedule.length - 1].time}`
        ).getTime();

        if (now < firstEventTime) return 0;
        if (now > lastEventTime) return 100;

        const totalDuration = lastEventTime - firstEventTime;
        const elapsedTime = now - firstEventTime;
        return (elapsedTime / totalDuration) * 100;
    };

    const progress = calculateProgress();

    return (
        <div className="relative overflow-hidden w-full py-12 px-4 sm:px-6 pt-2 text-white">
            <h2 className="text-4xl md:text-5xl font-extrabold font-['Saiyan-Sans'] text-center mb-8 uppercase text-yellow-400 ">
                Event <span className="text-red-500">Schedule</span>
            </h2>

            <div className="relative max-w-4xl mx-auto">
                {/* Vertical Line */}
                <div className="absolute left-1/2 top-0 transform -translate-x-1/2 h-full w-1 bg-gray-800" />


                {schedule.map((event, index) => {
                    const eventDateTime = new Date(`${event.date}T${event.time.split(" - ")[0]}`);
                    const isPast = eventDateTime.getTime() < currentTime.getTime();
                    const isActive =
                        currentTime.getTime() >= eventDateTime.getTime() &&
                        (index + 1 < schedule.length
                            ? currentTime.getTime() < new Date(`${schedule[index + 1].date}T${schedule[index + 1].time.split(" - ")[0]}`).getTime()
                            : true);

                    return (
                        <motion.div
                            key={index}
                            className={`relative flex ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} items-center mb-12 z-10`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.15, delay: index * 0.01 }}
                        >
                            {/* Event Time and Date */}
                            <div className={`w-1/2 px-4 ${index % 2 === 0 ? "text-right" : "text-left"}`}>
                                <p className="text-lg font-bold text-yellow-300">
                                    {event.time} IST
                                </p>
                                <p className="text-sm text-orange-400">
                                    {convertToIndianDate(event.date)}
                                </p>
                            </div>

                            {/* Event Icon (Timeline Marker) */}
                            <motion.div
                                className={`relative w-12 h-12 rounded-full flex items-center justify-center border-2 ${isPast ? "border-[#ffffff20] bg-[#1e3a8a] opacity-50" : "border-[#3b82f6] bg-[#131225]"
                                    } z-10`}
                                whileHover={{ scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                {event.icon}
                                {isActive && (
                                    <motion.div
                                        className="absolute inset-0 rounded-full bg-[#f5a623] opacity-30 blur-md"
                                        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
                                        transition={{ duration: 1.5, repeat: Infinity }}
                                    />
                                )}
                            </motion.div>

                            {/* Event Details (Enhanced Card) */}
                            <div className="w-1/2 px-4">
                                <motion.div
                                    className={`relative group p-6 rounded-3xl backdrop-blur-md bg-white/5 border border-white/10 transition-all duration-300 transform ${isPast
                                        ? "opacity-50"
                                        : isActive
                                            ? "shadow-[0_0_20px_rgba(59,130,246,0.6)]"
                                            : ""
                                        } hover:scale-105 hover:z-10 hover:shadow-[0_0_40px_rgba(59,130,246,0.6)] overflow-hidden`}
                                    style={{
                                        boxShadow: `0 0 30px rgba(59, 130, 246, 0.4)`,
                                    }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    {/* Energy Particles Inside Card */}
                                    {[...Array(5)].map((_, i) => (
                                        <motion.div
                                            key={i}
                                            className="absolute w-1 h-1 bg-[#605f5c] rounded-full opacity-30"
                                            style={{
                                                top: `${Math.random() * 100}%`,
                                                left: `${Math.random() * 100}%`,
                                            }}
                                            animate={{
                                                scale: [0.5, 1, 0.5],
                                                opacity: [0.3, 0.6, 0.3],
                                                x: Math.random() * 20 - 10,
                                                y: Math.random() * 20 - 10,
                                            }}
                                            transition={{
                                                duration: 2 + Math.random(),
                                                repeat: Infinity,
                                                delay: i * 0.2,
                                            }}
                                        />
                                    ))}

                                    {/* Pulsing Aura for Active Cards */}
                                    {isActive && (
                                        <motion.div
                                            className="absolute inset-0 rounded-3xl bg-[#f5a623] opacity-20 blur-xl"
                                            animate={{ opacity: [0.2, 0.4, 0.2], scale: [1, 1.02, 1] }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                        />
                                    )}

                                    {/* Hover Aura Effect */}
                                    <motion.div
                                        className="absolute inset-0 rounded-3xl border-2 border-[#f5a623] opacity-0 group-hover:opacity-30"
                                        animate={{ opacity: [0, 0.3, 0], scale: [1, 1.05, 1] }}
                                        transition={{ duration: 1.5, repeat: Infinity }}
                                    />

                                    {/* Card Content */}
                                    <div
                                        className="relative flex flex-col items-center text-center z-10"
                                        style={{
                                            background: `radial-gradient(circle at center, rgba(59, 130, 246, 0.133) 0%, transparent 70%)`,
                                        }}
                                    >
                                        {/* Event Icon Inside Card */}
                                        <motion.div
                                            className="text-4xl mb-4"
                                            animate={{ y: [0, -5, 0] }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                        >
                                            {event.icon}
                                        </motion.div>

                                        {/* Title with Gradient */}
                                        <h3
                                            className="text-2xl font-bold mb-2 bg-gradient-to-r from-[#f5a623] to-[#f63b3b] bg-clip-text text-transparent"
                                            style={{ filter: "drop-shadow(0 0 5px rgba(59, 130, 246, 0.5))" }}
                                        >
                                            {event.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-sm text-white/70">{event.description}</p>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};

export default Schedule;