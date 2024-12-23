import React, { useRef, useState, useEffect } from "react";

const VideoPlayer_Simple = ({ src, poster, type, autoPlayEnabled = false }) => {
  const videoRef = useRef(null); // Reference to the video element
  const [isPlaying, setIsPlaying] = useState(autoPlayEnabled);

  useEffect(() => {
    if (autoPlayEnabled && videoRef.current) {
      const playPromise = videoRef.current.play();

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true); // Video started playing successfully
          })
          .catch((error) => {
            console.error("Autoplay failed:", error); // Handle autoplay rejection
          });
      }
    }
  }, [autoPlayEnabled]);

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
        muted // Ensure autoplay compatibility
        loop // Always loop the video
        playsInline // Ensure the video plays inline on mobile
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
