import React from "react";
import { motion } from "framer-motion";
import Logos from "../../components/Logos";
import { useTranslation } from "react-i18next";

const CompanyLogos = () => {
  const { t } = useTranslation();
  return (
    <section className="py-16 bg-gradient-to-b from-white to-indigo-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 font-merriweather">
            <span className="text-primary">{t("homePage.conpilance")}</span>{" "}
            {t("homePage.andc")}{" "}
            <span className="text-secondary">{t("homePage.partners")}</span>
          </h2>

          <div className="relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-indigo-100 to-amber-100 rounded-lg blur opacity-25"></div>
            <p className="relative text-lg md:text-xl text-gray-600 leading-relaxed font-lato px-4">
              {t("homePage.cpp1")}
              <span className="font-semibold text-primary">
                {t("homePage.cpp2")}
              </span>
              ,
              <span className="font-semibold text-secondary">
                {t("homePage.cpp3")}
              </span>
              , {t("homePage.cpp4")}{" "}
              <span className="font-semibold text-emerald-500">
                {t("homePage.cpp5")}
              </span>{" "}
              {t("homePage.cpp6")}
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-center text-gray-500 uppercase tracking-wider text-sm font-semibold mb-6">
              {t("homePage.cpt")}
            </h3>
            <Logos />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CompanyLogos;
