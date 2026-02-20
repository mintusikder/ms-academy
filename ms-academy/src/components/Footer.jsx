import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8 relative z-10">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 flex flex-col items-center text-center space-y-6">
        {/* Logo */}
        <Link
          to={"/"}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-3xl font-bold"
        >
          <span className="text-[#dc1414]">MS</span>Academy
        </Link>

        {/* Description */}
        <p className="text-gray-400 max-w-xl">
          আপনার ট্রেডিংকে সহজ, নিরাপদ এবং লাভজনক করার জন্য আমাদের ৮০%+ সঠিকতা
          ফরেক্স ইন্ডিকেটর।
        </p>

        {/* Social Icons */}
        <div className="flex gap-6 text-lg">
          <a href="#" className="hover:text-[#dc1414] transition">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-[#dc1414] transition">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-[#dc1414] transition">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-[#dc1414] transition">
            <FaLinkedinIn />
          </a>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} MS Academy. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
