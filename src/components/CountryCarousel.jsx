import React from "react";
import { motion } from "framer-motion";

const countries = [
  { name: "Germany", flag: "https://flagcdn.com/w40/de.png" },
  { name: "Italy", flag: "https://flagcdn.com/w40/it.png" },
  { name: "Spain", flag: "https://flagcdn.com/w40/es.png" },
  { name: "Poland", flag: "https://flagcdn.com/w40/pl.png" },
  { name: "Portugal", flag: "https://flagcdn.com/w40/pt.png" },
  { name: "Romania", flag: "https://flagcdn.com/w40/ro.png" },
  { name: "Slovakia", flag: "https://flagcdn.com/w40/sk.png" },
  { name: "Slovenia", flag: "https://flagcdn.com/w40/si.png" },
  { name: "Czech Republic", flag: "https://flagcdn.com/w40/cz.png" },
  { name: "UK", flag: "https://flagcdn.com/w40/gb.png" },
  { name: "USA", flag: "https://flagcdn.com/w40/us.png" },
  { name: "Canada", flag: "https://flagcdn.com/w40/ca.png" },
  { name: "Australia", flag: "https://flagcdn.com/w40/au.png" },
  { name: "Armenia", flag: "https://flagcdn.com/w40/am.png" },
  { name: "Serbia", flag: "https://flagcdn.com/w40/rs.png" }
];

export default function CountryCarousel() {
  return (
    <div className="overflow-hidden py-4">
      <motion.div
        className="flex space-x-6"
        animate={{ x: ["0%", "-100%"] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
        {[...countries, ...countries].map((country, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-white shadow-md rounded-lg px-4 py-2 min-w-[120px]"
          >
            <img
              src={country.flag}
              alt={`${country.name} flag`}
              className="w-8 h-6 mb-2"
            />
            <p className="text-primary font-semibold text-sm">{country.name}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}