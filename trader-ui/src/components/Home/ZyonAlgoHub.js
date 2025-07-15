import { FaRobot, FaYoutube } from "react-icons/fa";
import SectionCard from "./SectionCard";

const faqData = [
  { question: "What is Zyon Algo Hub?", answer: "A platform to discover, test, and deploy trading algorithms." },
  { question: "Can I use my own algos?", answer: "Yes, you can integrate and backtest your own strategies." },
  { question: "Is there a fee?", answer: "Some algos are free, others may require a subscription." },
];

const ZyonAlgoHub = () => {
  return (
    <SectionCard
      icon={<FaRobot className="drop-shadow-lg shadow-green-500/30" />}
      title={"ZYON ALGO HUB"}
      faqData={faqData}
      sectionButton={<button className="bg-green-500 hover:bg-green-600 active:bg-green-500 text-white font-bold py-2 px-6 rounded transition-all duration-300 flex items-center">Explore Algos</button>}
      videoButton={<FaYoutube className="text-red-500 text-4xl transition-colors duration-200 cursor-pointer hover:scale-110" />}
    >
      <div className="flex gap-4 w-full">
        <div className="flex-1">
          <div className="text-gray-300 text-lg space-y-6">
            <h3 className="text-white font-semibold text-xl mb-3">Algo Hub</h3>
            <p>Discover, test, and deploy trading algorithms built by top quants and the Zyon community. Access a marketplace of strategies, performance analytics, and seamless integration with your virtual or live trading account.</p>
          </div>
        </div>
        <div className="w-[30%] relative overflow-hidden rounded-xl">
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
          <img src="/trader2/algos.png" alt="algo hub" className="shadow-xl rounded-xl w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
        </div>
      </div>
    </SectionCard>
  );
};

export default ZyonAlgoHub; 