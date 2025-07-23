import React from "react";

const Contact = () => (
  <div className="container mx-auto px-4 py-12 text-gray-800">
    <h1 className="text-3xl font-bold mb-6">📞 Contact Us</h1>
    <p className="mb-4 text-sm text-gray-600">We'd love to hear from you!</p>
    <div className="mb-6 space-y-1">
      <p><strong>Email:</strong> <a href="mailto:contact@zyontrader.com" className="text-blue-600">contact@zyontrader.com</a></p>
      <p><strong>Phone:</strong> +91-8240772762</p>
      <p><strong>Address:</strong> Arpana Serena Park, N1304, Masjid Banda, Camelot Layout, Kondapur, Hyderabad, Telangana 500084, India</p>
    </div>
    <p className="mb-6">For support, feedback, or partnership inquiries, please reach out via email or phone.</p>
  </div>
);

export default Contact; 