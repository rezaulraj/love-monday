import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import aboutCompany from "../../assets/images/about/aboutcompany.jpg?url";
import aboutName from "../../assets/images/about/aboutworker.jpg?url";
import { useTranslation } from "react-i18next";

const LoveMondayAbout = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const sectionVariants = {
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
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="love-monday-about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={sectionVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24"
        >
          <motion.div variants={itemVariants} className="order-1 lg:order-1">
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 font-merriweather tracking-wider"
            >
              {t("aboutUs.aboutvalh1")}
              <span className="text-blue-600">
                <span className="text-secondary font-merriweather tracking-wider pl-4">
                  {t("aboutUs.aboutvalh2")}
                </span>
                <span className="text-primary">{t("aboutUs.aboutvalh3")}</span>
              </span>
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 mb-6 leading-relaxed font-lato"
            >
              {t("aboutUs.aboutvalp")}
            </motion.p>
          </motion.div>

          <motion.div
            variants={imageVariants}
            className="order-2 lg:order-2 relative rounded-xl overflow-hidden shadow-xl"
          >
            <img
              src={aboutCompany}
              alt="Love Monday Team"
              className="w-full h-auto object-cover rounded-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 via-gray-900/10 to-transparent"></div>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={sectionVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <motion.div
            variants={imageVariants}
            className="order-2 lg:order-1 relative rounded-xl overflow-hidden shadow-xl"
          >
            <img
              src={aboutName}
              alt="Happy Worker"
              className="w-full h-auto object-cover rounded-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 via-gray-900/10 to-transparent"></div>
          </motion.div>

          <motion.div variants={itemVariants} className="order-1 lg:order-2">
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 font-merriweather tracking-wider"
            >
              {t("aboutUs.aboutnameh1")}
              <span className="text-blue-600">
                "
                <span className="text-secondary font-merriweather tracking-wider pl-1">
                  {t("aboutUs.aboutnameh2")}
                </span>
                <span className="text-primary">{t("aboutUs.aboutnameh3")}</span>
                "
              </span>
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 mb-6 leading-relaxed font-lato"
            >
              {t("aboutUs.aboutnamep1")}
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 leading-relaxed font-lato"
            >
              {t("aboutUs.aboutnamep2")}
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default LoveMondayAbout;
