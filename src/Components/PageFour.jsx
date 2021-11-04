import React from "react";
import styled from "styled-components";
import Contact from "./Contact";

const FourthPage = styled.div`
  height: 100vh;
  display: grid;
  place-items: center;
  background-color: #2b3139;
`;
const Title = styled.h1`
  border-bottom: 1px solid white;
`;
const Text = styled.div`
  text-align: center;
  margin-top: -50px;
  width: clamp(50%, 75%, 100%);
`;
const Copyright = styled.p`
  font-size: 12px;
  margin-bottom: -50px;
`;
function PageFour() {
  const getCurrentYear = new Date().getFullYear();
  return (
    <FourthPage className="section" id="contact">
      <Title>Contact</Title>
      <Text>
        <p className="textP">Have a question or want to work together?</p>
        <p className="textP">Send me message</p>
      </Text>
      <Contact />
      <Copyright>JanPrikryl ©{getCurrentYear}</Copyright>
    </FourthPage>
  );
}

export default PageFour;
