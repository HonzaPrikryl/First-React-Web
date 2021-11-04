import React from "react";
import styled, { keyframes } from "styled-components";
import { FiLinkedin, FiFacebook, FiInstagram, FiGithub } from "react-icons/fi";

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

const IconsBar = styled.div`
  height: 100%;
  grid-area: right;
  display: grid;
  place-items: center;
  animation: ${anim} 2.5s ease-in;
`;
const Test = styled.div``;
const A = styled.a`
  :hover {
    opacity: 0.7;
  }
`;
const Linkedin = styled(FiLinkedin)`
  font-size: 30px;
`;
const Facebook = styled(FiFacebook)`
  font-size: 30px;
`;
const Instagram = styled(FiInstagram)`
  font-size: 30px;
`;
const Github = styled(FiGithub)`
  font-size: 30px;
`;
function RightSection() {
  return (
    <IconsBar>
      <Test>
        <A href="https://www.linkedin.com/in/janprikryll">
          <Linkedin />
        </A>
        <A href="https://www.facebook.com/profile.php?id=100008123747420">
          <Facebook />
        </A>
        <A href="https://www.instagram.com/_prikryll_/">
          <Instagram />
        </A>
        <A href="https://github.com/HonzaPrikryl">
          <Github />
        </A>
      </Test>
    </IconsBar>
  );
}
export default RightSection;
