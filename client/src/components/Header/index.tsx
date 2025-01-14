import React, { useState } from "react";
import monster from '../../img/logo.jpeg';
import ControllerConnectButton from '../CartridgeController/ControllerConnectButton';
import useSound from "use-sound";
import backgroundMusic from "../sounds/chillBeast.mp3";
import './main.css';

function Header() {
  const [isMuted, setIsMuted] = useState(false); // State to control mute
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
      <nav className="navbar">
        <div className='logo'>
          <a href="/"><img src={monster} alt="Logo" /></a>
          <h2>Baby <span>Beast</span></h2>
        </div>
        <div className="sound-controls">
          <button onClick={toggleMute} className="sound-button">
            {isMuted ? "🔇" : "🔊"}
          </button>
        </div>
        <ControllerConnectButton />
      </nav>
    </>
  )
}

export default Header;
