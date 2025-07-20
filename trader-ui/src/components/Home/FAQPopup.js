import React, { useState } from "react";
import { FaTimes, FaChevronDown, FaChevronUp } from "react-icons/fa";

const FAQPopup = ({ isOpen, onClose, title, subtitle, icon, faqs }) => {
  const [openFaqs, setOpenFaqs] = useState({});

  const toggleFaq = (index) => {
    setOpenFaqs((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-slate-800 rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="bg-slate-700 px-6 py-4 flex items-center justify-between border-b border-slate-600">
          <div className="flex items-center space-x-3">
            <div className="bg-slate-900 rounded-full p-3 text-green-500 text-2xl">
              {icon}
            </div>
            <div className="flex flex-col justify-start items-start">
              <div className="text-white font-semibold text-lg">{title}</div>
              <div className="text-slate-300">{subtitle}</div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white transition-colors duration-200 p-2"
          >
            <FaTimes className="text-xl" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-slate-700 rounded-lg border border-slate-600"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-4 py-4 text-left flex items-center justify-between hover:bg-slate-600 transition-colors duration-200 rounded-lg"
                >
                  <span
                    className={`font-medium pr-4 transition-colors duration-200 ${openFaqs[index] ? "text-green-500" : "text-white"}`}
                  >
                    {faq.question}
                  </span>
                  {openFaqs[index] ? (
                    <FaChevronUp className="text-slate-400 flex-shrink-0" />
                  ) : (
                    <FaChevronDown className="text-slate-400 flex-shrink-0" />
                  )}
                </button>
                {openFaqs[index] && (
                  <div className="px-4 pb-4">
                    <div className="border-t border-slate-600 pt-4">
                      <p className="text-slate-300 leading-relaxed whitespace-pre-line">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPopup;
