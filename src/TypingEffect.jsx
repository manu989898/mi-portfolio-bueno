import React, { useEffect, useState } from 'react';

const TypingEffect = ({ text, speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, speed);
    } else {
      setFinished(true); // Indica que la animación ha terminado
    }
  }, [index, text, speed]);

  return (
    <span className="typing-effect">
      {displayedText}
      <span className={`cursor ${finished ? 'blink' : ''}`}>|</span>
    </span>
  );
};

export default TypingEffect;
