// File: FeatureCard.js

import React, { useState } from "react";
import { FaYoutube } from "react-icons/fa";
import YouTubeModal from "./YouTubeModal";

const FeatureCard = ({
  icon,
  title,
  subtitle,
  description,
  youtubeLink,
  scrollTo,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const bulletPoints = description.split("\n").filter(Boolean);

  return (
    <>
      <div className="bg-white hover:scale-102 p-6 rounded-lg flex flex-col shadow transition-all duration-100 border border-neutral-200">
        <div className="mb-0 md:mb-2">
          <div className="flex items-center gap-3 mb-4">
            <div className="font-semibold text-2xl rounded-full bg-blue-700 p-3 text-white">
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
            className="border-blue-600 border-2 text-blue-600 px-4 py-2 rounded font-semibold hover:bg-blue-100 active:bg-blue-700"
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
