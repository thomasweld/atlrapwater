import React from "react";
import Iframe from "react-iframe";

import logo from "./atl-rap-water_logo.png";
import footer from "./Water-Image1.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="col">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      </div>
      <div className="wrapper">
        <div className="col">
          <Iframe
            url="http://smarturl.it/ATLRAPWATER"
            width="100%"
            height="1140px"
            id="myId"
            className="myClassname"
            display="initial"
            position="relative"
          />
        </div>
      </div>
      <img src={footer} className="footer" alt="footer" />
    </div>
  );
}

export default App;
