import { useEffect, useState } from "react";

const HackathonCountdown = () => {
    const calculateTimeLeft = () => {
        const targetDate = new Date("2025-08-02T09:00:00");
        const now = new Date();
        const difference = targetDate - now;

        let timeLeft = {};
        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const formatTime = (value) => String(value).padStart(2, "0");

    return (
        <div className="w-full lg:w-1/2 z-20 relative">
            <div className="absolute w-[300px] h-[300px] rounded-full bg-[#7974aa] blur-3xl opacity-60 -right-28 -bottom-48"></div>

            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-left mb-4 select-none">
                The Battle of Builders <span className="text-[#08091e]">Begins!</span>
            </h1>
            <p className="text-sm text-purple-100 text-left mb-6 max-w-md select-none">
                Gear up for a 36-hour coding showdown inspired by the spirit of Saiyans.
                🔥 Test your limits. Power up your skills. It's time to go beyond.
            </p>

            <div className="flex flex-wrap justify-center sm:justify-start gap-4 text-center bg-white/5 backdrop-blur-sm border border-[#3b366e] p-4 rounded-xl shadow-md w-full sm:w-fit mb-4 ">
                {["Days", "Hours", "Minutes", "Seconds"].map((label, i) => {
                    const keys = ["days", "hours", "minutes", "seconds"];
                    return (
                        <div key={label} className="flex flex-col items-center px-2">
                            <span className="text-3xl font-bold text-yellow-300 drop-shadow-md">
                                {formatTime(timeLeft[keys[i]] || 0)}
                            </span>
                            <span className="text-xs text-gray-300 uppercase tracking-widest">{label}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default HackathonCountdown;
