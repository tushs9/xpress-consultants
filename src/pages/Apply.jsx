import React from "react";
import { motion } from "framer-motion";

export default function Apply() {
  return (
    <div className="container mx-auto py-16 px-6 text-center">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-blue-700 mb-6"
      >
        Apply Now
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-lg text-gray-600 mb-10"
      >
        Click the button below to open our secure Google Form and submit your
        application with your resume.
      </motion.p>
      <motion.a
        href="https://docs.google.com/forms/d/e/1FAIpQLSemIGwLfAOrvb5uFBJ8WsIt_Sa9lLR_iH3cwjY5sy04FANMEQ/viewform?usp=sharing&ouid=112033849145042442236"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="inline-block bg-gradient-to-r from-blue-600 to-blue-800 text-white py-4 px-8 rounded-xl text-xl font-semibold shadow-lg hover:shadow-2xl transition"
      >
        Apply via Google Form
      </motion.a>
    </div>
  );
}