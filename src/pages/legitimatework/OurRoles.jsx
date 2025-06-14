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

const OurRoles = () => {
  const services = [
    {
      icon: <FaFileAlt className="text-2xl text-indigo-600" />,
      title: "Document Verification",
      description:
        "Complete collection and verification of all required documents",
    },
    {
      icon: <FaPassport className="text-2xl text-blue-500" />,
      title: "Visa Assistance",
      description: "End-to-end visa and work permit processing",
    },
    {
      icon: <FaUserTie className="text-2xl text-orange-500" />,
      title: "Cultural Orientation",
      description:
        "Pre-departure training on local customs and workplace norms",
    },
    {
      icon: <FaGlobe className="text-2xl text-teal-500" />,
      title: "Legal Education",
      description: "Basic rights and responsibilities training",
    },
    {
      icon: <FaHandshake className="text-2xl text-green-500" />,
      title: "Ongoing Support",
      description: "Continuous consultation throughout employment",
    },
    {
      icon: <FaShieldAlt className="text-2xl text-purple-500" />,
      title: "Compliance Checks",
      description: "Regular verification of all legal requirements",
    },
  ];

  return (
    <section
      id="work-opportunities"
      className="py-20 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 font-merriweather tracking-wider">
            <span className="text-primary">Recruitment Assurance</span> and Our
            Role
          </h2>
          <p className="text-xl text-gray-600 font-lato">
            At{" "}
            <span className="font-semibold text-secondary font-lobster tracking-widest">
              Love Monday
            </span>
            , we are committed to transparent, ethical, and compliant
            recruitment for Romania, Malta, and Sharjah.
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          {/* Left Column - Verification Info */}
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
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Verification & Accreditation
                  </h3>
                  <p className="text-gray-700">
                    Employers and partners can verify recruitment approval and
                    agency accreditation through official government portals in
                    either the worker's country of origin or the destination
                    country.
                  </p>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 font-lato">
                <p className="text-sm text-blue-800">
                  These portals typically allow searches by:{" "}
                  <span className="font-medium">job location</span> (e.g.
                  Romania, Malta, Sharjah),{" "}
                  <span className="font-medium">job title</span>,{" "}
                  <span className="font-medium">
                    licensed recruitment agency
                  </span>
                  , or <span className="font-medium">hiring company</span>.
                </p>
              </div>
            </div>

            <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-100 font-lato">
              <h3 className="text-lg font-semibold text-indigo-800 mb-3">
                For official verification:
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2">•</span>
                  Visit the consular or labor ministry websites for each
                  location
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2">•</span>
                  Contact our compliance team for specific portal links
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2">•</span>
                  Request official accreditation documents directly from us
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Right Column - Services */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 mb-8 font-lato">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Complete{" "}
                  <span className="text-indigo-600">Recruitment Support</span>
                </h3>
                <p className="text-gray-700 mb-6">
                  As your trusted recruitment partner,{" "}
                  <span className="text-secondary font-merriweather tracking-wider pl-1">
                    Love
                  </span>{" "}
                  <span className="text-primary"> Monday</span> provides
                  complete administrative and logistical support throughout the
                  hiring journey. From initial compliance checks to final
                  onboarding, we ensure a smooth and legal process.
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
                          <h4 className="font-semibold text-gray-800">
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

              <div className="bg-gradient-to-r from-indigo-600 to-blue-600 p-6 rounded-xl text-white font-lato">
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <FaGlobe className="mr-2" />
                  Industry Leadership
                </h3>
                <p className="mb-4">
                  As recognized industry leaders and active members of
                  professional bodies, we contribute to global conversations on
                  ethical workforce mobility.
                </p>
                <p>
                  By aligning with evolving legal standards and best practices,
                  we are raising the bar for responsible international
                  recruitment.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* CTA Section */}
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
            Contact Our Compliance Team
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default OurRoles;
