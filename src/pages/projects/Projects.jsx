import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ReactLenis } from "lenis/react";

import "./Projects.css";
import PixelatedImageCard from "../../components/PixelatedImageCard/PixelatedImageCard";
import Transition from "../../components/preview/transition/Transition";
import DynamicCursor from "../../components/DynamicCursor/DynamicCursor";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import projects from "../../data/projects"; // Your projects.js
gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const containerRef = useRef(null);
  const [projectList, setProjectList] = useState([]);

  useEffect(() => {
    const initialSet = Array(30)
      .fill()
      .flatMap((_, i) =>
        projects.map((project, j) => ({
          ...project,
          id: `${i}-${j}`, // Generate a unique id using a combination of indices
        }))
      );
    setProjectList(initialSet);
  }, []);

  // Infinite scroll and animations setup
  useEffect(() => {
    const container = containerRef.current;

    if (container && projectList.length > 0) {
      // ScrollTrigger infinite scroll logic
      const maxScroll = container.scrollHeight - container.clientHeight;

      const scrollTriggerInstance = ScrollTrigger.create({
        scroller: container,
        start: 0,
        end: "max",
        onUpdate: (self) => {
          if (self.progress >= 1) {
            container.scrollTop = 1; // Loop to start
          } else if (self.progress <= 0) {
            container.scrollTop = maxScroll - 1; // Loop to end
          }
        },
      });

      // GSAP animations for project items
      const projectItems = container.querySelectorAll(".project-item");
      projectItems.forEach((item) => {
        gsap.fromTo(
          item,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            ease: "power1.out",
            scrollTrigger: {
              scroller: container,
              trigger: item,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      });

      // Cleanup on unmount
      return () => {
        scrollTriggerInstance.kill();
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }
  }, [projectList]);

  return (
    <ReactLenis root>
      <DynamicCursor />
      <div
        className="projects"
        ref={containerRef}
        style={{
          height: "100vh",
          overflowY: "auto",
        }}
      >
        <div className="container">
          {/* Render each project dynamically */}
          {projectList.map((project) => (
            <div className="row" key={project.id}>
              <div className="project-item">
                <div className="project-img">
                  <Link to={`/projects/${project.slug}`}>
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
