import React from "react";
import "./MobileScreens.css"; // Add custom styles here

const MobileScreens = ({ images }) => {
  return (
    <div className="image-scroller">
      {images.slice(0, 3).map((image, index) => (
        <div key={index} className="image-wrapper">
          <img
            src={image.src}
            alt={image.alt || `Image ${index + 1}`}
            className="mobile-image"
          />
        </div>
      ))}
    </div>
  );
};

export default MobileScreens;
