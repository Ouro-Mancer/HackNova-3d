import React, { useEffect, useRef } from "react";
import { TrainFront, Bus, Car } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Card = ({ icon, title, description, index, cardsRef, color }) => (
  <div
    ref={(el) => (cardsRef.current[index] = el)}
    className="relative bg-[#7974aa] border border-[#444] rounded-2xl p-6 text-center shadow-xl hover:scale-[1.03] transition-transform duration-300 overflow-hidden"
  >
    <div className={`absolute -top-10 -left-10 w-40 h-40 rounded-full bg-${color}-500 blur-3xl opacity-20 z-0`}></div>
    <div className="relative z-10">
      <div className={`mx-auto mb-4 h-12 w-12 text-${color}-400`}>{icon}</div>
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-gray-200 text-sm">{description}</p>
    </div>
  </div>
);

const ReachMIET = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section animation
      gsap.from(sectionRef.current, {
        opacity: 0,
        y: 100,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      // Cards animation
      gsap.from(cardsRef.current, {
        opacity: 0,
        y: 50,
        stagger: 0.3,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="reach"
      className="relative bg-[#131225] text-white py-20 px-6 md:px-20 overflow-hidden"
    >
      <div className="absolute -top-10 -right-10 w-60 h-60 bg-purple-700 blur-3xl opacity-30 rounded-full z-0"></div>

      <h2 className="text-4xl md:text-5xl font-bold text-center text-yellow-400 mb-16 font-['Saiyan-Sans'] z-10 relative">
        How to Reach MIET, Meerut
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 z-10 relative">
        <Card
          index={0}
          cardsRef={cardsRef}
          icon={<TrainFront className="h-12 w-12 text-blue-400" />}
          title="By Train"
          description="Board from any major railway station → Arrive at Meerut City → Use rickshaw/taxi to MIET."
          color="blue"
        />
        <Card
          index={1}
          cardsRef={cardsRef}
          icon={<Bus className="h-12 w-12 text-green-400" />}
          title="By Bus"
          description="Take a UPSRTC or private bus to Meerut Bus Stand → Hire auto or cab to MIET."
          color="green"
        />
        <Card
          index={2}
          cardsRef={cardsRef}
          icon={<Car className="h-12 w-12 text-yellow-400" />}
          title="By Cab"
          description="Book a cab directly to MIET, Meerut via any ride-hailing app. Well connected via Delhi-Meerut Expressway."
          color="yellow"
        />
      </div>
    </section>
  );
};

export default ReachMIET;
