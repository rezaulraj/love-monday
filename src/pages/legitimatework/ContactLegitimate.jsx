import React from "react";
import contact from "../../assets/images/legalemployee/contact.jpg?url";
import { motion } from "framer-motion";
const ContactLegitimate = () => {
  return (
    <section id="legitimate-contact" className="relative py-24 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={contact}
          alt="Contact our recruitment team"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/80 to-blue-900/70"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-merriweather tracking-widest">
            Contact Us
          </h2>

          <motion.p
            className="text-xl text-white/90 mb-8 leading-relaxed font-lato"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Ready to hire legally and confidently in
            <span className="text-secondary px-2 font-bold">Romania</span>,
            <span className="text-secondary font-bold">Malta</span>, or
            <span className="text-secondary pl-2 font-bold">Sharjah</span>?
            <br />
            Our team is ready to guide you through the process and answer all
            your questions.
          </motion.p>
          <p className="text-2xl font-bold italic mb-8 text-secondary">
            Let’s talk.
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <a
              href="/contact-us"
              className="px-10 py-4 bg-gradient-to-r from-secondary to-secondary/90 text-white font-semibold uppercase tracking-wider rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:brightness-110 font-lato"
            >
              Send An Inquiry
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-20"></div>
    </section>
  );
};

export default ContactLegitimate;
