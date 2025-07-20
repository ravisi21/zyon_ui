import React from "react";

const YouTubeModal = ({ isOpen, onClose, videoId, title = "Video" }) => {
  const handleModalClose = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center px-4"
      onClick={handleModalClose}
    >
      <div className="bg-black rounded-lg overflow-hidden w-[80%] relative shadow-xl">
        <div className="aspect-video">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0&rel=0&modestbranding=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default YouTubeModal;
