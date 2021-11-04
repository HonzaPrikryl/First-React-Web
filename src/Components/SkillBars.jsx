import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const SecondPage = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-width: 55%;
  height: 40%;
  margin-top: 60px;
`;

function SkillBar() {
  var htmlbar = useRef(null);
  var cssbar = useRef(null);
  var jsbar = useRef(null);
  var reactbar = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.from(htmlbar, {
      scrollTrigger: htmlbar,
      scaleX: 0,
      duration: 3,
      transformOrigin: "left center",
      ease: "none",
    });
    gsap.from(cssbar, {
      scrollTrigger: cssbar,
      scaleX: 0,
      duration: 3,
      transformOrigin: "left center",
      ease: "none",
    });
    gsap.from(jsbar, {
      scrollTrigger: jsbar,
      scaleX: 0,
      duration: 3,
      transformOrigin: "left center",
      ease: "none",
    });
    gsap.from(reactbar, {
      scrollTrigger: reactbar,
      scaleX: 0,
      duration: 3,
      transformOrigin: "left center",
      ease: "none",
    });
  });

  return (
    <SecondPage>
      <div className="skill-bar">
        HTML
        <div className="html-bar" ref={(el) => (htmlbar = el)}>
          <p>95%</p>
        </div>
      </div>

      <div className="skill-bar">
        CSS
        <div className="css-bar" ref={(el) => (cssbar = el)}>
          <p>85%</p>
        </div>
      </div>

      <div className="skill-bar">
        JavaScript
        <div className="js-bar" ref={(el) => (jsbar = el)}>
          <p>65%</p>
        </div>
      </div>

      <div className="skill-bar">
        React
        <div className="react-bar" ref={(el) => (reactbar = el)}>
          <p>65%</p>
        </div>
      </div>
    </SecondPage>
  );
}
export default SkillBar;
