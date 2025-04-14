import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-indigo-700 via-purple-700 to-violet-700 text-white py-4 z-40 relative">
      <div className="container mx-auto px-6 lg:px-14 flex flex-col lg:flex-row lg:justify-between items-center gap-4">
        <div className="text-center lg:text-left">
          <h2 className="text-3xl font-bold mb-2">ZippyLink</h2>
          <p className="text-slate-200">Keeps it fast, simple, and reliable.</p>
        </div>

        <p className="mt-4 lg:mt-0 text-slate-300">
          &copy; 2025 ZippyLink. All rights reserved.
        </p>

        <div className="flex space-x-6 mt-4 lg:mt-0">
          <a href="#" className="hover:text-violet-300 transition-colors duration-200">
            <FaFacebook size={24} />
          </a>
          <a href="#" className="hover:text-violet-300 transition-colors duration-200">
            <FaTwitter size={24} />
          </a>
          <a href="#" className="hover:text-violet-300 transition-colors duration-200">
            <FaInstagram size={24} />
          </a>
          <a href="#" className="hover:text-violet-300 transition-colors duration-200">
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};


export default Footer;