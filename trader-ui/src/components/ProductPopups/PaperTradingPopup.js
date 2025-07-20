import React from 'react';
import { FaGraduationCap } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

const BulletTriangle = ({classes}) => {
  return (
    <svg className={`w-4 h-4 ${classes}`} fill="currentColor" viewBox="0 0 24 24">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
};

const PaperTradingPopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full mx-4 max-h-[90vh] flex flex-col overflow-y-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-3 rounded-t-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="text-2xl text-white p-4 rounded-full bg-slate-800">
                <FaGraduationCap />
              </div>
              <div>
                <div className="text-xl font-semibold mb-1">Learn, Get Funded</div>
                <div className="text-blue-100">Train • Track • Trade • Win</div>
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
                <div className="text-lg font-semibold text-gray-800 mb-2">Index Options, Futures & Stocks Trading</div>
                <div className="flex items-center gap-2">
                  <BulletTriangle classes="text-green-600" />
                  <span className="text-gray-700">All trades are simulated using live NSE market data, option chain updates, open interest, and real-time execution behavior.</span>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <BulletTriangle classes="text-green-600" />
                  <span className="text-gray-700">No delays or hypothetical numbers — just the market as it moves.</span>
                </div>
              </div>

              <div className="bg-slate-100 p-4 rounded-lg">
                <div className="text-lg font-semibold text-gray-800 mb-2">Zero Risk Learning</div>
                <div className="flex items-center gap-2">
                  <BulletTriangle classes="text-green-600" />
                  <span className="text-gray-700">Get ₹10,00,000 in virtual capital and build your strategy without risking real money.</span>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <BulletTriangle classes="text-green-600" />
                  <span className="text-gray-700">Make mistakes, iterate, and grow — the best traders are trained, not born.</span>
                </div>
              </div>

              <div className="bg-slate-100 p-4 rounded-lg">
                <div className="text-lg font-semibold text-gray-800 mb-2">Perform & Get Funded</div>
                <div className="flex items-center gap-2">
                  <BulletTriangle classes="text-green-600" />
                  <span className="text-gray-700">Demonstrate your skills, follow the rules and prove you can trade with consistency.</span>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <BulletTriangle classes="text-green-600" />
                  <span className="text-gray-700">Get a funded account with real money and share the profits.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer with Payment Button */}
        <div className="bg-gray-50 p-3 px-6 rounded-b-lg border-t">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-gray-800 mb-2 font-semibold">Ready to start your trading journey?</div>
              <div className="text-sm text-gray-800">Free access to professional trading platform</div>
            </div>
            <button
              onClick={() => {
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 flex items-center space-x-2"
            >
              <span>Start Free</span>
              <FaGraduationCap className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaperTradingPopup; 