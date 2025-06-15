import React from "react";
import { motion } from "framer-motion";
import {
  FaBalanceScale,
  FaPassport,
  FaFileContract,
  FaUserShield,
  FaGlobeAmericas,
  FaHandshake,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const LegitimateWorkfolio = () => {
  const { t } = useTranslation();
  const services = [
    {
      icon: <FaBalanceScale className="text-3xl" />,
      title: t("legitimateWork.legimatrighth1"),
      description: t("legitimateWork.legimatrightp1"),
    },
    {
      icon: <FaPassport className="text-3xl" />,
      title: t("legitimateWork.legimatrighth2"),
      description: t("legitimateWork.legimatrightp2"),
    },
    {
      icon: <FaFileContract className="text-3xl" />,
      title: t("legitimateWork.legimatrighth3"),
      description: t("legitimateWork.legimatrightp3"),
    },
    {
      icon: <FaUserShield className="text-3xl" />,
      title: t("legitimateWork.legimatrighth4"),
      description: t("legitimateWork.legimatrightp4"),
    },
    {
      icon: <FaGlobeAmericas className="text-3xl" />,
      title: t("legitimateWork.legimatrighth5"),
      description: t("legitimateWork.legimatrightp5"),
    },
    {
      icon: <FaHandshake className="text-3xl" />,
      title: t("legitimateWork.legimatrighth6"),
      description: t("legitimateWork.legimatrightp6"),
    },
  ];

  return (
    <section
      id="learn-our-process"
      className="py-20 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 font-merriweather tracking-wider">
            <span className="text-primary">
              {t("legitimateWork.legimatesubh1")}
            </span>
            {t("legitimateWork.legimatesubh2")}
          </h2>
          <p className="text-xl text-gray-600 mb-6 font-lato">
            {t("legitimateWork.legimatesubp1")}
            <span className="font-semibold text-secondary">
              <span className="text-secondary font-merriweather tracking-wider pl-1">
                {t("legitimateWork.legimatesubp2")}
              </span>
              <span className="text-primary">
                {t("legitimateWork.legimatesubp3")}
              </span>
            </span>
            {t("legitimateWork.legimatesubp4")}
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 mb-8 font-lato">
              <p className="text-gray-700 mb-6">
                {t("legitimateWork.legimatesublongp1")}
                <span className="font-semibold">
                  {t("legitimateWork.legimatesublongp2")}
                </span>
                {t("legitimateWork.legimatesublongp3")}
              </p>
              <p className="text-gray-700">
                {t("legitimateWork.lefimatesubseclongp1")}
              </p>
            </div>

            <div className="bg-indigo-50 p-8 rounded-xl border border-indigo-100 font-lato">
              <h3 className="text-xl font-semibold text-indigo-800 mb-6">
                {t("legitimateWork.legimameeth")}
              </h3>
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 bg-white p-3 rounded-full shadow-xs">
                  <FaHandshake className="text-indigo-600 text-2xl" />
                </div>
                <p className="text-gray-700">
                  {t("legitimateWork.legimatemeetp")}
                </p>
              </div>
            </div>
          </motion.div>

          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-8 font-lato">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center font-merriweather tracking-wider">
                  <FaUserShield className="text-indigo-600 mr-3" />
                  {t("legitimateWork.legimaterighth")}
                </h3>
                <p className="text-gray-700 mb-6">
                  {t("legitimateWork.legimaterightp")}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {services.map((service, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-gray-50 p-4 rounded-lg border border-gray-200 hover:border-indigo-200 transition-colors"
                    >
                      <div className="flex items-start space-x-3">
                        <div className="mt-1 text-indigo-500">
                          {service.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800 font-merriweather tracking-wider">
                            {service.title}
                          </h4>
                          <p className="text-gray-600 text-sm">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="bg-orange-50 p-6 rounded-xl border border-orange-100">
                <h4 className="font-semibold text-gray-800 mb-3">
                  {t("legitimateWork.legimateadditonh")}
                </h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    {t("legitimateWork.legimateadditonl1")}
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    {t("legitimateWork.legimateadditonl2")}
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    {t("legitimateWork.legimateadditonl3")}
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    {t("legitimateWork.legimateadditonl4")}
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegitimateWorkfolio;
