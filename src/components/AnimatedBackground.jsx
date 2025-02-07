import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import './AnimatedBackground.css';


const AnimatedBackground = () => {
  const [hearts, setHearts] = useState([]);
  const currentName = 'LOVE'; // Default name

  useEffect(() => {
    const numHearts = 60; // Number of hearts to create
    const generatedHearts = [];

    for (let i = 0; i < numHearts; i++) {
      //@ts-ignore
      generatedHearts.push({
        id: i,
        left: `${Math.random() * 100}vw`,
        top: `${Math.random() * 100}vh`,
        animationDelay: Math.random() * 2,
        animationDuration: 5 + Math.random() * 5,
        opacity: 1,
      });
    }

    setHearts(generatedHearts);

  }, [currentName]);

  return (
    <div className="background-container">
      <div className="hearts-container">
        {hearts.map((heart) => (
          <motion.div
            key={heart.id}
            className="heart-container"
            style={{
              left: heart.left,
              top: heart.top,
            }}
            initial={{ opacity: 0, scale: 0, z: 1000 }}
            animate={{
              opacity: heart.opacity,
              scale: [0.8, 1.2, 1], // Scaling animation for hearts
              y: [-20, 20, -20], // Vertical oscillation
              rotateY: [0, 360], // 3D rotation effect

            }}
            transition={{
              y: {
                duration: 5,
                ease: 'easeInOut',
                repeat: Infinity,
                repeatDelay: 0.5,
              },
              rotateY: {
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
              },
              delay: heart.animationDelay,
              z: {
                duration: 5,
                ease: 'easeInOut',
                repeat: Infinity,
              },
            }}
          >
            <svg
              width="50"
              height="50"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="heart-svg"
            >
              <path
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                fill="red"
              />
            </svg>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedBackground;
