import { useEffect, useState, useRef } from "react";
import { ReactLenis } from "lenis/react";
import "./Archive.css";

import Transition from "../../components/preview/transition/Transition";
import Preview from "../../components/preview/Preview";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import archiveData from "../../data/archiveData";

gsap.registerPlugin(ScrollTrigger);

const Archive = () => {
  const [archiveList, setArchiveList] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    // Infinite scrolling setup
    const initialSet = Array(120)
      .fill()
      .flatMap((_, i) =>
        archiveData.map((archive, j) => ({
          ...archive,
          id: i * archiveData.length + j,
        }))
      );
    setArchiveList(initialSet);
  }, []);

  useEffect(() => {
    if (containerRef.current && archiveList.length > 0) {
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

      const archiveItems =
        containerRef.current.querySelectorAll(".archive-item");
      archiveItems.forEach((item) => {
        gsap.to(item, {
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
  }, [archiveList]);

  return (
    <ReactLenis root>
      <div
        className="archive"
        ref={containerRef}
        style={{
          height: "100vh",
        }}
      >
        <div className="overlay"></div>

        <Preview />

        {archiveList.map((archive) => (
          <div className="row" key={archive.id}>
            <div className="archive-item">
              <div className="archive-details">
                <h1 id="archive-name">{archive.name}</h1>
                <p id="archive-category">{archive.category}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </ReactLenis>
  );
};

export default Transition(Archive);
