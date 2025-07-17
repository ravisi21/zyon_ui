// File: TopContent.js

import React from "react";
import Carousel from "./Carousel";
import CardSection from "./CardSection";

const TopContent = () => {
  return (
    <div className="relative w-full overflow-hidden bg-white">
      {/* Carousel */}
      <div className="relative w-full min-h-[60vh] sm:h-[80vh] flex items-stretch">
        <Carousel />
      </div>

      {/* Card Section with no negative margin on mobile */}
      <section className="relative mt-0 sm:mt-[-100px] md:mt-[-120px] lg:mt-[-160px] xl:mt-[-180px] z-20 px-3 sm:px-6 md:px-8 pb-16 sm:pb-20 bg-green-200">
        <div className="w-full max-w-screen-xl mx-auto bg-transparent p-4 sm:p-8 md:p-10 transition-all duration-300 ease-in-out">
          <CardSection />
        </div>
      </section>
    </div>
  );
};

export default TopContent;