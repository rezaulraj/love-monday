import React from "react";
import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaFileContract,
  FaHandshake,
  FaShieldAlt,
  FaUserCog,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const StaffingSolution = () => {
  const { t } = useTranslation();
  const benefits = [
    {
      icon: <FaBriefcase className="text-2xl text-primary" />,
      title: t("workforceStaffing.workforitemh1"),
      description: t("workforceStaffing.workforitemp1"),
    },
    {
      icon: <FaFileContract className="text-2xl text-secondary" />,
      title: t("workforceStaffing.workforitemh2"),
      description: t("workforceStaffing.workforitemp2"),
    },
    {
      icon: <FaHandshake className="text-2xl text-blue-500" />,
      title: t("workforceStaffing.workforitemh3"),
      description: t("workforceStaffing.workforitemp3"),
    },
    {
      icon: <FaShieldAlt className="text-2xl text-green-500" />,
      title: t("workforceStaffing.workforitemh4"),
      description: t("workforceStaffing.workforitemp4"),
    },
    {
      icon: <FaUserCog className="text-2xl text-purple-500" />,
      title: t("workforceStaffing.workforitemh5"),
      description: t("workforceStaffing.workforitemp5"),
    },
  ];

  return (
    <section
      id="staffing-solution"
      className="py-20 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 font-merriweather tracking-wider">
            <span className="text-primary">
              {t("workforceStaffing.workforsubh1")}
            </span>
            {t("workforceStaffing.workforsubh2")}
          </h2>
          <p className="text-xl text-gray-600 mb-6">
            {t("workforceStaffing.workforsubp")}
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
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 mb-8">
              <p className="text-gray-700 mb-6">
                {t("workforceStaffing.workforlongp1")}
                <span className="font-semibold text-primary">
                  <span className="text-secondary font-merriweather tracking-wider">
                    {t("workforceStaffing.workforlongp2")}
                  </span>
                  <span className="text-primary">
                    {t("workforceStaffing.workforlongp3")}
                  </span>
                </span>{" "}
                {t("workforceStaffing.workforlongp4")}
                <span className="font-semibold">
                  {t("workforceStaffing.workforlongp5")}
                </span>{" "}
                {t("workforceStaffing.workforlongp6")}
              </p>
              <p className="text-gray-700">
                {t("workforceStaffing.workforlongsp1")}
                <span className="font-semibold text-green-500">
                  {t("workforceStaffing.workforlongsp2")}
                </span>{" "}
                {t("workforceStaffing.workforlongsp3")}
              </p>
            </div>

            <div className="bg-indigo-50 p-8 rounded-xl border border-indigo-100">
              <h3 className="text-xl font-semibold text-indigo-800 mb-4">
                {t("workforceStaffing.workforteamh")}
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2">•</span>
                  {t("workforceStaffing.workforteaml1")}
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2">•</span>
                  {t("workforceStaffing.workforteaml2")}
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2">•</span>
                  {t("workforceStaffing.workforteaml3")}
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2">•</span>
                  {t("workforceStaffing.workforteaml4")}
                </li>
              </ul>
            </div>
          </motion.div>

          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-lg shadow-xs hover:shadow-sm transition-shadow flex items-start space-x-4 border-l-4 border-indigo-200"
                >
                  <div className="mt-1 flex-shrink-0">{benefit.icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <button
            onClick={() => {
              const section = document.querySelector("#work-force-contact");
              section?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-blue-500 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
          >
            {t("workforceStaffing.workforitembtn")}
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default StaffingSolution;
