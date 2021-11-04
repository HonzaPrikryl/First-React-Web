import React, { useState } from "react";
import styled from "styled-components";

const DivCursor = styled.div`
  width: 40px;
  height: 40px;
  position: fixed;
  pointer-events: none;
  transform: translate(-50%, -50%);
  z-index: 1;
  left: -50px;
  top: -50xp;
  mix-blend-mode: difference;
  border: 3px solid #fff;
  border-radius: 50%;
`;
function Cursor() {
  const [cursorX, setCursorX] = useState();
  const [cursorY, setCursorY] = useState();

  window.addEventListener("mousemove", (e) => {
    e.stopPropagation();
    e.preventDefault();
    setCursorX(e.clientX);
    setCursorY(e.clientY);
  });

  return (
    <>
      <DivCursor
        style={{
          left: cursorX + "px",
          top: cursorY + "px",
        }}
      />
    </>
  );
}

export default Cursor;
