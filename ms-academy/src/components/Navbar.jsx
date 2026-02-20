import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center h-16">
        <Link to={"/"} className="text-white text-2xl font-bold">
          <span className="text-[#dc1414]">MS</span>Academy
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          <NavLink
            to="/reviews"
            className="block py-2 text-white hover:text-gray-300"
          >
            Reviews
          </NavLink>
          <NavLink to="/features" className="text-white hover:text-gray-300">
            Features
          </NavLink>
          <NavLink to="/pricing" className="text-white hover:text-gray-300">
            Pricing
          </NavLink>

          <NavLink
            to="/buy"
            className="ml-4 bg-[#dc1414] hover:bg-[#b31212] text-white px-6 py-2 rounded-lg font-semibold shadow-lg shadow-[#dc1414]/30 transition-all duration-300"
          >
            👉 এখনই কিনুন
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu with Smooth Transition */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-500 ease-in-out bg-black rounded-lg px-6 ${
          isOpen ? "max-h-96 py-4 mt-2" : "max-h-0"
        }`}
      >
        <NavLink
          to="/reviews"
          className="block py-2 text-white hover:text-gray-300"
        >
          Reviews
        </NavLink>
        <NavLink
          to="/features"
          className="block py-2 text-white hover:text-gray-300"
        >
          Features
        </NavLink>
        <NavLink
          to="/pricing"
          className="block py-2 text-white hover:text-gray-300"
        >
          Pricing
        </NavLink>

        <NavLink
          to="/buy"
          className="block mt-4 bg-[#dc1414] hover:bg-[#b31212] text-white px-6 py-2 rounded-lg font-semibold shadow-lg shadow-[#dc1414]/30 transition-all duration-300 text-center"
        >
          👉 এখনই কিনুন
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
