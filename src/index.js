import React from "react";
import ReactDOM from "react-dom";
import HookA from "./hook-A";
//import HookTwo from "./hook-two";
//import HookOne from "./hook-one";
//import HookThree from "./hook-three";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <HookA />
      {/* <HookOne />*/}
      {/* <HookTwo /> */}
      {/* <HookThree /> */}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
