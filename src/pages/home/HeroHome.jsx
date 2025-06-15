import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const HeroHome = () => {
  const { t } = useTranslation();
  const [displayText, setDisplayText] = useState("");
  const fullText = t("homePage.herotextsub");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + fullText[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 50);

      return () => clearTimeout(timeout);
    } else {
      const cursorInterval = setInterval(() => {
        setShowCursor((prev) => !prev);
      }, 500);

      return () => clearInterval(cursorInterval);
    }
  }, [currentIndex, fullText]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://pinoy385.hr/Pinoy385_Web_4_EN.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-black/30 bg-opacity-30"></div>
      </div>

      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4">
        <div className="max-w-4xl mx-auto text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fadeIn">
            {t("homePage.herotexth")}
          </h1>
          <p className="text-xl md:text-2xl mb-8 min-h-[72px] font-semibold tracking-wide leading-relaxed">
            {displayText}
            <span
              className={`inline-block w-1 h-6 bg-white align-middle ml-1 transition-opacity duration-300 ${
                showCursor ? "opacity-100" : "opacity-0"
              }`}
            ></span>
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fadeIn delay-200">
            <button
              onClick={() => {
                const section = document.querySelector("#contact-us-home");
                section?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-8 py-3 bg-white hover:bg-gray-100 text-indigo-600 font-medium rounded-full transition duration-300"
            >
              {t("homePage.contact-us")}
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
          opacity: 0;
        }
        .delay-100 {
          animation-delay: 0.3s;
        }
        .delay-200 {
          animation-delay: 0.6s;
        }
        @keyframes fadeIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-bounce {
          animation: bounce 2s infinite;
        }
        @keyframes bounce {
          0%,
          20%,
          50%,
          80%,
          100% {
            transform: translateY(0) translateX(-50%);
          }
          40% {
            transform: translateY(-20px) translateX(-50%);
          }
          60% {
            transform: translateY(-10px) translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};

export default HeroHome;
