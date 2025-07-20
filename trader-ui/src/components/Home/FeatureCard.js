// File: FeatureCard.js

import React, { useState, useEffect } from "react";
import { FaYoutube } from "react-icons/fa";
import YouTubeModal from "./YouTubeModal";
import AOS from "aos";
import "aos/dist/aos.css";

const FeatureCard = ({
  icon,
  title,
  subtitle,
  description,
  youtubeLink,
  scrollTo,
  index,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 80 });
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const bulletPoints = description.split("\n").filter(Boolean);

  return (
    <>
      <div 
        data-aos="zoom-in-up"
        data-aos-delay={`${(typeof index === "number" ? index : 0) * 150}`}
        className="bg-white p-6 rounded-xl flex flex-col shadow-2xl transition-all duration-300 ease-in-out border border-neutral-200 transform hover:-translate-y-2"
      >
        <div className="mb-0 md:mb-2 flex-1">
          <div className="flex items-center gap-3 mb-4">
            <div className="font-semibold text-2xl rounded-full bg-blue-700 p-3 text-white shadow-lg">
              {icon}
            </div>
            <div className="flex flex-col flex-1 text-slate-600">
              <div className="text-lg font-semibold">{title}</div>
              <div className="text-base">{subtitle}</div>
            </div>
          </div>

          <ul className="text-base text-gray-200 leading-relaxed">
            {bulletPoints.map((point, idx) => (
              <li key={idx} className="flex items-center gap-2  mt-1">
                <svg
                  className="w-4 h-4 text-blue-700 mt-1 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
                <span className="text-blue-700">{point.trim()}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center justify-between gap-4">
          <button
            onClick={() => setIsModalOpen(true)}
            className="w-12 h-12 flex items-center justify-center transition duration-300 hover:scale-110 active:scale-102"
            title="Watch Video"
            aria-label="Watch Video"
          >
            <FaYoutube className="text-red-600 text-4xl hover:text-red-500 transition-colors duration-200 cursor-pointer" />
          </button>
          <div className="flex-1"></div>
          <button
            onClick={() => scrollToSection(scrollTo)}
            className="border-blue-600 border-2 text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-100 active:bg-blue-700 transition-all duration-200 hover:shadow-md"
          >
            Know More
          </button>
        </div>
      </div>

      <YouTubeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        videoId={youtubeLink}
        title={`${title} video`}
      />
    </>
  );
};

export default FeatureCard;
