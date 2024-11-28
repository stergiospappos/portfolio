import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import "./PixelatedImageCard.css";

const PixelatedImageCard = ({ defaultImg, activeImg }) => {
  const gridSize = 7;
  const animationStepDuration = 0.3;
  const pixelSize = 100 / gridSize;
  const [isActive, setIsActive] = useState(false);
  const cardRef = useRef(null);
  const pixelGridRef = useRef(null);
  const activeCardRef = useRef(null);
  const delayedCall = useRef(null);

  const generatePixels = () => {
    const pixels = [];
    for (let row = 0; row < gridSize; row++) {
      for (let col = 0; col < gridSize; col++) {
        const style = {
          width: `${pixelSize}%`,
          height: `${pixelSize}%`,
          left: `${col * pixelSize}%`,
          top: `${row * pixelSize}%`,
        };
        pixels.push(
          <div
            key={`${row}-${col}`}
            className="pixelated-image-card__pixel"
            style={style}
          />
        );
      }
    }
    return pixels;
  };

  useEffect(() => {
    const card = cardRef.current;
    const pixelGrid = pixelGridRef.current;
    const activeCard = activeCardRef.current;
    const pixels = pixelGrid.querySelectorAll(".pixelated-image-card__pixel");
    const staggerDuration = animationStepDuration / pixels.length;

    const animatePixels = (activate) => {
      setIsActive(activate);
      gsap.killTweensOf(pixels);
      if (delayedCall.current) delayedCall.current.kill();
      gsap.set(pixels, { display: "none" });

      gsap.to(pixels, {
        display: "block",
        duration: 0,
        stagger: {
          each: staggerDuration,
          from: "random",
        },
      });

      delayedCall.current = gsap.delayedCall(animationStepDuration, () => {
        if (activate) {
          activeCard.style.display = "block";
          activeCard.style.pointerEvents = "none";
        } else {
          activeCard.style.display = "none";
        }
      });

      gsap.to(pixels, {
        display: "none",
        duration: 0,
        delay: animationStepDuration,
        stagger: {
          each: staggerDuration,
          from: "random",
        },
      });
    };

    const isTouchDevice =
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia("(pointer: coarse)").matches;

    if (isTouchDevice) {
      card.addEventListener("click", () => animatePixels(!isActive));
    } else {
      card.addEventListener("mouseenter", () => {
        if (!isActive) animatePixels(true);
      });
      card.addEventListener("mouseleave", () => {
        if (isActive) animatePixels(false);
      });
    }

    return () => {
      card.removeEventListener("click", () => animatePixels(!isActive));
      card.removeEventListener("mouseenter", () => animatePixels(true));
      card.removeEventListener("mouseleave", () => animatePixels(false));
    };
  }, [isActive]);

  return (
    <div
      ref={cardRef}
      className="pixelated-image-card"
      data-pixelated-image-reveal
    >
      <div className="before__100" />
      <div className="pixelated-image-card__default">
        <img src={defaultImg} alt="" className="pixelated-image-card__img" />
      </div>
      <div
        ref={activeCardRef}
        className="pixelated-image-card__active"
        data-pixelated-image-reveal-active
      >
        <img src={activeImg} alt="" className="pixelated-image-card__img" />
      </div>
      <div
        ref={pixelGridRef}
        className="pixelated-image-card__pixels"
        data-pixelated-image-reveal-grid
      >
        {generatePixels()}
      </div>
    </div>
  );
};

export default PixelatedImageCard;
