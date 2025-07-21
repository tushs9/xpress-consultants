import React, { useState } from "react";
import { motion } from "framer-motion";
import ReactCountryFlag from "react-country-flag";

const regions = ["Europe", "Asia", "Middle East", "Australia/NZ", "USA & Canada"];

const destinations = {
  Europe: [
    {
      name: "Romania",
      code: "RO",
      visa: "Work permit required. Employer sponsorship is common.",
      portal: "https://igi.mai.gov.ro/en/"
    },
    {
      name: "Slovakia",
      code: "SK",
      visa: "Apply for a temporary residence permit for employment.",
      portal: "https://www.mic.iom.sk/en/"
    },
    {
      name: "Slovenia",
      code: "SI",
      visa: "Single work and residence permit required for foreign workers.",
      portal: "https://www.gov.si/en/topics/work-in-slovenia/"
    },
    {
      name: "Czech Republic",
      code: "CZ",
      visa: "Employee card or Blue Card required for work in the Czech Republic.",
      portal: "https://www.mvcr.cz/mvcren/article/employment.aspx"
    },
    {
      name: "Serbia",
      code: "RS",
      visa: "Work permit is mandatory for all non-citizens.",
      portal: "https://www.mfa.gov.rs/en"
    },
    {
      name: "Germany",
      code: "DE",
      visa: "Apply for a German Work Visa or EU Blue Card.",
      portal: "https://www.make-it-in-germany.com/en/visa"
    },
    {
      name: "Italy",
      code: "IT",
      visa: "Work visa under Decreto Flussi for foreign workers.",
      portal: "https://vistoperitalia.esteri.it/home/en"
    },
    {
      name: "Spain",
      code: "ES",
      visa: "Residence and work permit required for employment in Spain.",
      portal: "https://extranjeros.inclusion.gob.es/"
    },
    {
      name: "Poland",
      code: "PL",
      visa: "National work visa and temporary residence permit required.",
      portal: "https://www.gov.pl/web/diplomacy"
    }
  ],
  Asia: [
    {
      name: "Thailand",
      code: "TH",
      visa: "Non-Immigrant B Visa is required for employment in Thailand.",
      portal: "https://www.immigration.go.th/"
    },
    {
      name: "Maldives",
      code: "MV",
      visa: "Employment approval and work visa required for foreign workers.",
      portal: "https://www.immigration.gov.mv/"
    },
    {
      name: "Cyprus",
      code: "CY",
      visa: "Work permit required. Must be obtained by employer.",
      portal: "https://www.moi.gov.cy/"
    },
    {
      name: "Armenia",
      code: "AM",
      visa: "Work permit system applies for most foreign nationals.",
      portal: "https://www.mfa.am/en"
    }
  ],
  "Middle East": [
    {
      name: "UAE",
      code: "AE",
      visa: "Work visa sponsored by employer is mandatory.",
      portal: "https://u.ae/en/information-and-services/visa-and-emirates-id"
    },
    {
      name: "Qatar",
      code: "QA",
      visa: "Work visa required. Usually arranged by employer.",
      portal: "https://www.moi.gov.qa/"
    },
    {
      name: "Kuwait",
      code: "KW",
      visa: "Employment visa required with sponsorship.",
      portal: "https://www.moi.gov.kw/"
    }
  ],
  "Australia/NZ": [
    {
      name: "Australia",
      code: "AU",
      visa: "Work visa options include TSS visa and skilled migration programs.",
      portal: "https://immi.homeaffairs.gov.au/"
    },
    {
      name: "New Zealand",
      code: "NZ",
      visa: "Work visa required; check accredited employer list.",
      portal: "https://www.immigration.govt.nz/"
    }
  ],
  "USA & Canada": [
    {
      name: "USA",
      code: "US",
      visa: "Work visas include H-1B, L-1, and others.",
      portal: "https://travel.state.gov/"
    },
    {
      name: "Canada",
      code: "CA",
      visa: "Work permits under LMIA or employer-specific programs.",
      portal: "https://www.canada.ca/en/immigration-refugees-citizenship.html"
    }
  ]
};

export default function Destinations() {
  const [selectedRegion, setSelectedRegion] = useState("Europe");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCountries = destinations[selectedRegion].filter((country) =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-10">
        Countries We Serve
      </h1>

      {/* Region Tabs */}
      <div className="flex justify-center space-x-4 mb-6">
        {regions.map((region) => (
          <button
            key={region}
            onClick={() => setSelectedRegion(region)}
            className={`px-4 py-2 rounded-full text-sm font-semibold ${
              selectedRegion === region
                ? "bg-blue-700 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {region}
          </button>
        ))}
      </div>

      {/* Search */}
      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Search country..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-80 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Country Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {filteredCountries.map((country, index) => (
          <motion.div
            key={index}
            layout
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition overflow-hidden p-6"
          >
            <div className="flex justify-center mb-4">
              <ReactCountryFlag
                countryCode={country.code}
                svg
                style={{
                  width: "3rem",
                  height: "3rem",
                  borderRadius: "4px"
                }}
              />
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">
              {country.name}
            </h2>
            <p className="text-gray-600 text-sm mb-4">{country.visa}</p>
            <a
              href={country.portal}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-blue-700 text-white py-2 rounded-lg font-semibold hover:bg-blue-800 transition"
            >
              Official Visa Portal
            </a>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}