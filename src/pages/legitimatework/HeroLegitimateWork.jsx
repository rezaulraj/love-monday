import React from "react";
import { motion } from "framer-motion";
import herolegal from "../../assets/images/legalemployee/herolegal.jpg?url";
const HeroLegitimateWork = () => {
  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={herolegal}
          alt="Legitimate work opportunities"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 via-gray-900/50 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl lg:max-w-3xl"
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <span className="text-orange-400">Legitimate</span> Work
              Opportunities
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-200 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Fully compliant international employment with complete legal
              protection and fair working conditions for all workers.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-xl">
                Explore Work Opportunities
              </button>
              <button className="px-8 py-3 bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 font-medium rounded-full transition-all duration-300">
                Learn About Our Process
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Trust Badges */}
      <motion.div
        className="absolute bottom-8 left-8 z-10 hidden lg:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <div className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
          <div className="text-white font-medium text-sm">Certified by:</div>
          <div className="flex space-x-2">
            <span className="text-xs bg-white text-gray-800 px-3 py-1 rounded-full font-semibold">
              EU Labor Standards
            </span>
            <span className="text-xs bg-white text-gray-800 px-3 py-1 rounded-full font-semibold">
              Dâmboviţa Chamber
            </span>
            <span className="text-xs bg-white text-gray-800 px-3 py-1 rounded-full font-semibold">
              Malta Employment
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroLegitimateWork;
