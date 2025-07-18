import { FaTrophy, FaYoutube } from "react-icons/fa";
import SectionCard from "./SectionCard";

const faqData = [
  {
    question: "What is the Zyon Trading Competition?",
    answer: "It's a weekly, real-time trading simulation where you compete against other traders using virtual money and live market data. Top performers win rewards and may be shortlisted for Zyon's Funded Trading Desk."
  },
  {
    question: "When does the competition take place?",
    answer: "Each competition runs from Monday 9:15 AM to Friday 3:30 PM (IST). You can join any upcoming week's competition before Monday's market open."
  },
  {
    question: "What is the entry fee and prize?",
    answer: "The entry fee is ₹500. The weekly winner gets ₹10,000 worth of Zyon Coins. The Top 5 traders also receive 3 months of free access to the Zyon Paper Trading Premium plan."
  },
  {
    question: "What instruments can I trade?",
    answer: "You can trade: NIFTY, SENSEX, BANK NIFTY, Index Futures & Options, Stocks (cash segment only). Stock options are not allowed in the competition."
  },
  {
    question: "How many trades can I place daily?",
    answer: "You are allowed a maximum of 5 trades per day. This encourages focused and thoughtful trading over volume-based activity."
  },
  {
    question: "Can I hold trades overnight?",
    answer: "Yes. Overnight holding is allowed, just like in real-world trading."
  },
  {
    question: "Are there any risk rules I must follow?",
    answer: "Yes. We use prop-firm style risk controls: Max daily loss: ₹5,000, Max total drawdown: ₹10,000, Max 5 trades per day, No averaging down losing positions. Breaking any rule may lead to disqualification from the leaderboard."
  },
  {
    question: "How is the winner decided?",
    answer: "The trader with the highest net profit at the end of the week, while adhering to all rules, is declared the winner. We also review risk-adjusted performance."
  },
  {
    question: "How many accounts can I use in the competition?",
    answer: "You can create and use up to 5 accounts per user. Each account is tracked independently."
  },
  {
    question: "Can I participate in multiple competitions?",
    answer: "Yes! Zyon Trading Competitions run every week, and you're welcome to join as many as you like."
  },
  {
    question: "Can I track my rank in real time?",
    answer: "Yes. A live leaderboard is available throughout the competition so you can monitor your standing and adjust your strategy accordingly."
  },
  {
    question: "What happens after I win or perform well consistently?",
    answer: "Besides the prize, top and consistent performers are considered for our Zyon Funded Trading Desk — where selected traders can manage real capital with a profit-sharing model."
  },
  {
    question: "Is this legal and SEBI-compliant?",
    answer: "Yes. Zyon's competition is 100% legal. It uses virtual money and is skill-based, making it SEBI-compliant and free from any gambling classification."
  },
  {
    question: "Do I need a broker account to join?",
    answer: "No. You only need a Zyon account. The competition is fully simulated using live market data — no broker login or trading account is required."
  },
  {
    question: "What expiry contracts can I trade in the competition?",
    answer: "You can trade: Current week and next week expiry options, Current month and next month expiry futures and options. This flexibility allows you to pursue both short-term and positional strategies during the weekly competition."
  }
];

