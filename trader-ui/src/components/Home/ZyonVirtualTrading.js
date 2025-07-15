import { FaBrain, FaYoutube } from "react-icons/fa";
import SectionCard from "./SectionCard";

const faqData = [
  { question: "What is Zyon Virtual Trading?", answer: "A simulated trading environment with real market data and no risk." },
  { question: "Can I practice with real stocks?", answer: "Yes, you can trade all supported instruments in simulation mode." },
  { question: "Is there a leaderboard?", answer: "Yes, compete with others and track your progress in real time." },
];

const ZyonVirtualTrading = () => {
  return (
    <SectionCard
      icon={<FaBrain className="drop-shadow-lg shadow-green-500/30" />}
      title={"ZYON VIRTUAL TRADING"}
      faqData={faqData}
      sectionButton={<button className="bg-green-500 hover:bg-green-600 active:bg-green-500 text-white font-bold py-2 px-6 rounded transition-all duration-300 flex items-center">Start Trading</button>}
      videoButton={<FaYoutube className="text-red-500 text-4xl transition-colors duration-200 cursor-pointer hover:scale-110" />}
    >
      <div className="flex gap-4 w-full">
        <div className="w-[30%] relative overflow-hidden rounded-xl">
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
          <img src="/trader2/education.png" alt="virtual trading" className="shadow-xl rounded-xl w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
        </div>
        <div className="flex-1">
          <div className="text-gray-300 text-lg space-y-6">
            <h3 className="text-white font-semibold text-xl mb-3">Virtual Trading</h3>
            <p>Practice trading in a risk-free environment with real market data. Test your strategies, build confidence, and compete on the leaderboard before going live.</p>
          </div>
        </div>
      </div>
    </SectionCard>
  );
};

export default ZyonVirtualTrading; 