import React from "react";
import { FaFacebook, FaBehance, FaLinkedin, FaTwitter } from "react-icons/fa";
import userData from "../userData";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 sm:py-8">
      <div className="container mx-auto px-4 sm:px-6 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row md:space-x-8 lg:space-x-12 items-center mb-4">
          <div className="flex-1 mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">{userData.name}</h3>
            <p className="text-gray-400 text-sm sm:text-base">
              {userData.title}
            </p>
          </div>
          <div className="flex-1 w-full px-4 sm:px-0">
            <form className="flex items-center justify-center">
              <input
                type="email"
                placeholder="Your email"
                className="w-full p-2 text-sm sm:text-base rounded-l-lg bg-gray-800 border border-gray-600 
                focus:outline-none focus:border-green-400"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-3 sm:px-4 
                py-2 text-sm sm:text-base rounded-r-lg whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div
          className="border-t border-gray-600 pt-4 flex flex-col md:flex-row 
          justify-between items-center space-y-4 md:space-y-0"
        >
          <p className="text-gray-400 text-xs sm:text-sm text-center md:text-left">
            {userData.website.copyright}
          </p>
          <div className="flex space-x-6 my-2 md:my-0 text-lg sm:text-xl">
            <a href={userData.social.facebook} className="hover:text-green-400 transition-colors duration-300">
              <FaFacebook />
            </a>
            <a href={userData.social.behance} className="hover:text-green-400 transition-colors duration-300">
              <FaBehance />
            </a>
            <a href={userData.social.linkedin} className="hover:text-green-400 transition-colors duration-300">
              <FaLinkedin />
            </a>
          </div>
          <div className="flex space-x-4 text-xs sm:text-sm">
            <a href={userData.website.privacyLink} className="text-gray-400 hover:text-white transition-colors duration-300">
              Privacy
            </a>
            <a href={userData.website.termsLink} className="text-gray-400 hover:text-white transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
