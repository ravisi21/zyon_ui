import React from "react";

const AboutUs = () => (
  <section
    id="about-us"
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
      <h1 className="text-3xl font-bold mb-2 text-white">About ZyonTrader</h1>
      <p className="mb-4 text-sm">Last Updated: July 2025</p>
      <p className="mb-6">
        ZyonTrader is a next-generation trading simulation and analytics platform developed by Mydya Technologies Pvt. Ltd. Our mission is to empower traders of all levels with advanced tools, risk-free competitions, and actionable insights.
      </p>
      <h2 className="text-xl font-semibold mb-2">Our Vision</h2>
      <p className="mb-6">
        To democratize access to professional-grade trading tools and foster a community of skilled, disciplined, and successful traders.
      </p>
      <h2 className="text-xl font-semibold mb-2">What We Offer</h2>
      <ul className="list-disc list-inside mb-6 space-y-1">
        <li>Simulated trading challenges with real market data</li>
        <li>Advanced analytics, journaling, and AI-powered insights</li>
        <li>Opportunities to get funded and showcase your skills</li>
        <li>Educational resources and a supportive trader community</li>
      </ul>
      <h2 className="text-xl font-semibold mb-2">Our Team</h2>
      <p className="mb-6">
        We are a passionate group of traders, technologists, and educators based in Hyderabad, India, committed to building the best platform for aspiring and professional traders alike.
      </p>
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

export default AboutUs; 