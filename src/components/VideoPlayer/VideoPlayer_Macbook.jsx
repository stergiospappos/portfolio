import React, { useRef, useState } from "react";
import "./VideoPlayer.css";
import macbookImage from "./device-mbp-16-lower-nonotch.png"; // MacBook image URL

const MacBookVideo = ({ videoSrc, autoPlayEnabled = false }) => {
  const videoRef = useRef(null); // Reference to the video element
  const [isPlaying, setIsPlaying] = useState(autoPlayEnabled);

  const handlePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="device-container">
      {/* Device Image Overlay */}
      <div
        className="overlay-device-image"
        style={{
          backgroundImage: `url(${macbookImage})`,
        }}
      >
        {/* Video Element */}
        <div className="single-image">
          <video
            className="video-overlay"
            ref={videoRef}
            src={videoSrc}
            autoPlay={autoPlayEnabled}
            muted
            loop
            playsInline
          ></video>
        </div>
        {!autoPlayEnabled && (
          <div className="video-controls">
            <button onClick={handlePlayPause}>
              {isPlaying ? "Pause" : "Play"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MacBookVideo;
