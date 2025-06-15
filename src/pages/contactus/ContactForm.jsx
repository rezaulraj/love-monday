import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiSend, FiCheck, FiInfo } from "react-icons/fi";
import { useTranslation } from "react-i18next";

const ContactForm = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    companyName: "",
    fullName: "",
    vat: "",
    email: "",
    phone: "",
    employsForeignWorkers: "",
    positions: "",
    workersRequired: "",
    workLocation: "",
    comments: "",
    acceptedConditions: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    const requiredFields = [
      "companyName",
      "fullName",
      "vat",
      "email",
      "phone",
      "employsForeignWorkers",
      "positions",
      "workersRequired",
      "workLocation",
    ];

    requiredFields.forEach((field) => {
      if (!formData[field]) {
        newErrors[field] = t("contactUs.requirdfiled");
      }
    });

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.acceptedConditions) {
      newErrors.acceptedConditions = "You must accept the conditions";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
      setIsSubmitted(true);
    }
  };

  const inputVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.3,
      },
    }),
  };

  return (
    <section
      id="contact-info"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 font-merriweather tracking-wider">
            {t("contactUs.contactsubh")}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-lato">
            {t("contactUs.contactshubp")}
          </p>
        </motion.div>

        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-green-50 border border-green-200 rounded-xl p-8 text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <FiCheck className="text-green-600 text-2xl" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2 font-lato">
              Thank You!
            </h3>
            <p className="text-gray-600 mb-6 font-lato">
              Your inquiry has been submitted successfully. Our team will
              contact you within 24 hours.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors font-lato"
            >
              Send Another Inquiry
            </button>
          </motion.div>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            initial="hidden"
            animate="visible"
            className="bg-white rounded-xl shadow-lg overflow-hidden p-6 sm:p-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {[
                {
                  label: t("contactUs.cName"),
                  name: "companyName",
                  type: "text",
                },
                { label: t("contactUs.fname"), name: "fullName", type: "text" },
                { label: t("contactUs.vc"), name: "vat", type: "text" },
                { label: t("contactUs.ea"), name: "email", type: "email" },
                { label: t("contactUs.pnum"), name: "phone", type: "tel" },
              ].map((field, i) => (
                <motion.div
                  key={field.name}
                  custom={i}
                  variants={inputVariants}
                  className="space-y-1"
                >
                  <label className="block text-sm font-medium text-gray-700">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                      errors[field.name] ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors[field.name] && (
                    <p className="text-sm text-red-600 flex items-center">
                      <FiInfo className="mr-1" /> {errors[field.name]}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>

            <motion.div custom={5} variants={inputVariants} className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t("contactUs.fowo")}
              </label>
              <div className="flex space-x-4">
                {["Yes", "No"].map((option) => (
                  <label key={option} className="inline-flex items-center">
                    <input
                      type="radio"
                      name="employsForeignWorkers"
                      value={option}
                      checked={formData.employsForeignWorkers === option}
                      onChange={handleChange}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                    />
                    <span className="ml-2 text-gray-700">{option}</span>
                  </label>
                ))}
              </div>
              {errors.employsForeignWorkers && (
                <p className="text-sm text-red-600 flex items-center mt-1">
                  <FiInfo className="mr-1" /> {errors.employsForeignWorkers}
                </p>
              )}
            </motion.div>

            {[
              {
                label: t("contactUs.pofill"),
                name: "positions",
                type: "text",
              },
              {
                label: t("contactUs.mawork"),
                name: "workersRequired",
                type: "number",
              },
              {
                label: t("contactUs.locat"),
                name: "workLocation",
                type: "text",
              },
              {
                label: t("contactUs.addcomm"),
                name: "comments",
                type: "textarea",
              },
            ].map((field, i) => (
              <motion.div
                key={field.name}
                custom={i + 6}
                variants={inputVariants}
                className="mb-6"
              >
                <label className="block text-sm font-medium text-gray-700">
                  {field.label}
                </label>
                {field.type === "textarea" ? (
                  <textarea
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                ) : (
                  <input
                    type={field.type}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                      errors[field.name] ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                )}
                {errors[field.name] && (
                  <p className="text-sm text-red-600 flex items-center">
                    <FiInfo className="mr-1" /> {errors[field.name]}
                  </p>
                )}
              </motion.div>
            ))}

            <motion.div custom={10} variants={inputVariants} className="mb-8">
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4 font-lato">
                <h4 className="font-bold text-blue-800 mb-2">
                  {t("contactUs.impo")}:
                </h4>
                <p className="text-blue-700">{t("contactUs.impop")}</p>
                <ul className="list-disc list-inside text-blue-700 space-y-1 mt-2 ">
                  <li>{t("contactUs.impol1")}</li>
                  <li>{t("contactUs.impol2")}</li>
                  <li>{t("contactUs.impol3")}</li>
                  <li>{t("contactUs.impol4")}</li>
                </ul>
              </div>

              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="conditions"
                    name="acceptedConditions"
                    type="checkbox"
                    checked={formData.acceptedConditions}
                    onChange={handleChange}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                </div>
                <label
                  htmlFor="conditions"
                  className="ml-2 block text-sm text-gray-700 font-lato"
                >
                  {t("contactUs.remop")}
                </label>
              </div>
              {errors.acceptedConditions && (
                <p className="text-sm text-red-600 flex items-center mt-1">
                  <FiInfo className="mr-1" /> {errors.acceptedConditions}
                </p>
              )}
            </motion.div>

            <motion.div
              custom={11}
              variants={inputVariants}
              className="text-center"
            >
              <button
                type="submit"
                className="inline-flex items-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <FiSend className="mr-2 font-lato" />
                {t("contactUs.conbtn")}
              </button>
            </motion.div>
          </motion.form>
        )}
      </div>
    </section>
  );
};

export default ContactForm;
