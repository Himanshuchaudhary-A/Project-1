import React, { useState } from "react";
import Letter from './components/Letter.jsx';
import AnimatedTeddy from "./components/AnimatedTeddy.jsx";
import AnimatedBackground from "./components/AnimatedBackground.jsx";
import AnimatedMessage from "./components/AnimatedMessage"; // Import the new AnimatedMessage component

const App = () => {
  const [showLetter, setShowLetter] = useState(false);
  const [showAnimatedMessage, setShowAnimatedMessage] = useState(true); // Control when to show the AnimatedMessage component

  const handleYesClick = () => {
    setShowLetter(true); // Show the Letter component when "Yes" is clicked
  };

  const handleMessageComplete = () => {
    setShowAnimatedMessage(false); // Hide the AnimatedMessage after it finishes
  };

  return (
    <div>
      {/* Conditionally render the AnimatedMessage on initial load */}
      {showAnimatedMessage && <AnimatedMessage onComplete={handleMessageComplete} />}
      
      {/* Conditionally render AnimatedTeddy or Letter */}
      {!showAnimatedMessage && (
        !showLetter ? (
          <AnimatedTeddy onYesClick={handleYesClick} />
        ) : (
          <Letter />
        )
      )}

      {!showAnimatedMessage && (
        <AnimatedBackground />
      )}
    </div>
  );
};

export default App;
