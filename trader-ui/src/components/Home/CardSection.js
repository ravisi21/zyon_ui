import React from "react";
import FeatureCard from "./FeatureCard";
import { GiPayMoney } from "react-icons/gi";
import { SiSimpleanalytics } from "react-icons/si";
import { SlTrophy } from "react-icons/sl";
import { LiaRobotSolid } from "react-icons/lia";

const cardData = [
  {
    icon: <SlTrophy />,
    title: "Trading Competition",
    description:
      "Simulated Trading Account\n Trade NIFTY BANKNIFTY\n Futures Options\n Access to ZYON Tools\n Chance to Get Funded ",
    youtubeLink: "https://youtube.com",
    scrollTo: "feature-Trading-Competition",
  },
  {
    icon: <SiSimpleanalytics />,
    title: "Advanced Analytics",
    description:
      "Scanners Custom Alerts\n Option Analysis\n Real Time Market Breadth\n AI-Powered Insights\n Virtual AI assitant ",
    youtubeLink: "https://youtube.com",
    scrollTo: "feature-Market-Dashboard",
  },
  {
    icon: <GiPayMoney />,
    title: "Get Funded",
    description:
      "Win Challange->Get Fund \n Trade Insights Journaling\n Access to tools\n Build Consitency \n Leader board ",
    youtubeLink: "https://youtube.com",
    scrollTo: "feature-Funded-Account",
  },
  {
    icon: <LiaRobotSolid/>,
    title: "Algo Hub",
    description:
      "Forward Test Strategies\n  All Top Brokers\n Live Monitoring\n API available ",
    youtubeLink: "https://youtube.com",
    scrollTo: "feature-Fowrad -Testing",
  },
];

const CardSection = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
      {cardData.map((card, index) => (
        <FeatureCard key={index} {...card} />
      ))}
    </div>
  );
};

export default CardSection;