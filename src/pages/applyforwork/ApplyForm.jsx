import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FiUpload,
  FiCheck,
  FiUser,
  FiMail,
  FiPhone,
  FiBriefcase,
} from "react-icons/fi";
import { useTranslation } from "react-i18next";

const ApplyForm = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    position: "",
    resume: null,
    acceptTerms: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [fileName, setFileName] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? checked : type === "file" ? files[0] : value,
    }));

    if (name === "resume" && files.length > 0) {
      setFileName(files[0].name);
    }
  };

  const validateForm = () => {
    const newErrors = {};
    const requiredFields = [
      "firstName",
      "lastName",
      "email",
      "phone",
      "position",
      "resume",
    ];

    requiredFields.forEach((field) => {
      if (!formData[field]) {
        newErrors[field] = t("applyForWork.requiref");
      }
    });

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.acceptTerms) {
      newErrors.acceptTerms = "You must accept the terms";
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
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
      },
    }),
  };

  return (
    <section
      id="apply-work"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-2xl mx-auto">
        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-green-50 border border-green-200 rounded-xl p-8 text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <FiCheck className="text-green-600 text-2xl" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              Application Submitted!
            </h3>
            <p className="text-gray-600 mb-6">
              Thank you for your application. We'll review your information and
              contact you soon.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
            >
              Submit Another Application
            </button>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <div className="bg-primary p-6 text-center">
              <h2 className="text-2xl font-bold text-white">
                {t("applyForWork.appworkaph")}
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="p-6 sm:p-8">
              <div className="space-y-6">
                {[
                  {
                    label: t("applyForWork.fname"),
                    name: "firstName",
                    type: "text",
                    icon: <FiUser className="text-gray-400" />,
                  },
                  {
                    label: t("applyForWork.lname"),
                    name: "lastName",
                    type: "text",
                    icon: <FiUser className="text-gray-400" />,
                  },
                  {
                    label: t("applyForWork.ead"),
                    name: "email",
                    type: "email",
                    icon: <FiMail className="text-gray-400" />,
                  },
                  {
                    label: t("applyForWork.cnum"),
                    name: "phone",
                    type: "tel",
                    icon: <FiPhone className="text-gray-400" />,
                  },
                  {
                    label: t("applyForWork.poaf"),
                    name: "position",
                    type: "text",
                    icon: <FiBriefcase className="text-gray-400" />,
                  },
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
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        {field.icon}
                      </div>
                      <input
                        type={field.type}
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleChange}
                        className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                          errors[field.name]
                            ? "border-red-500"
                            : "border-gray-300"
                        }`}
                      />
                    </div>
                    {errors[field.name] && (
                      <p className="text-sm text-red-600 mt-1">
                        {errors[field.name]}
                      </p>
                    )}
                  </motion.div>
                ))}

                <motion.div
                  custom={5}
                  variants={inputVariants}
                  className="space-y-1"
                >
                  <label className="block text-sm font-medium text-gray-700">
                    {t("applyForWork.upre")}
                  </label>
                  <label className="flex flex-col items-center px-4 py-6 bg-white rounded-lg border border-dashed border-gray-300 cursor-pointer hover:bg-gray-50">
                    <div className="flex flex-col items-center">
                      <FiUpload className="w-8 h-8 text-gray-400 mb-2" />
                      <p className="text-sm text-gray-600">
                        {fileName || "Click to upload your resume"}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        PDF, DOC, DOCX (Max 5MB)
                      </p>
                    </div>
                    <input
                      type="file"
                      name="resume"
                      onChange={handleChange}
                      className="hidden"
                      accept=".pdf,.doc,.docx"
                    />
                  </label>
                  {errors.resume && (
                    <p className="text-sm text-red-600 mt-1">{errors.resume}</p>
                  )}
                </motion.div>

                <motion.div
                  custom={6}
                  variants={inputVariants}
                  className="pt-2"
                >
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="terms"
                        name="acceptTerms"
                        type="checkbox"
                        checked={formData.acceptTerms}
                        onChange={handleChange}
                        className={`h-4 w-4 rounded focus:ring-blue-500 ${
                          errors.acceptTerms
                            ? "border-red-500"
                            : "border-gray-300"
                        }`}
                      />
                    </div>
                    <label
                      htmlFor="terms"
                      className="ml-2 block text-sm text-gray-700"
                    >
                      {t("applyForWork.conditon")}
                    </label>
                  </div>
                  {errors.acceptTerms && (
                    <p className="text-sm text-red-600 mt-1">
                      {errors.acceptTerms}
                    </p>
                  )}
                </motion.div>

                <motion.div
                  custom={7}
                  variants={inputVariants}
                  className="pt-4"
                >
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-primary hover:bg-blue-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    {t("applyForWork.appforwobtn")}
                  </button>
                </motion.div>
              </div>
            </form>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ApplyForm;
