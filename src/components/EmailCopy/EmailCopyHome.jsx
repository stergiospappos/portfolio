import React, { useState, useEffect } from "react";

const EmailCopyHome = () => {
  const [cursorMessage, setCursorMessage] = useState("Click to copy my email!");
  const email = "contact@stergiospappos.me";

  const copyEmail = () => {
    navigator.clipboard.writeText(email); // Copy email to clipboard
    setCursorMessage("Copied!"); // Update cursor message immediately
    triggerMouseEvents("Copied!"); // Trigger events to update the cursor
  };

  const handleMouseLeave = () => {
    // Reset the cursor message when the mouse leaves
    setCursorMessage("Click to copy my email!");
    triggerMouseEvents("Click to copy my email!"); // Ensure the cursor resets
  };

  const triggerMouseEvents = (message) => {
    const element = document.getElementById("hero-link-01");
    if (element) {
      // Manually update the `data-cursor` attribute
      element.setAttribute("data-cursor", message);

      // Trigger mouseleave and mouseenter events
      element.dispatchEvent(new MouseEvent("mouseleave", { bubbles: true }));
      element.dispatchEvent(new MouseEvent("mouseenter", { bubbles: true }));
    }
  };

  useEffect(() => {
    if (cursorMessage === "Copied!") {
      const timer = setTimeout(() => {
        setCursorMessage("Click to copy my email!");
        triggerMouseEvents("Click to copy my email!");
      }, 3000); // Reset after 3 seconds
      return () => clearTimeout(timer); // Cleanup timer
    }
  }, [cursorMessage]);

  return (
    <div
      data-cursor={cursorMessage} // Dynamic data-cursor attribute
      onClick={copyEmail} // Handle click to copy email
      onMouseLeave={handleMouseLeave} // Reset cursor on hover off
      id="hero-link-01" // Specified ID
      className="word fancy pointer" // Specified class names
    >
      &#x2192;Email
    </div>
  );
};

export default EmailCopyHome;
