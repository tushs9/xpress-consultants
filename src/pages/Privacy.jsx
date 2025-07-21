import React from "react";
import { Helmet } from "react-helmet";

export default function Privacy() {
  return (
    <div className="container mx-auto py-12 px-6">
      <Helmet>
        <title>Privacy Policy | Xpress Consultants</title>
        <meta
          name="description"
          content="Learn how Xpress Consultants protects your personal information and ensures compliance with global data privacy regulations."
        />
      </Helmet>

      <h1 className="text-4xl font-bold text-blue-700 mb-6">Privacy Policy</h1>
      <p className="mb-6 text-gray-700">
        At Xpress Consultants, your privacy is our priority. This Privacy Policy outlines how we collect, use, and safeguard your personal data.
      </p>

      <h2 className="text-2xl font-semibold text-blue-600 mb-4">1. Information We Collect</h2>
      <p className="mb-6">
        We collect personal information such as name, email, phone number, resume details, and job preferences when you apply for opportunities through our website.
      </p>

      <h2 className="text-2xl font-semibold text-blue-600 mb-4">2. How We Use Your Data</h2>
      <p className="mb-6">
        Your information is used for processing applications, matching you with job opportunities, and communicating updates related to your application status.
      </p>

      <h2 className="text-2xl font-semibold text-blue-600 mb-4">3. Data Protection & Security</h2>
      <p className="mb-6">
        We implement industry-standard security measures to ensure your personal data is protected from unauthorized access or disclosure.
      </p>

      <h2 className="text-2xl font-semibold text-blue-600 mb-4">4. Your Rights</h2>
      <p className="mb-6">
        You have the right to access, update, or request deletion of your personal information at any time. Contact us at info@xpress-consultants.com for assistance.
      </p>

      <h2 className="text-2xl font-semibold text-blue-600 mb-4">5. Contact Us</h2>
      <p>
        For any privacy concerns, email us at{" "}
        <a href="mailto:info@xpress-consultants.com" className="text-blue-600 underline">
          info@xpress-consultants.com
        </a>
      </p>
    </div>
  );
}