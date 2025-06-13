import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";
import ReactCountryFlag from "react-country-flag";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [isLangOpen, setIsLangOpen] = useState(false);

  const languages = [
    { code: "en", name: "English", country: "US" },
    { code: "hr", name: "Hrvatski", country: "HR" },
    { code: "sl", name: "Slovenščina", country: "SI" },
  ];

  const navLists = [
    { label: t("home"), path: "/" },
    {
      label: t("services"),
      subNav: [
        { label: t("recruitment Assistance"), path: "/recruitment" },
        { label: t("workforce Staffing"), path: "/staffing" },
      ],
    },
    { label: t("legitimate Work"), path: "/legitimate-work" },
    { label: t("about Us"), path: "/about" },
    { label: t("contact Us"), path: "/contact" },
    { label: t("apply For Work"), path: "/apply" },
  ];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsLangOpen(false);
  };

  const currentLanguage = languages.find(
    (lang) => lang.code === (i18n.language || "en")
  );

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <a
              href="/"
              className="text-2xl font-bold text-indigo-600 font-lobster tracking-widest"
            >
              <span className="text-orange-500 ">Love</span> Monday
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <ul className="flex space-x-6">
              {navLists.map((item, index) => (
                <li
                  key={index}
                  className="relative group uppercase text-sm font-lato font-semibold tracking-wide"
                >
                  {item.subNav ? (
                    <>
                      <div
                        className="flex items-center text-gray-700 hover:text-indigo-600  transition cursor-pointer"
                        onClick={() =>
                          setActiveSubmenu(
                            activeSubmenu === index ? null : index
                          )
                        }
                      >
                        {item.label}
                        <FiChevronDown
                          className={`ml-1 w-4 h-4 transition-transform ${
                            activeSubmenu === index ? "rotate-180" : ""
                          }`}
                        />
                      </div>
                      <ul
                        className={`absolute left-0 mt-2 w-60 bg-white shadow-lg rounded-md py-1 transition-all duration-300 ${
                          activeSubmenu === index
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-2 pointer-events-none"
                        }`}
                      >
                        {item.subNav.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <a
                              href={subItem.path}
                              className="block px-4 py-2 uppercase text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
                            >
                              {subItem.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <a
                      href={item.path}
                      className="block text-gray-700 hover:text-indigo-600 transition-colors"
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>

            {/* Language Switcher */}
            <div className="relative ml-4 ">
              <div
                className="flex items-center space-x-2 px-3 py-1 rounded-full bg-gray-100 cursor-pointer"
                onClick={() => setIsLangOpen(!isLangOpen)}
              >
                <ReactCountryFlag
                  countryCode={currentLanguage?.country}
                  svg
                  style={{
                    width: "20px",
                    height: "15px",
                    borderRadius: "50%",
                    boxShadow: "0 0 0 1px rgba(0,0,0,0.1)",
                  }}
                />
                <span className="text-sm">{currentLanguage?.name}</span>
                <FiChevronDown
                  className={`w-4 h-4 transition-transform ${
                    isLangOpen ? "rotate-180" : ""
                  }`}
                />
              </div>

              <div
                className={`absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md py-1 transition-all duration-300 ${
                  isLangOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-2 pointer-events-none"
                }`}
                onMouseLeave={() => setIsLangOpen(false)}
              >
                {languages.map((lang) => (
                  <div
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className={`flex items-center px-4 py-2 transition-colors cursor-pointer ${
                      i18n.language === lang.code
                        ? "bg-indigo-50 text-indigo-600"
                        : "text-gray-700 hover:bg-indigo-50"
                    }`}
                  >
                    <ReactCountryFlag
                      countryCode={lang.country}
                      svg
                      style={{
                        width: "20px",
                        height: "15px",
                        marginRight: "8px",
                        borderRadius: "50%",
                      }}
                    />
                    {lang.name}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div
            className="md:hidden text-gray-700 p-1 cursor-pointer hover:bg-gray-100 rounded-full"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 transition-all duration-300">
            <ul className="space-y-2">
              {navLists.map((item, index) => (
                <li key={index}>
                  {item.subNav ? (
                    <>
                      <div
                        className="flex items-center justify-between w-full py-2 text-gray-700 cursor-pointer hover:bg-gray-100 px-3 rounded-lg"
                        onClick={() =>
                          setActiveSubmenu(
                            activeSubmenu === index ? null : index
                          )
                        }
                      >
                        {item.label}
                        <FiChevronDown
                          className={`w-4 h-4 transition-transform ${
                            activeSubmenu === index ? "rotate-180" : ""
                          }`}
                        />
                      </div>
                      {activeSubmenu === index && (
                        <ul className="pl-4 space-y-2 mt-1">
                          {item.subNav.map((subItem, subIndex) => (
                            <li key={subIndex}>
                              <a
                                href={subItem.path}
                                className="block py-1.5 text-gray-600 hover:text-indigo-600 hover:bg-gray-50 px-3 rounded-lg"
                              >
                                {subItem.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <a
                      href={item.path}
                      className="block py-2 px-3 rounded-lg text-gray-700 hover:bg-gray-100"
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
              <li className="pt-2 border-t mt-2">
                <div className="space-y-2">
                  {languages.map((lang) => (
                    <div
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className={`flex items-center px-3 py-2 rounded-lg cursor-pointer ${
                        i18n.language === lang.code
                          ? "bg-indigo-100 text-indigo-600"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      <ReactCountryFlag
                        countryCode={lang.country}
                        svg
                        style={{
                          width: "20px",
                          height: "15px",
                          marginRight: "8px",
                          borderRadius: "50%",
                        }}
                      />
                      {lang.name}
                    </div>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
