// File: FeatureSection.js

import React, { useState, useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Player } from "@lottiefiles/react-lottie-player";
import { useInView } from "react-intersection-observer";

const FeatureSection = ({ id, animation, sections, faqs, index }) => {
  const [showMore, setShowMore] = useState(false);
  const [showFAQ, setShowFAQ] = useState(false);
  const [showFAQModal, setShowFAQModal] = useState(false);
  const contentRef = useRef(null);
  const [isScrollable, setIsScrollable] = useState(false);

  const isMobile = typeof window !== "undefined" && window.innerWidth < 640;

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  useEffect(() => {
    const checkScroll = () => {
      if (contentRef.current) {
        setIsScrollable(contentRef.current.scrollHeight > window.innerHeight * 0.8);
      }
    };
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, [showMore, showFAQ]);

  const mainSection = sections[0];
  const extraSections = sections.slice(1);

  const { ref: lottieRef, inView: lottieInView } = useInView({ triggerOnce: true });

  return (
    <section
      id={id}
      className="min-h-[650px] bg-[#181B19] text-white px-4 sm:px-6 md:px-12 relative pb-24 transition-all duration-700 ease-in-out"
      data-aos="fade-up"
      data-aos-delay={`${typeof index === "number" ? index * 150 : 0}`}
    >
      {/* Top Wave Separator */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] z-10" data-aos="fade-down">
        <svg viewBox="0 0 500 50" preserveAspectRatio="none" className="w-full h-16">
          <path d="M0,0 C150,50 350,0 500,50 L500,00 L0,0 Z" fill="#ffffff" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-20 flex flex-col lg:flex-row items-center gap-10 w-full h-full pt-20">
        {/* Lottie animation */}
        <div
          ref={lottieRef}
          className="w-full lg:w-1/3 h-[250px] sm:h-[350px] flex items-center justify-center"
          data-aos="zoom-in"
        >
          {lottieInView ? (
            <Player autoplay loop src={animation} style={{ height: "100%", width: "100%" }} />
          ) : (
            <div className="text-white flex items-center justify-center">
              <svg className="animate-spin h-8 w-8 text-green-400" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
              </svg>
            </div>
          )}
        </div>

        {/* Text Content */}
        <div
          ref={contentRef}
          className={`w-full lg:w-2/3 space-y-4 pr-1 sm:pr-2 ${
            isScrollable ? "max-h-[80vh] overflow-y-auto" : ""
          }`}
        >
          <h2 className="text-2xl sm:text-3xl font-bold" data-aos="fade-left">
            {mainSection.heading}
          </h2>

          {mainSection.paragraphs.map((p, idx) => (
            <p
              key={idx}
              className="text-white/90 leading-relaxed text-base sm:text-lg"
              data-aos="fade-left"
              data-aos-delay={100 + idx * 100}
            >
              {p}
            </p>
          ))}

          {showMore &&
            extraSections.map((sec, sIdx) => (
              <div key={sIdx} className="pt-4 border-t border-white/30" data-aos="fade-up">
                <h3 className="text-xl sm:text-2xl font-semibold">{sec.heading}</h3>
                {sec.paragraphs.map((para, pi) => (
                  <p key={pi} className="text-white/90 leading-relaxed text-base sm:text-lg">
                    {para}
                  </p>
                ))}
              </div>
            ))}

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 pt-4" data-aos="fade-up">
            <button
              className="px-5 py-2 bg-green-200 text-[#181B19] rounded hover:bg-green-300 transition"
              onClick={() => window.location.href = "/signin"}
            >
              Sign In
            </button>
            <button
              onClick={() => setShowMore(!showMore)}
              className="px-5 py-2 border border-white text-white rounded hover:bg-white hover:text-[#181B19] transition"
            >
              {showMore ? "Show Less" : "Know More"}
            </button>
            <button
              onClick={() => {
                if (isMobile) {
                  setShowFAQModal(true);
                } else {
                  setShowFAQ(!showFAQ);
                }
              }}
              className="px-5 py-2 border border-white text-white rounded hover:bg-white hover:text-[#181B19] transition"
            >
              {isMobile ? "View FAQs" : showFAQ ? "Hide FAQs" : "View FAQs"}
            </button>
          </div>

          {/* FAQ Section - Desktop */}
          {!isMobile && showFAQ && (
            <div className="mt-6 space-y-6" data-aos="fade-up">
              <h3 className="text-xl sm:text-2xl font-semibold">Frequently Asked Questions</h3>
              {faqs.map((faq, idx) => (
                <FAQItem key={idx} faq={faq} />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* FAQ Modal - Mobile */}
      {isMobile && showFAQModal && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center px-4">
          <div className="bg-[#181B19] text-white p-6 rounded-lg max-h-[80vh] overflow-y-auto w-full max-w-lg">
            <h3 className="text-2xl font-bold mb-4">FAQs</h3>
            {faqs.map((faq, idx) => (
              <FAQItem key={idx} faq={faq} />
            ))}
            <div className="mt-6 text-center">
              <button
                onClick={() => setShowFAQModal(false)}
                className="px-5 py-2 border border-white text-white rounded hover:bg-white hover:text-[#181B19] transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Wave Separator */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-10" data-aos="fade-up">
        <svg viewBox="0 0 500 50" preserveAspectRatio="none" className="w-full h-16 rotate-180">
          <path d="M0,0 C150,50 350,0 500,50 L500,00 L0,0 Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  );
};

const FAQItem = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-4 bg-white/5 rounded-lg border border-white/20 shadow-inner mb-2">
      <button
        className="w-full text-left font-semibold text-white text-base sm:text-lg flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{faq.question}</span>
        <span className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>⌄</span>
      </button>
      {isOpen && (
        <>
          <hr className="my-2 border-white/20" />
          <p className="mt-2 text-white/80 leading-relaxed whitespace-pre-line">{faq.answer}</p>
        </>
      )}
    </div>
  );
};

export default FeatureSection;