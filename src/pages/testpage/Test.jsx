import { useEffect } from "react";
import { Link } from "react-router-dom";

import "./Test.css";

import Transition from "../../components/preview/transition/Transition";
import DynamicCursor from "../../components/DynamicCursor/DynamicCursor.jsx";

const Home = () => {
  return (
    <>
      <DynamicCursor />
      <div className="hero-header">
        <div id="text">
          <div className="line">
            <p className="word">Test</p>

            <p className="word">Page</p>
            <div>
              <div className="button-row">
                <a
                  href="#"
                  className="button"
                  data-cursor="A GSAP-powered custom cursor"
                >
                  <p className="button-text">A GSAP-powered custom cursor</p>
                  <div className="button-bg"></div>
                </a>
                <a
                  href="#"
                  className="button secondary"
                  data-cursor="With dynamic cursor text"
                >
                  <p className="button-text">With dynamic cursor text</p>
                  <div className="button-bg"></div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Transition(Home);
