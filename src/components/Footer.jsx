import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-800 to-blue-900 text-white py-10 mt-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Logo & Tagline */}
        <div>
          <h2 className="text-xl font-bold text-yellow-300 mb-3">Xpress Consultants</h2>
          <p className="text-gray-300 text-sm leading-relaxed">
            Your trusted partner for global manpower solutions. Connecting skilled professionals with top global opportunities.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-base font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li><Link to="/" className="hover:text-yellow-300">Home</Link></li>
            <li><Link to="/about" className="hover:text-yellow-300">About</Link></li>
            <li><Link to="/services" className="hover:text-yellow-300">Services</Link></li>
            <li><Link to="/contact" className="hover:text-yellow-300">Contact</Link></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-base font-semibold mb-3">Resources</h3>
          <ul className="space-y-1 text-sm">
            <li><Link to="/destinations" className="hover:text-yellow-300">Destinations</Link></li>
            <li><Link to="/vacancies" className="hover:text-yellow-300">Vacancies</Link></li>
            <li><Link to="/visa-process" className="hover:text-yellow-300">Visa Process</Link></li>
            <li><Link to="/blog" className="hover:text-yellow-300">Blog</Link></li>
          </ul>
        </div>

        {/* Social & Legal */}
        <div>
          <h3 className="text-base font-semibold mb-3">Connect With Us</h3>
          <div className="flex space-x-4 mb-4">
            <a href="#" className="hover:text-yellow-300"><Facebook size={18} /></a>
            <a href="#" className="hover:text-yellow-300"><Twitter size={18} /></a>
            <a href="#" className="hover:text-yellow-300"><Linkedin size={18} /></a>
          </div>
          <ul className="space-y-1 text-sm">
            <li><Link to="/privacy" className="hover:text-yellow-300">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-yellow-300">Terms of Service</Link></li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="text-center mt-8 text-gray-400 text-xs border-t border-gray-600 pt-4">
        © {new Date().getFullYear()} Xpress Consultants. All Rights Reserved.
      </div>
    </footer>
  );
}