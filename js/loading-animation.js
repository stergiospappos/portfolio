//LOADING

document.addEventListener("DOMContentLoaded", () => {
  const sLetter = document.querySelector(".anim-s-letter");
  const pLetter = document.querySelector(".anim-p-letter");
  const line = document.querySelector(".loading-line");
  const logo = document.querySelector(".anim-logo");
  const logoContainer = document.querySelector(".loading-anim-logo-container");
  const loadingbg = document.querySelector(".loading-anim-bg");

  // Wrap each word in a span for animation
  sLetter.innerHTML = `<span>${sLetter.textContent}</span>`;
  pLetter.innerHTML = `<span>${pLetter.textContent}</span>`;

  // Step 1: Text Reveal Animation
  setTimeout(() => {
    sLetter.classList.add("reveal");
  }, 100);
  setTimeout(() => {
    pLetter.classList.add("reveal");
  }, 400);

  // Step 2: Line Expansion Animation
  setTimeout(() => {
    line.classList.add("expand");
  }, 1300);

  // Step 3: Optional Fade Out before moving up
  setTimeout(() => {
    logo.classList.add("fade-out");
  }, 2500);

  // Step 4: Clip Up
  setTimeout(() => {
    loadingbg.classList.add("clip-up");
  }, 3000);

  // Step 5: Set display to none
  setTimeout(() => {
    logoContainer.classList.add("hidden");
  }, 4000);
});
