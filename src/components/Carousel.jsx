import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const testimonials = [
  { name: "Rahul Kumar", country: "Poland", feedback: "Xpress Consultants helped me secure a welding job in Europe. The process was smooth and stress-free." },
  { name: "Vikram Singh", country: "Germany", feedback: "Professional service! Got my CNC operator position quickly." },
  { name: "Anjali Verma", country: "UAE", feedback: "Thanks to Xpress for guiding me through the visa process. Highly recommended." },
  { name: "Suresh Yadav", country: "Romania", feedback: "Their team ensured my job and travel arrangements were well organized." },
  { name: "Manoj Patil", country: "Qatar", feedback: "The best manpower consultancy for overseas jobs." },
  { name: "Deepa Sharma", country: "Canada", feedback: "Helped me land a hospitality job with great pay." },
  { name: "Pradeep Gurung", country: "Slovakia", feedback: "Excellent support for Nepali candidates as well." },
  { name: "Sunil Kumar", country: "UK", feedback: "Got placed as a driver in the UK within 2 months." },
  { name: "Amit Chaudhary", country: "USA", feedback: "Visa guidance and employer coordination were top-notch." },
  { name: "Nisha Rana", country: "Australia", feedback: "I am grateful for their professionalism and timely updates." },
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full max-w-3xl mx-auto overflow-hidden">
      <motion.div
        key={current}
        className="bg-white p-6 rounded-lg shadow-md border-t-4 border-gold text-center"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-gray-700 italic mb-4">“{testimonials[current].feedback}”</p>
        <h3 className="text-lg font-bold text-primary">{testimonials[current].name}</h3>
        <p className="text-sm text-gray-500">{testimonials[current].country}</p>
      </motion.div>
    </div>
  );
}