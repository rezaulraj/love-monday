import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaGlobeAmericas,
  FaHandshake,
  FaUserCheck,
  FaUsers,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const MeetTeam = () => {
  const { t } = useTranslation();
  const paragraph = t("aboutUs.aboutsubp");
  const words = paragraph.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.3,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 12,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const factVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: "backOut",
      },
    }),
  };

  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const facts = [
    {
      icon: <FaUsers className="text-4xl text-indigo-600" />,
      title: t("aboutUs.aboutcdh1"),
      description: t("aboutUs.aboutcdp1"),
    },
    {
      icon: <FaHandshake className="text-4xl text-orange-500" />,
      title: t("aboutUs.aboutcdh2"),
      description: t("aboutUs.aboutcdp2"),
    },
    {
      icon: <FaUserCheck className="text-4xl text-emerald-500" />,
      title: t("aboutUs.aboutcdh3"),
      description: t("aboutUs.aboutcdp3"),
    },
    {
      icon: <FaGlobeAmericas className="text-4xl text-amber-500" />,
      title: t("aboutUs.aboutcdh4"),
      description: t("aboutUs.aboutcdp4"),
    },
  ];

  return (
    <section
      id="meet-our-team"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={titleVariants}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 relative inline-block font-merriweather tracking-wider">
            <span className="relative">
              {t("aboutUs.aboutsubh1")}
              <span className="text-secondary font-merriweather tracking-wider">
                {t("aboutUs.aboutsubh2")}
              </span>
              <span className="text-primary">{t("aboutUs.aboutsubh3")}</span>
              {t("aboutUs.aboutsubh4")}
            </span>
          </h2>

          <motion.div
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            variants={container}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {words.map((word, i) => (
              <motion.span
                key={i}
                variants={wordVariants}
                style={{
                  display: "inline-block",
                  marginRight: "6px",
                  whiteSpace: "pre-wrap",
                }}
              >
                {word}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {facts.map((fact, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={factVariants}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-8 text-center">
                <div className="flex justify-center mb-6">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ delay: 0.6 + index * 0.1, type: "spring" }}
                    className="p-4 bg-indigo-50 rounded-full"
                  >
                    {fact.icon}
                  </motion.div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 font-merriweather tracking-wider">
                  {fact.title}
                </h3>
                <p className="text-gray-600 font-lato">{fact.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MeetTeam;
