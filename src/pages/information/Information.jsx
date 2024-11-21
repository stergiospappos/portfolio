import { Link } from "react-router-dom";
import { ReactLenis, useLenis } from "lenis/react";

import "./Information.css";
import DynamicCursor from "../../components/DynamicCursor/DynamicCursor";

import Transition from "../../components/preview/transition/Transition";

import {
  services,
  devtools,
  designtools,
  industries,
  courses,
  bootcamps,
} from "./info";

const Information = () => {
  const lenis = useLenis(({ scroll }) => {});

  return (
    <ReactLenis root>
      <DynamicCursor />
      <div className="information">
        <div className="container">
          <h1>
            Specializing in client-facing interactions, I excel in crafting
            solutions that prioritize functionality, and user experience, with a
            proven track record in boosting sales and income for my clients.
            With a keen eye for detail and a relentless pursuit of excellence, I
            aim to deliver projects that exceed expectations.
          </h1>
          <div className="info-services">
            <div className="col">
              <div className="sub-col">
                <ul>
                  {services.map((item) => (
                    <li key={item.id}>&#x2192; {item.text}</li>
                  ))}
                </ul>
              </div>
              {/* <div className="sub-col">
                <ul>
                  {tools.map((item) => (
                    <li key={item.id}>&#x2192; {item.text}</li>
                  ))}
                </ul>
              </div> */}
            </div>
            <div className="col">
              <p>
                When I take on a project, it&apos;s a commitment to transform
                more than just your website. It&apos;s about enhancing every
                touchpoint of your digital ecosystem.
              </p>
              <div className="contact-link">
                <Link to="/">&#x2192; Let&apos;s Connect</Link>
              </div>
            </div>
          </div>
          <div className="info-content">
            <div className="col">
              <div className="awards">
                <p data-cursor="Completed over 50+ projects">Industries</p>
                <div className="divider"></div>
                <ul>
                  {industries.map((item) => (
                    <li key={item.id}>&#x2192; {item.text}</li>
                  ))}
                </ul>
              </div>

              <div className="experience">
                <p data-cursor="Crafting visuals with industry-leading tools">
                  Design Tools
                </p>
                <div className="divider"></div>
                <ul>
                  {designtools.map((item) => (
                    <li key={item.id}>&#x2192; {item.text}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col">
              <div className="selected-clients">
                <p data-cursor="Digital solutions with cutting-edge technologies">
                  Development Tools
                </p>
                <div className="divider"></div>
                <ul>
                  {devtools.map((item) => (
                    <li key={item.id}>&#x2192; {item.text}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="info-content-2">
            <div className="col">
              <p data-cursor="Expanding horizons, one course at a time">
                Courses
              </p>
              <div className="divider"></div>
              <ul>
                {courses.map((item) => (
                  <li key={item.id}>&#x2192; {item.text}</li>
                ))}
              </ul>
            </div>
            <div className="col">
              <p data-cursor="Fast-tracking expertise through hands-on learning">
                Bootcamps
              </p>
              <div className="divider"></div>
              <ul>
                {bootcamps.map((item) => (
                  <li key={item.id}>&#x2192; {item.text}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </ReactLenis>
  );
};

export default Transition(Information);