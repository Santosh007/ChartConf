import React from "react";
import ReactDOM from "react-dom";

import ChartConfig from "./ChartConfig";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <ChartConfig />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
