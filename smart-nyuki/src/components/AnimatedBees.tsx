import React, { useEffect, useState } from 'react';
import './AnimatedBees.css';

const Bee: React.FC = () => {
  const [style, setStyle] = useState<React.CSSProperties>({});

  useEffect(() => {
    const size = Math.random() * 20 + 10; // Emojis will be between 10px and 30px
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const animationDuration = Math.random() * 20 + 15; // Duration between 15s and 35s
    const animationDelay = Math.random() * 5; // Delay up to 5s

    setStyle({
      left: `${x}%`,
      top: `${y}%`,
      fontSize: `${size}px`,
      animationDuration: `${animationDuration}s`,
      animationDelay: `${animationDelay}s`,
    });
  }, []);

  return (
    <div className="bee" style={style}>
      🐝
    </div>
  );
};

interface AnimatedBeesProps {
  beeCount?: number;
}

const AnimatedBees: React.FC<AnimatedBeesProps> = ({ beeCount = 20 }) => {
  return (
    <div className="bees-container">
      {Array.from({ length: beeCount }).map((_, i) => (
        <Bee key={i} />
      ))}
    </div>
  );
};

export default AnimatedBees;
