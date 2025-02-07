import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import together from '../images/together.gif'
import './AnimatedMessage.css';

const AnimatedMessage = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onComplete) {
        onComplete(); // Trigger the next component mount
      }
    }, 6000); // 4 seconds for the animation to complete

    return () => clearTimeout(timer); // Clean up on unmount
  }, [onComplete]);

  return (
    <div className={`animated-message ${isVisible ? 'fade-in' : 'fade-out'}`}>
      <Confetti />
      <img src={together} alt="dog.text" className='dog-img'/>
      <p style={{ display: "flex", justifyContent: "center", fontSize: "14px", fontWeight: "bold" }}>
        My love , Hope you'll like it !! Hehe 😊
      </p>

      </div>
  );
};

export default AnimatedMessage;
