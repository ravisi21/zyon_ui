import { FaChartLine, FaYoutube } from "react-icons/fa";
import SectionCard from "./SectionCard";

const faqData = [
  { question: "What is Zyon Pro Analytics?", answer: "A suite of advanced analytics tools for market and strategy insights." },
  { question: "Can I analyze my own trades?", answer: "Yes, you can upload or sync your trades for deep analytics." },
  { question: "Is real-time data available?", answer: "Yes, analytics are powered by live market data." },
];

const ZyonAnalytics = () => {
  return (
    <SectionCard
      icon={<FaChartLine className="drop-shadow-lg shadow-green-500/30" />}
      title={"ZYON PRO ANALYTICS"}
      faqData={faqData}
      sectionButton={<button className="bg-green-500 hover:bg-green-600 active:bg-green-500 text-white font-bold py-2 px-6 rounded transition-all duration-300 flex items-center">Start Analyzing</button>}
      videoButton={<FaYoutube className="text-red-500 text-4xl transition-colors duration-200 cursor-pointer hover:scale-110" />}
    >
      <div className="flex gap-4 w-full">
        <div className="flex-1">
          <div className="text-gray-300 text-lg space-y-6">
            <h3 className="text-white font-semibold text-xl mb-3">Pro Analytics</h3>
            <p>Unlock deep insights into market trends, trading strategies, and your own performance. Visualize data, backtest ideas, and make smarter trading decisions with Zyon's analytics suite.</p>
          </div>
        </div>
        <div className="w-[30%] relative overflow-hidden rounded-xl">
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
          <img src="/trader2/analytics.png" alt="analytics" className="shadow-xl rounded-xl w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
        </div>
      </div>
    </SectionCard>
  );
};

export default ZyonAnalytics; 