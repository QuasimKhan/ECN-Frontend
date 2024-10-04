import React, { useState, useEffect, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // Import arrow icons
import ToggleSwitch from "./ToggleSwitch";
import logo from "./logo.png";
import { useTheme } from "./ThemeContext";

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false); // State for dropdown visibility
  const [message, setMessage] = useState("");
  const location = useLocation();
  const { darkMode, toggleDarkMode } = useTheme();

  const toggleMenu = () => {
    setOpen(!open);
  };

  const toggleDropdown = () => {
    setDropdownOpen(prev => !prev);
  };

  const closeDropdown = useCallback(() => {
    setDropdownOpen(false);
  }, []);

  const handleOutsideClick = (event) => {
    if (!event.target.closest(".about-dropdown") && !event.target.closest(".about-button")) {
      closeDropdown();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [handleOutsideClick]);

  const isActive = (path) => {
    return location.pathname === path ? "text-blue-500" : "text-white";
  };

  const handleToggleDarkMode = () => {
    toggleDarkMode();
    const newMessage = darkMode ? "Light mode enabled" : "Dark mode enabled";
    setMessage(newMessage);
    setTimeout(() => setMessage(""), 3000); // Hide message after 3 seconds
  };

  const handleLinkClick = () => {
    closeDropdown();
    toggleMenu(); // Close menu when clicking a link
  };

  return (
    <>
      <div className="flex justify-center w-full fixed top-5 font-serif z-50">
        <nav
          className={`h-20 w-5/6 rounded-lg flex items-center justify-between p-4 transition-colors duration-300 dark:bg-gray-900 dark:shadow-[0_0_10px_5px_rgba(59,130,246,1)] bg-gray-800 shadow-[0_0_10px_5px_rgba(211,211,211,1)] text-white z-50`}
        >
          <a href="/" className="flex items-center justify-center z-30">
            <img
              src={logo}
              alt="logo"
              className="logo w-32 h-32 md:w-44 md:h-auto object-contain"
            />
          </a>
          <div className="flex items-center">
            <ul
              className={`flex flex-col justify-end items-center md:flex-row md:space-x-4 fixed md:static top-0 left-0 w-full md:w-auto h-4/6 md:h-auto bg-gray-800 md:bg-transparent transition-transform transform ${
                open ? "translate-x-0" : "-translate-x-full"
              } md:translate-x-0 z-20 md:z-auto`}
            >
              <li className="md:hidden flex justify-end p-4">
                <button onClick={toggleMenu} className="text-2xl">
                  <i className="fas fa-times"></i>
                </button>
              </li>
              <li className="flex justify-center md:justify-start p-4">
                <ToggleSwitch
                  darkMode={darkMode}
                  onToggle={handleToggleDarkMode}
                />
              </li>
              <li className="flex justify-center md:justify-start p-4">
                <Link
                  to="/"
                  className={`hover:text-gray-400 ${isActive("/")}`}
                  onClick={toggleMenu}
                >
                  Home
                </Link>
              </li>
              <li className="relative flex justify-center md:justify-start p-4 about-button">
                <button
                  onClick={toggleDropdown}
                  className={`flex items-center hover:text-gray-400 ${isActive("/about")}`}
                >
                  About
                  {dropdownOpen ? (
                    <FaChevronUp className="ml-2" />
                  ) : (
                    <FaChevronDown className="ml-2" />
                  )}
                </button>
                {dropdownOpen && (
                  <ul className="absolute left-24 md:left-0 md:mt-10 w-44 md:w-48 bg-gray-800 rounded-lg shadow-lg z-30">
                    <li>
                      <Link
                        to="/About/AboutECN"
                        className="block px-4 py-2 text-white hover:bg-gray-700"
                        onClick={handleLinkClick}
                      >
                        About ECN
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/About/Arkaan-e-Shura"
                        className="block px-4 py-2 text-white hover:bg-gray-700"
                        onClick={handleLinkClick}
                      >
                        Arkaan e Shura
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/About/About-Naseerpur"
                        className="block px-4 py-2 text-white hover:bg-gray-700"
                        onClick={handleLinkClick}
                      >
                        About Naseerpur
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className="flex justify-center md:justify-start p-4">
                <Link
                  to="/gallery"
                  className={`hover:text-gray-400 ${isActive("/gallery")}`}
                  onClick={toggleMenu}
                >
                  Gallery
                </Link>
              </li>
              <li className="flex justify-center md:justify-start p-4">
                <Link
                  to="/studymaterials"
                  className={`hover:text-gray-400 ${isActive("/studymaterials")}`}
                  onClick={toggleMenu}
                >
                  Study Materials
                </Link>
              </li>
              <li className="flex justify-center md:justify-start p-4">
                <Link
                  to="/books"
                  className={`hover:text-gray-400 ${isActive("/books")}`}
                  onClick={toggleMenu}
                >
                  Books
                </Link>
              </li>
              <li className="flex justify-center md:justify-start p-4">
                <Link
                  to="/contact"
                  className={`hover:text-gray-400 ${isActive("/contact")}`}
                  onClick={toggleMenu}
                >
                  Contact
                </Link>
              </li>
            </ul>
            <button className="md:hidden ml-4 z-30" onClick={toggleMenu}>
              <div className="space-y-1">
                <span
                  className={`block h-0.5 w-6 bg-current transform transition duration-500 ${
                    open ? "rotate-45 translate-y-1.5" : ""
                  }`}
                ></span>
                <span
                  className={`block h-0.5 w-6 bg-current transition duration-500 ${
                    open ? "opacity-0" : ""
                  }`}
                ></span>
                <span
                  className={`block h-0.5 w-6 bg-current transform transition duration-500 ${
                    open ? "-rotate-45 -translate-y-1.5" : ""
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </nav>
      </div>
      <div className="pt-20">
        {message && (
          <div className="fixed bottom-4 right-4 bg-gray-700 text-white px-4 py-2 rounded-lg shadow-lg z-auto">
            {message}
          </div>
        )}
      </div>
    </>
  );
}
