import { useEffect } from "react";
import { Link } from "react-router-dom";

import "./Home.css";

import Transition from "../../components/preview/transition/Transition";
import DynamicCursor from "../../components/DynamicCursor/DynamicCursor";
import EmailCopyHome from "../../components/EmailCopy/EmailCopyHome";
import SunSet from "../../components/Spline/Sunset";
import ParticlesBall from "../../components/Spline/ParticlesBall";

const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const enhance = (id) => {
  const element = document.getElementById(id),
    text = element.innerText.split("");
  element.innerText = "";

  text.forEach((value, index) => {
    const outer = document.createElement("span");
    outer.className = "outer";

    const inner = document.createElement("span");
    inner.className = "inner";
    inner.style.animationDelay = `${rand(-5000, 0)}ms`;

    const letter = document.createElement("span");
    letter.className = "letter";
    letter.innerText = value;
    letter.style.animationDelay = `${index * 1000}ms`;

    inner.appendChild(letter);
    outer.appendChild(inner);
    element.appendChild(outer);
  });
};

const Home = () => {
  useEffect(() => {
    enhance("hero-link-01");
    enhance("hero-link-02");
  }, []);

  return (
    <>
      <DynamicCursor />

      <div className="hero-header">
        <div id="text">
          <div className="line">
            <p className="word">Stergios</p>
            <p className="word">Pappos</p>
          </div>

          <div className="line">
            <p className="word">Web </p>
            <p className="word">Designer</p>
          </div>

          <div className="line">
            <p className="word">&</p>
            <p className="word">Developer</p>
          </div>

          <div className="line">
            <EmailCopyHome />

            <Link
              data-cursor="Connect with me on LinkedIn"
              id="hero-link-02"
              to="https://www.linkedin.com/in/spappos/"
              target="_blank"
              className="word fancy"
            >
              &#x2192;linkedin
            </Link>
          </div>
        </div>
      </div>
      <ParticlesBall />
    </>
  );
};

export default Transition(Home);
