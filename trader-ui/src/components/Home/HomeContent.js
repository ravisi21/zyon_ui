// File: Home.js

import React from "react";
import Header from "./Header";
import TopContent from "./TopContent";
import ZyonChallenge from "./ZyonChallenge";
import ZyonAnalytics from "./ZyonAnalytics";
import ZyonVirtualTrading from "./ZyonVirtualTrading";
import ZyonAlgoHub from "./ZyonAlgoHub";
import FeatureSection from "./FeatureSection";
import featureSectionData from "./featureSectionData";

function Home() {
  return (
    <div className="w-full overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center">
        <TopContent />
      </div>

      {/* Feature Sections */}
      {featureSectionData.map((section, index) => (
        <div key={section.id} id={section.id}>
          <FeatureSection {...section} index={index} />
        </div>
      ))}



    </div>
  );
}

export default Home;