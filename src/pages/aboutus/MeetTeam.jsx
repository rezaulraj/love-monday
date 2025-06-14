import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaGlobeAmericas,
  FaHandshake,
  FaUserCheck,
  FaUsers,
} from "react-icons/fa";

const MeetTeam = () => {
  // Paragraph text to animate
  const paragraph =
    "We are a trusted international recruitment and staffing agency specializing in the legal employment of Filipino workers in Romania, Malta, and Sharjah.";
  const words = paragraph.split(" ");

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.3,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 12,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const factVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: "backOut",
      },
    }),
  };

  // Intersection observer hooks
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

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
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Title Section */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={titleVariants}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 relative inline-block font-lato">
            <span className="relative">
              Meet the{" "}
              <span className="text-secondary font-lobster tracking-widest">
                Love
              </span>{" "}
              <span className="text-primary">Monday</span> Team
            </span>
          </h2>

          {/* Animated Paragraph */}
          <motion.div
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            variants={container}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {words.map((word, i) => (
              <motion.span
                key={i}
                variants={wordVariants}
                style={{
                  display: "inline-block",
                  marginRight: "6px",
                  whiteSpace: "pre-wrap",
                }}
              >
                {word}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* Facts Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {facts.map((fact, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={factVariants}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-8 text-center">
                <div className="flex justify-center mb-6">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ delay: 0.6 + index * 0.1, type: "spring" }}
                    className="p-4 bg-indigo-50 rounded-full"
                  >
                    {fact.icon}
                  </motion.div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 font-merriweather tracking-wider">
                  {fact.title}
                </h3>
                <p className="text-gray-600 font-lato">{fact.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MeetTeam;
