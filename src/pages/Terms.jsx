import React from "react";
import { Helmet } from "react-helmet";

export default function Terms() {
  return (
    <div className="container mx-auto py-12 px-6">
      <Helmet>
        <title>Terms of Service | Xpress Consultants</title>
        <meta
          name="description"
          content="Read the terms and conditions for using Xpress Consultants recruitment and placement services."
        />
      </Helmet>

      <h1 className="text-4xl font-bold text-blue-700 mb-6">Terms of Service</h1>
      <p className="mb-6 text-gray-700">
        By accessing or using Xpress Consultants’ website and services, you agree to the following terms and conditions.
      </p>

      <h2 className="text-2xl font-semibold text-blue-600 mb-4">1. Service Scope</h2>
      <p className="mb-6">
        Xpress Consultants provides manpower recruitment and placement services for global employers and job seekers. All applicants must comply with local and international labor laws.
      </p>

      <h2 className="text-2xl font-semibold text-blue-600 mb-4">2. User Responsibilities</h2>
      <p className="mb-6">
        Users must provide accurate and truthful information during the application process. Misrepresentation can lead to immediate disqualification.
      </p>

      <h2 className="text-2xl font-semibold text-blue-600 mb-4">3. Liability Disclaimer</h2>
      <p className="mb-6">
        Xpress Consultants is not responsible for any losses or damages arising from employment agreements between candidates and employers.
      </p>

      <h2 className="text-2xl font-semibold text-blue-600 mb-4">4. Governing Law</h2>
      <p>
        These terms are governed by applicable laws in India and the United Kingdom.
      </p>
    </div>
  );
}