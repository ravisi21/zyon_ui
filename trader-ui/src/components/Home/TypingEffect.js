import React, { useState, useEffect } from "react";

const TypingEffect = ({ text = "", speed = 40 }) => {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    if (!text) return;

    let i = 0;
    setDisplayed(""); // Reset displayed text on text change
    const interval = setInterval(() => {
      setDisplayed((prev) => prev + text[i]);
      i++;
      if (i >= text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <span>
      {displayed}
      <span className="animate-pulse text-green-400">|</span>
    </span>
  );
};

export default TypingEffect;