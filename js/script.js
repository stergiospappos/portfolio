//Header Hide & Show
const header = document.querySelector("header");

let lastScrollY = window.scrollY;

// Listen to scroll events
window.addEventListener("scroll", () => {
  if (window.scrollY > lastScrollY) {
    // Scrolling down - hide the header
    header.style.transform = "translateY(-100%)";
  } else {
    // Scrolling up - show the header
    header.style.transform = "translateY(0)";
  }
  // Update last scroll position
  lastScrollY = window.scrollY;
});
