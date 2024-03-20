import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-8">British English Certification Terms and Conditions</h1>
      <p className="text-gray-600 mb-4">These Terms and Conditions ("Terms") govern your use of the British English Certification services offered by [Your Company Name] ("we", "us", or "our").</p>

      <h2 className="text-xl font-bold mb-4">1. Acceptance of Terms</h2>
      <p className="text-gray-600 mb-4">By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part of these Terms, you may not access or use our services.</p>

      <h2 className="text-xl font-bold mb-4">2. Definitions</h2>
      <ul className="list-disc pl-4 mb-4">
        <li className="text-gray-600">
          "Services" means any online courses, certification programs, and other resources offered by us.
        </li>
        <li className="text-gray-600">
          "User" means any individual or entity who accesses or uses our services.
        </li>
      </ul>

      <h2 className="text-xl font-bold mb-4">3. Use of Services</h2>
      <p className="text-gray-600 mb-4">
        You may use our services only for lawful purposes and in accordance with these Terms. You agree not to use our services in any way that could damage, disable, overburden, or impair our servers or networks.
      </p>

      <p className="text-gray-600 text-center mt-8">
        These Terms and Conditions were last updated on [Date]. We reserve the right to update these Terms at any time and will notify you of any changes by posting the new Terms on this page.
      </p>
    </div>
  );
};

export default TermsAndConditions;