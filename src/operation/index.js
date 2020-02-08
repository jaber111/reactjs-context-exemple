import React from "react";
import VirementSimple from "./virementSimple";
// Create a Context
export const TransferContext = React.createContext();
// It returns an object with 2 values:
// { Provider, Consumer }
const add = world => {
  console.log(world);
};
const context1 = {
  grpBenef: {
    name: "htx",
    id: "12432",
    add: world => add(world)
  }
};
const context2 = {
  grpBenef: {
    name: "netflix",
    id: "33333",
    add: () => add()
  }
};
export default () => {
  // Use the Provider to make a value available to all
  // children and grandchildren
  return (
    <TransferContext.Provider value={[context1, context2]}>
      <div>
        <VirementSimple />
      </div>
    </TransferContext.Provider>
  );
};
