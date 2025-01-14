import React, { useEffect, useState } from "react";

const Typewriter = ({ text, delay }) => {
  const textList = ["Enginner BigData FullStact", "Developper Python"];
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const typeJs = () => {
      const currentString = textList[currentIndex];
      if (isTyping) {
        if (charIndex < currentString.length) {
          setCurrentText(
            (prevText) => prevText + currentString.charAt[charIndex]
          );
          setCharIndex((prevIndex) => prevIndex + 1);

          return () => clearTimeout(timeout);
        } else {
          setIsTyping(false);
        }
      } else {
        if (charIndex > 0) {
          setCurrentText(currentString.substring(0, charIndex - 1));
          setCharIndex((prevIndex) => prevIndex - 1);
        } else {
          setIsTyping(true);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % textList.length);
        }
      }
    };

    const intervalId = setInterval(typeJs, 100);
  }, [charIndex, currentIndex, text, delay]);

  return <span>{currentText}</span>;
};

export default Typewriter;
