import React from 'react';
import { GiVintageRobot } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";

const BulletTriangle = ({classes}) => {
  return (
    <svg className={`w-4 h-4 ${classes}`} fill="currentColor" viewBox="0 0 24 24">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
};

const AlgoHubPopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full mx-4 max-h-[90vh] flex flex-col overflow-y-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-3 rounded-t-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="text-2xl text-white p-4 rounded-full bg-slate-800">
                <GiVintageRobot />
              </div>
              <div>
                <div className="text-xl font-semibold mb-1">Algo Hub</div>
                <div className="text-blue-100">Automate • Test • Deploy</div>
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
                <div className="text-lg font-semibold text-gray-800 mb-2">Forward Test Your Algos with Live Market Data</div>
                <div className="flex items-center gap-2">
                  <BulletTriangle classes="text-green-600" />
                  <span className="text-gray-700">Run your trading algo in a real-time market simulation. Monitor trades, behavior, and execution quality — just like a live environment, but without risking capital.</span>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <BulletTriangle classes="text-green-600" />
                  <span className="text-gray-700">Great for scalping, breakout, or statistical arbitrage algo that need to react to market movements as they happen.</span>
                </div>
              </div>

              <div className="bg-slate-100 p-4 rounded-lg">
                <div className="text-lg font-semibold text-gray-800 mb-2">Live Option Chain, Futures, and Stock Feed</div>
                <div className="flex items-center gap-2">
                  <BulletTriangle classes="text-green-600" />
                  <span className="text-gray-700">Use the full index options, futures, and selected stocks — in your strategy logic.</span>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <BulletTriangle classes="text-green-600" />
                  <span className="text-gray-700">Live Greeks, and price levels are available for algo to react contextually.</span>
                </div>
              </div>

              <div className="bg-slate-100 p-4 rounded-lg">
                <div className="text-lg font-semibold text-gray-800 mb-2">Daily P&L Statement of Your Algo</div>
                <div className="flex items-center gap-2">
                  <BulletTriangle classes="text-green-600" />
                  <span className="text-gray-700">Get structured data of order placements, trade journals of the algo.</span>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <BulletTriangle classes="text-green-600" />
                  <span className="text-gray-700">Track key performance metrics — PnL, win ratio, average hold time — and debug issues with clarity.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer with Payment Button */}
        <div className="bg-gray-50 p-3 px-6 rounded-b-lg border-t">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-gray-800 mb-2 font-semibold">Ready to automate your trading?</div>
              <div className="text-sm text-gray-800">Forward test your algorithms with live data</div>
            </div>
            <button
              onClick={() => {
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 flex items-center space-x-2"
            >
              <span>Pay ₹1,499/month</span>
              <GiVintageRobot className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlgoHubPopup; 