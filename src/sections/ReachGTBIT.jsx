import React, { useEffect, useRef } from "react";
import { TrainFront, Bus, Car } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SpotlightCard from "../components/SpotlightCard";

gsap.registerPlugin(ScrollTrigger);

const Card = ({ icon, title, description, index, cardsRef, color }) => {
  const shadowColor = `rgba(${color}, 0.8)`;

  return (
    <SpotlightCard
      ref={(el) => (cardsRef.current[index] = el)}
      spotlightColor={`rgba(${color}, 0.5)`}
      className="p-6 bg-white/5 border border-white/10 text-center rounded-2xl hover:scale-[1.03] transition-transform duration-300"
      style={{
        boxShadow: `0 0 30px ${shadowColor}`,
      }}
    >
      <div className="relative z-10">
        <div className="mx-auto mb-4 h-12 w-12">{icon}</div>
        <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
        <p className="text-gray-200 text-sm">{description}</p>
      </div>
    </SpotlightCard>
  );
};



const ReachGTBIT = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current, {
        opacity: 0,
        y: 100,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(cardsRef.current, {
        opacity: 0,
        y: 50,
        stagger: 0.3,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="reach"
      className="relative  bg-[#131225] text-white py-20 px-6 md:px-20 overflow-hidden"
    >
      <div>
        <div className="absolute -top-10 -right-10 w-60 h-60 bg-purple-700 blur-3xl opacity-30 rounded-full z-0"></div>

        <h2 className="text-4xl md:text-5xl font-bold text-center text-yellow-400 mb-16 font-['Saiyan-Sans'] z-10 relative">
          How to Reach GTBIT <span className="text-red-500">?</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 z-10 relative ">
          <Card
            index={0}
            cardsRef={cardsRef}
            icon={<TrainFront className="h-12 w-12 text-blue-400" />}
            title="By Train"
            description="Board from any metro station → Exit at Subhash Nagar(Blue Line) or Mayapuri (Pink Line) → E-rickshaw to GTBIT."
            color="0, 123, 255" // blue
          />
          <Card
            index={1}
            cardsRef={cardsRef}
            icon={<Bus className="h-12 w-12 text-green-400" />}
            title="By Bus"
            description="Take a DTC bus to swarg ashram near mayapuri and subhash nagar metro station. From there, local transport is available to reach GTBIT."
            color="0, 200, 83" // green
          />
          <Card
            index={2}
            cardsRef={cardsRef}
            icon={<Car className="h-12 w-12 text-yellow-400" />}
            title="By Cab"
            description="Book a cab to GTBIT College,Rajouri Garden, New Delhi. Easily accessible via Ring Road."
            color="255, 214, 0" // yellow
          />
        </div>

      </div>


    </section>
  );
};

export default ReachGTBIT;
