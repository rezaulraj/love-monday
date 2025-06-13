import React from "react";
import {
  FaUsers,
  FaHandshake,
  FaUserCheck,
  FaGlobeAmericas,
} from "react-icons/fa";
import { motion } from "framer-motion";

const FactPageHome = () => {
  const facts = [
    {
      icon: <FaUsers className="text-4xl text-indigo-600" />,
      title: "Thousands of Successfully Employed Workers",
      description:
        "Our proven track record speaks for itself with thousands of happy employees placed internationally.",
    },
    {
      icon: <FaHandshake className="text-4xl text-orange-500" />,
      title: "Hundreds of Trusted Business Clients",
      description:
        "We've built long-term partnerships with companies across multiple industries.",
    },
    {
      icon: <FaUserCheck className="text-4xl text-emerald-500" />,
      title: "A Vast Talent Pool of Pre-Screened Candidates",
      description:
        "Access to rigorously vetted professionals ready to join your team.",
    },
    {
      icon: <FaGlobeAmericas className="text-4xl text-amber-500" />,
      title: "Years of Proven Experience in International Recruitment",
      description:
        "Deep expertise navigating global employment markets and regulations.",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-indigo-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 font-merriweather tracking-wider">
            Our <span className="text-indigo-600">Impact</span> in Numbers
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-lato tracking-wide">
            Quantifying our success through measurable achievements and
            satisfied partners
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

        {/* Enhanced Last Paragraph */}
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
                "At{" "}
                <span className="font-semibold text-indigo-600">
                  Love Monday
                </span>
                , we're proud of the{" "}
                <span className="font-medium text-amber-500">
                  long-term partnerships
                </span>{" "}
                we've built by consistently delivering{" "}
                <span className="font-medium text-emerald-500">
                  quality talent
                </span>{" "}
                and{" "}
                <span className="font-medium text-blue-500">
                  compliant hiring solutions
                </span>{" "}
                across borders."
              </p>
            </div>
          </div>
        </motion.div>

        <div className="mt-12 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-full transition duration-300 shadow-lg hover:shadow-indigo-200"
          >
            Discover Our Recruitment Process
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default FactPageHome;
