// ValentineResponse.js
import React from 'react';
import { motion } from "framer-motion";
import Confetti from 'react-confetti';
import './ValentineResponse.css';
import dance from '../images/dancing.gif'

const ValentineResponse = ({ message, onClose }) => {
  return (
    <div className="valentine-response">
      {/* Confetti animation */}
      <Confetti />

      {/* Displaying the Valentine's message */}
      <motion.div
        className="valentine-message"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <p>{message}</p>
      </motion.div>

      <img src={dance} alt='dancing' className='dancing-gif'/>

      {/* Close button to dismiss response */}
      <button className="close-button" onClick={onClose}>Close</button>
    </div>
  );
};

export default ValentineResponse;
