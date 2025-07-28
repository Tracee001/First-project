import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';
import { FaHandHoldingHeart } from "react-icons/fa";
import { IoBookOutline } from "react-icons/io5";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { path: '/', label: 'Home', icon: <FaHome className="mr-2" /> },
    { path: '/about', label: 'About', icon: <FaHandHoldingHeart className="mr-2" /> },
    { path: '/contact', label: 'Contact', icon: <FaEnvelope className="mr-2" /> },
  ];

  return (
    <div className="bg-white shadow-lg sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-gray-800 hover:text-blue-600 cursor-pointer transition-colors duration-200">
          <IoBookOutline className="inline-block mr-2" />
          ModernBlog
        </h1>

        {/* Hamburger Icon (mobile) */}
        <button
          className="md:hidden text-2xl text-gray-800 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation Links */}
        <ul className={`flex-col md:flex-row md:flex space-x-0 md:space-x-4 absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none transition-all duration-300 z-40 ${menuOpen ? 'flex' : 'hidden md:flex'}`}>
          {navLinks.map(({ path, label, icon }) => (
            <li key={path} className="md:my-0 my-2">
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 rounded-md transition-colors duration-200 font-medium ${
                    isActive
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-800 hover:bg-blue-100'
                  }`
                }
                onClick={() => setMenuOpen(false)} // Close menu on link click
              >
                {icon}
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;