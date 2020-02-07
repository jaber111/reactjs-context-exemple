import React, { useContext } from "react";
import ReactDOM from "react-dom";

// Create a Context
const NumberContext = React.createContext();
// It returns an object with 2 values:
// { Provider, Consumer }
const add = () => {
  console.log("hello");
};
const grp = {
  value: 12,
  label: "12",
  fonction: () => add()
};
function App() {
  // Use the Provider to make a value available to all
  // children and grandchildren
  return (
    <NumberContext.Provider value={grp}>
      <div>
        <Display />
      </div>
    </NumberContext.Provider>
  );
}

function Display() {
  const grp = useContext(NumberContext);
  const add = () => {
    console.log("add");
    grp.fonction();
  };
  return (
    <>
      <button onClick={add}> hey</button>
      <div>The answer is.</div>
    </>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
