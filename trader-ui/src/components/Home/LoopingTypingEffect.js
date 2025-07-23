import React, { useState, useEffect } from "react";

const LoopingTypingEffect = ({ text = "", speed = 40, pause = 1200 }) => {
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    if (!text) return;

    let i = 0;
    let timeout;

    const type = () => {
      if (i < text.length) {
        setDisplayed((prev) => prev + text[i]);
        i++;
        timeout = setTimeout(type, speed);
      } else {
        setTyping(false);
        timeout = setTimeout(() => {
          setDisplayed("");
          i = 0;
          setTyping(true);
          type();
        }, pause);
      }
    };

    setDisplayed("");
    setTyping(true);
    type();

    return () => clearTimeout(timeout);
  }, [text, speed, pause]);

  return (
    <span>
      {displayed}
      <span className="animate-pulse text-green-400">{typing ? "|" : ""}</span>
    </span>
  );
};

export default LoopingTypingEffect;