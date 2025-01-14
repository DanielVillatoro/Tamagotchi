import React, { useState } from "react";
import useSound from "use-sound";
import backgroundMusic from "../assets/sounds/chillBeast.mp3";
import './main.css';

function Music() {
  const [isMuted, setIsMuted] = useState(false);
  const [play, { stop, sound }] = useSound(backgroundMusic, {
    loop: true,
    volume: isMuted ? 0 : 0.3, // Adjust volume dynamically
  });

  React.useEffect(() => {
    play(); // Play sound when component loads
    return () => stop(); // Stop sound when component unmounts
  }, [play, stop]);

  const toggleMute = () => {
    if (sound) {
      setIsMuted((prev) => !prev); // Toggle between mute and unmute
    }
  };

  return (
    <>
      <div className="sound-controls">
        <button onClick={toggleMute} className="sound-button">
          {isMuted ? "🔇" : "🔊"}
        </button>
      </div>
    </>
  )
}

export default Music;
