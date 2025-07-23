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
        className="bg-white p-6 rounded-2xl flex flex-col shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 ease-in-out"
      >
        <div className="mb-0 md:mb-2 flex-1">
          <div className="flex items-center gap-3 mb-4">
            <div className="font-semibold text-2xl rounded-full bg-green-100 p-3 shadow">
              {React.cloneElement(icon, { className: "text-green-500" })}
            </div>
            <div className="flex flex-col flex-1">
              <div className="text-lg font-bold text-gray-900">{title}</div>
              <div className="text-base text-gray-500">{subtitle}</div>
            </div>
          </div>

          <ul className="text-base text-gray-700 leading-relaxed">
            {bulletPoints.map((point, idx) => (
              <li key={idx} className="flex items-center gap-2 mt-1">
                <svg
                  className="w-4 h-4 text-green-400 mt-1 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
                <span>{point.trim()}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center justify-between gap-4 mt-4">
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
            className="border-green-500 border-2 text-green-600 px-4 py-2 rounded-lg font-semibold hover:bg-green-500 hover:text-white active:bg-green-600 transition-all duration-200 hover:shadow-md"
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
