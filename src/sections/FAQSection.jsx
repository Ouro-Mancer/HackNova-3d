import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const borderColors = [
  "#00BFFF",
  "#FF69B4",
  "#7CFC00",
  "#9370DB",
  "#FF4500",
  "#FFA500",
  "#9370DB",
  "#7CFC00",
  "#00BFFF",
  "#FFA500",
];


const faqs = [
  {
    question: "What is Hacknova 2025?",
    answer:
      "Hacknova 2025 is a 36-hour offline hackathon organized at GTBIT (Guru Tegh Bahadur Institute of Technology), GGSIPU, New Delhi, designed to foster innovation, creativity, and problem-solving among student developers.",
  },
  {
    question: "When and where will the hackathon take place?",
    answer:
      "Hacknova 2025 will be held on 2nd–3rd August 2025 at GTBIT College, GGSIPU, New Delhi.",
  },
  {
    question: "Who can participate in Hacknova 2025?",
    answer:
      "The hackathon is open to students, innovators, and aspiring technologists from colleges and universities across India.",
  },
  {
    question: "What is the duration of the event?",
    answer:
      "The hackathon will run for 36 hours continuously from 2nd August morning to 3rd August evening.",
  },
  {
    question: "What should I bring to the hackathon?",
    answer:
      "Participants should bring their laptops, chargers, extension cords, valid student ID, and essentials for a 36‑hour stay.",
  },
  {
    question: "Are inter-college teams allowed to participate?",
    answer:
      "Yes, inter‑college teams are welcome. Diversity in team composition is encouraged.",
  },
];

export default function FAQSection() {
  const [openIndexes, setOpenIndexes] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRefs.current,
        {
          y: 50,
          opacity: 0,
          scale: 0.95,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "back.out(1.7)",
          stagger: 0.5,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            once: true,
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, [showAll]);
  

  const toggleOpen = (idx) => {
    setOpenIndexes((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  const visibleFaqs = showAll ? faqs : faqs.slice(0, 4);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 px-6 md:px-16 bg-[#131225] text-white overflow-hidden"

    >
      <h2 className="text-5xl font-[Saiyan-Sans] text-center mb-16 uppercase text-pink-500 tracking-widest">
        FAQs
      </h2>

      <div className="flex flex-col gap-8 max-w-3xl mx-auto relative z-10">
        {visibleFaqs.map((faq, idx) => {
          const isOpen = openIndexes.includes(idx);
          const borderColor = borderColors[idx % borderColors.length];

          return (
            <div
              key={idx}
              ref={(el) => (cardRefs.current[idx] = el)}
              className={`relative rounded-3xl border-2  bg-white/5 border-white/10  p-6 transition-all duration-300 hover:scale-[1.03] cursor-pointer group`}
              style={{ boxShadow: `0 0 20px ${borderColor.replace('border-', '')}` }}

              onClick={() => toggleOpen(idx)}
            >
              <h3 className="text-xl font-bold text-white flex justify-between items-center">
                {faq.question}
                <span
                  className={`transition-transform duration-300 ${isOpen ? "rotate-180 text-yellow-400" : "text-cyan-400"
                    }`}
                >
                  ▼
                </span>
              </h3>
              {isOpen && (
                <p className="mt-4 text-gray-300 leading-relaxed text-[15px]">
                  {faq.answer}
                </p>
              )}
            </div>
          );
        })}
      </div>

      {/* Toggle Button */}
      <div className="flex justify-center mt-12">
        <button
          onClick={() => setShowAll((prev) => !prev)}
          className="text-xl px-6 py-2 border border-pink-500 text-pink-400 rounded-full hover:bg-pink-500 hover:text-white transition-all duration-300"
          style={{
            boxShadow: `  0 0 30px #ec4899`,
          }}
        >
          {showAll ? "Show Less" : "Show More"}
        </button>

      </div>
    </section>
  );
}
