import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import CountryCarousel from "../components/CountryCarousel";
import Carousel from "../components/Carousel";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Xpress Consultants | Global Manpower Solutions</title>
        <meta
          name="description"
          content="Xpress Consultants provides premium manpower consultancy services for overseas jobs in Europe, Middle East, Asia, UK, USA, and more."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="hero-gradient text-white text-center py-24 px-6 bg-gradient-to-r from-primary to-gold">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Your Gateway to Global Careers
        </motion.h1>
        <motion.p
          className="text-lg mb-6 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          We connect skilled professionals with top employers worldwide. Secure your future with Xpress Consultants.
        </motion.p>
        <Link
          to="/apply"
          className="bg-white text-primary font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-200 transition"
        >
          Apply Now
        </Link>
      </section>

      {/* Countries Carousel */}
      <section className="py-16 bg-gray-50 text-center">
        <motion.h2
          className="text-3xl font-bold text-primary mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Countries We Serve
        </motion.h2>
        <CountryCarousel />
        <div className="mt-6">
          <Link
            to="/destinations"
            className="bg-primary text-white px-6 py-3 rounded hover:bg-gold transition"
          >
            View All Countries
          </Link>
        </div>
      </section>

      {/* Top Vacancies */}
      <section className="py-16 bg-white text-center">
        <motion.h2
          className="text-3xl font-bold text-primary mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Top Vacancies This Month
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {["General Helper", "CNC Engineer", "Welder"].map((job, i) => (
            <motion.div
              key={i}
              className="p-6 border rounded-lg shadow hover:shadow-lg transition"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              <h3 className="text-xl font-semibold text-primary mb-4">{job}</h3>
              <Link
                to="/apply"
                className="bg-primary text-white px-4 py-2 rounded hover:bg-gold transition"
              >
                Apply Now
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="mt-8">
          <Link
            to="/vacancies"
            className="underline text-primary font-semibold hover:text-gold"
          >
            View All Vacancies →
          </Link>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold text-primary mb-8">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { stat: "10,000+", label: "Successful Placements" },
            { stat: "95%", label: "Visa Success Rate" },
            { stat: "20+", label: "Years of Experience" },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-white p-6 rounded shadow border-t-4 border-gold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              <h3 className="text-2xl font-bold text-gold">{item.stat}</h3>
              <p className="text-gray-600">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-3xl font-bold text-primary mb-8">Success Stories</h2>
        <p className="text-gray-600 mb-6">Hear from our happy candidates.</p>
        <Carousel />
      </section>

      {/* Blog Teaser */}
      <section className="py-16 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold text-primary mb-8">Latest Blogs</h2>
        <p className="text-gray-600 mb-6">
          Stay updated with recruitment tips, visa updates, and global job trends.
        </p>
        <Link
          to="/blog"
          className="bg-primary text-white px-6 py-3 rounded hover:bg-gold transition"
        >
          Read Our Blog
        </Link>
      </section>
    </>
  );
}