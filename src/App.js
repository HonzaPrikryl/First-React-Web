import "./style.css";
import React from "react";
import Cursor from "./Components/Cursor";
import PageOne from "./Components/PageOne";
import PageTwo from "./Components/PageTwo";
import PageThree from "./Components/PageThree";
import PageFour from "./Components/PageFour";

function App() {
  return (
    <>
      <Cursor />
      <PageOne />
      <PageTwo />
      <PageThree />
      <PageFour />
    </>
  );
}

export default App;
