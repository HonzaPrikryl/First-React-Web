import React from "react";
import styled, { keyframes } from "styled-components";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

function PageOne() {
  const HeroDiv = styled.div`
    height: 100%;
    grid-area: header;
    display: grid;
    place-items: center;
  `;
  const anim = keyframes`
  0% {
    opacity: 0;
    margin-top: 30px;
  }
  50%{
    opacity:0;
    margin-top: 15px;
  }
  }
  100% {
    opacity: 1;
    margin: 0;
  }
  `;
  const HeroText = styled.span`
    padding: 20px 40px;
    border-top: 1px solid white;
    border-bottom: 1px solid white;
    animation: ${anim} 1.5s ease-in;
  `;
  const FirstPage = styled.div`
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr 5fr 1fr;
    grid-template-areas: "left header right";
  `;
  return (
    <FirstPage className="section hero" id="home">
      <LeftSection />
      <HeroDiv>
        <HeroText>
          <h1>
            Hello, I‘m <span className="name">Jan Přikryl</span>
          </h1>
          <h2>Frontend web developer</h2>
        </HeroText>
      </HeroDiv>
      <RightSection />
    </FirstPage>
  );
}

export default PageOne;
