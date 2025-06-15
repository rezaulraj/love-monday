import React from "react";
import { motion } from "framer-motion";
import contactus from "../../assets/images/home/contact.jpg?url";
import { useTranslation } from "react-i18next";

const HeroContactus = () => {
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
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={contactus}
          alt="Contact Us"
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
              <span className="inline-block px-3 py-1 mb-4 text-sm font-semibold text-white bg-secondary rounded-full">
                {t("contactUs.contactherologobtn")}
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              {t("contactUs.contactheroh1")}
              <span className="text-blue-400">
                {t("contactUs.contactheroh2")}
              </span>
              {t("contactUs.contactheroh3")}
              <span className="text-blue-400">
                {t("contactUs.contactheroh4")}
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-200 mb-8 max-w-lg leading-relaxed"
            >
              {t("contactUs.contactherop")}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={() => {
                  const section = document.querySelector("#contact-schedule");
                  section?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer"
              >
                {t("contactUs.contaherobtn1")}
              </button>
              <button
                onClick={() => {
                  const section = document.querySelector("#contact-info");
                  section?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-8 py-3 bg-transparent hover:bg-white/10 text-white font-medium border-2 border-white rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer"
              >
                {t("contactUs.contaherobtn2")}
              </button>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute right-20 top-1/4 w-32 h-32 rounded-full bg-blue-400 filter blur-3xl"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute right-40 bottom-1/3 w-40 h-40 rounded-full bg-purple-500 filter blur-3xl"
        ></motion.div>
      </div>
    </section>
  );
};

export default HeroContactus;
