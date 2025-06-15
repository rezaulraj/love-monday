import React from "react";
import { motion } from "framer-motion";
import { FiMail, FiMapPin } from "react-icons/fi";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  const locations = [
    {
      title: "HQ Romania",
      address:
        "Municipiul Târgovişte, Strada AVRAM IANCU, Nr. 8, Bloc 35, Ap. 50, Judet Dâmboviţa",
      mapEmbed:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2825.0268464882192!2d25.467756276095553!3d44.92278956939961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b2f683835ad377%3A0x6b839b1a74c771d6!2sBloc%2035%2C%20Ap.%2050%2C%20Strada%20Avram%20Iancu%208%2C%20T%C3%A2rgovi%C8%99te%20137395%2C%20Romania!5e0!3m2!1sen!2sbd!4v1749888205516!5m2!1sen!2sbd",
    },
    {
      title: "Malta",
      address: "Savoy Gardens, J Block, Rue D'Argens, Gzira, Malta",
      mapEmbed:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3231.66146843718!2d14.49054517568061!3d35.90630601757754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x130e4548500bd0a7%3A0x9c5ca0da5902e0d6!2sSavoy%20Gardens%20Apartments!5e0!3m2!1sen!2sbd!4v1749888397604!5m2!1sen!2sbd",
    },
    {
      title: "Sharjah",
      address: "AL Nahda Street AL Nahda 1, Sharjah, Sharjah",
      mapEmbed:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.1017813680464!2d55.37727987530913!3d25.300784227497388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5c748f6a7b0b%3A0x846c45bc69ef1809!2sAl%20Nahda%20St%20-%20Sharjah%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sbd!4v1749888089220!5m2!1sen!2sbd",
    },
  ];

  return (
    <section
      id="contact-schedule"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 font-merriweather tracking-wider">
            {t("contactUs.contactsh1")}
            <span className="text-blue-600">{t("contactUs.contactsh2")}</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t("contactUs.conatp")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg p-8 lg:p-10"
          >
            <div className="flex items-start mb-8">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <FiMail className="text-blue-600 text-xl" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1 font-merriweather tracking-wider">
                  {t("contactUs.eamil")}
                </h3>
                <a
                  href="mailto:xhaferi@lovemonday.agency"
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  xhaferi@lovemonday.agency
                </a>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <FiMapPin className="text-blue-600 text-xl" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4 font-merriweather tracking-wider">
                  {t("contactUs.ouroffic")}
                </h3>
                <div className="space-y-6">
                  {locations.map((location, index) => (
                    <div
                      key={index}
                      className="border-l-2 border-blue-200 pl-4"
                    >
                      <h4 className="font-medium text-gray-800 font-merriweather tracking-wider">
                        {location.title}
                      </h4>
                      <p className="text-gray-600 mt-1">{location.address}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {locations.map((location, index) => (
              <div key={index} className="overflow-hidden rounded-xl shadow-lg">
                <div className="h-64 sm:h-72 w-full relative">
                  <iframe
                    title={location.title}
                    src={location.mapEmbed}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    className="absolute inset-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 via-transparent to-transparent pointer-events-none"></div>
                </div>
                <div className="bg-white p-4">
                  <h4 className="font-semibold text-gray-800 font-merriweather tracking-wider">
                    {location.title}
                  </h4>
                  <p className="text-sm text-gray-600">{location.address}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
