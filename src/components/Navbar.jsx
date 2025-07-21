import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-700 to-blue-900 text-white shadow-lg fixed w-full z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-wide text-yellow-300">
          Xpress Consultants
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-base font-medium">
          <Link to="/" className="hover:text-yellow-300 transition">Home</Link>
          <Link to="/about" className="hover:text-yellow-300 transition">About</Link>
          <Link to="/services" className="hover:text-yellow-300 transition">Services</Link>
          <Link to="/destinations" className="hover:text-yellow-300 transition">Destinations</Link>
          <Link to="/vacancies" className="hover:text-yellow-300 transition">Vacancies</Link>
          <Link to="/visa-process" className="hover:text-yellow-300 transition">Visa Process</Link>
          <Link to="/blog" className="hover:text-yellow-300 transition">Blog</Link>
          <Link to="/contact" className="hover:text-yellow-300 transition">Contact</Link>
          <Link
            to="/apply"
            className="bg-yellow-400 text-blue-900 px-4 py-1.5 rounded-md hover:bg-yellow-300 font-semibold text-sm"
          >
            Apply Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none text-3xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-blue-800 to-blue-900 shadow-md md:hidden flex flex-col space-y-4 px-6 py-4 text-sm"
        >
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/services" onClick={() => setIsOpen(false)}>Services</Link>
          <Link to="/destinations" onClick={() => setIsOpen(false)}>Destinations</Link>
          <Link to="/vacancies" onClick={() => setIsOpen(false)}>Vacancies</Link>
          <Link to="/visa-process" onClick={() => setIsOpen(false)}>Visa Process</Link>
          <Link to="/blog" onClick={() => setIsOpen(false)}>Blog</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
          <Link
            to="/apply"
            onClick={() => setIsOpen(false)}
            className="bg-yellow-400 text-blue-900 px-4 py-1.5 rounded-md font-semibold"
          >
            Apply Now
          </Link>
        </motion.div>
      )}
    </nav>
  );
}