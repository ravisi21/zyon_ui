import React from "react";
import { SlTrophy } from "react-icons/sl";
import { FaTimes } from "react-icons/fa";
import DemoAccountRequestComponent from "../Home/DemoAccountRequestComponent";

const BulletTriangle = ({ classes }) => {
  return (
    <svg
      className={`w-4 h-4 ${classes}`}
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M8 5v14l11-7z" />
    </svg>
  );
};

const TradingChallengePopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full mx-4 max-h-[90vh] flex flex-col overflow-y-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-3 rounded-t-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="text-2xl text-white p-4 rounded-full bg-slate-800">
                <SlTrophy />
              </div>
              <div>
                <div className="text-xl font-semibold mb-1">
                  Trading Challenge
                </div>
                <div className="text-blue-100">Win Your Way To Funding</div>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-white hover:text-gray-200 transition-colors duration-200"
            >
              <FaTimes className="text-xl" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-3 flex-1 overflow-y-auto">
          <div className="flex flex-col gap-8">
            {/* Left Column - Features */}
            <div className="space-y-6 w-full flex-1">
              <div className="bg-slate-100 p-4 rounded-lg">
                <div className="text-lg font-semibold text-gray-800 mb-2">
                  Weekly Trading Competition
                </div>
                <div className="flex items-center gap-2">
                  <BulletTriangle classes="text-green-600" />
                  <span className="text-gray-700">
                    Every Monday to Friday, trade in a high-stakes virtual
                    environment with ₹500 entry fee.
                  </span>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <BulletTriangle classes="text-green-600" />
                  <span className="text-gray-700">
                    Trade index derivatives with real-time market data and
                    leaderboard pressure.
                  </span>
                </div>
              </div>

              <div className="bg-slate-100 p-4 rounded-lg">
                <div className="text-lg font-semibold text-gray-800 mb-2">
                  Stocks, Options & Futures
                </div>
                <div className="flex items-center gap-2">
                  <BulletTriangle classes="text-green-600" />
                  <span className="text-gray-700">
                    Trade stocks, futures and index options like NIFTY,
                    BANKNIFTY, and SENSEX using real-time feeds.
                  </span>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <BulletTriangle classes="text-green-600" />
                  <span className="text-gray-700">
                    Master how premiums move with volatility, time decay, and OI
                    buildup.
                  </span>
                </div>
              </div>

              <div className="bg-slate-100 p-4 rounded-lg">
                <div className="text-lg font-semibold text-gray-800 mb-2">
                  Win & Get Funded
                </div>
                <div className="flex items-center gap-2">
                  <BulletTriangle classes="text-green-600" />
                  <span className="text-gray-700">
                    Top performer wins ₹10,000 Zyon Coins, top 5 get premium
                    access.
                  </span>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <BulletTriangle classes="text-green-600" />
                  <span className="text-gray-700">
                    You may be shortlisted for Zyon's Funded Trading Account.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer with Payment Button */}
        <div className="bg-gray-50 p-3 px-6 rounded-b-lg border-t">
          <div className="flex items-center w-full justify-between">
            <div className="hidden md:block">
              <div className="text-gray-800 mb-2 font-semibold">
                Ready to compete and win?
              </div>
              <div className="text-sm text-gray-800">
                Join the weekly trading challenge
              </div>
            </div>
            <div className="flex-1 hidden md:block"></div>
            <DemoAccountRequestComponent
              className="mt-2 mr-4"
              textColor="text-blue-600"
              hoverColor="hover:text-blue-700"
              onDemoRequest={onClose}
            />
            <button
              onClick={() => {}}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 flex items-center space-x-2"
            >
              <span>Pay ₹500</span>
              <SlTrophy className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradingChallengePopup;
