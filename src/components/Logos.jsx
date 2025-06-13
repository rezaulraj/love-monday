import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import companyLogo1 from "../assets/images/home/companys/l1.png?url";
import companyLogo2 from "../assets/images/home/companys/l2.png?url";
import companyLogo3 from "../assets/images/home/companys/l3.png?url";
import companyLogo4 from "../assets/images/home/companys/l4.png?url";
import companyLogo5 from "../assets/images/home/companys/l5.png?url";
import companyLogo6 from "../assets/images/home/companys/l6.png?url";
import companyLogo7 from "../assets/images/home/companys/l7.png?url";
import companyLogo8 from "../assets/images/home/companys/l8.png?url";
import companyLogo9 from "../assets/images/home/companys/l9.png?url";
import companyLogo10 from "../assets/images/home/companys/l10.png?url";
import companyLogo11 from "../assets/images/home/companys/l11.png?url";
import companyLogo12 from "../assets/images/home/companys/l12.png?url";
import companyLogo13 from "../assets/images/home/companys/l13.png?url";
import companyLogo14 from "../assets/images/home/companys/l14.png?url";
import companyLogo15 from "../assets/images/home/companys/l15.png?url";
import { Link } from "react-router-dom";
const Logos = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const sliderRef = useRef(null);
  const [sliderWidth, setSliderWidth] = useState(0);
  const slides = [
    { img: companyLogo1 },
    { img: companyLogo2 },
    { img: companyLogo3 },
    { img: companyLogo4 },
    { img: companyLogo5 },
    { img: companyLogo6 },
    { img: companyLogo7 },
    { img: companyLogo8 },
    { img: companyLogo9 },
    { img: companyLogo10 },
    { img: companyLogo11 },
    { img: companyLogo12 },
    { img: companyLogo13 },
    { img: companyLogo14 },
    { img: companyLogo15 },
  ];

  const extendedSlides = [...slides, ...slides];

  useEffect(() => {
    if (sliderRef.current) {
      const width = sliderRef.current.scrollWidth / 2;
      setSliderWidth(width);
    }
  }, []);

  const IsContactButtonOpen = () => {
    setCompanyOpen((open) => !open);
  };
  return (
    <div
      className="relative overflow-hidden py-12"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        ref={sliderRef}
        className="flex whitespace-nowrap items-center"
        animate={{
          x: [0, -sliderWidth],
          transition: {
            x: {
              repeat: Infinity,
              duration: 40, // Slower duration for larger logos
              ease: "linear",
            },
          },
        }}
        style={{
          animationPlayState: isHovered ? "paused" : "running",
        }}
      >
        {extendedSlides.map((image, i) => (
          <motion.div
            key={i}
            className="inline-flex items-center justify-center mx-8" // Increased margin
            whileHover={{ scale: 1.1 }}
          >
            <Link onClick={IsContactButtonOpen} className="flex items-center">
              <img
                src={image.img}
                alt="Partner company logo"
                className="max-h-20 w-auto object-contain opacity-90 hover:opacity-100 transition-all duration-300"
                draggable="false"
                style={{
                  maxWidth: "none", // Allow full width
                  height: "auto", // Maintain aspect ratio
                }}
              />
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* Gradient fade effects on sides */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
    </div>
  );
};
export default Logos;
