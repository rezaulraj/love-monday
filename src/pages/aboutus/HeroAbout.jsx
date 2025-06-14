import React from "react";
import { motion } from "framer-motion";
import heroTeam from "../../assets/images/about/heroTeam.jpg?url";

const HeroAbout = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroTeam}
          alt="Our Team"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-end h-full pb-32 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="text-secondary">Our Story</span> Behind Success
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            A passionate team dedicated to innovation, excellence, and creating
            meaningful impact for our clients and community
          </motion.p>

          <motion.div
            className="flex gap-4 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <button
              onClick={() => {
                const section = document.querySelector("#meet-our-team");
                section?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-8 py-3 bg-secondary hover:bg-secondary/90 text-white font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer"
            >
              Meet Our Team
            </button>
            <button
              onClick={() => {
                const section = document.querySelector("#love-monday-about");
                section?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-8 py-3 bg-transparent hover:bg-white/10 text-white font-medium border-2 border-white rounded-full transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer"
            >
              Our Values
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroAbout;
