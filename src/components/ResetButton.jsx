import React from "react";

function ResetButton(props) {
  function resetField() {
    props.resetHeight("");
    props.resetWeight("");
    props.resetResult("");
    props.resetMessage("");
  }

  return (
    <div>
      <button className="reset" onClick={resetField}>
        Clear
      </button>
    </div>
  );
}

export default ResetButton;
