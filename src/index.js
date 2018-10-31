import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import Help from "./components/help/Help";
import BigBox from "./components/bigbox/BigBox";

function App() {
    return (
        <div class="container">
            <div id="countdown">Find the Odd Box</div>
            <BigBox/>
            <div id="score">Score: 0</div>
            <Help/>
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement);
