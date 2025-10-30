import React from "react";

const Footer = () => (
  <footer
    id="contact"
    className="bg-red-700 text-white text-center py-8 px-4 mt-12"
  >
    <h3 className="text-2xl font-semibold mb-2">Contact Us</h3>
    <p>Email: info@mechtroninternational.com | Phone: +92 300 1234567</p>
    <div className="mt-4 flex justify-center gap-4">
      <a href="#" className="hover:underline">Facebook</a>
      <a href="#" className="hover:underline">LinkedIn</a>
      <a href="#" className="hover:underline">Instagram</a>
    </div>
    <p className="mt-6 text-sm text-gray-200">
      © 2025 Mechtron International. All rights reserved.
    </p>
  </footer>
);

export default Footer;
