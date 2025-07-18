// File: TopContent.js

import React, { useState } from "react";
import CardSection from "./CardSection";
import YouTubeModal from "./YouTubeModal";

const TopContent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="w-full mb-10">
      {/* Hero Section */}
      <div
        className="pt-32 md:pt-40 pb-[120px] w-full flex flex-col bg-[#1D293B] items-center justify-center relative"
        style={{
          backgroundImage: `linear-gradient(rgba(29,41,59,0.9), rgba(29,41,59,0.9)), url('/trader/market.png')`,
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="w-full md:max-w-[50%] mx-auto text-center relative px-10 md:px-0">
          <div className="text-3xl md:text-4xl font-semibold text-neutral-50">
            We Find And Fund Exceptional Traders
          </div>
          <div className="mt-4 text-neutral-50 text-base md:text-lg">
            Use our tools, compete risk-free and get funded to trade with real
            money.
          </div>
          <div className="flex mt-6 gap-4 justify-center">
            <button className="bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition-all duration-300 ease-in-out active:scale-95">
              Get Started
            </button>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-transparent text-white px-4 py-2 rounded-md border border-white flex items-center gap-2 hover:bg-white hover:text-[#1D293B] transition-all duration-300 ease-in-out active:scale-95"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              How it works
            </button>
          </div>
        </div>
        <div className="mt-10 text-neutral-50 text-xl font-semibold underline">
          What We Offer
        </div>
      </div>

      {/* Card Section */}
      <section className="z-20 relative mt-[-120px] pt-10 px-10 md:px-20">
        <CardSection />
      </section>

      <YouTubeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        videoId="dQw4w9WgXcQ"
        title="How it works video"
      />
    </div>
  );
};

export default TopContent;
