import React from "react";
import { FaGithub, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-200 dark:bg-gray-800 w-full mt-10 flex-shrink-0">
      <div className="h-24 flex flex-col items-center justify-center p-4">
        <div className="flex space-x-6 mb-2">
          {/* Social Media Icons */}
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.youtube.com/@ECNaseerpur"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-500"
          >
            <FaYoutube size={24} />
          </a>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Copyright {new Date().getFullYear()} ECN. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
