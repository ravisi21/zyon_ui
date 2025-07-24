import React from "react";

const Contact = () => (
  <section
    id="contact-us"
    className="bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white p-4 px-6 md:px-4 relative pb-24 pt-10 transition-all duration-700 ease-in-out"
  >
    {/* Top Wave Separator */}
    <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] z-10">
      <svg
        viewBox="0 0 500 50"
        preserveAspectRatio="none"
        className="w-full h-16"
      >
        <path d="M0,0 C150,50 350,0 500,50 L500,00 L0,0 Z" fill="#f6f6f6" />
      </svg>
    </div>
    <div className="container mx-auto px-4 py-12 text-gray-50">
      <h1 className="text-3xl font-bold mb-2 text-white">Contact Us</h1>
      <p className="mb-4 text-sm text-gray-100">We'd love to hear from you!</p>
      <div className="mb-6 space-y-1">
        <p><strong>Email:</strong> <a href="mailto:contact@zyontrader.com" className="text-green-400">contact@zyontrader.com</a></p>
        <p><strong>Phone:</strong> <span className="text-green-400">+91-8240772762</span></p>
      </div>
      <p className="mb-1">For support, feedback, or partnership inquiries, please reach out via email or phone.</p>
    </div>
    {/* Bottom Wave Separator */}
    <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-10">
      <svg
        viewBox="0 0 500 50"
        preserveAspectRatio="none"
        className="w-full h-16 rotate-180"
      >
        <path d="M0,0 C150,50 350,0 500,50 L500,00 L0,0 Z" fill="#f6f6f6" />
      </svg>
    </div>
  </section>
);

export default Contact; 