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

const LegitimateWorkfolio = () => {
  const services = [
    {
      icon: <FaBalanceScale className="text-3xl" />,
      title: "Employer Documentation",
      description: "Verification of all required employer documentation",
    },
    {
      icon: <FaPassport className="text-3xl" />,
      title: "Labor Approvals",
      description: "Pre-approval from labor authorities (local and overseas)",
    },
    {
      icon: <FaFileContract className="text-3xl" />,
      title: "Legal Contracts",
      description: "Compliant employment contracts meeting all regulations",
    },
    {
      icon: <FaUserShield className="text-3xl" />,
      title: "Health Checks",
      description: "Medical examinations for fitness-to-work verification",
    },
    {
      icon: <FaGlobeAmericas className="text-3xl" />,
      title: "Cultural Preparation",
      description: "Pre-departure orientation and cultural briefings",
    },
    {
      icon: <FaHandshake className="text-3xl" />,
      title: "Visa Processing",
      description: "Complete visa and Stay & Work Permit processing",
    },
  ];

  return (
    <section id="learn-our-process" className="py-20 bg-gradient-to-b from-gray-50 to-white">
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
            <span className="text-primary">Legitimate</span> Work
          </h2>
          <p className="text-xl text-gray-600 mb-6 font-lato">
            In a recruitment industry where shortcuts and non-compliant
            practices still exist,
            <span className="font-semibold text-secondary">
              <span className="text-secondary font-merriweather tracking-wider pl-1">
                Love
              </span>{" "}
              <span className="text-primary"> Monday</span>
            </span>{" "}
            stands apart by prioritizing transparency, legality, and ethical
            hiring.
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          {/* Left Column - Main Description */}
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 mb-8 font-lato">
              <p className="text-gray-700 mb-6">
                We strictly follow the employment regulations of{" "}
                <span className="font-semibold">Romania</span>,{" "}
                <span className="font-semibold">Malta</span>, and{" "}
                <span className="font-semibold">Sharjah</span>, ensuring a
                smooth and secure experience for both employers and workers.
              </p>
              <p className="text-gray-700">
                Our commitment to professionalism and compliance has led to
                lasting partnerships and successful placements. With a
                multicultural team including professionals familiar with the
                legal and cultural landscapes of each destination, we provide
                culturally aware support at every stage.
              </p>
            </div>

            <div className="bg-indigo-50 p-8 rounded-xl border border-indigo-100 font-lato">
              <h3 className="text-xl font-semibold text-indigo-800 mb-6">
                By meeting every legal requirement, we ensure that workers
                arrive fully prepared — professionally and personally.
              </h3>
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 bg-white p-3 rounded-full shadow-xs">
                  <FaHandshake className="text-indigo-600 text-2xl" />
                </div>
                <p className="text-gray-700">
                  End-to-end compliance means peace of mind for both employers
                  and employees.
                </p>
              </div>
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
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-8 font-lato">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <FaUserShield className="text-indigo-600 mr-3" />
                  Employer Accreditation
                </h3>
                <p className="text-gray-700 mb-6">
                  Each destination we serve has specific legal requirements for
                  hiring international workers. Love Monday ensures full
                  compliance and provides:
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

              <div className="bg-orange-50 p-6 rounded-xl border border-orange-100">
                <h4 className="font-semibold text-gray-800 mb-3">
                  Additional Compliance Services:
                </h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    Accreditation with relevant government departments
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    Mandatory insurance (health, safety, and repatriation)
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    Exit clearance certification (as required by origin country)
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    Legal and social awareness training before deployment
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
