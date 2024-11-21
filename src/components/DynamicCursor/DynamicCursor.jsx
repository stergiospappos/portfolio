import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import PropTypes from "prop-types";
import "./DynamicCursor.css";

const DynamicCursor = ({ targetsData }) => {
  const cursorRef = useRef(null); // Reference for the cursor element
  const [currentText, setCurrentText] = useState(""); // Text inside the cursor
  const [isVisible, setIsVisible] = useState(false); // Control opacity dynamically
  const xOffset = 6;
  const yOffset = 50;

  useEffect(() => {
    const cursorItem = cursorRef.current;

    // Quick GSAP position setters for smooth animation
    const xTo = gsap.quickTo(cursorItem, "x", { ease: "power3" });
    const yTo = gsap.quickTo(cursorItem, "y", { ease: "power3" });

    const handleMouseMove = (e) => {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;
      const cursorX = e.clientX;
      const cursorY = e.clientY + scrollY;

      // Adjust position offset based on screen edges
      let xPercent = xOffset;
      let yPercent = yOffset;

      if (cursorX > windowWidth * 0.66) {
        xPercent = -100;
      }

      if (cursorY > scrollY + windowHeight * 0.9) {
        yPercent = -120;
      }

      gsap.to(cursorItem, {
        xPercent,
        yPercent,
        duration: 0.9,
        ease: "power3",
      });
      xTo(cursorX);
      yTo(cursorY - scrollY);
    };

    const handleMouseEnter = (e) => {
      const target = e.currentTarget;
      const newText = target.dataset.cursor || "";
      setCurrentText(newText); // Update cursor text
      setIsVisible(true); // Show the cursor
    };

    const handleMouseLeave = () => {
      // First, hide the cursor
      setIsVisible(false);
      setCurrentText("");
    };

    // Attach event listeners to elements with the `data-cursor` attribute
    const targets = document.querySelectorAll("[data-cursor]");
    targets.forEach((target) => {
      target.addEventListener("mouseenter", handleMouseEnter);
      target.addEventListener("mouseleave", handleMouseLeave);
    });

    // Update cursor position on mousemove
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      // Clean up event listeners
      targets.forEach((target) => {
        target.removeEventListener("mouseenter", handleMouseEnter);
        target.removeEventListener("mouseleave", handleMouseLeave);
      });
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [xOffset, yOffset]);

  return (
    <div
      className={`cursor ${isVisible ? "visible" : ""}`} // Dynamic visibility
      ref={cursorRef}
    >
      {/* Only render text if it's non-empty to avoid rendering an empty box */}
      {currentText && <p>{currentText}</p>}
    </div>
  );
};

DynamicCursor.propTypes = {
  targetsData: PropTypes.arrayOf(
    PropTypes.shape({
      cursorText: PropTypes.string.isRequired,
    })
  ),
};

export default DynamicCursor;
