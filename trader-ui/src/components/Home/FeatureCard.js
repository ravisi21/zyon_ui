// File: FeatureCard.js

import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { LiaYoutube } from "react-icons/lia";

const FeatureCard = ({ icon, title, description, youtubeLink, scrollTo, index }) => {
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
        className="bg-black text-white p-6 rounded-2xl flex flex-col justify-between shadow-lg min-h-[420px] hover:shadow-2xl hover:scale-[1.03] transition-all duration-700"
      >
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-4 text-2xl">
            <span className="text-4xl">{icon}</span>
            <h3 className="text-xl font-bold text-white">{title}</h3>
          </div>

          <ul className="text-base text-gray-200 leading-relaxed space-y-3">
            {bulletPoints.map((point, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-green-400 font-bold">→</span>
                <span>{point.trim()}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center justify-between mt-auto pt-4 gap-4">
          <button
            onClick={() => setIsModalOpen(true)}
            className="w-12 h-12 flex items-center justify-center border border-white text-white rounded-full hover:bg-white hover:text-black transition duration-300 hover:scale-110 active:scale-95 shadow-md hover:shadow-white/40"
            title="Watch Video"
            aria-label="Watch Video"
          >
            <LiaYoutube className="text-2xl text-red-500" />
          </button>

          <button
            onClick={() => scrollToSection(scrollTo)}
            className="flex-1 border border-white text-white px-4 py-2 rounded font-semibold hover:bg-white hover:text-black transition duration-300 hover:scale-110 active:scale-95 shadow-md hover:shadow-white/40"
          >
            Know More
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center px-4">
          <div className="bg-black rounded-lg overflow-hidden max-w-2xl w-full relative shadow-xl">
            <button
              className="absolute top-2 right-2 text-white text-xl hover:text-red-400"
              onClick={() => setIsModalOpen(false)}
              aria-label="Close"
            >
              ✖
            </button>
            <div className="aspect-video">
              <iframe
                src={`${youtubeLink}?autoplay=1&mute=0`}
                title="YouTube video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FeatureCard;