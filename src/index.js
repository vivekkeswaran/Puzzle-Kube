import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  return (
    <div class="container">
      <div id="countdown">Find the Odd Box</div>
      <div id="bigbox" />
      <div id="score">Score: 0</div>
      <div id="help">
        <i class="icon ion-help" /> Help
      </div>
      <div id="leaderboard">
        <i class="icon ion-ios-game-controller-b" /> Points Table
      </div>{" "}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
