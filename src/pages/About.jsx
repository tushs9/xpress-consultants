import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Users, Target, Award } from "lucide-react";

export default function About() {
  return (
    <section className="py-16 bg-gray-50">
      <Helmet>
        <title>About Us | Xpress Consultants</title>
        <meta
          name="description"
          content="Learn about Xpress Consultants – your trusted global recruitment partner with 20+ years of experience and thousands of successful placements."
        />
      </Helmet>

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 text-center mb-12">
        <motion.h1
          className="text-4xl font-bold text-primary mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Xpress Consultants
        </motion.h1>
        <motion.p
          className="text-lg text-gray-700 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          We are a leading overseas recruitment and manpower consultancy, dedicated to connecting skilled professionals with top global employers. With a strong network across Europe, Asia, and beyond, we have empowered thousands to achieve their international career goals.
        </motion.p>
      </div>

      {/* Mission & Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4 mb-12">
        <motion.div
          className="bg-white shadow-lg rounded-lg p-6 border-t-4 border-gold"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center mb-4 text-gold">
            <Target size={40} />
          </div>
          <h3 className="text-xl font-semibold text-primary mb-3">Our Mission</h3>
          <p className="text-gray-600">
            To provide transparent and efficient recruitment solutions that create opportunities for talent and value for businesses globally.
          </p>
        </motion.div>

        <motion.div
          className="bg-white shadow-lg rounded-lg p-6 border-t-4 border-gold"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center mb-4 text-gold">
            <Award size={40} />
          </div>
          <h3 className="text-xl font-semibold text-primary mb-3">Our Vision</h3>
          <p className="text-gray-600">
            To be recognized as the most trusted recruitment partner, enabling global workforce mobility and career success.
          </p>
        </motion.div>
      </div>

      {/* Core Values */}
      <div className="bg-white py-12">
        <motion.h2
          className="text-3xl font-bold text-primary text-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Our Core Values
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          {[
            { icon: <Users size={40} />, title: "Integrity", desc: "Honesty and transparency in every process." },
            { icon: <Target size={40} />, title: "Excellence", desc: "Delivering quality service for clients and candidates." },
            { icon: <Award size={40} />, title: "Commitment", desc: "Dedicated to achieving success for all stakeholders." }
          ].map((value, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 shadow-md rounded-lg p-6 hover:shadow-lg transition"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="text-gold mb-4 flex justify-center">{value.icon}</div>
              <h3 className="text-xl font-semibold text-primary mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-12">
        <motion.h2
          className="text-3xl font-bold text-primary text-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Why Choose Us?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4 text-center">
          {[
            { value: "10,000+", label: "Successful Placements" },
            { value: "95%", label: "Visa Success Rate" },
            { value: "20+", label: "Years of Expertise" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="p-6 border rounded shadow hover:shadow-md transition bg-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <h3 className="text-2xl font-bold text-gold mb-2">{stat.value}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}