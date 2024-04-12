import React, { useState, useEffect, useRef } from "react";

interface TypingEffectProps {
  text: string;
}

export const TypingEffect: React.FC<TypingEffectProps> = ({ text }) => {
  const [index, setIndex] = useState(0);
  const typingSpeed: number = 50; // Velocidade de digitação em milissegundos
  const textRef = useRef<string>("");

  useEffect(() => {
    const intervalId: NodeJS.Timeout = setInterval(() => {
      textRef.current += text.charAt(index);
      setIndex((prevIndex) => prevIndex + 1);
      if (index === text.length) {
        clearInterval(intervalId);
      }
    }, typingSpeed);

    return () => clearInterval(intervalId);
  }, [index]);

  return <span>{textRef.current}</span>;
};
