import { Link } from "react-router-dom";
import { ReactLenis } from "lenis/react";
import { Helmet } from "react-helmet";

import "./Physismassage.css";

// Components
import ProjectSlider from "../../../components/Sliders/ProjectSlider";
import MacBookVideo from "../../../components/VideoPlayer/VideoPlayer_Macbook";
import VideoPlayer_Simple from "../../../components/VideoPlayer/VideoPlayer_Simple";
import MobileScreens from "../../../components/MobileScreens/MobileScreens";
import Transition from "../../../components/preview/transition/Transition";
import DynamicCursor from "../../../components/DynamicCursor/DynamicCursor";

// Assets
import ProjectHeroImg from "../../../assets/projects/physis-massage/physis-project-hero.avif";
import ProjectHeroImg2 from "../../../assets/projects/physis-massage/physis_massage_img7.avif";
import ProjectHeroImg3 from "../../../assets/projects/physis-massage/physis_massage_img8.avif";
import ProjectImg1 from "../../../assets/projects/physis-massage/physis_massage_img3.avif";
import ProjectImg2 from "../../../assets/projects/physis-massage/physis_massage_img4.avif";
import ProjectImg3 from "../../../assets/projects/physis-massage/physis_massage_img5.avif";
import ProjectImg4 from "../../../assets/projects/physis-massage/physis_massage_img6.avif";

import Mobile1 from "../../../assets/projects/physis-massage/mobile1.png";
import Mobile2 from "../../../assets/projects/physis-massage/mobile2.png";
import Mobile3 from "../../../assets/projects/physis-massage/mobile3.png";

// Mobile Images
const MobileImages = [
  { src: Mobile1, alt: "Mobile Screen 1" },
  { src: Mobile2, alt: "Mobile Screen 2" },
  { src: Mobile3, alt: "Mobile Screen 3" },
];

// Slider Images
const projectSliderImages = [
  ProjectImg1,
  ProjectImg2,
  ProjectImg3,
  ProjectHeroImg2,
  ProjectHeroImg3,
];

// Video Assets
import VideoSimple from "../../..//assets/projects/physis-massage/Physis_Menu.mp4";
import VideoMacbook from "../../../assets/projects/physis-massage/Physis-New-video.mp4";
import VideMacbook2 from "../../../assets/projects/physis-massage/Physis_Packages_MacBook.mp4";

const PhysisMassageProject = () => {
  return (
    <ReactLenis root>
      {/* SEO Metadata */}
      <Helmet>
        <title>Physis Massage - Tranquility in a Digital Space</title>
        <meta
          name="description"
          content="Explore the serene, inviting digital space crafted for Physis Massage Studio, a project that mirrors the tranquility and healing nature of their services."
        />
        <meta property="og:image" content={ProjectHeroImg} />
        <meta property="og:title" content="Physis Massage Studio Website" />
        <meta
          property="og:description"
          content="A serene digital experience for massage therapy."
        />
      </Helmet>
      <DynamicCursor />

      <div className="project">
        <div className="container">
          <section className="project-hero-img">
            <img src={ProjectHeroImg} alt="Project Hero Img" />
          </section>

          <section className="project-info">
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
          </section>

          <section className="project-copy">
            <div className="col">
              <h1>
                Serene, Inviting <br />
                Digital Space
              </h1>
            </div>

            <div className="col">
              <div></div>
              <p>
                For Physis Massage Studio, I delivered a complete design and
                development solution aimed at transforming their online
                presence. The goal? To create a serene, inviting digital space
                that mirrors the tranquility and healing nature of their
                services. By prioritizing simplicity and user comfort, the
                website seamlessly guides visitors toward booking their next
                therapeutic session.
              </p>

              <div className="project-sub-info">
                <div className="sub-col">
                  <span>UI/UX</span>
                  <span>Typography</span>
                  <span>SEO</span>
                  <span>Animation</span>
                </div>

                <div className="sub-col ">
                  <a
                    data-cursor="Open Website In A New Tab"
                    target="_blank"
                    href="https://physismassage.gr/"
                    className="nav-link"
                  >
                    &#x2192; Live Website
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section className="section">
            <MacBookVideo videoSrc={VideoMacbook} autoPlayEnabled={true} />
          </section>
          <section className="section">
            <VideoPlayer_Simple
              src={VideoSimple}
              poster={ProjectImg4}
              type="video/mp4"
              autoPlayEnabled={true}
            />
          </section>

          <section className="project-copy">
            <div className="col"></div>

            <div className="col">
              <h2>Problem Solved</h2>
              <p>
                Physis Massage Studio&apos;s previous website struggled to
                convey the calming and restorative experience their services
                offered. It lacked warmth, aesthetic appeal, and intuitive
                navigation, creating barriers to engagement and bookings.
                Potential clients failed to feel connected, leaving the site
                before taking action.
              </p>
              <h2>How It&apos;s Solved</h2>
              <p>
                I created a visually soothing digital experience that reflects
                the studio&apos;s values. The design features a nature-inspired
                color palette, fluid shapes, and gentle animations, immediately
                setting a peaceful tone. The user journey was reimagined,
                transforming the booking process into an intuitive and
                stress-free experience while enhancing engagement with
                thoughtful yet minimal interactivity.
              </p>
              <h2>Impact</h2>
              <p>
                The revamped website has elevated Physis Massage Studio&apos;s
                digital presence. The intuitive design and calming aesthetic
                have resonated with clients, leading to a significant rise in
                bookings and glowing feedback. By strengthening the
                studio&apos;s brand identity and expanding its reach, the
                redesign has positioned Physis as the go-to destination for
                therapeutic relaxation.
              </p>
            </div>
          </section>
          <section className="section">
            <MacBookVideo videoSrc={VideMacbook2} autoPlayEnabled={true} />
          </section>
          <section className=" slider project-slider-1">
            <ProjectSlider projectImages={projectSliderImages} />
          </section>
          <section className="section mobiles-screens">
            <div className="container">
              <MobileScreens images={MobileImages} />
            </div>
          </section>

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

export default Transition(PhysisMassageProject);
