import React from "react";
import { useParams, Link } from "react-router-dom";
import { ReactLenis } from "lenis/react";
import { Helmet } from "react-helmet";

import projects from "../../data/projects";

import "./ProjectPage.css";

// Components
import ProjectSlider from "../../components/Sliders/ProjectSlider";
import MacBookVideo from "../../components/VideoPlayer/VideoPlayer_Macbook";
import VideoPlayer_Simple from "../../components/VideoPlayer/VideoPlayer_Simple";
import MobileScreens from "../../components/MobileScreens/MobileScreens";
import Transition from "../../components/preview/transition/Transition";
import DynamicCursor from "../../components/DynamicCursor/DynamicCursor";

const ProjectPage = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.id === slug);

  if (!project) {
    return <h1>404: Project Not Found</h1>;
  }

  return (
    <ReactLenis root>
      {/* SEO Metadata */}
      <Helmet>
        <title>
          {project.title} - {project.tagline}
        </title>
        <meta name="description" content={project.summary} />
        <meta property="og:image" content={project.heroImage} />
        <meta property="og:title" content={`${project.title} Website`} />
        <meta property="og:description" content={project.summary} />
      </Helmet>
      <DynamicCursor />

      <div className="project">
        <div className="container">
          <section className="project-hero-img">
            <img src={project.heroImage} alt={`${project.title} Hero`} />
          </section>

          <section className="project-info">
            <div className="col">
              <div className="project-client">
                <p>Client &#x2192; {project.client}</p>
              </div>
              <div className="project-studio">
                <p>Role / Services &#x2192; {project.services.join(" & ")}</p>
              </div>
            </div>
            <div className="col">
              <div className="project-year">
                <p>Year &#x2192; {project.year}</p>
              </div>
            </div>
          </section>

          <section className="project-copy">
            <div className="col">
              <h1>{project.tagline}</h1>
            </div>
            <div className="col">
              <p>{project.summary}</p>
              <div className="project-sub-info">
                <div className="sub-col">
                  {project.tags.map((tag, index) => (
                    <span key={index}>{tag}</span>
                  ))}
                </div>
                <div className="sub-col">
                  <a
                    data-cursor="Open Website In A New Tab"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={project.liveLink}
                    className="nav-link"
                  >
                    &#x2192; Live Website
                  </a>
                </div>
              </div>
            </div>
          </section>

          {project.videoAssets.feature && (
            <section className="section">
              <MacBookVideo
                videoSrc={project.videoAssets.feature}
                autoPlayEnabled
              />
            </section>
          )}

          {project.videoAssets.shortClip && (
            <section className="section">
              <VideoPlayer_Simple
                src={project.videoAssets.shortClip}
                poster={project.galleryImages[0]}
                type="video/mp4"
                autoPlayEnabled={true}
              />
            </section>
          )}

          <section className="project-copy">
            <div className="col"></div>
            <div className="col">
              <h2>Problem Solved</h2>
              <p>{project.problemStatement}</p>
              <h2>How It&apos;s Solved</h2>
              <p>{project.solution}</p>
              <h2>Impact</h2>
              <p>{project.impact}</p>
            </div>
          </section>

          {project.videoAssets.secondary && (
            <section className="section">
              <MacBookVideo
                videoSrc={project.videoAssets.secondary}
                autoPlayEnabled
              />
            </section>
          )}

          {project.galleryImages.length > 0 && (
            <section className="slider project-slider-1">
              <ProjectSlider projectImages={project.galleryImages} />
            </section>
          )}

          {project.mobilePreviews.length > 0 && (
            <section className="section mobiles-screens">
              <div className="container">
                <MobileScreens images={project.mobilePreviews} />
              </div>
            </section>
          )}

          <div className="next-project-cta">
            <Link to="/">
              <h3>Next Project</h3>
            </Link>
          </div>
        </div>
      </div>
    </ReactLenis>
  );
};

export default Transition(ProjectPage);
