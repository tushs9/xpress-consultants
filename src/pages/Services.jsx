import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Briefcase, FileText, Plane, Users } from "lucide-react";

const services = [
  {
    icon: <Briefcase size={40} />,
    title: "Overseas Job Placement",
    desc: "We connect skilled professionals with reputable employers worldwide in various industries."
  },
  {
    icon: <FileText size={40} />,
    title: "Visa Documentation Assistance",
    desc: "End-to-end guidance for work visa applications, document verification, and embassy submissions."
  },
  {
    icon: <Plane size={40} />,
    title: "Travel & Deployment Support",
    desc: "Assistance with ticketing, pre-departure orientation, and relocation guidance."
  },
  {
    icon: <Users size={40} />,
    title: "Corporate Recruitment Solutions",
    desc: "Tailored manpower sourcing solutions for companies looking to hire internationally."
  }
];

export default function Services() {
  return (
    <section className="py-16 bg-gray-50">
      <Helmet>
        <title>Our Services | Xpress Consultants</title>
        <meta
          name="description"
          content="Explore the wide range of recruitment and visa support services offered by Xpress Consultants."
        />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-primary text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Services
        </motion.h2>
        <motion.p
          className="text-center text-gray-600 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Xpress Consultants offers comprehensive solutions to help candidates
          and companies achieve their goals in international recruitment.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-2xl transition border-t-4 border-gold"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="text-gold flex justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}