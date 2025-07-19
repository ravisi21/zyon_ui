// File: FeatureSection.js

import React, { useState, useRef } from "react";
import { FaYoutube } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import YouTubeModal from "./YouTubeModal";
import FAQPopup from "./FAQPopup";

const FeatureSection = ({
  title,
  subtitle,
  id,
  sections,
  faqs,
  icon,
  youtubeLink,
  shots,
}) => {
  const [showMore, setShowMore] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isFAQPopupOpen, setIsFAQPopupOpen] = useState(false);
  const contentRef = useRef(null);

  const displayedSections = showMore ? sections : sections.slice(0, 3);
  const hasMoreSections = sections.length > 3;

  return (
    <section
      id={id}
      className="bg-[#1D293B] text-white p-4 px-6 md:px-4 relative pb-24 transition-all duration-700 ease-in-out"
    >
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] z-10">
        <svg viewBox="0 0 500 50" preserveAspectRatio="none" className="w-full h-16">
          <path d="M0,0 C150,50 350,0 500,50 L500,00 L0,0 Z" fill="#ffffff" />
        </svg>
      </div>

      <div className="relative z-20 flex flex-col lg:flex-row items-start gap-10 w-full h-full pt-20">
        <div className="w-[30%] flex self-center items-center justify-center">
          <div className="w-full h-full">
            <Swiper
              direction="horizontal"
              loop={true}
              autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
              modules={[Autoplay]}
              className="w-full h-full"
            >
              {shots.map((shot, index) => (
                <SwiperSlide key={index}>
                  <div className="w-full h-full flex items-center justify-center">
                    <img
                      src={shot}
                      alt={`${title} screenshot ${index + 1}`}
                      className="w-full h-auto max-h-[400px] object-contain rounded-lg shadow-lg"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <div ref={contentRef} className="w-full lg:w-2/3 space-y-4 pr-1 sm:pr-2">
          <div className="flex items-center justify-center md:justify-start gap-3">
            <div className="text-4xl bg-neutral-50 rounded-full p-3 text-slate-700">
              {icon}
            </div>
            <div className="flex flex-col flex-0 md:flex-1 text-neutral-50">
              <div className="text-2xl sm:text-2xl font-semibold">{title}</div>
              <div className="text-base mt-1">{subtitle}</div>
            </div>
          </div>

          {displayedSections.map((sec, sIdx) => (
            <div key={sIdx} className="pt-4 border-t border-white/30">
              <h3 className="text-xl font-semibold">{sec.heading}</h3>
              {sec.paragraphs.map((para, pi) => (
                <div key={pi} className="flex items-start md:items-center gap-2 mt-1">
                  <svg className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  <div className="text-white leading-relaxed text-base">{para}</div>
                </div>
              ))}

              {sec.table && (
                <div className="mt-4">
                  <div className="hidden sm:block overflow-x-auto">
                    <table className="min-w-full border border-gray-700 text-sm text-left text-white">
                      <thead className="bg-gray-800 text-green-300">
                        <tr>
                          {sec.table.headers.map((header, i) => (
                            <th key={i} className="px-4 py-2 border border-gray-600 whitespace-nowrap">{header}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="bg-gray-900">
                        {sec.table.rows.map((row, rowIndex) => (
                          <tr key={rowIndex} className="hover:bg-gray-800 transition">
                            {row.map((cell, colIndex) => (
                              <td key={colIndex} className="px-4 py-2 border border-gray-700 align-top whitespace-pre-wrap">{cell}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="sm:hidden space-y-4">
                    {sec.table.rows.map((row, rowIndex) => (
                      <div key={rowIndex} className="bg-gray-800 rounded-lg border border-gray-600 p-4 text-white">
                        {sec.table.headers.map((header, i) => (
                          <div key={i} className="mb-2">
                            <div className="text-green-300 font-semibold text-sm">{header}</div>
                            <div className="text-white text-sm">{row[i]}</div>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}

          {hasMoreSections && (
            <div className="pt-4">
              <button
                onClick={() => setShowMore(!showMore)}
                className="text-green-400 hover:text-green-300 underline transition-colors duration-200"
              >
                {showMore ? "Show Less" : `Show More`}
              </button>
            </div>
          )}

          <div className="flex flex-wrap gap-4 pt-4">
            <button
              className="px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              onClick={() => (window.location.href = "/signin")}
            >
              Get Started
            </button>
            <button
              onClick={() => setIsFAQPopupOpen(true)}
              className="px-5 py-2 border border-white text-white rounded hover:bg-white hover:text-[#181B19] transition"
            >
              View FAQs
            </button>
            <button
              onClick={() => setIsVideoModalOpen(true)}
              className="flex items-center justify-center transition duration-300 hover:scale-110 active:scale-102"
            >
              <FaYoutube className="text-red-600 text-4xl hover:text-red-500 transition-colors duration-200 cursor-pointer" />
            </button>
          </div>
        </div>
      </div>

      <FAQPopup
        isOpen={isFAQPopupOpen}
        onClose={() => setIsFAQPopupOpen(false)}
        title={title}
        subtitle={subtitle}
        icon={icon}
        faqs={faqs}
      />

      <YouTubeModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoId={youtubeLink}
        title={`${title} video`}
      />

      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-10">
        <svg viewBox="0 0 500 50" preserveAspectRatio="none" className="w-full h-16 rotate-180">
          <path d="M0,0 C150,50 350,0 500,50 L500,00 L0,0 Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  );
};

export default FeatureSection;