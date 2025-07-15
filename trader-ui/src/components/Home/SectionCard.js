import { useState, useRef, useEffect } from "react";
import { FaChevronDown, FaChevronUp, FaYoutube } from "react-icons/fa";

const SectionCard = ({ icon, title, children, faqData, sectionButton, videoButton }) => {
  const [showFaq, setShowFaq] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const faqPanelRef = useRef(null);

  // Close FAQ when clicking outside
  useEffect(() => {
    if (!showFaq) return;
    function handleClick(e) {
      if (
        faqPanelRef.current &&
        !faqPanelRef.current.contains(e.target)
      ) {
        setShowFaq(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [showFaq]);

  // Animate FAQ panel
  const faqPanelClass =
    "fixed top-0 right-0 h-full w-96 bg-gray-900/95 backdrop-blur-sm border-l border-gray-700 shadow-2xl z-50 overflow-y-auto transition-transform duration-300 " +
    (showFaq ? "translate-x-0" : "translate-x-full");

  return (
    <div className="flex flex-col items-center justify-center w-[90%] mx-auto mt-10 group transition-all duration-500">
      {/* Header */}
      <div className="bg-[linear-gradient(rgb(31,41,59)_70%,rgb(60,80,110)_100%)] flex items-center gap-4 w-full rounded-xl mb-4 p-3 shadow-lg hover:shadow-2xl transition-all duration-300">
        <div className="flex flex-1 items-center gap-2 text-2xl font-bold text-green-500 drop-shadow-lg shadow-green-500/30">
          {icon}
          {title}
        </div>
        <div className="flex items-center gap-4">
          {sectionButton}
          {videoButton || <FaYoutube className="text-red-500 text-4xl transition-colors duration-200 cursor-pointer hover:scale-110" />}
        </div>
      </div>
      {/* Card Content */}
      <div className="flex gap-4 w-full px-3">
        <div className="flex-1 backdrop-blur-sm rounded-xl p-6 bg-gray-800 transition-all duration-300">
          <div className="text-gray-300 text-lg space-y-6">{children}</div>
          <div className="mt-6 flex justify-end">
            <button
              onClick={() => setShowFaq(true)}
              className="text-green-400 hover:text-green-300 underline transition-colors duration-200"
            >
              FAQ's
            </button>
          </div>
        </div>
      </div>
      {/* FAQ Overlay and Panel */}
      {showFaq && (
        <>
          {/* Backdrop overlay */}
          <div className="fixed inset-0 z-40 bg-black/40 transition-opacity duration-300" />
          {/* FAQ Panel */}
          <div ref={faqPanelRef} className={faqPanelClass}>
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-white">Frequently Asked Questions</h3>
                <button
                  onClick={() => setShowFaq(false)}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  ✕
                </button>
              </div>
              <div className="space-y-2">
                {faqData.map((faq, index) => (
                  <div key={index} className="bg-gray-800/50 rounded-lg border border-gray-700">
                    <button
                      className="w-full px-4 py-3 text-left flex items-center justify-between text-white hover:bg-gray-700/50 transition-all duration-200 text-sm"
                      onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                    >
                      <span className="font-medium pr-2">{faq.question}</span>
                      <span className="text-green-500 flex-shrink-0">
                        {openFaqIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                      </span>
                    </button>
                    {openFaqIndex === index && (
                      <div className="px-4 pb-3 text-gray-300 text-sm">{faq.answer}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SectionCard; 