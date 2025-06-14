import React, { useState } from "react";
import { motion } from "framer-motion";

const FlipCardHome = () => {
  const [flippedIndex, setFlippedIndex] = useState(null);

  const cards = [
    {
      title: "PROVEN TRACK RECORD",
      content:
        "With years of expertise in ethical international recruitment, Love Monday has built strong partnerships with companies across various industries, successfully connecting skilled workers with employers across borders.",
      icon: "📊",
      color: "bg-indigo-100",
      textColor: "text-indigo-700",
    },
    {
      title: "RELIABILITY",
      content:
        "Our professionals are recognized globally for their reliability, adaptability, and dedication making them an excellent fit for dynamic industries and expanding teams.",
      icon: "🤝",
      color: "bg-orange-100",
      textColor: "text-orange-700",
    },
    {
      title: "EXPERTISE",
      content:
        "We manage the full recruitment journey from initial consultation to final placement and provide ongoing integration support to ensure smooth adaptation for both employer and employee.",
      icon: "🎯",
      color: "bg-emerald-100",
      textColor: "text-emerald-700",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12 font-merriweather tracking-wider">
          Why Choose
          <span className="text-secondary font-lobster tracking-widest pl-2">
            Love
          </span>
          <span className="text-primary"> Monday</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="h-96 perspective-1000"
              onMouseEnter={() => setFlippedIndex(index)}
              onMouseLeave={() => setFlippedIndex(null)}
            >
              <motion.div
                className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
                  flippedIndex === index ? "rotate-y-180" : ""
                }`}
                initial={false}
                animate={{ rotateY: flippedIndex === index ? 180 : 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {/* Front of Card */}
                <div
                  className={`absolute w-full h-full backface-hidden rounded-xl shadow-lg p-8 flex flex-col items-center justify-center ${card.color} ${card.textColor}`}
                >
                  <div className="text-5xl mb-6">{card.icon}</div>
                  <h3 className="text-2xl font-bold mb-4 text-center font-merriweather tracking-wider">
                    {card.title}
                  </h3>
                  <p className="text-center opacity-0 font-merriweather tracking-wider">
                    Placeholder
                  </p>
                  <div className="mt-4 text-sm font-medium">
                    Hover to learn more →
                  </div>
                </div>

                {/* Back of Card */}
                <div
                  className={`absolute w-full h-full backface-hidden rounded-xl shadow-lg p-8 flex flex-col items-center justify-center bg-white rotate-y-180 ${card.textColor}`}
                >
                  <div className="text-3xl mb-4">{card.icon}</div>
                  <h3 className="text-xl font-bold mb-4 text-center font-merriweather tracking-wider">
                    {card.title}
                  </h3>
                  <p className="text-gray-700 text-center font-lato">
                    {card.content}
                  </p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom CSS for 3D flip effect */}
      <style jsx global>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
};

export default FlipCardHome;
