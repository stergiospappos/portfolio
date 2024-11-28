import { useState, useEffect, useRef } from "react";
import "./Preview.css";
import archiveData from "../../data/archiveData";
import tickSfx from "/assets/sfx/tick.wav";

const defaultPreviewImg = archiveData[0].image;
const buffer = 100;

const Preview = () => {
  const [previewImg, setPreviewImg] = useState(defaultPreviewImg);
  const lastIndexRef = useRef(0);
  const audioContextRef = useRef(null);
  const audioBufferRef = useRef(null);
  const isAudioInitialized = useRef(false);

  useEffect(() => {
    const preloadAssets = async () => {
      try {
        const context = new (window.AudioContext ||
          window.webkitAudioContext)();
        audioContextRef.current = context;

        const response = await fetch(tickSfx);
        const arrayBuffer = await response.arrayBuffer();
        const audioBuffer = await context.decodeAudioData(arrayBuffer);
        audioBufferRef.current = audioBuffer;

        archiveData.forEach(({ image }) => {
          const img = new Image();
          img.src = image;
        });
      } catch (error) {
        console.error("Failed to initialize audio or preload images:", error);
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
        setPreviewImg(archiveData[index].image);

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
      <img
        src={previewImg}
        alt="Preview of the current project"
        className="preview-img"
        loading="lazy"
      />
    </div>
  );
};

export default Preview;
