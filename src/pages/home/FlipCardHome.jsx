import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const FlipCardHome = () => {
  const [flippedIndex, setFlippedIndex] = useState(null);
  const { t } = useTranslation();
  const cards = [
    {
      title: t("homePage.fliph1"),
      content: t("homePage.textf1"),
      icon: "📊",
      color: "bg-indigo-100",
      textColor: "text-indigo-700",
    },
    {
      title: t("homePage.fliph2"),
      content: t("homePage.textf2"),
      icon: "🤝",
      color: "bg-orange-100",
      textColor: "text-orange-700",
    },
    {
      title: t("homePage.fliph3"),
      content: t("homePage.textf3"),
      icon: "🎯",
      color: "bg-emerald-100",
      textColor: "text-emerald-700",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12 font-merriweather tracking-wider">
          {t("homePage.whychose")}
          <span className="text-secondary font-merriweather tracking-wider pl-2">
            {t("homePage.love")}
          </span>
          <span className="text-primary">{t("homePage.monday")}</span>
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
                <div
                  className={`absolute w-full h-full backface-hidden rounded-xl shadow-lg p-8 flex flex-col items-center justify-center ${card.color} ${card.textColor}`}
                >
                  <div className="text-5xl mb-6">{card.icon}</div>
                  <h3 className="text-2xl font-bold mb-4 text-center font-merriweather tracking-wider">
                    {card.title}
                  </h3>
                  <p className="text-center opacity-0 font-merriweather tracking-wider">
                    {t("homePage.hover1")}
                  </p>
                  <div className="mt-4 text-sm font-medium">
                    {t("homePage.hover1")} →
                  </div>
                </div>

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
