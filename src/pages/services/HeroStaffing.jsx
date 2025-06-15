import React from "react";
import { motion } from "framer-motion";
import staffing from "../../assets/images/services/stafing.jpg?url";
import { useTranslation } from "react-i18next";

const HeroStaffing = () => {
  const { t } = useTranslation();
  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={staffing}
          alt="Professional staffing solutions"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 via-gray-900/50 to-transparent"></div>
      </div>

      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl lg:max-w-3xl"
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <span className="text-secondary">
                {t("workforceStaffing.workfostheroh1")}
              </span>{" "}
              {t("workforceStaffing.workfostheroh2")}
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-200 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              {t("workforceStaffing.workfostherop")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={() => {
                  const section = document.querySelector("#work-force-contact");
                  section?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-8 py-3 bg-secondary hover:bg-secondary/70 text-white font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                {t("workforceStaffing.workforherobtn1")}
              </button>
              <button
                onClick={() => {
                  const section = document.querySelector("#staffing-solution");
                  section?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-8 py-3 bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 font-medium rounded-full transition-all duration-300"
              >
                {t("workforceStaffing.workforherobtn2")}
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroStaffing;
