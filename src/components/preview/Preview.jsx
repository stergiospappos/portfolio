import { useState, useEffect, useRef } from "react";
import "./Preview.css";
import { previewImgs } from "./previewImages";
import tickSfx from "/assets/sfx/tick.wav";

const defaultPreviewImg = previewImgs[0];
const buffer = 100;

const Preview = () => {
  const [previewImg, setPreviewImg] = useState(defaultPreviewImg);
  const lastIndexRef = useRef(0); // Track the last index to avoid redundant updates
  const audioContextRef = useRef(null); // Reference for Web Audio API context
  const audioBufferRef = useRef(null); // Reference for preloaded audio buffer

  useEffect(() => {
    // Preload images
    previewImgs.forEach((img) => {
      const imgElement = new Image();
      imgElement.src = img;
    });

    // Initialize Web Audio API
    const initAudio = async () => {
      try {
        const context = new (window.AudioContext ||
          window.webkitAudioContext)();
        audioContextRef.current = context;

        const response = await fetch(tickSfx);
        const arrayBuffer = await response.arrayBuffer();
        const audioBuffer = await context.decodeAudioData(arrayBuffer);
        audioBufferRef.current = audioBuffer;
      } catch (error) {
        console.error("Failed to initialize audio:", error);
      }
    };

    initAudio();
  }, []);

  useEffect(() => {
    const handleScroll = (() => {
      let lastTime = 0;

      return () => {
        const now = Date.now();
        if (now - lastTime < 50) return; // Play sound at most every 50ms for faster response
        lastTime = now;

        const position = window.scrollY;
        const index = Math.floor(position / buffer) % previewImgs.length;

        if (index !== lastIndexRef.current) {
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
      <img src={previewImg} alt="currently selected source" loading="lazy" />
    </div>
  );
};

export default Preview;
