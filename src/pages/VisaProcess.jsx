import React from "react";
import { motion } from "framer-motion";

const steps = [
  { title: "Step 1: Submit Application", description: "Fill out the job application form with accurate details." },
  { title: "Step 2: Document Verification", description: "We verify your educational and experience documents." },
  { title: "Step 3: Job Shortlisting", description: "Your profile is matched with overseas job requirements." },
  { title: "Step 4: Interview & Selection", description: "Prepare for employer interviews and get selected." },
  { title: "Step 5: Visa Processing", description: "Our experts guide you through visa application and medical checks." },
  { title: "Step 6: Deployment", description: "Receive your visa, book tickets, and start your overseas career." }
];

export default function VisaProcess() {
  return (
    <div className="container mx-auto py-12 px-6">
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-12">
        Visa Process Flowchart
      </h1>

      {/* Vertical Flowchart */}
      <div className="flex flex-col items-center relative">
        {steps.map((step, index) => (
          <div key={index} className="relative flex flex-col items-center">
            {/* Step Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, boxShadow: "0px 8px 20px rgba(0,0,0,0.3)" }}
              className="bg-white w-full max-w-lg p-6 mb-12 rounded-xl shadow-lg border border-blue-200 text-center transition"
            >
              <h3 className="text-xl font-semibold text-blue-700">{step.title}</h3>
              <p className="text-gray-600 mt-2">{step.description}</p>
            </motion.div>

            {/* Gradient Arrows */}
            {index < steps.length - 1 && (
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10 mb-6"
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: index * 0.2 }}
              >
                <defs>
                  <linearGradient id={`grad-${index}`} x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style={{ stopColor: "#1e3a8a", stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: "#d97706", stopOpacity: 1 }} />
                  </linearGradient>
                </defs>
                <path
                  d="M12 4v16m0 0l-6-6m6 6l6-6"
                  stroke={`url(#grad-${index})`}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </motion.svg>
            )}
          </div>
        ))}
      </div>

      {/* FAQ Section */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">Frequently Asked Questions</h2>
        <div className="max-w-2xl mx-auto space-y-4">
          <details className="bg-white shadow rounded-lg p-4">
            <summary className="font-semibold text-gray-800">How long does the visa process take?</summary>
            <p className="text-gray-600 mt-2">Typically 4-8 weeks, depending on the country and visa category.</p>
          </details>

          <details className="bg-white shadow rounded-lg p-4">
            <summary className="font-semibold text-gray-800">Do I need IELTS or any language test?</summary>
            <p className="text-gray-600 mt-2">Required for English-speaking countries like UK, Canada, and Australia. Not mandatory for most Middle East countries.</p>
          </details>

          <details className="bg-white shadow rounded-lg p-4">
            <summary className="font-semibold text-gray-800">What documents are required for the visa process?</summary>
            <p className="text-gray-600 mt-2">Commonly required documents: Passport, educational certificates, work experience letters, medical test reports, and photographs.</p>
          </details>

          <details className="bg-white shadow rounded-lg p-4">
            <summary className="font-semibold text-gray-800">Do you provide job placement services?</summary>
            <p className="text-gray-600 mt-2">Yes, we work with reputed overseas employers to provide job opportunities in skilled and semi-skilled categories.</p>
          </details>

          <details className="bg-white shadow rounded-lg p-4">
            <summary className="font-semibold text-gray-800">Is visa approval guaranteed?</summary>
            <p className="text-gray-600 mt-2">No consultancy can guarantee visa approval, but our experts ensure your documentation meets the highest standards for success.</p>
          </details>

          <details className="bg-white shadow rounded-lg p-4">
            <summary className="font-semibold text-gray-800">What is the consultancy service fee?</summary>
            <p className="text-gray-600 mt-2">The service fee depends on the job category and destination country. Contact us for a detailed breakdown.</p>
          </details>

          <details className="bg-white shadow rounded-lg p-4">
            <summary className="font-semibold text-gray-800">Can you arrange accommodation and travel?</summary>
            <p className="text-gray-600 mt-2">Yes, we assist in arranging accommodation and travel through our partner agencies.</p>
          </details>

          <details className="bg-white shadow rounded-lg p-4">
            <summary className="font-semibold text-gray-800">Do you assist with family visas?</summary>
            <p className="text-gray-600 mt-2">Yes, we can assist with dependent or family visa processing based on the host country’s policies.</p>
          </details>
        </div>
      </div>
    </div>
  );
}