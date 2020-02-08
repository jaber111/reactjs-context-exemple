import React, { useContext } from "react";
import { TransferContext } from "../../operation";
import { get } from "loadsh";
export default () => {
  const context = useContext(TransferContext);
  console.log(context);

  return (
    <div>
      <h4>The answer is {get(context, ["0", "grpBenef", "id"])}.</h4>
      <button
        onClick={() =>
          get(context, ["0", "grpBenef", "add"])("hello from context")
        }
      >
        add
      </button>
    </div>
  );
};
