import React from "react";
import styled from "styled-components";

const ThirdPage = styled.div`
  height: 60vh;
  display: grid;
  place-items: center;
`;
const Title = styled.h1`
  border-bottom: 1px solid white;
`;
const UpcomingProject = styled.div`
  width: clamp(15rem, 40vw, 60rem);
  height: clamp(10rem, 2vh, 20rem);
  display: grid;
  place-items: center;
  border: 2px dashed #dddddd;
  margin-top: -100px;
`;

function PageThree() {
  return (
    <ThirdPage className="section" id="reference">
      <Title>Reference</Title>
      <UpcomingProject>
        <p className="textP">Upcoming projects:</p>
      </UpcomingProject>
    </ThirdPage>
  );
}

export default PageThree;
