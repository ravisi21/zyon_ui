// File: Home.js

import React from "react";
import Header from "./Header";
import TopContent from "./TopContent";
import FeatureSection from "./FeatureSection";
import featureSectionData from "./featureSectionData";
import PopupFlowManager from "../Popups/HomePopupFlowManager";
import Contact from "../Common/Contact";
import AboutUs from "../Common/AboutUs";
import Footer from "../Common/Footer";

function Home() {
  return (
    <div className="w-full overflow-x-hidden bg-[#f6f6f6]">
      <Header />

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center">
        <TopContent />
      </div>

      {/* Feature Sections */}
      {featureSectionData.map((section) => (
        <div key={section.id} id={section.id}>
          <FeatureSection {...section} />
        </div>
      ))}
      <AboutUs />
      <Contact />
      <Footer />

      {/* Popup Flow Manager */}
      <PopupFlowManager />
    </div>
  );
}

export default Home;
