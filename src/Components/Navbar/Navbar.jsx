import React, { useState } from "react";
import { Link } from "react-scroll";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = ["home", "about", "projects", "contact"];

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md py-4 px-6 md:px-10 flex items-center justify-between z-50">
      {/* Left - Profile */}
      <div className="flex items-center gap-3">
        <img
          src="profile.jpg"
          alt="Hour Ashraf"
          className="w-10 h-10 rounded-full border-2 border-gray-300 shadow"
        />
        <span className="text-lg font-semibold text-gray-900">Hour Ashraf</span>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
        {navLinks.map((link) => (
          <li key={link}>
            <Link
              to={link}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              activeClass="text-pink-500 font-bold"
              className="cursor-pointer transition duration-300 hover:text-pink-400"
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Toggle Button */}
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-3xl text-gray-700 focus:outline-none"
        >
          {isOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden px-6 py-4">
          <ul className="flex flex-col gap-6 text-gray-700 font-medium">
            {navLinks.map((link) => (
              <li key={link}>
                <Link
                  to={link}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  onClick={closeMenu}
                  activeClass="text-pink-500 font-bold"
                  className="cursor-pointer transition duration-300 hover:text-pink-400 block"
                >
                  {link.charAt(0).toUpperCase() + link.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
