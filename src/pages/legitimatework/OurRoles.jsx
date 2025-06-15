import React from "react";
import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaPassport,
  FaUserTie,
  FaGlobe,
  FaHandshake,
  FaFileAlt,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const OurRoles = () => {
  const { t } = useTranslation();
  const services = [
    {
      icon: <FaFileAlt className="text-2xl text-indigo-600" />,
      title: t("legitimateWork.completerlh1"),
      description: t("legitimateWork.completerlp1"),
    },
    {
      icon: <FaPassport className="text-2xl text-blue-500" />,
      title: t("legitimateWork.completerlh2"),
      description: t("legitimateWork.completerlp2"),
    },
    {
      icon: <FaUserTie className="text-2xl text-orange-500" />,
      title: t("legitimateWork.completerlh3"),
      description: t("legitimateWork.completerlp3"),
    },
    {
      icon: <FaGlobe className="text-2xl text-teal-500" />,
      title: t("legitimateWork.completerlh4"),
      description: t("legitimateWork.completerlp4"),
    },
    {
      icon: <FaHandshake className="text-2xl text-green-500" />,
      title: t("legitimateWork.completerlh5"),
      description: t("legitimateWork.completerlp5"),
    },
    {
      icon: <FaShieldAlt className="text-2xl text-purple-500" />,
      title: t("legitimateWork.completerlh6"),
      description: t("legitimateWork.completerlp6"),
    },
  ];

  return (
    <section
      id="work-opportunities"
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
              {t("legitimateWork.recutimentassh1")}
            </span>{" "}
            {t("legitimateWork.recutimentassh2")}
          </h2>
          <p className="text-xl text-gray-600 font-lato">
            {t("legitimateWork.recutimentassp1")}
            <span className="font-semibold text-secondary font-merriweather tracking-wider">
              {t("legitimateWork.recutimentassp2")}
            </span>
            {t("legitimateWork.recutimentassp3")}
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
              <div className="flex items-start mb-6">
                <div className="bg-indigo-100 p-3 rounded-full mr-4">
                  <FaShieldAlt className="text-indigo-600 text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2 font-merriweather tracking-wider">
                    {t("legitimateWork.verificationh")}
                  </h3>
                  <p className="text-gray-700">
                    {t("legitimateWork.verificationp")}
                  </p>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 font-lato">
                <p className="text-sm text-blue-800">
                  {t("legitimateWork.verificationnote")}
                </p>
              </div>
            </div>

            <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-100 font-lato">
              <h3 className="text-lg font-semibold text-indigo-800 mb-3 font-merriweather tracking-wider">
                {t("legitimateWork.officialh")}
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2">•</span>
                  {t("legitimateWork.officiall1")}
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2">•</span>
                  {t("legitimateWork.officiall2")}
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2">•</span>
                  {t("legitimateWork.officiall3")}
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
            >
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 mb-8 font-lato">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 font-merriweather tracking-wider">
                  {t("legitimateWork.completerh1")}
                  <span className="text-indigo-600">
                    {t("legitimateWork.completerh2")}
                  </span>
                </h3>
                <p className="text-gray-700 mb-6">
                  {t("legitimateWork.completerp1")}
                  <span className="text-secondary font-merriweather tracking-wider pl-1">
                    {t("legitimateWork.completerp2")}
                  </span>{" "}
                  <span className="text-primary">
                    {t("legitimateWork.completerp3")}
                  </span>{" "}
                  {t("legitimateWork.completerp4")}
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
                        <div className="mt-1">{service.icon}</div>
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

              <div className="bg-gradient-to-r from-primary to-blue-500 p-6 rounded-xl text-white font-lato">
                <h3 className="text-xl font-semibold mb-3 flex items-center font-merriweather tracking-wider">
                  <FaGlobe className="mr-2" />
                  {t("legitimateWork.industrylh")}
                </h3>
                <p className="mb-4">{t("legitimateWork.industryp1")}</p>
                <p>{t("legitimateWork.industryp2")}</p>
              </div>
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
              const section = document.querySelector("#legitimate-contact");
              section?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-3 bg-gradient-to-r from-secondary to-amber-500 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
          >
            {t("legitimateWork.legitimateWorkbtn")}
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default OurRoles;
