import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Carousel from "../components/Carousel";
import CountryCarousel from "../components/CountryCarousel";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const vacancies = [
    "General Helper",
    "CNC Engineer",
    "Welder",
    "Electrician",
    "Plumber",
    "Driver",
  ];

  return (
    <div className="bg-gray-50">
      {/* ✅ SEO */}
      <Helmet>
        <title>Xpress Consultants | Global Manpower Solutions</title>
        <meta
          name="description"
          content="Xpress Consultants connects skilled professionals with top employers worldwide. Apply for jobs and get expert visa assistance."
        />
      </Helmet>

      {/* ✅ Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-700 to-blue-900 text-white text-center py-20 px-6">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Your Gateway to Global Opportunities
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg mb-6 max-w-2xl mx-auto"
        >
          Connecting skilled professionals with top employers worldwide. Start your journey today!
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex justify-center space-x-4"
        >
          <Link
            to="/apply"
            className="bg-yellow-400 text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300"
          >
            Apply Now
          </Link>
          <Link
            to="/vacancies"
            className="border border-yellow-400 text-yellow-400 px-6 py-3 rounded-lg hover:bg-yellow-400 hover:text-blue-900"
          >
            View Vacancies
          </Link>
        </motion.div>
      </section>

      {/* ✅ Why Choose Us */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-10">
          Why Choose Us?
        </h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 px-6">
          {[
            { title: "Expert Guidance", icon: "🎯", desc: "Professional advice for overseas careers and placements." },
            { title: "Global Network", icon: "🌍", desc: "Trusted partnerships with top employers worldwide." },
            { title: "Fast Visa Process", icon: "⚡", desc: "Quick and transparent documentation & visa support." },
            { title: "24/7 Support", icon: "🤝", desc: "Our team is available anytime for your queries." }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.2 }}
              className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-300"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-blue-700 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ✅ Top Vacancies */}
      <section className="py-16 bg-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-800 mb-10">
          Top Vacancies This Month
        </h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
          {vacancies.map((job, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-50 shadow-md rounded-lg p-6 text-center"
            >
              <h3 className="text-xl font-bold text-blue-700 mb-2">{job}</h3>
              <p className="text-gray-600 mb-4">Exciting overseas opportunity for skilled workers.</p>
              <Link
                to="/apply"
                className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Apply
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ✅ Countries Carousel */}
      <section className="py-16 bg-gray-50 text-center">
        <motion.h2
          className="text-3xl font-bold text-blue-800 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Countries We Serve
        </motion.h2>
        <CountryCarousel />
        <div className="mt-6">
          <Link
            to="/destinations"
            className="bg-blue-700 text-white px-6 py-3 rounded hover:bg-yellow-400 hover:text-blue-900 transition"
          >
            View All Countries
          </Link>
        </div>
      </section>

      {/* ✅ Testimonials Carousel */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-3xl font-bold text-blue-800 mb-8">Success Stories</h2>
        <p className="text-gray-600 mb-6">Hear from our happy candidates.</p>
        <Carousel />
      </section>

      {/* ✅ Blog Teaser */}
      <section className="py-16 bg-gray-100">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-800 mb-10">
          From Our Blog
        </h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
          {[
            { title: "Top Jobs in Europe for 2025", snippet: "Find out the most in-demand roles in Europe...", img: "/images/blog1.jpg" },
            { title: "Visa Tips for Skilled Workers", snippet: "Essential tips to make your visa process hassle-free...", img: "/images/blog2.jpg" },
            { title: "Why Work Abroad in 2025?", snippet: "Discover the benefits of global career opportunities...", img: "/images/blog3.jpg" }
          ].map((post, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition"
            >
              <img src={post.img} alt={post.title} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-bold text-blue-700">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.snippet}</p>
                <a href="/blog" className="text-blue-600 font-semibold hover:underline">
                  Read More →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ✅ Sticky Apply Now Button */}
      <Link
        to="/apply"
        className="fixed bottom-6 right-6 bg-yellow-400 text-blue-900 px-6 py-3 rounded-full font-bold shadow-lg hover:bg-yellow-300"
      >
        Apply Now
      </Link>
    </div>
  );
}