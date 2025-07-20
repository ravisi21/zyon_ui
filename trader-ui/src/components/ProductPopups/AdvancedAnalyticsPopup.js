import React from 'react';
import { BsGraphUp } from "react-icons/bs";
import { FaTimes } from "react-icons/fa";

const BulletTriangle = ({classes}) => {
  return (
    <svg className={`w-4 h-4 ${classes}`} fill="currentColor" viewBox="0 0 24 24">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
};

const AdvancedAnalyticsPopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full mx-4 max-h-[90vh] flex flex-col overflow-y-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-3 rounded-t-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="text-2xl text-white p-4 rounded-full bg-slate-800">
                <BsGraphUp />
              </div>
              <div>
                <div className="text-xl font-semibold mb-1">Advanced Analytics</div>
                <div className="text-blue-100">Tools, Data & AI-Driven Insights</div>
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
                <div className="text-lg font-semibold text-gray-800 mb-2">Real-Time Market Dashboard</div>
                <div className="flex items-center gap-2">
                  <BulletTriangle classes="text-green-600" />
                  <span className="text-gray-700">Get live market data, option chain analytics, and OI changes in one comprehensive dashboard.</span>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <BulletTriangle classes="text-green-600" />
                  <span className="text-gray-700">Track market breadth, put-call ratios, and institutional flow patterns.</span>
                </div>
              </div>

              <div className="bg-slate-100 p-4 rounded-lg">
                <div className="text-lg font-semibold text-gray-800 mb-2">Advanced Option Analytics</div>
                <div className="flex items-center gap-2">
                  <BulletTriangle classes="text-green-600" />
                  <span className="text-gray-700">Real-time Greeks, IV skew, and option flow analysis.</span>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <BulletTriangle classes="text-green-600" />
                  <span className="text-gray-700">Identify unusual options activity and institutional positioning.</span>
                </div>
              </div>

              <div className="bg-slate-100 p-4 rounded-lg">
                <div className="text-lg font-semibold text-gray-800 mb-2">AI-Driven Insights</div>
                <div className="flex items-center gap-2">
                  <BulletTriangle classes="text-green-600" />
                  <span className="text-gray-700">Get AI-powered market analysis and trend predictions.</span>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <BulletTriangle classes="text-green-600" />
                  <span className="text-gray-700">Advanced algorithms help identify trading opportunities.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer with Payment Button */}
        <div className="bg-gray-50 p-3 px-6 rounded-b-lg border-t">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-gray-800 mb-2 font-semibold">Ready for advanced market insights?</div>
              <div className="text-sm text-gray-800">Get professional-grade analytics</div>
            </div>
            <button
              onClick={() => {
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 flex items-center space-x-2"
            >
              <span>Pay ₹999/month</span>
              <BsGraphUp className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedAnalyticsPopup; 