import React, { useEffect, useState } from "react";

const textList = [
  "Engineer BigData Fullstack",
  "Data Engineer",
  "Developper Python",
];

const Typewriter = () => {
  const [currentText, setCurrentText] = useState("");
  const [stringIndex, setStringIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const typeJs = () => {
      const currentString = textList[stringIndex];

      if (isTyping) {
        if (charIndex < currentString.length) {
          setCurrentText((prev) => prev + currentString.charAt(charIndex));
          setCharIndex((prev) => prev + 1);
        } else {
          setIsTyping(false);
        }
      } else {
        if (charIndex > 0) {
          setCurrentText(currentString.substring(0, charIndex - 1));
          setCharIndex((prev) => prev - 1);
        } else {
          setIsTyping(true);
          setStringIndex((prev) => (prev + 1) % textList.length);
        }
      }
    };

    const intervalId = setInterval(typeJs, 150);

    return () => clearInterval(intervalId);
  }, [charIndex, isTyping, stringIndex]);

  return <span>{currentText}</span>;
};

export default Typewriter;
