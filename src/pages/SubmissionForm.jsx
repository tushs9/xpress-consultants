import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

export default function Apply() {
  return (
    <section className="py-16 bg-gray-50">
      <Helmet>
        <title>Apply Now | Xpress Consultants</title>
        <meta
          name="description"
          content="Apply now for overseas job opportunities through Xpress Consultants. Submit your details and resume online."
        />
      </Helmet>

      <div className="max-w-3xl mx-auto px-4 text-center">
        <motion.h2
          className="text-4xl font-bold text-primary mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Apply Now
        </motion.h2>
        <motion.p
          className="text-lg text-gray-700 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Fill out the application form below to apply for your desired job. Our
          team will review your details and get in touch.
        </motion.p>

        <motion.div
          className="bg-white shadow-lg rounded-lg p-6 border-t-4 border-gold"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Google Form Embed */}
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdD1N8OqQ7X_Form_Link/viewform?embedded=true"
            width="100%"
            height="700"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="Apply Form"
          >
            Loading…
          </iframe>
        </motion.div>
      </div>
    </section>
  );
}