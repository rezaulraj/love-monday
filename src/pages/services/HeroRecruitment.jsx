import React from "react";
import { motion } from "framer-motion";
import imediate from "../../assets/images/services/imediate.jpg?url";
import { useTranslation } from "react-i18next";

const HeroRecruitment = () => {
  const { t } = useTranslation();
  return (
    <section className="relative h-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={imediate}
          alt="Recruitment Services"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent"></div>
      </div>

      <div className="relative z-10 flex flex-col justify-end h-full pb-32 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="text-secondary">
              {t("recruitmentAssistence.herorecassh1")}
            </span>
            {t("recruitmentAssistence.herorecassh2")}
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {t("recruitmentAssistence.herorecassp")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <button
              onClick={() => {
                const section = document.querySelector("#immediate-service");
                section?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-8 py-3 bg-secondary hover:bg-secondary/80 text-white font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer"
            >
              {t("recruitmentAssistence.herorecassbtn")}
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroRecruitment;
