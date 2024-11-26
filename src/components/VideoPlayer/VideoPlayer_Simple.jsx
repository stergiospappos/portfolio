import React, { useRef, useState } from "react";

const VideoPlayer_Simple = ({ src, poster, type, autoPlayEnabled = false }) => {
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
    <div className="device-container simple-player">
      <video
        ref={videoRef}
        poster={poster}
        autoPlay={autoPlayEnabled} // Control autoplay dynamically
        controls={false} // Hide default controls
        muted // Start muted
        loop // Always loop the video
        preload="none" // Lazy load the video
        width="100%" // Adjust size as needed
      >
        <source src={src} type={type} />
        Your browser does not support the video tag.
      </video>
      {!autoPlayEnabled && (
        <div>
          <button onClick={handlePlayPause}>
            {isPlaying ? "Pause" : "Play"}
          </button>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer_Simple;
