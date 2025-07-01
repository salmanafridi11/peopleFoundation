import React, { useState } from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaPinterest,
  FaPhone,
  FaEnvelope,
  FaBars,
  FaTimes
} from "react-icons/fa";
import Img from "../assets/1.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full">
      {/* Top bar with contact info and social icons */}
      <div className="flex flex-col md:flex-row w-full bg-header-gradient">
        {/* Green circle with S */}
        <div className="flex items-center justify-center py-2 px-4 md:px-12">
          {/* Green circle content here */}
        </div>

        {/* Dark blue section with contact info */}
        <div className="flex-1 text-white px-4 flex flex-col md:flex-row items-center justify-between font-poppins space-y-2 md:space-y-0">
          <div className="flex flex-wrap justify-center md:justify-start space-x-6">
            <div className="flex items-center space-x-2">
              <FaPhone className="text-sm" />
              <span className="text-sm">+01 569 896 654</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaEnvelope className="text-sm" />
              <span className="text-sm">info@charity.com</span>
            </div>
          </div>

          {/* Social media icons */}
          <div className="flex space-x-4 bg-[#2D39A6] py-2 px-4 md:py-4">
            <FaInstagram className="text-sm" />
            <FaFacebookF className="text-sm" />
            <FaTwitter className="text-sm" />
            <FaPinterest className="text-sm" />
          </div>
        </div>

        {/* Red section on the right */}
        <div className="bg-red-600 w-full md:w-48 h-8 md:h-auto"></div>
      </div>

      {/* Main navigation bar */}
      <div className="flex flex-col md:flex-row items-center justify-between py-4 px-4 md:px-16 border-b">
        {/* Logo and hamburger */}
        <div className="w-full md:w-auto flex items-center justify-between mb-4 md:mb-0">
          <img src={Img} alt="People's Foundation" className="h-12 md:h-16" />
          
          {/* Hamburger button - only visible on mobile */}
          <button 
            className="md:hidden text-gray-800 focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <FaTimes className="h-6 w-6" />
            ) : (
              <FaBars className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Navigation links - responsive */}
        <nav 
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row w-full md:w-auto items-center space-y-4 md:space-y-0 space-x-0 md:space-x-6 text-[14px] font-poppins`}
        >
          <a href="#" className="w-full md:w-auto text-center text-gray-800 hover:text-indigo-900 py-2 border-b md:border-b-0 border-gray-200">
            Home
          </a>
          <a href="#" className="w-full md:w-auto text-center text-gray-800 hover:text-indigo-900 py-2 border-b md:border-b-0 border-gray-200">
            About Us
          </a>
          <div className="w-full md:w-auto relative group py-2 border-b md:border-b-0 border-gray-200">
            <a
              href="#"
              className="text-center text-gray-800 hover:text-indigo-900 flex items-center justify-center md:justify-start"
            >
              Pages
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </a>
          </div>
          <a href="#" className="w-full md:w-auto text-center text-gray-800 hover:text-indigo-900 py-2 border-b md:border-b-0 border-gray-200">
            Event
          </a>
          <a href="#" className="w-full md:w-auto text-center text-gray-800 hover:text-indigo-900 py-2 border-b md:border-b-0 border-gray-200">
            Contact
          </a>
          <a
            href="#"
            className="w-full md:w-auto text-center bg-header-gradient text-white px-4 py-2 rounded hover:bg-indigo-800 transition-colors"
          >
            DONATE
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;