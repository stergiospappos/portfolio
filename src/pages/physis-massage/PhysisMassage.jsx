import { Link } from "react-router-dom";
import { ReactLenis } from "lenis/react";

import "./Physismassage.css";
import PhysisSwiper from "../../components/Sliders/Physis/PhysisSwiper";

import Transition from "../../components/preview/transition/Transition";
import DynamicCursor from "../../components/DynamicCursor/DynamicCursor";

import ProjectHeroImg from "../../assets/projects/physis-massage/physis-project-hero.avif";
import ProjectHeroImg2 from "../../assets/projects/physis-massage/physis_massage_img7.avif";
import ProjectHeroImg3 from "../../assets/projects/physis-massage/physis_massage_img8.avif";
import ProjectImg1 from "../../assets/projects/physis-massage/physis_massage_img3.avif";
import ProjectImg2 from "../../assets/projects/physis-massage/physis_massage_img4.avif";
import ProjectImg3 from "../../assets/projects/physis-massage/physis_massage_img5.avif";
import ProjectImg4 from "../../assets/projects/physis-massage/physis_massage_img6.avif";

const SampleProject = () => {
  return (
    <ReactLenis root>
      <DynamicCursor />
      <div className="project">
        <div className="container">
          <div className="project-hero-img">
            <img src={ProjectHeroImg} alt="Project Hero Img" />
          </div>

          <div className="project-info">
            <div className="col">
              <div className="project-client">
                <p>Client &#x2192; Physis Massage Studio</p>
              </div>
              <div className="project-studio">
                <p>Role / Services &#x2192; Design & Development</p>
              </div>
            </div>
            <div className="col">
              <div className="project-year">
                <p>Year &#x2192; 2024</p>
              </div>
            </div>
          </div>

          <div className="project-copy">
            <div className="col">
              <h1>
                Serene, Inviting <br />
                Digital Space
              </h1>
            </div>

            <div className="col">
              <p>
                For the Physis Massage Therapy Center, the project entailed an
                all-encompassing design and development task aimed at
                revolutionizing their online presence. The goal was to craft a
                serene, inviting digital space that mirrors the tranquility and
                healing nature of their services. With an emphasis on simplicity
                and user comfort, the website was designed to guide visitors
                effortlessly towards booking their next therapeutic session.
              </p>

              <div className="project-sub-info">
                <div className="sub-col">
                  <span>UI/UX</span>
                  <span>Typography</span>
                  <span>SEO</span>
                  <span>Animation</span>
                </div>

                <div className="sub-col">
                  <a
                    data-cursor="Open Website In A New Tab"
                    target="_blank"
                    href="https://physismassage.gr/"
                  >
                    &#x2192; Live Website
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="project-hero-img-2">
            <PhysisSwiper />
          </div>

          <div className="project-copy">
            <div className="col"></div>

            <div className="col">
              <h2>Problem Solved</h2>
              <p>
                The primary challenge was to translate the calm and restorative
                experience of a massage therapy session into a digital format.
                The center&apos;s previous online presence lacked the warmth and
                inviting atmosphere crucial for attracting and retaining
                clientele seeking relaxation and healing. Additionally,
                navigating the site was cumbersome, significantly impacting
                client bookings and overall user satisfaction.
              </p>
              <h2>How It&apos;s Solved</h2>
              <p>
                I approached this challenge by focusing on creating a visually
                calming digital environment. Utilizing a soft, soothing colour
                palette and incorporating fluid, nature-inspired shapes and
                animations, the website now evokes a sense of peace and
                relaxation from the first click. The user journey was
                meticulously planned to ensure that booking a massage was not
                only intuitive but also part of the calming experience.
                Interactive elements were introduced sparingly to enhance
                engagement without overwhelming the senses.
              </p>
              <h2>Impact</h2>
              <p>
                The redesigned website for Physis Massage Therapy Center has
                significantly elevated the user experience, mirroring the
                center&apos;s commitment to providing a sanctuary of healing and
                relaxation. The intuitive design and streamlined booking process
                have resulted in a noticeable increase in appointment bookings,
                with client feedback praising the ease of navigation and the
                tranquil aesthetic. This digital transformation has not only
                strengthened the center&apos;s brand identity but has also
                expanded its reach, attracting a broader audience seeking
                therapeutic services.
              </p>
            </div>
          </div>

          <div className="project-imgs">
            <div className="img">
              <img src={ProjectImg1} alt="" />
            </div>

            <div className="img">
              <img src={ProjectImg4} alt="" />
            </div>
          </div>
          <div className="project-imgs">
            <div className="img">
              <img src={ProjectImg3} alt="" />
            </div>

            <div className="img">
              <img src={ProjectImg2} alt="" />
            </div>
          </div>

          <div className="project-hero-img-3">
            <img src={ProjectHeroImg3} alt="" />
          </div>

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

export default Transition(SampleProject);
