import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ReactLenis, useLenis } from "lenis/react";

import "./Information.css";
import ContactForm from "../../components/ContactForm/ContactForm";
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
  const [isFormOpen, setFormOpen] = useState(false); // Manage form modal state

  return (
    <ReactLenis root>
      <DynamicCursor />
      <div className="information">
        <div className="container">
          <p className="intro">
            I'm Stergios—a web designer and developer with a passion for
            transforming ideas into impactful digital experiences. Originally
            from Greece, I've always been driven by data and the latest trends
            to help brands seize their most significant opportunities and
            trigger meaningful change. Focusing on excellence and collaboration,
            I turn visions into innovative solutions that exceed expectations.
          </p>

          <div className="info-services">
            <div className="col">
              <div className="services-container">
                {services.map((category) => (
                  <div key={category.category} className="service-category">
                    <h3 className="category-name">{category.category}</h3>
                    <ul>
                      {category.items.map((item, index) => (
                        <li key={index}>&#x2192; {item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
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
              <img
                className="personal-image
              "
                src="./assets/information/Stergios_Pappos.avif"
                alt="A photo of Stergios Pappos"
                data-cursor="That's me!"
              />
              <p>
                When I undertake a project, it's a commitment to transform not
                just your website but to elevate every facet of your digital
                presence. Guided by data-driven insights and a dedication to
                excellence, I enhance each touchpoint of your digital ecosystem
                to drive meaningful change.
              </p>
              {/* Contact Link */}
              <div className="contact-link" data-cursor="Click to open popup">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault(); // Prevent default navigation
                    setFormOpen(true); // Open the modal
                  }}
                >
                  &#x2192; Let&apos;s Connect
                </a>
              </div>

              {/* Contact Form Modal */}
              <ContactForm
                isOpen={isFormOpen}
                onClose={() => setFormOpen(false)}
              />
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
          {/* <div className="info-content-2">
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
          </div> */}
        </div>
      </div>
    </ReactLenis>
  );
};

export default Transition(Information);
