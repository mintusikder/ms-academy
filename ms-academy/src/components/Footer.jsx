import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8 relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-3 gap-12">

        {/* About / Logo */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">
            <span className="text-[#dc1414]">FX</span>Pro
          </h2>
          <p className="text-gray-400">
            আপনার ট্রেডিংকে সহজ, নিরাপদ এবং লাভজনক করার জন্য আমাদের ৮০%+ সঠিকতা ফরেক্স ইন্ডিকেটর।  
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-[#dc1414] transition-colors">
              <FaFacebookF />
            </a>
            <a href="#" className="text-gray-400 hover:text-[#dc1414] transition-colors">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-400 hover:text-[#dc1414] transition-colors">
              <FaInstagram />
            </a>
            <a href="#" className="text-gray-400 hover:text-[#dc1414] transition-colors">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">দ্রুত লিঙ্ক</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="#hero" className="hover:text-[#dc1414] transition-colors">হোম</a>
            </li>
            <li>
              <a href="#features" className="hover:text-[#dc1414] transition-colors">ফিচারস</a>
            </li>
            <li>
              <a href="#pricing" className="hover:text-[#dc1414] transition-colors">প্রাইসিং</a>
            </li>
            <li>
              <a href="#reviews" className="hover:text-[#dc1414] transition-colors">রিভিউ</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-[#dc1414] transition-colors">যোগাযোগ</a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">যোগাযোগ</h3>
          <p className="text-gray-400 mb-2">ইমেইল: support@fxpro.com</p>
          <p className="text-gray-400 mb-2">ফোন: +880 1234 567890</p>
          <p className="text-gray-400">ঠিকানা: ঢাকা, বাংলাদেশ</p>
        </div>

      </div>

      {/* Divider */}
      <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} FXPro. সর্বস্বত্ব সংরক্ষিত।
      </div>
    </footer>
  );
};

export default Footer;
