import { useEffect, useRef } from "react";
import "./Preview.css";
import archiveData from "../../data/archiveData";
import tickSfx from "/assets/sfx/tick.wav";

const buffer = 100;

const Preview = () => {
  const lastIndexRef = useRef(0);
  const audioContextRef = useRef(null);
  const audioBufferRef = useRef(null);
  const isAudioInitialized = useRef(false);

  useEffect(() => {
    const preloadAssets = async () => {
      try {
        // Preload audio
        const context = new (window.AudioContext ||
          window.webkitAudioContext)();
        audioContextRef.current = context;

        const response = await fetch(tickSfx);
        const arrayBuffer = await response.arrayBuffer();
        const audioBuffer = await context.decodeAudioData(arrayBuffer);
        audioBufferRef.current = audioBuffer;
      } catch (error) {
        console.error("Error preloading audio:", error);
      }
    };

    preloadAssets();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      const index = Math.floor(position / buffer) % archiveData.length;

      if (index !== lastIndexRef.current) {
        lastIndexRef.current = index;

        // Hide all images and show the current one
        document
          .querySelectorAll(".preview-img")
          .forEach((img, i) => (img.style.opacity = i === index ? "1" : "0"));

        // Play sound
        const context = audioContextRef.current;
        const audioBuffer = audioBufferRef.current;

        if (context && audioBuffer) {
          if (!isAudioInitialized.current) {
            context.resume().then(() => {
              isAudioInitialized.current = true;
            });
          }
          const source = context.createBufferSource();
          source.buffer = audioBuffer;
          source.connect(context.destination);
          source.start(0);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="archive-preview">
      {archiveData.map(({ image }, index) => (
        <img
          key={index}
          src={image}
          alt={`Preview ${index}`}
          className="preview-img"
          style={{
            opacity: index === 0 ? "1" : "0", // Show only the first image initially
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            transition: "opacity 0.1s ", // Smooth transition between images
          }}
        />
      ))}
    </div>
  );
};

export default Preview;
