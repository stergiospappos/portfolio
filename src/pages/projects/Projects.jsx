import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ReactLenis } from "lenis/react";

import "./Projects.css";
import PixelatedImageCard from "../../components/PixelatedImageCard/PixelatedImageCard";
import Transition from "../../components/preview/transition/Transition";
import DynamicCursor from "../../components/DynamicCursor/DynamicCursor";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import projects from "../../data/projects"; // Import the updated projects.js
gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const containerRef = useRef(null); // Ref for the container

  useEffect(() => {
    if (containerRef.current) {
      // Setup ScrollTrigger for infinite scrolling
      ScrollTrigger.create({
        scroller: containerRef.current,
        start: 0,
        end: "max",
        onLeave: (self) => {
          self.scroll(1);
          ScrollTrigger.update();
        },
        onLeaveBack: (self) => {
          self.scroll(ScrollTrigger.maxScroll(containerRef.current) - 1);
          ScrollTrigger.update();
        },
      });

      const projectItems =
        containerRef.current.querySelectorAll(".project-item");

      // GSAP animations for project items
      projectItems.forEach((item) => {
        gsap.to(item, {
          opacity: 1,
          repeat: 1,
          yoyo: true,
          ease: "none",
          scrollTrigger: {
            scroller: containerRef.current,
            trigger: item,
            start: "center bottom",
            end: "center top",
            scrub: true,
          },
        });
      });
    }
  }, []);

  return (
    <ReactLenis root>
      <DynamicCursor />
      <div
        className="projects"
        ref={containerRef}
        style={{
          height: "100vh",
          // Uncomment for overflow scrolling
          // overflowY: "auto"
        }}
      >
        <div className="container">
          {/* Render each project dynamically */}
          {projects.map((project, index) => (
            <div className="row" key={index}>
              <div className="project-item">
                <div className="project-img">
                  <Link to={`/projects/${project.id}`}>
                    <PixelatedImageCard
                      defaultImg={project.coverImage} // Render default image
                      activeImg={project.hoverImage} // Render active image
                    />
                  </Link>
                </div>
                <div className="project-details">
                  <p id="project-name"> &#x2192; {project.title}</p>{" "}
                  {/* Project title */}
                  <p id="project-category">{project.category}</p>{" "}
                  {/* Project category */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ReactLenis>
  );
};

export default Transition(Projects);
