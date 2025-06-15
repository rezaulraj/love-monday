import React from "react";
import { motion } from "framer-motion";
import heroWorker from "../../assets/images/work/herowork.jpg?url";
import { useTranslation } from "react-i18next";

const HeroApplyForWork = () => {
  const { t } = useTranslation();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={heroWorker}
          alt="Professional Worker"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 via-gray-900/40 to-transparent"></div>
      </div>

      <div className="relative z-10 h-full flex items-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="container mx-auto px-6 lg:px-8 py-24"
        >
          <div className="max-w-2xl">
            <motion.div variants={itemVariants}>
              <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold text-white bg-secondary rounded-full shadow-lg">
                {t("applyForWork.appwokherotopb")}
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight "
            >
              <span className="text-blue-400">
                {t("applyForWork.appwokheroh1")}
              </span>
              <br />
              {t("applyForWork.appwokheroh2")}
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-200 mb-8 max-w-lg leading-relaxed"
            >
              {t("applyForWork.appwokherop")}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={() => {
                  const section = document.querySelector("#apply-work");
                  section?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center cursor-pointer"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                {t("applyForWork.appwokherobtn1")}
              </button>
              <button
                onClick={() => {
                  const section = document.querySelector("#work-info");
                  section?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-8 py-3.5 bg-transparent hover:bg-white/10 text-white font-medium border-2 border-white rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center cursor-pointer"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                {t("applyForWork.appwokherobtn2")}
              </button>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute right-20 top-1/4 w-32 h-32 rounded-full bg-blue-400 filter blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute right-40 bottom-1/3 w-40 h-40 rounded-full bg-purple-500 filter blur-3xl"
        />
      </div>
    </section>
  );
};

export default HeroApplyForWork;
