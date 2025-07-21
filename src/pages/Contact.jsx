import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-16 bg-gray-50">
      <Helmet>
        <title>Contact Us | Xpress Consultants</title>
        <meta
          name="description"
          content="Contact Xpress Consultants for overseas recruitment services, visa assistance, and global job placements."
        />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-primary text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Contact Us
        </motion.h2>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div
            className="bg-white shadow-lg rounded-lg p-6 border-t-4 border-gold"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold text-primary mb-4">
              Get in Touch
            </h3>
            <div className="space-y-4 text-gray-700">
              <p className="flex items-center">
                <Phone className="text-gold mr-3" /> +44 02039851970
              </p>
              <p className="flex items-center">
                <Mail className="text-gold mr-3" /> info@xpress-consultants.com
              </p>
              <p className="flex items-start">
                <MapPin className="text-gold mr-3 mt-1" />
                <span>
                  <strong>India Office:</strong> Una, Himachal Pradesh, India
                  <br />
                  <strong>UK Office:</strong> Bracknell, United Kingdom
                </span>
              </p>
            </div>
          </motion.div>

          {/* Google Maps */}
          <motion.div
            className="grid grid-rows-2 gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <iframe
              title="Una, Himachal Pradesh"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3432.646117021574!2d76.2653!3d31.4774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391b6f8ff28c49e7%3A0x4eaa08a9ad05aa6b!2sUna%2C%20Himachal%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
            <iframe
              title="Bracknell, UK"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2436.4567111772124!2d-0.7505!3d51.4154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487685291f047d1d%3A0x8cbb21b6b4a3a!2sBracknell%2C%20UK!5e0!3m2!1sen!2suk!4v1700000000000"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </motion.div>
        </div>

        {/* Contact Form */}
        <motion.div
          className="bg-white shadow-lg rounded-lg p-6 border-t-4 border-gold max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-semibold text-primary mb-4 text-center">
            Send Us a Message
          </h3>
          <form
            action="https://docs.google.com/forms/d/e/1FAIpQLSdD1N8OqQ7X_Form_Link/formResponse"
            method="POST"
            target="_blank"
            className="space-y-4"
          >
            <input
              type="text"
              name="entry.2005620554"
              placeholder="Your Name"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-gold outline-none"
              required
            />
            <input
              type="email"
              name="entry.1045781291"
              placeholder="Your Email"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-gold outline-none"
              required
            />
            <textarea
              name="entry.839337160"
              placeholder="Your Message"
              rows="4"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-gold outline-none"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-primary text-white px-6 py-3 rounded hover:bg-gold transition w-full"
            >
              Submit
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}