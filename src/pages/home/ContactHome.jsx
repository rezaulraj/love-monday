import React from "react";
import { motion } from "framer-motion";
import contact from "../../assets/images/home/contact.jpg?url";

const ContactHome = () => {
  return (
    <section id="contact-us-home" className="relative py-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={contact}
          alt="Contact our team"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-indigo-900/70"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-30">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-merriweather">
            Contact Us
          </h2>
          <p className="text-xl text-white/90 mb-8 font-light leading-relaxed max-w-lg mx-auto">
            Let's build your workforce the right way.
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/contact-us"
            className="px-8 py-4 bg-gradient-to-r from-secondary to-secondary/90 text-white font-medium rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
          >
            Send an Inquiry
          </motion.a>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-20"></div>
    </section>
  );
};

export default ContactHome;
