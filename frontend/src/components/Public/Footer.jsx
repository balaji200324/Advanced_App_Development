import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-950 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-auto">
            <h3 className="text-xl font-bold text-blue-300 mb-4">FutureThink English Certification</h3>
            <p className="text-neutral-400 mb-4">Learn and improve your British English skills with our certification courses.</p>
          </div>
          <div className="w-full md:w-auto">
            <h3 className="text-xl font-bold text-blue-300 mb-4">Quick Links</h3>
            <ul className="list-none mb-4">
              <li className="text-neutral-400 mb-2">
                <Link to="/">Home</Link>
              </li>
              <li className="text-neutral-400 mb-2">
                <Link to="/courses">Courses</Link>
              </li>
              <li className="text-neutral-400 mb-2">
                <Link to="/about">About</Link>
              </li>
              <li className="text-neutral-400 mb-2">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-auto">
            <h3 className="text-xl font-bold text-blue-300 mb-4">Contact Us</h3>
            <p className="text-neutral-400 mb-4">Email: futurethink@gmail.com</p>
            <p className="text-neutral-400 mb-4">Phone: +91 1234 567890</p>
            <p className="text-neutral-400 mb-4">Address: 1234 futureThink complex, London, UK</p>
          </div>
        </div>
      </div>
      <div className="border-t-2 border-gray-400 my-4"></div>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-auto">
            <p className="text-neutral-400 text-center">Copyright © 2024 Future Think Certification. All rights reserved.</p>
          </div>
          <div className="w-full md:w-auto">
            <ul className="flex justify-center">
              <li className="text-neutral-400 mx-2">
                <Link to="/PrivacyPolicy">Privacy Policy</Link>
              </li>
              <li className="text-neutral-400 mx-2">
                <Link to="/TermsAndConditions">Terms and Conditions</Link>
              </li>
              <li className="text-neutral-400 mx-2">
                <Link to="/RefundPolicy">Refund Policy</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;