import React from "react";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaPinterest,
  FaTiktok,
  FaTwitter,
} from "react-icons/fa";
import lovemonday from "/lovemonday.png?url";
import { useTranslation } from "react-i18next";
const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
          <div className="flex flex-col items-center lg:items-start">
            <div className="text-3xl font-bold mb-4">
              <img src={lovemonday} alt="" className="h-20" />
            </div>
            <p className="text-gray-400 text-center lg:text-left mb-6">
              {t("footer.footertext")}
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/love-monday-agency"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaLinkedin className="text-2xl" />
              </a>
              <a
                href="https://www.facebook.com/lovemondayagency/"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaFacebook className="text-2xl" />
              </a>
              <a
                href="https://www.instagram.com/lovemondayagency/"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaInstagram className="text-2xl" />
              </a>
              <a
                href="https://www.youtube.com/@LoveMonday01"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaYoutube className="text-2xl" />
              </a>
              <a
                href="https://www.pinterest.com/lovemondayagency/"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaPinterest className="text-2xl" />
              </a>
              <a
                href="https://www.tiktok.com/@lovemonday25?lang=en"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaTiktok className="text-2xl" />
              </a>
              <a
                href="https://twitter.com/lovemonday_ag"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaTwitter className="text-2xl" />
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2 font-merriweather tracking-wider ">
              {t("footer.contact")}
            </h3>
            <div className="flex items-start space-x-4">
              <FaEnvelope className="text-orange-500 mt-1" />
              <div>
                <p className="text-gray-400 font-merriweather tracking-wider">
                  {t("footer.email")}
                </p>
                <a
                  href="mailto:xhaferi@lovemonday.agency"
                  className="hover:text-orange-400 transition-colors font-lato"
                >
                  xhaferi@lovemonday.agency
                </a>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <FaMapMarkerAlt className="text-orange-500 mt-1" />
              <div>
                <p className="text-gray-400 font-merriweather tracking-wider">
                  {t("footer.addres")}
                </p>
                <p className="font-lato tracking-wide">
                  HQ Romania: Municipiul Târgovişte, Strada AVRAM IANCU, Nr. 8,
                  Bloc 35, Ap. 50, Judet Dâmboviţa.
                </p>
                <p className="mt-2">
                  Malta: Savoy Gardens, J Block, Rue D'Argens, Gzira, Malta
                </p>
                <p className="mt-2">
                  Sharjah: AL Nahda Street AL Nahda 1, Sharjah, Sharjah
                </p>
              </div>
            </div>
          </div>

          <div className="h-64 lg:h-full rounded-xl overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2825.026846488169!2d25.46775627541896!3d44.92278956940063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b2f683835ad377%3A0x6b839b1a74c771d6!2sBloc%2035%2C%20Ap.%2050%2C%20Strada%20Avram%20Iancu%208%2C%20T%C3%A2rgovi%C8%99te%20137395%2C%20Romania!5e0!3m2!1sen!2sbd!4v1749829158958!5m2!1sen!2sbd"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="rounded-xl"
              title="Company Location"
            ></iframe>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
          <p className="font-lato">
            © {new Date().getFullYear()}{" "}
            <span className="text-secondary font-merriweather tracking-wider font-semibold">
              Love{" "}
            </span>{" "}
            <span className="text-primary font-semibold font-lato">Monday</span>
            . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
