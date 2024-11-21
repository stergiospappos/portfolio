import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ReactLenis, useLenis } from "lenis/react";

import "./Projects.css";
import PixelatedImageCard from "../../components/PixelatedImageCard/PixelatedImageCard";

import Transition from "../../components/preview/transition/Transition";
import DynamicCursor from "../../components/DynamicCursor/DynamicCursor";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import ProjectImg1 from "../../assets/projects/project1.jpg";
import ProjectImg2 from "../../assets/projects/project2.jpg";
import ProjectImg3 from "../../assets/projects/project3.jpg";
import ProjectImg4 from "../../assets/projects/project4.jpg";
import ProjectImg5 from "../../assets/projects/project5.jpg";
import ProjectImg6 from "../../assets/projects/project6.jpg";

import PhysisImg1 from "../../assets/projects/physis-massage/projects-physis-img1.avif";
import PhysisImg2 from "../../assets/projects/physis-massage/projects-physis-img2.avif";

const Projects = () => {
  const [projectList, setProjectList] = useState([]);
  const containerRef = useRef(null);
  const lenis = useLenis(({ scroll }) => {});

  const projects = [
    {
      name: "Physis Massage",
      category: "Web Design & Development",
      img: PhysisImg1,
      activeImg: PhysisImg2,
      slug: "physis-massage",
    },
    {
      name: "Echoes of Light",
      category: "Digital Illustration",
      img: ProjectImg2,
      activeImg: ProjectImg3,
      slug: "sample-project",
    },
    {
      name: "Urban Symphony",
      category: "Environmental Design",
      img: ProjectImg3,
      activeImg: ProjectImg4,
      slug: "sample-project",
    },
    {
      name: "Fragmented Reality",
      category: "3D Animation",
      img: ProjectImg4,
      activeImg: ProjectImg5,
      slug: "sample-project",
    },
    {
      name: "Luminous Flux",
      category: "Motion Graphics",
      img: ProjectImg5,
      activeImg: ProjectImg6,
      slug: "sample-project",
    },
    {
      name: "Reflections",
      category: "Interactive Media",
      img: ProjectImg6,
      activeImg: ProjectImg2,
      slug: "sample-project",
    },
  ];

  useEffect(() => {
    const initialSet = Array(30)
      .fill()
      .flatMap((_, i) =>
        projects.map((project, j) => ({
          ...project,
          name: `${project.name}`,
          url: `projects/${project.name.trim()}`,
        }))
      );
    setProjectList(initialSet);
  }, []);

  useEffect(() => {
    if (containerRef.current && projectList.length > 0) {
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
  }, [projectList]);

  return (
    <ReactLenis root>
      <DynamicCursor />
      <div
        className="projects"
        ref={containerRef}
        style={{
          height: "100vh",
          //  overflowY: "auto"
          // to enable infinite scrolling, uncomment `overflowY: "auto"` and remove the <ReactLenis root> component from root
        }}
      >
        <div className="container">
          {projectList.map((project) => (
            <div className="row" key={Math.random(2)}>
              <div className="project-item">
                <div className="project-img">
                  <Link to={`/projects/${project.slug}`}>
                    <PixelatedImageCard
                      defaultImg={project.img}
                      activeImg={project.activeImg}
                    />
                  </Link>
                </div>
                <div className="project-details">
                  <p id="project-name"> &#x2192; {project.name}</p>
                  <p id="project-category">{project.category}</p>
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
