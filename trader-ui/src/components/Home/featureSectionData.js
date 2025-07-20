import { GiVintageRobot } from "react-icons/gi";
import { BsGraphUp } from "react-icons/bs";
import { SlTrophy } from "react-icons/sl";
import { FaGraduationCap } from "react-icons/fa";

const featureSectionData = [
  {
    id: "feature-Trading-Competition",
    title: "Trading Challenge",
    subtitle: "Win Your Way To Funding",
    icon: <SlTrophy />,
    followUpAction: "challenge",
    youtubeLink: "dQw4w9WgXcQ",
    shots: [
      `${process.env.PUBLIC_URL}/shots/watchlist.png`,
      `${process.env.PUBLIC_URL}/shots/positions.png`,
      `${process.env.PUBLIC_URL}/shots/baskets.png`,
      `${process.env.PUBLIC_URL}/shots/baskets_2.png`,
      `${process.env.PUBLIC_URL}/shots/market_analysis.png`,
      `${process.env.PUBLIC_URL}/shots/option_analysis_2.png`,
      `${process.env.PUBLIC_URL}/shots/option_chain.png`,
      `${process.env.PUBLIC_URL}/shots/analyse.png`,
    ],
    sections: [
      {
        heading: "Weekly Trading Competition",
        paragraphs: [
          "Compete every Monday to Friday in a high-stakes virtual trading environment with just a ₹199 entry fee.",
          "Trade index derivatives using real-time market data under the pressure of a live leaderboard.",
        ],
      },
      {
        heading: "Margin Calculation",
        paragraphs: [
          "Margins are calculated just like in real markets, reflecting actual margin requirements.",
          "Start with ₹10,00,000 (10 Lac) in virtual capital. Your margin grows or shrinks with your trading performance.",
        ],
      },
      {
        heading: "Win & Get Funded",
        paragraphs: [
          "Top 5 traders receive free entry to Funded Challenge track ",
          "Top 10 traders receive free entry to next week's competition.",
          "Outstanding participants may be shortlisted for Direct Funding to trade with real capital.",
        ],
      },
      {
        heading: "Stocks, Options & Futures",
        paragraphs: [
          "Trade stocks, index options, and futures like NIFTY, BANKNIFTY, and SENSEX — all using real-time data feeds.",
          "Master the impact of volatility, time decay, and open interest on premium movement.",
        ],
      },
      {
        heading: "Real-Time Leaderboard",
        paragraphs: [
          "Track your live ranking based on profit & loss and risk discipline.",
          "Learn to follow your trading plan and maintain consistency under time pressure.",
        ],
      },

      {
        heading: "Real-Time Options Trading (Virtual Capital)",
        paragraphs: [
          "Make up to 5 trades per day. Overnight positions allowed. Strict drawdown rules apply.",
          "Sharpen your reflexes and build confidence under real market stress—without real risk.",
        ],
      },
      {
        heading: "Consistency Rules for Getting Funded",
        paragraphs: [
          "Zyon rewards consistent, disciplined traders — not one-time lucky winners. These rules simulate real-world professional trading standards and help you build a credible track record.",
          "Follow these during the Weekly Trading Competition to qualify for the leaderboard and funding track.",
        ],
        table: {
          headers: ["Rule", "Value / Limit", "Why It Matters"],
          rows: [
            [
              "Minimum Trading Days",
              "3 out of 5 days/week",
              "Prevents winning based on a single lucky trade day",
            ],
            [
              "Max Profit in Single Day",
              "≤ 30% of total weekly profit",
              "Encourages steady returns instead of high-risk spikes",
            ],
            [
              "Max Daily Loss",
              "2% of virtual capital (₹20,000)",
              "Controls risk and builds capital preservation habits",
            ],
            [
              "Max Total Weekly Loss",
              "5% of virtual capital (₹50,000)",
              "Avoids large drawdowns and reckless revenge trading",
            ],
            [
              "Minimum Weekly Profit Target",
              "2% of capital (₹20,000)",
              "Sets realistic benchmarks to qualify for funding",
            ],
            [
              "Max Trades Per Day",
              "5 trades/day",
              "Reduces overtrading and forces quality decision-making",
            ],
            [
              "Max Position Size",
              "₹2,00,000 (20% of capital)",
              "Teaches position sizing and risk allocation",
            ],
            [
              "No Averaging Down",
              "Only scale in profitable direction",
              "Discourages gambling behavior and revenge trades",
            ],
            [
              "Overnight Positions",
              "Allowed",
              "Provides flexibility to simulate real strategies",
            ],
            [
              "Bonus Journaling",
              "Trade notes/screenshots encouraged",
              "Helps self-review and mimics pro trader habits",
            ],
          ],
        },
      },
      {
        heading: "Examples: Who Qualifies and Who Doesn't",
        paragraphs: [
          "Here are example profiles of traders and how their weekly performance aligns (or fails) with Zyon's consistency rules. This helps you understand what behaviors lead to funding eligibility — and what doesn't.",
          "Remember, it's not about how big your profit is, it's how consistently and professionally you trade.",
        ],
        table: {
          headers: ["Trader", "What They Did", "Fundable? Why?"],
          rows: [
            [
              "Trader A",
              "Traded 4 days, earned ₹6K, ₹7K, ₹4K, ₹5K. Max daily P&L = 35%. No rule violations.",
              "✅ Yes – Consistent profits, met trading day and drawdown rules.",
            ],
            [
              "Trader B",
              "Made ₹50K in one day, didn't trade rest of week. Total P&L = ₹50K.",
              "❌ No – Violates consistency rule: 1-day profit = 100% of week's P&L.",
            ],
            [
              "Trader C",
              "Traded all 5 days, risked ₹5L in one trade, hit ₹30K profit.",
              "❌ No – Violates max position size and poor risk control.",
            ],
            [
              "Trader D",
              "Loss of ₹22K on Day 1 (2.2%), continued with discipline, ended week at +₹28K.",
              "✅ Yes – Minor drawdown, recovered with steady gains. Good behavior.",
            ],
            [
              "Trader E",
              "Traded only Monday. Hit ₹25K profit in 1 trade. No activity after.",
              "❌ No – Not enough trading days. One-off spike is not fundable.",
            ],
            [
              "Trader F",
              "Traded 3 days, 5 trades/day. Used ₹1.5L per trade. Net profit ₹22K.",
              "✅ Yes – Follows all rules: days, position size, profit target, behavior.",
            ],
          ],
        },
      },
      {
        heading: "Example: Big Profit With Consistency",
        paragraphs: [
          "Making a big profit doesn't disqualify you — as long as it is done with discipline, proper risk control, and without violating Zyon's consistency framework.",
          "Here's a sample performance that shows how a trader made a strong profit, yet stayed eligible for funding.",
        ],
        table: {
          headers: ["Day", "P&L", "Notes", "Rule Violated?"],
          rows: [
            ["Monday", "+₹8,000", "2 trades, risk per trade ₹3K", "✅ No"],
            [
              "Tuesday",
              "+₹12,000",
              "Max position ₹1.8L, max daily profit <30%",
              "✅ No",
            ],
            [
              "Wednesday",
              "+₹30,000",
              "Strong trend catch, still <30% of total profit",
              "✅ No",
            ],
            ["Thursday", "₹0", "No trades taken — no setup", "✅ No"],
            ["Friday", "+₹5,000", "Took 1 safe breakout trade", "✅ No"],
          ],
        },
      },
      {
        heading: "Case Study: Hitting Profit Target in One Day",
        paragraphs: [
          "A trader made ₹20,000 (2% of ₹10L) in a single day, hitting the weekly profit target. However, this does NOT automatically make them eligible for funding.",
          "Zyon's consistency rule requires traders to demonstrate performance over multiple trading days to avoid one-off lucky wins. Let's break it down below.",
        ],
        table: {
          headers: ["Day", "P&L", "Activity", "Rule Violated?"],
          rows: [
            ["Monday", "+₹20,000", "One large winning trade", "✅ No"],
            ["Tuesday", "₹0", "No trades placed", "❌ Yes – Not active"],
            ["Wednesday", "₹0", "No trades placed", "❌ Yes – Not active"],
            ["Thursday", "₹0", "No trades placed", "❌ Yes – Not active"],
            ["Friday", "₹0", "No trades placed", "❌ Yes – Not active"],
          ],
        },
      },
      {
        heading: "Why Zyon Enforces These Rules",
        paragraphs: [
          "At Zyon, our mission is not just to run competitions — it's to help you become a consistent, disciplined, and professional trader.",
          "The rules we enforce — like daily loss limits, minimum trading days, position sizing, and avoiding over-leveraging — are based on global best practices used by hedge funds and proprietary trading desks.",
          "These are not limitations, they are a path to becoming reliable and fundable.",
          "Consistent trading over multiple days builds the habits of patience, discipline, and system-following. This is what makes long-term traders successful.",
          "We've seen that traders who win based on one or two high-risk trades usually blow up accounts when real money is involved. Zyon's rules protect you from becoming that trader.",
          "By sticking to the rules, you show that you are not just lucky — you are skilled, repeatable, and ready for capital allocation.",
          "In the real world, capital is given to those who manage risk first, and profit second. That's what Zyon prepares you for.",
        ],
        hidden: [
          "Consistent trading over multiple days builds the habits of patience, discipline, and system-following. This is what makes long-term traders successful.",
          "We've seen that traders who win based on one or two high-risk trades usually blow up accounts when real money is involved. Zyon's rules protect you from becoming that trader.",
          "By sticking to the rules, you show that you are not just lucky — you are skilled, repeatable, and ready for capital allocation.",
          "In the real world, capital is given to those who manage risk first, and profit second. That's what Zyon prepares you for.",
        ],
      },
      {
        heading: "Zyon Rules Are Built To Protect You",
        paragraphs: [
          "At Zyon, our rules aren't there to punish you or stop your progress. We've designed these structures because we truly want traders to succeed — not just for a week, but for a lifetime. Every rule is shaped by years of observing what works in real-world professional trading and what ruins careers.",
        ],
      },
      {
        heading: "Trading Is a Business, Not a Gamble",
        paragraphs: [
          "We've seen it too often — a trader makes a huge gain, gets overconfident, and then loses it all in the next trade. That's not trading. That's gambling. Zyon's consistency rules stop you from slipping into this hero-zero trap. They teach you to manage risk, think long-term, and build habits that mirror how actual hedge fund traders operate.",
          "We're not here to promote competitions just to earn from entry fees. We're here to help you treat trading like a business — with structure, rules, and repeatable processes.",
        ],
      },
      {
        heading: "We've Watched Talented Traders Burn Out",
        paragraphs: [
          "Many of the most passionate traders blow up not because they're bad — but because no one showed them a better path. They take loans to trade, blow their savings, and are left emotionally wrecked. Zyon's rules are here to prevent that from happening to you.",
          "By enforcing position sizing, risk limits, and trading frequency caps, we keep you away from burnout and force you to think like a pro — with a calm, calculated mindset.",
        ],
      },
      {
        heading: "We Want You To Build a Career — Not Chase a Jackpot",
        paragraphs: [
          "Our mission is simple: help you get consistently funded, and build trading into a long-term career — not a short-term adrenaline rush. Zyon's platform isn't about quick wins or one lucky week. It's about real growth, real performance, and real futures.",
          "Follow the rules, build your consistency, and prove your system. We'll be the first to give you funding — and more as you grow.",
        ],
      },
      {
        heading: "What Happens If You Ignore These Rules?",
        paragraphs: [
          "Our rules may seem strict, but they exist to protect you from classic trading mistakes that can destroy your capital, mindset, and confidence. Here are real-world inspired examples of what goes wrong when traders break them:",
        ],
        table: {
          headers: ["Scenario", "What Trader Did", "What Went Wrong"],
          rows: [
            [
              "One-Day Jackpot",
              "Trader hit ₹30K profit on Monday, stopped trading for rest of week",
              "Showed no consistency, couldn't handle different market conditions — not ready for funding",
            ],
            [
              "Overconfidence Burnout",
              "Trader risked ₹5L on one trade, made ₹20K in 5 minutes",
              "Broke position size and risk limits — ended up blowing account next day due to overleverage",
            ],
            [
              "Revenge Trading Spiral",
              "Lost ₹18K in morning, took 3 more impulsive trades to recover",
              "Crossed daily loss limit, showed lack of discipline — disqualified from leaderboard",
            ],
            [
              "Averaging Down Disaster",
              "Added more to a losing position hoping for reversal",
              "Violated risk rules, hit drawdown, and triggered exit — a professional would've cut losses",
            ],
            [
              "No Journal, No Growth",
              "Didn't log trades or review decisions, repeated same mistakes",
              "Couldn't improve or defend strategy in funding review — no long-term edge",
            ],
          ],
        },
      },
    ],
    faqs: [
      {
        question: "Why does Zyon enforce consistency rules?",
        answer:
          "Because real traders succeed through discipline, not luck. We want to support traders who show steady habits — not one-off lucky wins.",
      },
      {
        question: "What if I make a big profit on one day and stop trading?",
        answer:
          "That violates the 'Max Profit in Single Day' and 'Minimum Trading Days' rule. You need to show steady performance across multiple days to be fundable. One-day spikes aren't sustainable in real trading careers.",
      },
      {
        question: "Can I trade only 1 day if I meet the ₹20K profit target?",
        answer:
          "No. You must trade at least 3 out of 5 days. We want to see how you handle different market conditions and maintain emotional control.",
      },
      {
        question: "Why is there a maximum daily loss cap?",
        answer:
          "To protect you from blowing up. Learning to manage risk and stay within limits is a trait of successful professional traders.",
      },
      {
        question: "How does journaling help me become a better trader?",
        answer:
          "Journaling builds self-awareness. Reviewing your trades, your psychology, and your setups is what separates amateurs from professionals.",
      },
      {
        question: "Why only 5 trades per day?",
        answer:
          "To prevent overtrading and help you focus on quality trades. Trading less, with more planning, usually leads to better results.",
      },
      {
        question: "What if I break a rule but still make a lot of profit?",
        answer:
          "You'll still be disqualified. Zyon rewards professionalism, not gambling. Our rules are designed to create real-world readiness.",
      },
      {
        question: "Can I scale into a trade that's going in my favor?",
        answer:
          "Yes — as long as you're scaling up in a profitable direction. Averaging down into losses is not allowed because it leads to blow-ups.",
      },
      {
        question: "Are overnight positions allowed?",
        answer:
          "Yes, you can carry trades overnight. We allow real strategy development and don't limit you to scalping.",
      },
      {
        question: "How do I know if I'm eligible for funding?",
        answer:
          "If you follow all consistency rules, meet the profit target, and display steady risk control — you qualify for review by our funding desk.",
      },
      {
        question: "Why is the max position size set to ₹2,00,000?",
        answer:
          "It teaches proper risk allocation. Professionals risk small parts of their capital per trade. This rule ensures you manage exposure.",
      },
      {
        question: "I had one bad day. Can I still qualify?",
        answer:
          "Yes — as long as your loss is within the daily and weekly drawdown limits, and you bounce back with discipline and consistency.",
      },
      {
        question: "How do Zyon Coins help me?",
        answer:
          "Zyon Coins can be redeemed for premium features or future competition entries. They also signal your growth as a serious trader.",
      },
      {
        question: "Do I need to win to get funded?",
        answer:
          "Not necessarily. Even if you're not the top P&L, showing consistent, professional behavior can earn you a place in our Funded Track.",
      },
      {
        question: "Why is my weekly profit target set at 2%?",
        answer:
          "Because that's realistic and repeatable. Professional traders aim for steady gains, not jackpot trades.",
      },
      {
        question: "Will Zyon guide me after funding?",
        answer:
          "Yes. We provide tools, analytics, and mentorship to help you trade professionally once you're funded.",
      },
      {
        question: "What happens if I overtrade?",
        answer:
          "You violate the 5-trade limit and reduce your chances of funding. We want you to trade like a business — not compulsively.",
      },
      {
        question: "Is there any mentorship or feedback provided?",
        answer:
          "Top performers often receive reviews and personal feedback. We believe in grooming talent, not just selecting winners.",
      },
      {
        question: "How can I practice before joining the competition?",
        answer:
          "Use our Paper Trading module to simulate trades in real market conditions — perfect for testing your strategy risk-free.",
      },
      {
        question: "What if I don't get funded in the first attempt?",
        answer:
          "That's okay! Zyon is designed for growth. Learn, re-enter, and keep building. We track your progress — persistence matters.",
      },
      {
        question: "What is the Weekly Trading Competition?",
        answer:
          "It's a 5-day simulated trading event using real market data where traders compete for the top spot based on performance and risk management.",
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
        question: "What's the prize for winners?",
        answer:
          "Top trader gets ₹10,000 in Zyon Coins. The top 5 are offered premium access and may get shortlisted for Zyon's Funded Account challenge.",
      },
      {
        question: "What's Zyon coin and how to use it ?",
        answer:
          "Zyon coins are credit to get funded account, you get 10000 Zyon coin and you get funded to trade in our account with real money with up to 80% profit split to trader.",
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
        question: "Can I see other traders' performance?",
        answer:
          "Yes. Leaderboards are public and refresh live with rankings and key stats.",
      },
      {
        question: "What is the consistency rule in the competition?",
        answer:
          "The consistency rule ensures traders don't rely on one lucky trade. You must maintain performance over multiple days.\nFor example, profits should not be made on just a single trade or day — consistent risk-adjusted returns are favored in leaderboard rankings and funding selection.",
      },
      {
        question: "Why use consistency rules ?",
        answer:
          "At Zyon we strive to make you a funded trader and grow, these rules are not limitations, it's your path to success.\nThese rules are inspired by global HEDGE fund and funded programs.\nThis makes you disciplined and good trader in future.",
      },
      {
        question: "What if I break the rules during competition?",
        answer:
          "Accounts violating trading rules may be disqualified or not considered for funding — even if P&L is positive, but you can still practice till the competition ends.",
      },
      {
        question:
          "I have made my payment in the midweek can I enter the competition?",
        answer:
          "No, you can subscribe — HE HE who refuses money, but you will be allowed to get into the competition only starting next week.",
      },
      {
        question: "Is this good for beginners?",
        answer:
          "Yes, but serious. You'll face real-time market speed and structured limits. It's a great way to test mindset and skills under pressure.",
      },
    ],
  },
  {
    id: "feature-Market-Dashboard",
    title: "Advanced Analytics",
    subtitle: "Tools, Data & AI-Driven Insights",
    icon: <BsGraphUp />,
    followUpAction: "analysis",
    youtubeLink: "dQw4w9WgXcQ",
    shots: [
      `${process.env.PUBLIC_URL}/shots/market_analysis.png`,
      `${process.env.PUBLIC_URL}/shots/market_analysis2.png`,
      `${process.env.PUBLIC_URL}/shots/market_analysis3.png`,
      `${process.env.PUBLIC_URL}/shots/market_analysis_4.png`,
      `${process.env.PUBLIC_URL}/shots/market_analysis_5.png`,
      `${process.env.PUBLIC_URL}/shots/option_analysis_1.png`,
      `${process.env.PUBLIC_URL}/shots/option_analysis_2.png`,
      `${process.env.PUBLIC_URL}/shots/option_chain.png`,
      `${process.env.PUBLIC_URL}/shots/analyse.png`,
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
        heading: "Built by Traders, for Traders",
        paragraphs: [
          "The tools inside Zyon's Market Dashboard aren't randomly picked — they are battle-tested analytics used by serious traders worldwide. We focused only on the most practical, real-time indicators that actually help you plan, execute, and manage trades like a professional.",
          "From Open Interest shifts to real-time Greeks, from PCR sentiment to live market depth — these aren't gimmicks. These are the core building blocks of a consistent trading system that help you win competitions and grow into a funded trader.",
        ],
      },
      {
        heading: "Advanced Option Analytics",
        paragraphs: [
          "Real-time Greeks, IV skew, and option flow analysis.",
          "Identify unusual options activity and institutional positioning.",
        ],
      },
      {
        heading: "Open Interest (OI) Tracking",
        paragraphs: [
          "Monitor live OI changes across strikes to identify where positions are building up.",
          "Use OI spikes with price action to spot breakout zones or resistance/support levels forming.",
        ],
      },
      {
        heading: "Put-Call Ratio (PCR)",
        paragraphs: [
          "Gauge overall market sentiment using index and stock-wise PCR values.",
          "Extremely high PCR signals overbought conditions, while extremely low PCR suggests oversold – useful for contrarian trades.",
        ],
      },
      {
        heading: "OI Change Analysis",
        paragraphs: [
          "Track real-time increase/decrease in OI at each strike along with price movement.",
          "Rising price + rising OI = Long buildup. Falling price + rising OI = Short buildup. This helps traders plan directional bets.",
        ],
      },
      {
        heading: "Heatmap Visualizer",
        paragraphs: [
          "Color-coded view of sector and stock performance across key timeframes.",
          "Identify hot zones of momentum or weakness to ride short-term trends or plan reversals.",
        ],
      },
      {
        heading: "Synthetic Futures Price",
        paragraphs: [
          "See how synthetic futures (Call + Put at same strike) deviate from actual futures prices.",
          "Exploit inefficiencies in arbitrage setups and judge where smart money is skewing implied expectations.",
        ],
      },
      {
        heading: "Long/Short Buildup Detector",
        paragraphs: [
          "Automatically detect whether positions are being built with bullish or bearish bias.",
          "Helps you decide between aggressive entry or waiting for confirmation based on buildup type (e.g. Long Buildup or Short Covering).",
        ],
      },
      {
        heading: "Real-Time Market Depth",
        paragraphs: [
          "See live bid-ask spread, top 5 buyers/sellers, and quantity buildup for each strike.",
          "Use it to time entries better, detect spoofing, and avoid getting trapped in low-liquidity contracts.",
        ],
      },
    ],
    faqs: [
      {
        question: "What kind of option data is shown?",
        answer:
          "Zyon's dashboard displays strike-level open interest (OI), changes in OI, volume, implied volatility, and price movement in real-time.",
      },
      {
        question: "How often is the data updated?",
        answer:
          "All option analytics data is updated in real time — you'll see live OI shifts, PCR changes, and price behavior without delay.",
      },
      {
        question: "Can I use this data for intraday trading?",
        answer:
          "Yes. Traders use this dashboard to spot buildup, unwinding, long/short traps, and momentum shifts in real time.",
      },
      {
        question: "Is this data available for all index and stocks ?",
        answer:
          "No. Currently, the dashboard only supports index options like NIFTY and BANK NIFTY, SENSEX. Stock option analytics are not included.",
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
  },
  {
    id: "feature-Paper-Trading",
    title: "Learn To Trade",
    subtitle: "Train • Track • Trade ",
    icon: <FaGraduationCap />,
    followUpAction: "learn",
    youtubeLink: "dQw4w9WgXcQ",
    shots: [
      `${process.env.PUBLIC_URL}/shots/watchlist.png`,
      `${process.env.PUBLIC_URL}/shots/positions.png`,
      `${process.env.PUBLIC_URL}/shots/market_analysis3.png`,
      `${process.env.PUBLIC_URL}/shots/option_analysis_1.png`,
      `${process.env.PUBLIC_URL}/shots/option_chain.png`,
      `${process.env.PUBLIC_URL}/shots/analyse.png`,
    ],
    sections: [
      {
        heading: "Learn by Doing – ₹499/month",
        paragraphs: [
          "Start your trading journey for just ₹499/month with full access to live-market simulation.",
          "No hidden fees. No risk. Just you, the market, and unlimited learning.",
        ],
      },
      {
        heading: "Your Market Tuition Is Now Capped",
        paragraphs: [
          "Traders often lose thousands in real markets learning lessons.",
          "Zyon saves you from blowing up capital while still giving the same pressure and decision-making experience.",
        ],
      },
      {
        heading: "No Consistency Rules – Yet",
        paragraphs: [
          "This phase is about learning, not qualifying. We don't restrict you with consistency or discipline requirements.",
          "Explore, experiment, and develop your style freely.",
        ],
      },
      {
        heading: "Hold Overnight, Swing Freely",
        paragraphs: [
          "We allow overnight trades to help you simulate real-world strategies without fear.",
          "Get used to the uncertainty and emotion that come with carrying trades across sessions.",
        ],
      },
      {
        heading: "Feel the Market Flow",
        paragraphs: [
          "Trade during news. Sit through volatility. Feel how markets react in real-time.",
          "This is your sandbox to understand how real money moves.",
        ],
      },
      {
        heading: "Make Mistakes. Learn Fast.",
        paragraphs: [
          "Every error is a lesson when no real money is on the line.",
          "Whether it's bad entries, overtrading, or chasing momentum — here, you learn with zero risk.",
        ],
      },
      {
        heading: "Real-Time Data, Real Challenges",
        paragraphs: [
          "Just like pro traders, you'll get real-time option chains, price ladders, and order book depth.",
          "This prepares you for transition into advanced competitions or funded evaluations.",
        ],
      },
      {
        heading: "No Judgement Zone — Only Growth",
        paragraphs: [
          "There's no leaderboard pressure, no P&L shame. Just you vs you.",
          "Improve at your own pace and build confidence.",
        ],
      },
      {
        heading: "Follow Good Trainers. Test Theories.",
        paragraphs: [
          "Use the platform alongside YouTube/Telegram mentors or training institutes.",
          "Test their calls, strategies, and risk plans in real-time before using them with real money.",
        ],
      },
      {
        heading: "Prepare for Your Next Step",
        paragraphs: [
          "Once you start building confidence and understanding how markets behave, you can join Zyon Competitions or Funded Programs.",
          "This beginner zone is your practice net — get ready to step onto the real stage!",
        ],
      },
      {
        heading: "The Power of Journaling",
        paragraphs: [
          "Trading is not just about charts — it's about behavior, decision-making, and mindset. Journaling helps you track all of it.",
          "By writing down your trade setups, reasons, and emotions, you create a mirror that shows your true habits over time.",
        ],
      },
      {
        heading: "How Traders Use It",
        paragraphs: [
          "You can log every entry, exit, reason, and emotion for each trade. Over time, you'll spot patterns: setups that work, mistakes you repeat, and mindset shifts.",
          "Journaling turns daily trades into long-term improvement. It's your best edge — beyond any indicator.",
        ],
      },
      {
        heading: "How Trainers & Mentors Benefit",
        paragraphs: [
          "If you're learning under a coach or a trainer, your journal helps them guide you better. They can see what you saw, why you acted, and where your bias came in.",
          "This makes mentorship 10x more effective and personalized — and speeds up your journey toward becoming a consistent trader.",
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
        question: "Is Zyon's paper trading live or delayed?",
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
          "Zyon isn't just a charting tool — it's a complete simulated trading ecosystem with:\n• Live data\n• Option analytics\n• Risk rules like prop firms\n• Competitions\n• Career opportunities for top performers",
      },
      {
        question: "Is paper trading useful if I already have experience?",
        answer:
          "Yes. Advanced traders use Zyon to:\n• Practice new setups\n• Adjust to market volatility\n• Backtest discretionary strategies\n• Build consistency without risking money \n• You may join Funding challenge",
      },
      {
        question: "Can I access option Greeks while paper trading?",
        answer:
          "Yes. Zyon displays real-time option Greeks like Delta, Theta, Gamma, Vega — helping you learn the mechanics behind options pricing and risk.",
      },
      {
        question: "Are there any trading rules I need to follow?",
        answer: "No, not in this mode.",
      },
      {
        question: "How many accounts can I create?",
        answer:
          "You can create up to 5 paper trading accounts per user. This allows you to test multiple strategies or trade styles simultaneously.",
      },
      {
        question: "What happens after I perform well in paper trading?",
        answer:
          "Top performers are shortlisted for our Zyon Funded Trading Desk. If selected, you'll get real capital to trade and share profits — no upfront payment required.",
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
          "What's the difference between Paper Trading and the Trading Competition?",
        answer:
          "While both are powered by real-time market data, they serve different purposes and run on different timelines.",
      },
    ],
  },

  {
    id: "feature-Forward-Testing",
    title: "Algo Hub",
    subtitle: "Automate • Test • Deploy",
    icon: <GiVintageRobot />,
    followUpAction: "algo",
    youtubeLink: "dQw4w9WgXcQ",
    shots: [
      `${process.env.PUBLIC_URL}/shots/watchlist.png`,
      `${process.env.PUBLIC_URL}/shots/positions.png`,
      `${process.env.PUBLIC_URL}/shots/broker_1.png`,
      `${process.env.PUBLIC_URL}/shots/broker_2.png`,
    ],
    sections: [
      {
        heading: "Forward Test Your Algos with Live Market Data",
        paragraphs: [
          "Run your trading algo in a real-time market simulation. Monitor trades, behavior, and execution quality — just like a live environment, but without risking capital.",
          "Great for scalping, breakout, or statistical arbitrage algos that need to react to market movements as they happen.",
        ],
      },
      {
        heading: "Live Option Chain, Futures, and Stock Feed",
        paragraphs: [
          "Use the full index options, futures, and selected stocks — in your strategy logic.",
          "Live Greeks, and price levels are available for algo to react contextually.",
        ],
      },
      {
        heading: "Simulated Margin & Risk Environment",
        paragraphs: [
          "Every algo is evaluated with realistic risk parameters: margin usage, order sizes, drawdown, and trade caps.",
          "Helps to forward test your algos which you find successful in your backtest.",
        ],
      },
      {
        heading:
          "Daily profit and loss statement of your algo, using virtual capital",
        paragraphs: [
          "Get structured data of order placements, trade journals of the algo.",
          "Track key performance metrics — PnL, win ratio, average hold time — and debug issues with clarity.",
        ],
      },
      {
        heading: "Infra Flexibility for Developers",
        paragraphs: [
          "Run your Algos in our server, we take care of all infra and configuration.",
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
          "Backtesting uses historical data, which may not account for slippage or execution delay. Forward testing uses live data, providing a more realistic view of your algo's performance.",
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
        answer: "This feature is under development.",
      },
      {
        question: "Do you provide sample algos?",
        answer:
          "Yes. We provide starter strategies, templates, and SDK documentation so that you can begin testing quickly.",
      },
    ],
  },
];

export default featureSectionData;
