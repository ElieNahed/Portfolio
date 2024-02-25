import React, { useState, useEffect } from "react";
import "../App.css";

const Animation: React.FC = () => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const phrases = ["Elie Nahed  ", "Software Developer ", "Freelancer"];
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  useEffect(() => {
    const handleTyping = () => {
      const currentPhrase = phrases[loopNum];
      if (!isDeleting) {
        if (text === currentPhrase) {
          setIsDeleting(true);
          setTimeout(() => {
            setIsDeleting(false);
            setLoopNum((prevLoopNum) => (prevLoopNum + 1) % phrases.length);
          }, 5000); // Increase the timeout to slow down the animation (e.g., 5000 milliseconds = 5 seconds)
        } else {
          setText((prevText) => {
            return currentPhrase.substring(0, prevText.length + 1);
          });
        }
      } else {
        if (text === "") {
          setIsDeleting(false);
          setLoopNum((prevLoopNum) => (prevLoopNum + 1) % phrases.length);
        } else {
          setText((prevText) => {
            return currentPhrase.substring(0, prevText.length - 1);
          });
        }
      }
    };

    const typingTimeout = setTimeout(handleTyping, 100); // Adjust the timeout to control the typing speed
    return () => clearTimeout(typingTimeout);
  }, [text, loopNum, isDeleting, phrases]);

  return (
    <div className="typing-animation-container">
      <h1 className="typing-animation">{text}</h1>
    </div>
  );
};

export default Animation;
