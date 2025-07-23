import React, { useState } from "react";
import CardSection from "./CardSection";
import YouTubeModal from "./YouTubeModal";
import * as userStore from "../../store/userStore";
import { setResetHomePopups } from "../../store/uiStore";
import TypingEffect from "./TypingEffect";
import LoopingTypingEffect from "./LoopingTypingEffect";

const TopContent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleGetStarted = () => {
    console.log("handleGetStarted");
    setResetHomePopups(true);
    userStore.setSignInFollowUp("challenge");
  };

  // Text constants to avoid inlined "undefined" bugs
  const typingText = " 100+ traders who have already started trading with us";
  const loopingText = "we fund up to ₹25 Lac of real capital per trader!";

  return (
    <div className="w-full mb-10">
      {/* Hero Section */}
      <div
        className="pt-32 md:pt-40 pb-[120px] w-full flex flex-col items-center justify-center relative bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white"
      >
        <div className="w-full md:max-w-[50%] mx-auto text-center relative px-10 md:px-0">
          <div className="text-3xl md:text-4xl font-semibold text-white">
            We Find And Fund Exceptional Traders
          </div>
          <div className="mt-4 text-white text-base md:text-lg font-semibold">
            Get funded up to ₹25 Lac —join a trading competition or Funding Challange!
          </div>
          <div className="flex mt-6 gap-4 justify-center">
            <button
              onClick={handleGetStarted}
              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-all duration-300 ease-in-out active:scale-95"
            >
              Get Started
            </button>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-transparent text-white px-4 py-2 rounded-md border border-white flex items-center gap-2 hover:bg-white hover:text-[#667eea] transition-all duration-300 ease-in-out active:scale-95"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              How it works
            </button>
          </div>
        </div>
        <div className="mt-10 text-white text-xl font-semibold underline">
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