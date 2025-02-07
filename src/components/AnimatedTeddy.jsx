import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './AnimatedTeddy.css';

const AnimatedTeddy = ({ onYesClick }) => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [buttonPosition, setButtonPosition] = useState({ top: 0, left: 0 });

  const messages = [
    "Hey, moon! 💖 Welcome back! I can't tell you how much I have missed you and I wanted to do something really special today.",
    "So as you know valentine day is coming. And I wanna ask you something? 😘",
    "That ... Just a sec... I think I hear something... someone’s at the door? Let me see. 👀",
    "Oh! It's a postman! He has a letter for you... ✨",
    "Here 💌, Do you wanna open it cuties? ",
  ];

  const nextMessage = () => {
    setCurrentMessageIndex((prevIndex) =>
      prevIndex === messages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleYesClick = () => {
    onYesClick();
  };

  const generateRandomPosition = () => {
    const x = Math.floor(Math.random() * 400) - 200;
    const y = Math.floor(Math.random() * 400) - 200;
    setButtonPosition({ x, y });
  };

  return (
    <div className="interactive-teddy-container">
      <motion.div
        initial={{ opacity: 0, scale: 0.5, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.5, y: 50 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="teddy-container"
        whileTap={{ scale: 0.95 }}
        style={{ position: 'absolute' }}
      >
        <div className="message-container">
          <div className="handwritten-paper">
            <div className="speech-bubble">
              {messages[currentMessageIndex]}
            </div>
          </div>
          <div className="message-controls">
            {currentMessageIndex === messages.length - 1 ? (
              <>
                <button className="yes-btn" onClick={handleYesClick}>
                  Yes
                </button>
                <motion.button
              className="no-button"
              onHoverStart={generateRandomPosition}
              style={{
                transform: `translate(${buttonPosition.x}px, ${buttonPosition.y}px)`
              }}
            >
              No
            </motion.button>
              </>
            ) : (
              <>
                <button className="next-btn" onClick={nextMessage}>
                  Next
                </button>
              </>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AnimatedTeddy;
