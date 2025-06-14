import React from "react";
import HeroContactus from "./HeroContactus";
import ContactForm from "./ContactForm";
import Contact from "./Contact";

const ContactUs = () => {
  return (
    <div className="min-h-screen">
      <HeroContactus />
      <ContactForm />
      <Contact />
    </div>
  );
};

export default ContactUs;
