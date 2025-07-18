import { GiVintageRobot } from "react-icons/gi";
import { BsGraphUp } from "react-icons/bs";
import { SlTrophy } from "react-icons/sl";
import { FaGraduationCap, FaMoneyBillWave } from "react-icons/fa";

const featureSectionData = [
  {
    id: "feature-Trading-Competition",
    title: "Trading Challenge",
    subtitle: "Win Your Way To Funding",
    icon: <SlTrophy />,
    youtubeLink: "dQw4w9WgXcQ",
    shots: [
      "/trader/shots/watchlist.png",
      "/trader/shots/positions.png",
      "/trader/shots/baskets.png",
      "/trader/shots/baskets_2.png",
      "/trader/shots/market_analysis.png",
      "/trader/shots/option_analysis_2.png",
      "/trader/shots/option_chain.png",
      "/trader/shots/analyse.png",
    ],
    sections: [
      {
        heading: "Weekly Trading Competition ",
        paragraphs: [
          "Every Monday to Friday, trade in a high-stakes virtual environment with ₹500 entry fee.",
          "Trade index derivatives with real-time market data and leaderboard pressure.",
        ],
      },
      {
        heading: "Margin Calcualtion",
        paragraphs: [
          "Margins are calculated  like the same way in real time like actual margin requirement.",
          "You will start with Rs 1000000 or 10 Lac as virtual capital (a.k.a) margin and it will go up or down as you make profit and loss.",
        ],
      },
      {
        heading: "Stocks, Options & Futures",
        paragraphs: [
          "Trade stocks, futures and indexoptions like NIFTY, BANKNIFTY, and SENSEX using real-time feeds.",
          "Master how premiums move with volatility, time decay, and OI buildup.",
        ],
      },
      {
        heading: "Real-Time Leaderboard",
        paragraphs: [
          "Watch your rank move live based on P&L and risk control.",
          "Learn to stick to plans and stay consistent under time pressure.",
        ],
      },
      {
        heading: "Win & Get Funded",
        paragraphs: [
          "Top performer wins ₹10,000 Zyon Coins, top 5 get premium access.",
          "You may be shortlisted for Zyon's Funded Trading Desk.",
        ],
      },
      {
        heading: "Realtime Option trading -using virtual capital",
        paragraphs: [
          "Max 5 trades/day, overnight allowed, strict drawdown rules.",
          "Build your reflex and confidence under stress.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is the Weekly Trading Competition?",
        answer:
          "It’s a 5-day simulated trading event using real market data where traders compete for the top spot based on performance and risk management.",
      },
      {
        question: "When does the competition run?",
        answer:
          "It starts every Monday at 9:15 AM IST and ends on Friday at 3:30 PM IST. You can enter anytime during the week before the deadline.",
      },
      {
        question: "What is the entry fee?",
        answer:
          "You can join by paying ₹500 using UPI or card. This goes towards prize pools, infra costs, and evaluation.",
      },
      {
        question: "What are the rules of the competition?",
        answer:
          "Rules include:\n• Max 5 trades/day\n• No averaging down\n• Daily drawdown and overall loss limits\n• Overnight trades allowed\n• No external broker login needed",
      },
      {
        question: "What’s the prize for winners?",
        answer:
          "Top trader gets ₹10,000 in Zyon Coins. The top 5 are offered premium access and may get shortlisted for Zyon’s Funded Account challenge.",
      },
      {
        question: "What’s Zyon coin and how to use it ?",
        answer:
          "Zyon coins are credit to get  funded account, you get 10000 Zyon coin and you get funded to trade in our account you real money with upto 80% profit split to trader.",
      },
      {
        question: "What instruments can I trade during the competition?",
        answer:
          "You can trade index options and futures: NIFTY, BANK NIFTY, and SENSEX. Stock options are not allowed for now.",
      },
      {
        question: "How is performance ranked?",
        answer:
          "Leaderboards consider:\n• Net P&L\n• Risk management\n• Consistency and drawdown control",
      },
      {
        question: "Can I see other traders’ performance?",
        answer:
          "Yes. Leaderboards are public and refresh live with rankings and key stats.",
      },
      {
        question: "What is the consistency rule in the competition?",
        answer:
          "The consistency rule ensures traders don’t rely on one lucky trade. You must maintain performance over multiple days,\nFor example, profits should not be made on just a single trade or day — consistent risk-adjusted returns are favored in leaderboard rankings and funding selection.",
      },
      {
        question: "Why use consitency rules ?",
        answer:
          "At Zyon we strive to make you a  funded trader and grow,these rules are not  limitations its your path to success\n These rules are inspired by global HEDGE fund and funded  programs\n This makes you disciplined and  good trader in future  ",
      },
      {
        question: "What if I break the rules during competition?",
        answer:
          "Accounts violating trading rules may be disqualified or not considered for funding — even if P&L is positive, but you can still parctice till the competition ends ",
      },
      {
        question:
          "I have made my payment in the midweek can I enter the competition?",
        answer:
          "No you can subscribe  HE HE who refuses money , but you will be allowed to get into the competition only starting next week",
      },
      {
        question: "Is this good for beginners?",
        answer:
          "Yes  but serious. You’ll face real-time market speed and structured limits. It’s a great way to test mindset and skills under pressure.",
      },
    ],
  },
  {
    id: "feature-Market-Dashboard",
    title: "Advanced Analytics",
    subtitle: "Tools, Data & AI-Driven Insights",
    icon: <BsGraphUp />,
    youtubeLink: "dQw4w9WgXcQ",
    shots: [
      "/trader/shots/market_analysis.png",
      "/trader/shots/market_analysis2.png",
      "/trader/shots/market_analysis3.png",
      "/trader/shots/market_analysis_4.png",
      "/trader/shots/market_analysis_5.png",
      "/trader/shots/option_analysis_1.png",
      "/trader/shots/option_analysis_2.png",
      "/trader/shots/option_chain.png",
      "/trader/shots/analyse.png",
    ],
    sections: [
      {
        heading: "Real-Time Market Dashboard",
        paragraphs: [
          "Get live market data, option chain analytics, and OI changes in one comprehensive dashboard.",
          "Track market breadth, put-call ratios, and institutional flow patterns.",
        ],
      },
      {
        heading: "Advanced Option Analytics",
        paragraphs: [
          "Real-time Greeks, IV skew, and option flow analysis.",
          "Identify unusual options activity and institutional positioning.",
        ],
      },
    ],
    faqs: [
      [
        {
          question: "What kind of option data is shown?",
          answer:
            "Zyon’s dashboard displays strike-level open interest (OI), changes in OI, volume, implied volatility, and price movement in real-time.",
        },
        {
          question: "How often is the data updated?",
          answer:
            "All option analytics data is updated in real time — you’ll see live OI shifts, PCR changes, and price behavior without delay.",
        },
        {
          question: "Can I use this data for intraday trading?",
          answer:
            "Yes. Traders use this dashboard to spot buildup, unwinding, long/short traps, and momentum shifts in real time.",
        },
        {
          question: "Is this data available for all index and stocks ?",
          answer:
            "No. Currently, the dashboard only supports index options like NIFTY and BANK NIFTY , SENSEX. Stock option analytics are not included.",
        },
        {
          question: "Do I need coding knowledge to understand it?",
          answer:
            "No. The analytics are visualized using heatmaps, trend markers, and simplified signals — no technical background needed.",
        },
        {
          question: "Can I export or view historical analytics?",
          answer:
            "Historical views are coming soon. For now, the dashboard is optimized for live market tracking and fast intraday decisions.",
        },
      ],
    ],
  },
  {
    id: "feature-Paper-Trading",
    title: "Learn, Get Funded",
    subtitle: "Train • Track • Trade • Win",
    icon: <FaGraduationCap />,
    youtubeLink: "dQw4w9WgXcQ",
    shots: [
      "/trader/shots/watchlist.png",
      "/trader/shots/positions.png",
      "/trader/shots/market_analysis3.png",
      "/trader/shots/option_analysis_1.png",
      "/trader/shots/option_chain.png",
      "/trader/shots/analyse.png",
    ],
    sections: [
      {
        heading:
          "Index Options Furures Stocks trade with virtual capital-Paper Trading ",
        paragraphs: [
          "All trades are simulated using live NSE market data, option chain updates, open interest, and real-time execution behavior.",
          "No delays or hypothetical numbers — just the market as it moves.",
        ],
      },
      {
        heading: "Zero Risk Learning",
        paragraphs: [
          "Get ₹10,00,000 in virtual capital and build your strategy without risking real money.",
          "Make mistakes, iterate, and grow — the best traders are trained, not born.",
        ],
      },
      {
        heading: "Perform & Get Funded",
        paragraphs: [
          "Demostrate your skills, follow the rules and prove your can trade with consistency.",
          "Get a funded account with real money and share the profits.",
        ],
      },
      {
        heading: "Built for Serious Traders",
        paragraphs: [
          "Simulated with prop firm style rules: daily loss limits, drawdowns, trade caps, and overnight holding.",
          "Discipline, consistency, and real-world trading mindset — all baked in.",
        ],
      },
      {
        heading: "Trade Journaling & Self-Analysis",
        paragraphs: [
          "Auto-logged trades, entry/exit reasoning, and P&L reviews are all accessible.",
          "You review, refine, and evolve every week.",
        ],
      },
      {
        heading: "Master the Psychology",
        paragraphs: [
          "Experience emotions like greed and fear without real loss.",
          "Train your mindset to think like a capital allocator.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is paper trading?",
        answer:
          "Paper trading is simulated trading using virtual money and live market data. It helps you learn trading, test strategies, and gain experience without risking real capital.",
      },
      {
        question: "Is Zyon’s paper trading live or delayed?",
        answer:
          "Zyon offers real-time market data for paper trading. Your trades reflect actual market conditions with live prices, option chain updates, and bid/ask spreads.",
      },
      {
        question: "What instruments can I trade in paper trading?",
        answer:
          "You can trade:\n• Index Options: NIFTY, SENSEX, BANK NIFTY\n• Index Futures\n• Stocks (Cash Segment)\n❌ Note: Stock options are not available in basic paper trading or competitions.",
      },
      {
        question: "How much virtual capital do I get?",
        answer:
          "Every user starts with ₹10,00,000 in virtual capital, giving you plenty of space to experiment, learn, and grow.",
      },
      {
        question: "Do I need a broker account to use Zyon?",
        answer:
          "No. Zyon operates independently of any broker. Just sign up and start trading in our real-time paper trading environment.",
      },
      {
        question: "Can I lose real money on Zyon?",
        answer:
          "No. All trades on Zyon are simulated. You trade with virtual money, so there is zero risk to your real funds.",
      },
      {
        question: "What makes Zyon different from other demo platforms?",
        answer:
          "Zyon isn’t just a charting tool — it’s a complete simulated trading ecosystem with:\n• Live data\n• Option analytics\n• Risk rules like prop firms\n• Competitions\n• Career opportunities for top performers",
      },
      {
        question: "Is paper trading useful if I already have experience?",
        answer:
          "Yes. Advanced traders use Zyon to:\n• Practice new setups\n• Adjust to market volatility\n• Backtest discretionary strategies\n• Build consistency without risking money",
      },
      {
        question: "Can I access option Greeks while paper trading?",
        answer:
          "Yes. Zyon displays real-time option Greeks like Delta, Theta, Gamma, Vega — helping you learn the mechanics behind options pricing and risk.",
      },
      {
        question: "Are there any trading rules I need to follow?",
        answer:
          "Yes, we simulate real-world trading discipline:\n• ✅ Max 5 trades per day\n• ✅ Daily loss and overall drawdown limits\n• ✅ Overnight holding is allowed\n• ❌ No averaging down on losing trades",
      },
      {
        question: "How many accounts can I create?",
        answer:
          "You can create up to 5 paper trading accounts per user. This allows you to test multiple strategies or trade styles simultaneously.",
      },
      {
        question: "What happens after I perform well in paper trading?",
        answer:
          "Top performers are shortlisted for our Zyon Funded Trading Desk. If selected, you’ll get real capital to trade and share profits — no upfront payment required.",
      },
      {
        question: "Can I download trade reports or journal my trades?",
        answer:
          "Yes. Every trade you place is logged. You can review your entry/exit, PnL, and behavioral patterns to continuously improve.",
      },
      {
        question: "Is there a leaderboard or performance ranking?",
        answer:
          "Yes! Zyon has a public leaderboard showing rankings based on profit, risk management, and consistency — helping serious traders build credibility.",
      },
      {
        question: "Is this available on mobile?",
        answer:
          "Yes, the Zyon platform is fully responsive and compatible with mobile devices. You can access it via your mobile browser with full functionality — no app download needed.",
      },
      {
        question:
          "What’s the difference between Paper Trading and the Trading Competition?",
        answer:
          "While both are powered by real-time market data, they serve different purposes and run on different timelines.",
      },
    ],
  },

  {
    id: "feature-Fowrad -Testing",
    title: "Algo Hub",
    subtitle: "Automate • Test • Deploy",
    icon: <GiVintageRobot />,
    youtubeLink: "dQw4w9WgXcQ",
    shots: [
      "/trader/shots/watchlist.png",
      "/trader/shots/positions.png",
      "/trader/shots/broker_1.png",
      "/trader/shots/broker_2.png",
    ],
    sections: [
      {
        heading: "Forward Test Your Algos with Live Market Data",
        paragraphs: [
          "Run your trading algo in a real-time market simulation. Monitor trades, behavior, and execution quality  — just like a live environment, but without risking capital.",
          "Great for scalping, breakout, or statistical arbitrage algo that need to react to market movements as they happen.",
        ],
      },
      {
        heading: "Live Option Chain, Futures, and Stock Feed",
        paragraphs: [
          "Use the full  index options, futures, and selected stocks — in your strategy logic.",
          "Live  Greeks, and price levels are available for algo to react contextually.",
        ],
      },
      {
        heading: "Simulated Margin & Risk Environment",
        paragraphs: [
          "Every algo is evaluated with realistic risk parameters: margin usage, order sizes, drawdown, and trade caps.",
          "Helps to forward test youur algos which you find successful in your backtest",
        ],
      },
      {
        heading:
          "Daily proffit and loss statement of your algo , using virtual capital",
        paragraphs: [
          "Get structured data of  order placements, trade journals of the algo ",
          "Track key performance metrics — PnL, win ratio, average hold time — and debug issues with clarity.",
        ],
      },
      {
        heading: "Infra Flexibility for Developers",
        paragraphs: [
          "Run your Algos in our server we take care of the all infra and configuration",
          "Our API allows you to integrate live feed and submit virtual orders securely.",
        ],
      },
      {
        heading: "Free Templates to Get Started",
        paragraphs: [
          "Use our starter kits and open-source templates to deploy your first logic in minutes.",
          "Whether you're testing moving average crossovers or machine-learning setups, we help you hit the ground running.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is Algo Forward Testing?",
        answer:
          "Algo Forward Testing is a simulation process where your algorithm is run using real-time market data, mimicking how it would behave in a live trading environment without risking real capital.",
      },
      {
        question: "How is this different from backtesting?",
        answer:
          "Backtesting uses historical data, which may not account for slippage or execution delay. Forward testing uses live data, providing a more realistic view of your algo’s performance.",
      },
      {
        question: "Do I need coding knowledge?",
        answer:
          "Yes. You need to bring your trading logic in code format, typically using Python or JavaScript-compatible SDKs. We will offer documentation and basic templates.",
      },
      {
        question: "Can I place real trades using forward testing?",
        answer:
          "No. This is a simulation environment only. You can connect with broker APIs if allowed, but execution is virtual.",
      },
      {
        question: "Is slippage included?",
        answer:
          "Slippage is approximated based on live bid-ask spreads. However, no execution latency is injected unless specifically coded by you.",
      },
      {
        question: "Can I monitor logs or metrics?",
        answer:
          "Yes. Your algo's performance, decision logs, and signal frequency can be monitored from the dashboard in near real time.",
      },
      {
        question: "Is option data included in algo feed?",
        answer:
          "Yes. You get access to live option chains, Greeks, and open interest, just like manual traders.",
      },
      {
        question: "Can I test multiple strategies?",
        answer:
          "Yes. You can create and deploy multiple strategies in parallel, each with separate virtual capital and analytics.",
      },
      {
        question: "Can I use my own infra?",
        answer: "This feature is ubder development ",
      },
      {
        question: "Do you provide sample algos?",
        answer:
          "Yes. We provide starter strategies, templates, and SDK documentation so that you can begin testing quickly.",
      },
    ],
  },
  {
    id: "feature-Funded-Account",
    title: "Get Funded",
    subtitle: "Trade With Real Capital",
    icon: <FaMoneyBillWave className="font-bold" />,
    youtubeLink: "dQw4w9WgXcQ",
    shots: [
      "/trader/shots/market_analysis.png",
      "/trader/shots/market_analysis2.png",
      "/trader/shots/market_analysis3.png",
      "/trader/shots/market_analysis_4.png",
      "/trader/shots/market_analysis_5.png",
      "/trader/shots/option_analysis_1.png",
      "/trader/shots/option_analysis_2.png",
      "/trader/shots/option_chain.png",
      "/trader/shots/analyse.png",
    ],
    sections: [
      {
        heading: "Two-Phase Funding Path",
        paragraphs: [
          "Step 1: Complete the Zyon Challenge with ₹10L virtual capital and strict rules.",
          "Step 2: Get a ₹1L live account with 70% profit share and real brokerage applied.",
        ],
      },
      {
        heading: "Fair Evaluation Rules",
        paragraphs: [
          "No overnight holding, news trading, or scalping. Minimum 1-min hold per trade.",
          "Meet all profit targets without breaching risk rules.",
        ],
      },
      {
        heading: "No Capital Risk",
        paragraphs: [
          "Traders keep 70% profits while Zyon handles losses and infra.",
          "Just show skill, structure, and consistency to stay eligible.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is Zyon's Funded Trader Program?",
        answer:
          "It’s a 2-phase evaluation model where you start with ₹10L virtual capital to prove your consistency.\nIf you pass, you get a ₹1L live trading account with  starting with 70% profit share and no capital risk.",
      },
      {
        question: "What Changes when I get funded ?",
        answer:
          "You start trading in our account with real money .\n 70 to 30 percent trader to Zyon profit sharing model",
      },
      {
        question: "What is the maximum fund that I can get  ?",
        answer:
          "You depending on the consistency you can get a funded account of Rs 10 Lac",
      },
      {
        question: "What about brokerage exchange charges  ?",
        answer:
          "In first phase 10 lac virtual account there is no fees , in funded account the P&L is derived after all the charges ",
      },
      {
        question: "What are the two phases in the funded program?",
        answer:
          "Phase 1 is the Challenge with paper capital and strict rules.\nPhase 2 is the Verification with more relaxed rules.\nPassing both earns you a live account.",
      },
      {
        question: "How much does the funded challenge cost?",
        answer:
          "The entry fee for the challenge is ₹1,500.\nIt is a one-time fee per attempt for a 30-day challenge account.",
      },
      {
        question: "How long does the challenge period last?",
        answer:
          "You get 30 calendar days to complete Phase 1 of the challenge.\nAfter passing, Phase 2 (Verification) gives you another 30 days.",
      },
      {
        question: "How much profit do I need to make?",
        answer:
          "To pass the Challenge, you must reach a target of 6% profit (₹60,000) without breaking the rules.\nIn Verification, the target is 4% (₹40,000).",
      },
      {
        question: "What are the drawdown rules?",
        answer:
          "Maximum daily drawdown: ₹20,000 (2%)\nMax total drawdown: ₹50,000 (5%)\nBreaching these rules results in disqualification.",
      },
      {
        question: "Can I hold trades overnight?",
        answer:
          "No. Overnight holding is strictly prohibited.\nAll positions must be squared off before the market closes each day.",
      },
      {
        question: "Can I trade during news events?",
        answer:
          "No. Trading during major economic news releases is not allowed.\nZyon will notify you about restricted windows via dashboard alerts and emails.",
      },
      {
        question: "How many trades can I place per day?",
        answer:
          "You can place a maximum of 5 trades per day.\nThis enforces discipline and strategy-based execution.",
      },
      {
        question: "Is averaging allowed?",
        answer:
          "No. You cannot average down on losing positions.\nEach trade must stand on its own merit.",
      },
      {
        question: "Are there minimum trading days?",
        answer:
          "Yes. You must trade for at least 10 distinct days during the 30-day challenge\nto be eligible for evaluation.",
      },
      {
        question: "What are the instrument restrictions?",
        answer:
          "Only index derivatives (NIFTY, BANK NIFTY, SENSEX) are allowed.\nNo stock options or futures are permitted in the challenge.",
      },
      {
        question: "Can I scalp the market?",
        answer:
          "No. Scalping is discouraged.\nYou must hold each trade for a minimum of 1 minute to qualify.",
      },
      {
        question: "Are there consistency rules?",
        answer:
          "Yes. Your largest profitable day should not account for more than 40% of total profits —\nto ensure consistent trading behavior.",
      },

      {
        question: "What happens if I break a rule?",
        answer:
          "Any violation (e.g., crossing drawdown, overtrading, breaching holding time)\nleads to immediate disqualification from that challenge attempt.",
      },
      {
        question: "What do I get after passing both phases?",
        answer:
          "You’ll receive a ₹1L real brokerage account to trade with\nand a 70% profit-sharing model — Zyon covers losses and infra.",
      },
      {
        question: "Can I retry if I fail?",
        answer:
          "Yes. You can attempt the challenge as many times as you want.\nEach retry costs ₹1,500.",
      },
      {
        question:
          "All the rules seems to be too stiff do you really want me to pass? ",
        answer:
          "At Zyon we want to make disciplined traders not Hero Zero gamblers .\n These rules are for mutual benefit ",
      },
    ],
  },
];

export default featureSectionData;
