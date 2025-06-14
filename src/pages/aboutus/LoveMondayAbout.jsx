import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import aboutCompany from "../../assets/images/about/aboutcompany.jpg?url";
import aboutName from "../../assets/images/about/aboutworker.jpg?url";

const LoveMondayAbout = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="love-monday-about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* First Section: About Love Monday */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={sectionVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24"
        >
          <motion.div variants={itemVariants} className="order-1 lg:order-1">
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 font-merriweather tracking-wider"
            >
              About
              <span className="text-blue-600">
                <span className="text-secondary font-merriweather tracking-wider pl-4">
                  Love
                </span>
                <span className="text-primary"> Monday</span>
              </span>
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 mb-6 leading-relaxed font-lato"
            >
              Love Monday is a licensed intermediary and staffing agency
              specializing in the international placement of workers in Romania,
              Malta, and Sharjah. We ensure that all employment processes meet
              the highest legal and ethical standards through strict compliance
              with local and international regulations.
            </motion.p>
          </motion.div>

          <motion.div
            variants={imageVariants}
            className="order-2 lg:order-2 relative rounded-xl overflow-hidden shadow-xl"
          >
            <img
              src={aboutCompany}
              alt="Love Monday Team"
              className="w-full h-auto object-cover rounded-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 via-gray-900/10 to-transparent"></div>
          </motion.div>
        </motion.div>

        {/* Second Section: About the Name */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={sectionVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <motion.div
            variants={imageVariants}
            className="order-2 lg:order-1 relative rounded-xl overflow-hidden shadow-xl"
          >
            <img
              src={aboutName}
              alt="Happy Worker"
              className="w-full h-auto object-cover rounded-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 via-gray-900/10 to-transparent"></div>
          </motion.div>

          <motion.div variants={itemVariants} className="order-1 lg:order-2">
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 font-merriweather tracking-wider"
            >
              About the Name{" "}
              <span className="text-blue-600">
                "
                <span className="text-secondary font-merriweather tracking-wider pl-1">
                  Love
                </span>
                <span className="text-primary"> Monday</span>"
              </span>
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 mb-6 leading-relaxed font-lato"
            >
              The name "Love Monday" represents our vision of a workplace people
              are excited to be part of. It stands for our commitment to
              creating meaningful job opportunities for skilled professionals
              and delivering reliable, top-tier service to employers.
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 leading-relaxed font-lato"
            >
              We specialize in connecting employers with exceptional talent
              known for their strong work ethic, adaptability, cultural
              awareness, and excellent communication skills making them valuable
              assets across a wide range of industries.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default LoveMondayAbout;
