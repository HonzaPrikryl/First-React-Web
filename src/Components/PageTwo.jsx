import React from "react";
import styled from "styled-components";
import SkillBar from "./SkillBars";
const SecondSection = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #2b3139;
`;
const Title = styled.h1`
  border-bottom: 1px solid white;
  margin: 40px;
  margin-top: -40px;
`;
const Title2 = styled.h2`
  border-bottom: 1px solid white;
  margin-bottom: 20px;
`;
const Text = styled.div`
  width: clamp(50%, 75%, 100%);
  text-align: center;
`;
function PageTwo() {
  return (
    <SecondSection className="section" id="about">
      <Title>About</Title>
      <Text>
        <p className="textP">
          I‘m young frontend developer based in Ostrava who creates{" "}
          <span className="underline">modern</span> and{" "}
          <span className="underline">simple</span> websites {"&"} aplications
        </p>
      </Text>
      <SkillBar />
      <Title2>Other skills</Title2>
      <Text>
        <p className="textP">TypeScript, Node, Git, Boostrap, Sass, SEO</p>
      </Text>
    </SecondSection>
  );
}

export default PageTwo;
