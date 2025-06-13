import React from "react";
import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaFileContract,
  FaHandshake,
  FaShieldAlt,
  FaUserCog,
} from "react-icons/fa";

const StaffingSolution = () => {
  const benefits = [
    {
      icon: <FaBriefcase className="text-2xl text-indigo-600" />,
      title: "Flexible Staffing",
      description: "Minimum 6-month placements in Romania, Malta, and Sharjah",
    },
    {
      icon: <FaFileContract className="text-2xl text-orange-500" />,
      title: "Legal Compliance",
      description: "Workers employed by us, seconded to you under agreement",
    },
    {
      icon: <FaHandshake className="text-2xl text-blue-500" />,
      title: "Fair Conditions",
      description: "Employment terms match or exceed direct hire standards",
    },
    {
      icon: <FaShieldAlt className="text-2xl text-green-500" />,
      title: "Full Administration",
      description: "We handle all HR, payroll, and compliance matters",
    },
    {
      icon: <FaUserCog className="text-2xl text-purple-500" />,
      title: "Ongoing Support",
      description: "Continuous HR and worker assistance throughout placement",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 font-merriweather tracking-wider">
            <span className="text-indigo-600">Staffing</span> Solutions
          </h2>
          <p className="text-xl text-gray-600 mb-6">
            We offer flexible staffing options for employers in Romania, Malta,
            and Sharjah through a temporary employment model. The minimum
            placement duration is six months.
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
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 mb-8">
              <p className="text-gray-700 mb-6">
                In this arrangement, workers are formally employed by{" "}
                <span className="font-semibold text-indigo-600">
                  Love Monday
                </span>{" "}
                and are seconded to your company under a staffing agreement.
                This ensures a{" "}
                <span className="font-semibold">
                  streamlined and legally compliant
                </span>{" "}
                process with minimal administrative burden on your end.
              </p>
              <p className="text-gray-700">
                All employment conditions — including wages, working hours, rest
                periods, leave entitlements, and workplace safety — will{" "}
                <span className="font-semibold text-green-500">
                  match or exceed
                </span>{" "}
                what the worker would receive under a direct employment contract
                with your company.
              </p>
            </div>

            <div className="bg-indigo-50 p-8 rounded-xl border border-indigo-100">
              <h3 className="text-xl font-semibold text-indigo-800 mb-4">
                Our team handles the full scope of employment administration:
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2">•</span>
                  Registration for health and pension insurance
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2">•</span>
                  Payroll management and salary disbursement
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2">•</span>
                  Compliance with labor and tax regulations
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2">•</span>
                  Ongoing HR and worker support
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Right Column - Benefits Cards */}
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

        {/* CTA Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <button className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-blue-500 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
            Get Started with Our Staffing Solutions
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default StaffingSolution;
