import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  FiChevronDown,
  FiMenu,
  FiX,
  FiHome,
  FiBriefcase,
  FiShield,
  FiInfo,
  FiMail,
  FiUser,
  FiGlobe,
} from "react-icons/fi";
import { FaUserTie, FaUsers } from "react-icons/fa";
import ReactCountryFlag from "react-country-flag";
import { useLocation } from "react-router-dom";
import lovemonday from "/lovemonday.png?url";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const location = useLocation();

  const languages = [
    { code: "en", name: "English", country: "US" },
    { code: "hr", name: "Hrvatski", country: "HR" },
    { code: "sl", name: "Slovenščina", country: "SI" },
  ];

  const navLists = [
    { label: t("navItems.home"), path: "/", icon: <FiHome className="mr-2" /> },
    {
      label: t("navItems.services.serviceroot"),
      icon: <FiBriefcase className="mr-2" />,
      subNav: [
        {
          label: t("navItems.services.service1"),
          path: "/recruitment",
          icon: <FaUserTie className="mr-2" />,
        },
        {
          label: t("navItems.services.service2"),
          path: "/staffing",
          icon: <FaUsers className="mr-2" />,
        },
      ],
    },
    {
      label: t("navItems.legitimate-work"),
      path: "/legitimate-work",
      icon: <FiShield className="mr-2" />,
    },
    {
      label: t("navItems.about-us"),
      path: "/about-us",
      icon: <FiInfo className="mr-2" />,
    },
    {
      label: t("navItems.contact-us"),
      path: "/contact-us",
      icon: <FiMail className="mr-2" />,
    },
    {
      label: t("navItems.apply-for-work"),
      path: "/apply-for-work",
      icon: <FiUser className="mr-2" />,
    },
  ];

  // Check if a nav item is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  // Check if any subnav item is active
  const isSubmenuActive = (subNav) => {
    if (!subNav) return false;
    return subNav.some((item) => isActive(item.path));
  };

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
              className="text-2xl font-bold text-primary font-lobster tracking-widest"
            >
              <img
                src={lovemonday}
                alt="Love Monday Logo"
                className="h-12 hover:scale-105 transition-transform duration-500"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <ul className="flex space-x-6">
              {navLists.map((item, index) => (
                <li
                  key={index}
                  className="relative group"
                  onMouseEnter={() => setActiveSubmenu(index)}
                  onMouseLeave={() => setActiveSubmenu(null)}
                >
                  {item.subNav ? (
                    <>
                      <div
                        className={`flex items-center ${
                          isSubmenuActive(item.subNav)
                            ? "text-secondary"
                            : "text-gray-700"
                        } hover:text-secondary transition-colors cursor-pointer uppercase text-sm font-lato font-semibold tracking-wide`}
                      >
                        {item.icon}
                        {item.label}
                        <FiChevronDown
                          className={`ml-1 w-4 h-4 transition-transform ${
                            activeSubmenu === index ? "rotate-180" : ""
                          }`}
                        />
                      </div>
                      <ul
                        className={`absolute left-0 mt-0 w-60 bg-white shadow-lg rounded-md py-1 transition-all duration-300 z-50 ${
                          activeSubmenu === index
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-2 pointer-events-none"
                        }`}
                      >
                        {item.subNav.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <a
                              href={subItem.path}
                              className={`flex items-center px-4 py-2 ${
                                isActive(subItem.path)
                                  ? "bg-indigo-50 text-secondary"
                                  : "text-gray-700"
                              } hover:bg-indigo-50 hover:text-secondary transition-colors uppercase text-sm`}
                            >
                              {subItem.icon}
                              {subItem.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <a
                      href={item.path}
                      className={`flex items-center ${
                        isActive(item.path) ? "text-secondary" : "text-gray-700"
                      } hover:text-secondary transition-colors uppercase text-sm font-lato font-semibold tracking-wide`}
                    >
                      {item.icon}
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>

            {/* Language Switcher */}
            <div
              className="relative ml-4"
              onMouseEnter={() => setIsLangOpen(true)}
              onMouseLeave={() => setIsLangOpen(false)}
            >
              <div className="flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 cursor-pointer hover:bg-blue-100 transition-colors">
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
                className={`absolute right-0 mt-0 w-48 bg-white shadow-lg rounded-md py-1 transition-all duration-300 z-50 ${
                  isLangOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-2 pointer-events-none"
                }`}
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
            className="md:hidden text-gray-700 p-1 cursor-pointer hover:bg-gray-100 rounded-full transition-colors"
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
                        className={`flex items-center justify-between w-full py-2 ${
                          isSubmenuActive(item.subNav)
                            ? "text-secondary"
                            : "text-gray-700"
                        } cursor-pointer hover:bg-gray-100 px-3 rounded-lg transition-colors`}
                        onClick={() =>
                          setActiveSubmenu(
                            activeSubmenu === index ? null : index
                          )
                        }
                      >
                        <div className="flex items-center">
                          {item.icon}
                          {item.label}
                        </div>
                        <FiChevronDown
                          className={`w-4 h-4 transition-transform ${
                            activeSubmenu === index ? "rotate-180" : ""
                          }`}
                        />
                      </div>
                      {activeSubmenu === index && (
                        <ul className="pl-8 space-y-2 mt-1">
                          {item.subNav.map((subItem, subIndex) => (
                            <li key={subIndex}>
                              <a
                                href={subItem.path}
                                className={`flex items-center py-1.5 ${
                                  isActive(subItem.path)
                                    ? "text-secondary bg-indigo-50"
                                    : "text-gray-600"
                                } hover:text-secondary hover:bg-gray-50 px-3 rounded-lg transition-colors`}
                              >
                                {subItem.icon}
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
                      className={`flex items-center py-2 px-3 rounded-lg ${
                        isActive(item.path)
                          ? "text-secondary bg-indigo-50"
                          : "text-gray-700"
                      } hover:bg-gray-100 transition-colors`}
                    >
                      {item.icon}
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
              <li className="pt-2 border-t mt-2">
                <div className="flex items-center px-3 py-2 text-gray-700">
                  <FiGlobe className="mr-2" />
                  <span className="font-medium">{t("navItems.language")}</span>
                </div>
                <div className="space-y-2 mt-1">
                  {languages.map((lang) => (
                    <div
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className={`flex items-center px-8 py-2 rounded-lg cursor-pointer transition-colors ${
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
