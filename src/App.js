import React from "react";
import Iframe from "react-iframe";

import logo from "./rapwater2.0_square-01_web.jpg";
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
    </div>
  );
}

export default App;

// <header className="App-header">
// <img src={logo} className="App-logo" alt="logo" />
// <p>
// Edit <code>src/App.js</code> and save to reload.
// </p>
// <a
// className="App-link"
// href="https://reactjs.org"
// target="_blank"
// rel="noopener noreferrer"
// >
// Learn React
// </a>
// </header>
