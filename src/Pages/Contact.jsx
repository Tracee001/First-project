import React, { useState, useRef, useEffect } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { FaHandHoldingHeart } from "react-icons/fa";
import { LuTwitter } from "react-icons/lu";
import { FiLinkedin } from "react-icons/fi";
import { FaCat } from "react-icons/fa6";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formHeight, setFormHeight] = useState(0);
  const formRef = useRef(null);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  useEffect(() => {
    if (formRef.current) {
      setFormHeight(formRef.current.offsetHeight);
    }
  }, [formData]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4 py-10">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-800">Get In Touch</h1>
        <p className="text-gray-600">We'd love to hear from you. Send us a message!</p>
      </div>

      {/* Flex layout */}
      <div className="flex flex-col md:flex-row gap-8 w-full justify-center">
        {/* Message Form */}
        <div
          ref={formRef}
          className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md"
        >
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Send Message</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block font-semibold text-gray-700 mb-1">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your full name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block font-semibold text-gray-700 mb-1">Email</label>
              <input
                type="email"
                name="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block font-semibold text-gray-700 mb-1">Message</label>
              <textarea
                name="message"
                placeholder="Tell us your mind..."
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info + Let's Connect */}
        <div
          className="bg-white p-6 rounded-xl shadow-lg w-[340px] self-start"
          style={{ height: formHeight ? formHeight / 2 : "auto" }}
        >
          <h2 className="text-lg font-bold text-gray-800 mb-4 text-center">Contact Info</h2>
          <div className="text-gray-700 space-y-4 text-sm">
            <div className="flex items-center gap-3">
              <span className="p-2 rounded-full bg-blue-100">
                <MdOutlineEmail className="text-blue-600 text-lg" />
              </span>
              <span>hello@modernblog.com</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="p-2 rounded-full bg-green-100">
                <FaPhone className="text-green-600 text-lg" />
              </span>
              <span>+234 (0) 123 456 789</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="p-2 rounded-full bg-purple-100">
                <IoLocationOutline className="text-purple-600 text-lg" />
              </span>
              <span>Ibadan, Nigeria</span>
            </div>
          </div>

          {/* Let's Connect (spaced, no box) */}
          <div className="mt-20 text-center">
            <div className="flex justify-center text-4xl text-blue-600">
              <FaHandHoldingHeart />
            </div>
            <h1 className="text-xl font-bold text-gray-800 mt-2">Let's Connect</h1>
            <p className="text-gray-600 mt-1 mb-3">
              Follow us on social media for updates
            </p>
            <div className="flex justify-center gap-6 text-3xl">
              <span><FaCat /></span>
              <span><LuTwitter /></span>
              <span><FiLinkedin /></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
