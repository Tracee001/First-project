import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaEnvelope } from 'react-icons/fa';
import { FaHandHoldingHeart } from "react-icons/fa";
import { IoBookOutline } from "react-icons/io5";

const Navbar = () => {
  const navLinks = [
    { path: '/', label: 'Home', icon: <FaHome className="mr-2" /> },
    { path: '/about', label: 'About', icon: <FaHandHoldingHeart className="mr-2" /> },
    { path: '/contact', label: 'Contact', icon: <FaEnvelope className="mr-2" /> },
  ];

  return (
    <div className="bg-white shadow-lg sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Left: Logo */}
         <h1 className="text-2xl font-bold text-gray-800 hover:text-blue-600 cursor-pointer transition-colors duration-200">
            <IoBookOutline className="inline-block mr-2" />
               ModernBlog
         </h1>


        {/* Right: Navigation Links */}
        <ul className="flex space-x-4">
          {navLinks.map(({ path, label, icon }) => (
            <li key={path}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 rounded-md transition-colors duration-200 font-medium ${
                    isActive
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-800 hover:bg-blue-100'
                  }`
                }
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
