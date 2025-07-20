import React from "react";
import FeatureCard from "./FeatureCard";
import { GiVintageRobot, GiMoneyStack } from "react-icons/gi";
import { BsGraphUp } from "react-icons/bs";
import { SlTrophy } from "react-icons/sl";

const cardData = [
  {
    icon: <SlTrophy />,
    title: "Trading Challenge",
    subtitle: "Win Your Way To Funding",
    description:
      "Risk Free Skills Challenge\nTrade Stocks, Futures, Options\n Access all ZYON Tools\n Win 1000 ZYON Coins\n Chance to Get Funded ",
    youtubeLink: "dQw4w9WgXcQ",
    scrollTo: "feature-Trading-Competition",
  },
  {
    icon: <BsGraphUp />,
    title: "Advanced Analytics",
    subtitle: "Tools, Data & AI-Driven Insights",
    description:
      "Scanners And Custom Alerts\n Option Analysis\n Complete Market Analysis\n AI-Powered Insights\n Virtual AI assitant ",
    youtubeLink: "dQw4w9WgXcQ",
    scrollTo: "feature-Market-Dashboard",
  },
  {
    icon: <GiMoneyStack />,
    title: "Learn, Get Funded",
    subtitle: "Train • Track • Trade • Win",
    description:
      "Simulated Trading Account \n Trading Style Insights & Journaling\n Access all ZYON tools\n Build Consitency \n Demonstrate, GET FUNDED ",
    youtubeLink: "dQw4w9WgXcQ",
    scrollTo: "feature-Funded-Account",
  },
  {
    icon: <GiVintageRobot />,
    title: "Algo Hub",
    subtitle: "Automate • Test • Deploy",
    description:
      "Forward Test your strategies\n  Deploy Strategies to Top Brokers\n Live Monitoring & Alerts\n EOD Reports \n API Integrations Available ",
    youtubeLink: "dQw4w9WgXcQ",
    scrollTo: "feature-Forward-Testing",
  },
];

const CardSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12">
      {cardData.map((card, index) => (
        <FeatureCard key={index} {...card} index={index} />
      ))}
    </div>
  );
};

export default CardSection;
