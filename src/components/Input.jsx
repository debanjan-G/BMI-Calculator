import React from "react";

function Input(props) {
  function handleChange(event) {
    var result = event.target.value;
    return event.target.name === "height"
      ? props.updateHeight(result)
      : props.updateWeight(result);
  }
  return (
    <div className="height box">
      <input
        onChange={handleChange}
        type="text"
        name={props.about}
        id=""
        placeholder={props.placeHolder}
        value={props.val}
        className="input-field"
      />
    </div>
  );
}

export default Input;
