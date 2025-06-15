import React from "react";
import {
  FaUsers,
  FaHandshake,
  FaUserCheck,
  FaGlobeAmericas,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const FactPageHome = () => {
  const { t } = useTranslation();
  const facts = [
    {
      icon: <FaUsers className="text-4xl text-indigo-600" />,
      title: t("homePage.statch1"),
      description: t("homePage.statchp1"),
    },
    {
      icon: <FaHandshake className="text-4xl text-secondary" />,
      title: t("homePage.statch2"),
      description: t("homePage.statchp2"),
    },
    {
      icon: <FaUserCheck className="text-4xl text-emerald-500" />,
      title: t("homePage.statch3"),
      description: t("homePage.statchp3"),
    },
    {
      icon: <FaGlobeAmericas className="text-4xl text-amber-500" />,
      title: t("homePage.statch4"),
      description: t("homePage.statchp4"),
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-indigo-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 font-merriweather tracking-wider">
            {t("homePage.imapact1")}
            <span className="text-secondary">{t("homePage.imapact2")}</span>
            {t("homePage.imapact3")}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-lato tracking-wide">
            {t("homePage.impactp")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {facts.map((fact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-8 text-center">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-indigo-50 rounded-full">
                    {fact.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 font-merriweather tracking-wider">
                  {fact.title}
                </h3>
                <p className="text-gray-600 font-lato">{fact.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 max-w-4xl mx-auto text-center"
        >
          <div className="relative inline-block">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-200 to-amber-200 rounded-lg blur opacity-25"></div>
            <div className="relative px-8 py-6 bg-white rounded-lg shadow-sm border border-gray-100">
              <p className="text-lg md:text-xl text-gray-700 italic font-lato leading-relaxed">
                "{t("homePage.statnote1")}{" "}
                <span className="font-semibold">
                  <span className="text-secondary font-merriweather tracking-wider pl-1">
                    {t("homePage.love")}
                  </span>{" "}
                  <span className="text-primary">{t("homePage.monday")}</span>
                </span>
                , {t("homePage.statnote2")}{" "}
                <span className="font-medium text-secondary">
                  {t("homePage.statnote3")}
                </span>{" "}
                {t("homePage.statnote4")}
                <span className="font-medium text-emerald-500">
                  {t("homePage.statnote5")}
                </span>
                {t("homePage.statnote6")}{" "}
                <span className="font-medium text-blue-500">
                  {t("homePage.statnote7")}
                </span>{" "}
                {t("homePage.statnote8")}"
              </p>
            </div>
          </div>
        </motion.div>

        <div className="mt-12 text-center">
          <motion.a
            href="/recruitment"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-primary hover:bg-primary/80 text-white font-medium rounded-full transition duration-300 shadow-lg hover:shadow-indigo-200"
          >
            {t("homePage.statbtn")}
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default FactPageHome;
