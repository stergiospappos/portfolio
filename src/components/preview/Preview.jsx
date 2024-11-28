import { useState, useEffect, useRef } from "react";
import "./Preview.css";
import { previewImgs } from "./previewImages";
import tickSfx from "/assets/sfx/tick.wav";

const defaultPreviewImg = previewImgs[0];
const buffer = 100;

const Preview = () => {
  const [previewImg, setPreviewImg] = useState(defaultPreviewImg);
  const lastIndexRef = useRef(0); // Track the last index
  const audioContextRef = useRef(null); // Web Audio API context
  const audioBufferRef = useRef(null); // Preloaded audio buffer
  const lowQualityPreviews = useRef(previewImgs.map((img) => `${img}?w=50`)); // Thumbnail placeholders

  useEffect(() => {
    // Preload images and initialize Web Audio API
    const preloadImagesAndAudio = async () => {
      try {
        const context = new (window.AudioContext ||
          window.webkitAudioContext)();
        audioContextRef.current = context;

        const response = await fetch(tickSfx);
        const arrayBuffer = await response.arrayBuffer();
        const audioBuffer = await context.decodeAudioData(arrayBuffer);
        audioBufferRef.current = audioBuffer;

        // Preload optimized images
        previewImgs.forEach((img) => {
          const imgElement = new Image();
          imgElement.src = img;
        });
      } catch (error) {
        console.error("Failed to initialize audio or preload images:", error);
      }
    };

    preloadImagesAndAudio();
  }, []);

  useEffect(() => {
    // Smooth scroll handling
    const handleScroll = (() => {
      let lastTime = 0;

      return () => {
        const now = Date.now();
        if (now - lastTime < 16) return; // Throttle at 16ms (60fps)
        lastTime = now;

        const position = window.scrollY;
        const index = Math.floor(position / buffer) % previewImgs.length;

        // Cap scroll speed to ensure smooth transitions
        const cappedIndexChange = Math.min(
          Math.abs(index - lastIndexRef.current),
          5 // Limit max change per event
        );
        if (cappedIndexChange === 0) return;

        lastIndexRef.current = index;
        setPreviewImg(previewImgs[index]);

        // Play tick sound
        const context = audioContextRef.current;
        const audioBuffer = audioBufferRef.current;

        if (context && audioBuffer) {
          const source = context.createBufferSource();
          source.buffer = audioBuffer;
          source.connect(context.destination);
          source.start(0);
        }
      };
    })();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="archive-preview">
      <img
        src={lowQualityPreviews.current[previewImgs.indexOf(previewImg)]} // Start with low-quality placeholder
        data-src={previewImg} // Full-quality image
        alt="currently selected source"
        className="lazy"
        loading="lazy"
      />
    </div>
  );
};

export default Preview;
