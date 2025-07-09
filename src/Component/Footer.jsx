import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';
import { IoBookOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center space-x-2 text-xl font-bold">
            <span className="text-blue-500"><IoBookOutline /></span>
            <span>ModernBlog</span>
          </div>
          <p className="text-sm text-gray-400 mt-4">
            Discover amazing stories, insights, and ideas from our community of writers.
            Join us in exploring the world through words.
          </p>
          {/* Socials */}
          <div className="flex space-x-3 mt-4">
            <a href="#" className="bg-gray-700 p-2 rounded">
              <FaGithub />
            </a>
            <a href="#" className="bg-gray-700 p-2 rounded">
              <FaTwitter />
            </a>
            <a href="#" className="bg-gray-700 p-2 rounded">
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/about" className="hover:text-white">About</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            <li><Link to="/privacy" className="hover:text-white">Privacy</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li className="flex items-center space-x-2">
              <Mail size={16} />
              <span>hello@modernblog.com</span>
            </li>
            <li className="flex items-center space-x-2">
              <Phone size={16} />
              <span>+234 (0) 123 456 789</span>
            </li>
            <li className="flex items-center space-x-2">
              <MapPin size={16} />
              <span>Ibadan, Nigeria</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        © 2025 ModernBlog. All rights reserved. Made with <span className="text-red-500">❤️</span> in Nigeria
      </div>
    </footer>
  );
};

export default Footer;
