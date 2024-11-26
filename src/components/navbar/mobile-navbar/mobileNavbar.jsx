import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";
import "./MobileMenu.css"; // Assuming the styles are saved here.

gsap.registerPlugin(CustomEase);
CustomEase.create("main", "0.65, 0.01, 0.05, 0.99");
gsap.defaults({
  ease: "main",
  duration: 0.7,
});

const MobileMenu = () => {
  const navRef = useRef(null);
  const overlayRef = useRef(null);
  const menuRef = useRef(null);
  const bgPanelsRef = useRef([]);
  const menuLinksRef = useRef([]);
  const fadeTargetsRef = useRef([]);
  const menuButtonTextsRef = useRef([]);
  const menuButtonIconRef = useRef(null);
  const menuState = useRef("closed");
  const tl = useRef(gsap.timeline({ paused: true }));

  const openNav = () => {
    if (menuState.current === "open") return;
    menuState.current = "open";

    tl.current
      .clear()
      .set(navRef.current, { display: "block" })
      .set(menuRef.current, { xPercent: 0 }, "<")
      .fromTo(
        menuButtonTextsRef.current,
        { yPercent: 0 },
        { yPercent: -100, stagger: 0.2 }
      )
      .fromTo(menuButtonIconRef.current, { rotate: 0 }, { rotate: 315 }, "<")
      .fromTo(overlayRef.current, { autoAlpha: 0 }, { autoAlpha: 1 }, "<")
      .fromTo(
        bgPanelsRef.current,
        { xPercent: 101 },
        { xPercent: 0, stagger: 0.12, duration: 0.575 },
        "<"
      )
      .fromTo(
        menuLinksRef.current,
        { yPercent: 140, rotate: 10 },
        { yPercent: 0, rotate: 0, stagger: 0.05 },
        "<+=0.35"
      )
      .fromTo(
        fadeTargetsRef.current,
        { autoAlpha: 0, yPercent: 50 },
        { autoAlpha: 1, yPercent: 0, stagger: 0.04 },
        "<+=0.2"
      );
  };

  const closeNav = () => {
    if (menuState.current === "closed") return;
    menuState.current = "closed";

    tl.current
      .clear()
      .to(overlayRef.current, { autoAlpha: 0 })
      .to(menuRef.current, { xPercent: 120 }, "<")
      .to(menuButtonTextsRef.current, { yPercent: 0 }, "<")
      .to(menuButtonIconRef.current, { rotate: 0 }, "<")
      .set(navRef.current, { display: "none" });
  };

  useEffect(() => {
    const handleToggleMenu = () => {
      if (menuState.current === "open") {
        closeNav();
      } else {
        openNav();
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === "Escape" && menuState.current === "open") {
        closeNav();
      }
    };

    // Event Listeners
    const menuToggles = document.querySelectorAll("[data-menu-toggle]");
    menuToggles.forEach((toggle) =>
      toggle.addEventListener("click", handleToggleMenu)
    );
    document.addEventListener("keydown", handleKeyDown);

    // Cleanup
    return () => {
      menuToggles.forEach((toggle) =>
        toggle.removeEventListener("click", handleToggleMenu)
      );
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div data-nav="closed" ref={navRef} className="nav">
      <div ref={overlayRef} className="overlay" onClick={closeNav}></div>
      <nav ref={menuRef} className="menu">
        <div className="menu-bg">
          {Array(3)
            .fill(0)
            .map((_, i) => (
              <div
                key={i}
                ref={(el) => (bgPanelsRef.current[i] = el)}
                className={`bg-panel ${
                  i === 0 ? "first" : i === 1 ? "second" : ""
                }`}
              ></div>
            ))}
        </div>
        <div className="menu-inner">
          <ul className="menu-list">
            {["About us", "Our work", "Services", "Blog", "Contact us"].map(
              (item, index) => (
                <li key={index} className="menu-list-item">
                  <a
                    href="#"
                    className="menu-link"
                    ref={(el) => (menuLinksRef.current[index] = el)}
                  >
                    <p className="menu-link-heading">{item}</p>
                    <p className="eyebrow">{`0${index + 1}`}</p>
                    <div className="menu-link-bg"></div>
                  </a>
                </li>
              )
            )}
          </ul>
          <div className="menu-details">
            <p data-menu-fade="" className="p-small">
              Socials
            </p>
            <div className="socials-row">
              {["Instagram", "LinkedIn", "Twitter", "Awwwards"].map(
                (social, index) => (
                  <a
                    key={index}
                    href="#"
                    data-menu-fade=""
                    ref={(el) => (fadeTargetsRef.current[index] = el)}
                    className="p-large text-link"
                  >
                    {social}
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default MobileMenu;