const ZyonChallenge = () => {
  return (
    <SectionCard
      icon={<FaTrophy className="drop-shadow-lg shadow-green-500/30" />}
      title={"ZYON WEEKLY CHALLENGE"}
      faqData={faqData}
      sectionButton={<button className="bg-green-500 hover:bg-green-600 active:bg-green-500 text-white font-bold py-2 px-6 rounded transition-all duration-300 flex items-center">Participate Now</button>}
      videoButton={<FaYoutube className="text-red-500 text-4xl transition-colors duration-200 cursor-pointer hover:scale-110" />}
    >
      {/* Image and main content */}
      <div className="flex gap-4 w-full">
        <div className="w-[30%] relative overflow-hidden rounded-xl">
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
          <img src="/trader/challenge.png" alt="challenge" className="shadow-xl rounded-xl w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
        </div>
        <div className="flex-1">
          <div className="text-gray-300 text-lg space-y-6">
            {/* Zyon Weekly Challenge Section */}
            <div>
              <h3 className="text-white font-semibold text-xl mb-3">Zyon Weekly Challenge</h3>
              <p className="mb-4">Every week, a new competition begins — starting Monday, ending Friday. With just ₹500 as the entry fee, you step into a high-stakes, real-time market simulation where discipline, skill, and strategy determine your edge.</p>
              <p className="mb-4">This isn't just for fun — it's your chance to compete like a prop trader and get rewarded for your performance.</p>
            </div>
            {/* Real-Time Leaderboard Section */}
            <div>
              <h4 className="text-green-400 font-semibold mb-3">📊 Real-Time Leaderboard</h4>
              <p className="mb-4">As you trade, your rank updates live. You'll see how you stack up against other traders — based on P&L, risk control, and consistency.</p>
              <p className="mb-4">This transparency creates accountability, motivation, and focus, pushing you to trade your plan, not your emotions.</p>
              <p className="mb-4">Think of it as your live scoreboard in a real-world trading arena.</p>
            </div>
            {/* Win & Get Funded Section */}
            <div>
              <h4 className="text-green-400 font-semibold mb-3">🏆 Win & Get Funded</h4>
              <p className="mb-4">The top performer each week wins ₹10,000 in Zyon Coins. But it doesn't stop there</p>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>The Top 5 traders also receive 3 months of <span className="font-bold">Free Paper Trading Premium</span> access to continue refining their skills.</li>
                <li>And if you consistently perform, you'll be reviewed for our Zyon Funded Trading Desk — where you get to trade with real capital.</li>
              </ul>
            </div>
            {/* Practice Pressure Trading Section */}
            <div>
              <h4 className="text-green-400 font-semibold mb-3">⚡ Practice Pressure Trading</h4>
              <p className="mb-4">Unlike paper trading where you go at your own pace, the competition environment simulates the psychological pressure of real trading:</p>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>Limited to 5 trades per day</li>
                <li>Must stay within daily and total drawdown limits</li>
                <li>Overnight positions allowed — just like live desks</li>
                <li>No room for reckless trading or revenge mindset</li>
              </ul>
              <p className="mt-3">You'll learn to stay calm, adapt, and think in probabilities — the traits that separate amateurs from professionals.</p>
            </div>
            {/* Fast Feedback Loop Section */}
            <div>
              <h4 className="text-green-400 font-semibold mb-3">🔄 Fast Feedback Loop</h4>
              <p className="mb-4">Every trade is tracked. At the end of the week, you'll know exactly where you stood — what worked, what didn't, and how close you were to winning.</p>
              <p>This weekly cycle builds your trading reflex, decision-making clarity, and execution speed — much faster than monthly practice cycles.</p>
            </div>
            {/* Designed for Real-World Trading Section */}
            <div>
              <h4 className="text-green-400 font-semibold mb-3">🎯 Designed for Real-World Trading</h4>
              <p className="mb-4">Zyon's competition structure is inspired by actual proprietary trading firm evaluation models. This isn't a game of high frequency or luck — it's about managing risk, showing consistency, and making smart bets.</p>
            </div>
            {/* From Simulation to Opportunity Section */}
            <div>
              <h4 className="text-green-400 font-semibold mb-3">🚀 From Simulation to Opportunity</h4>
              <p className="mb-4">For us, this isn't just a leaderboard. It's a scouting platform. We're watching — and when we find the right mindset and skill in a trader, we reach out.</p>
              <p className="font-semibold text-white">Your performance in the Trading Competition could be your ticket to a real trading career.</p>
            </div>
            {/* Participate Now Button */}
            <div className="mt-6">
              <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 flex items-center">
                <FaTrophy className="mr-2" />
                PARTICIPATE NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </SectionCard>
  );
};

export default ZyonChallenge; 
