// LazyLottie.js
import React, { useEffect, useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";

const LazyLottie = ({ path, height = "100%", width = "100%" }) => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    const loadAnimation = async () => {
      try {
        const data = await import(`../public${path}`);
        setAnimationData(data.default);
      } catch (err) {
        console.error("Error loading Lottie animation:", err);
      }
    };
    loadAnimation();
  }, [path]);

  if (!animationData) {
    return <div className="text-white">Loading animation...</div>;
  }

  return (
    <Player
      autoplay
      loop
      src={animationData}
      style={{ height, width }}
    />
  );
};

export default LazyLottie;