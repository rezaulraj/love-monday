import React from "react";
import { motion } from "framer-motion";
import work from "../../assets/images/work/work.jpg?url";
import { useTranslation } from "react-i18next";

const Workfolio = () => {
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

  const textVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section id="work-info" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={textVariants} className="order-1 lg:order-1">
            <motion.h2
              variants={textVariants}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 leading-tight font-merriweather tracking-wider"
            >
              {t("applyForWork.appwoksubh1")}
              <span className="text-primary">
                {t("applyForWork.appwoksubh2")}
              </span>
              ,
              <span className="text-yellow-500">
                {t("applyForWork.appwoksubh3")}
              </span>
              , {t("applyForWork.appwoksubh4")}
              <span className="text-secondary">
                {t("applyForWork.appwoksubh5")}?
              </span>
            </motion.h2>

            <motion.p
              variants={textVariants}
              className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed"
            >
              {t("applyForWork.appwoksubp")}
            </motion.p>
          </motion.div>

          <motion.div
            variants={imageVariants}
            className="order-2 lg:order-2 relative rounded-xl overflow-hidden shadow-2xl"
          >
            <img
              src={work}
              alt="International work opportunities"
              className="w-full h-auto object-cover rounded-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 via-transparent to-transparent"></div>

            <div className="absolute -bottom-4 -right-4 flex space-x-2">
              <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center">
                <img
                  src="https://flagcdn.com/ro.svg"
                  alt="Romania"
                  className="w-12 h-12 object-contain rounded-full border border-gray-200"
                />
              </div>
              <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center">
                <img
                  src="https://flagcdn.com/mt.svg"
                  alt="Malta"
                  className="w-12 h-12 object-contain rounded-full border border-gray-200"
                />
              </div>
              <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center">
                <img
                  src="https://flagcdn.com/ae.svg"
                  alt="Sharjah"
                  className="w-12 h-12 object-contain rounded-full border border-gray-200"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Workfolio;
