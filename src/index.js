import React from "react";
import ReactDOM from "react-dom";
import Operation from "./operation";

function App() {
  // Use the Provider to make a value available to all
  // children and grandchildren
  return <Operation />;
}

ReactDOM.render(<App />, document.querySelector("#root"));
