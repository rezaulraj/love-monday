import React from "react";
import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaUserTie,
  FaFileAlt,
  FaGlobe,
  FaPlane,
  FaHandshake,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const ImmediateServiceRecruitment = () => {
  const { t } = useTranslation();
  const services = [
    {
      icon: <FaUserTie className="text-secondary" />,
      text: t("recruitmentAssistence.resservice1"),
    },
    {
      icon: <FaFileAlt className="text-primary" />,
      text: t("recruitmentAssistence.resservice2"),
    },
    {
      icon: <FaUserTie className="text-orange-500" />,
      text: t("recruitmentAssistence.resservice3"),
    },
    {
      icon: <FaCheckCircle className="text-green-500" />,
      text: t("recruitmentAssistence.resservice4"),
    },
    {
      icon: <FaHandshake className="text-blue-500" />,
      text: t("recruitmentAssistence.resservice5"),
    },
    {
      icon: <FaFileAlt className="text-primary/90" />,
      text: t("recruitmentAssistence.resservice6"),
    },
    {
      icon: <FaGlobe className="text-teal-500" />,
      text: t("recruitmentAssistence.resservice7"),
    },
    {
      icon: <FaPlane className="text-purple-500" />,
      text: t("recruitmentAssistence.resservice8"),
    },
    {
      icon: <FaGlobe className="text-teal-500" />,
      text: t("recruitmentAssistence.resservice9"),
    },
    {
      icon: <FaHandshake className="text-blue-500" />,
      text: t("recruitmentAssistence.resservice10"),
    },
    {
      icon: <FaCheckCircle className="text-green-500" />,
      text: t("recruitmentAssistence.resservice11"),
    },
  ];

  return (
    <section
      id="immediate-service"
      className="py-20 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 font-merriweather tracking-wider">
            <span className="text-primary">
              {t("recruitmentAssistence.recsubh1")}
            </span>
            {t("recruitmentAssistence.recsubh2")}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t("recruitmentAssistence.recsubp")}
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-12 bg-white p-8 rounded-xl shadow-sm border border-gray-100"
          >
            <p className="text-lg text-gray-700">
              {t("recruitmentAssistence.ressubnote1")}
              <span className="font-semibold text-primary">
                {t("recruitmentAssistence.ressubnote2")}
              </span>
              ,{" "}
              <span className="font-semibold text-secondary">
                {t("recruitmentAssistence.ressubnote3")}
              </span>
              , {t("recruitmentAssistence.ressubnote4")}
              <span className="font-semibold text-green-600">
                {t("recruitmentAssistence.ressubnote5")}
              </span>
              :
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-xs hover:shadow-sm transition-shadow flex items-start space-x-4"
              >
                <div className="text-2xl mt-1 flex-shrink-0">
                  {service.icon}
                </div>
                <p className="text-gray-700">{service.text}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <button
            onClick={() => {
              const section = document.querySelector("#service-contact");
              section?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-3 bg-gradient-to-r from-secondary to-blue-500 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
          >
            {t("recruitmentAssistence.resservicebtn")}
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ImmediateServiceRecruitment;
