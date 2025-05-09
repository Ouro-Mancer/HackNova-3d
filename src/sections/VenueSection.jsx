import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const VenueSection = () => {
  const sectionRef = useRef(null);
  const cardRef = useRef(null);

  const gtbitLat = 28.6468011;
  const gtbitLng = 77.1042632;

  const openGoogleMaps = () => {
    const mapUrl = `https://www.google.com/maps/dir/?api=1&destination=${gtbitLat},${gtbitLng}&travelmode=driving`;
    window.open(mapUrl, "_blank");
  };

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardRef.current, {
        opacity: 0,
        y: 60,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative max-w-[1200px] mx-auto w-full min-h-screen bg-[#131225] text-white py-24 px-6 overflow-hidden"
    >
      <div className="text-center mb-12">
        <h2 className="text-5xl font-extrabold tracking-widest text-pink-500 font-[Saiyan-Sans] uppercase">
          Venue
        </h2>
      </div>

      <div
        ref={cardRef}
        className="relative group flex flex-col md:flex-row gap-10 items-center bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_#FF69B488]"
        style={{
          boxShadow: "0 0 30px #FF69B466",
        }}
      >
        <div className="md:w-1/2 w-full">
          <img
            src="/GTBIT.jpg"
            alt="GTBIT Campus"
            className="w-full h-full object-cover rounded-2xl border border-pink-500"
          />
        </div>

        <div className="md:w-1/2 w-full text-left flex flex-col justify-center">
          <h3 className="text-3xl md:text-4xl font-bold text-pink-400 mb-4">
            GTBIT College
          </h3>
          <p className="text-md text-white/70 mb-6 leading-relaxed">
            Join us at{" "}
            <span className="text-pink-300 font-semibold">
              Guru Tegh Bahadur Institute of Technology
            </span>
            , IP University, New Delhi — where creativity meets innovation in a
            tech-powered experience!
          </p>
          <button
            onClick={openGoogleMaps}
            className="bg-pink-600 hover:bg-pink-700 text-white font-semibold px-6 py-3 rounded-md w-fit transition duration-300"
          >
            View Directions to GTBIT
          </button>
        </div>
      </div>
    </section>
  );
};

export default VenueSection;
