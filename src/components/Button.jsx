import React from "react";
import images from "../imageSources"

function Button(props) 
{
  function handleClick() 
  {

    var output = Math.round(
      ((props.weightValue / props.heightValue ** 2) * 10000)*10
    )/10;
    
    props.computeResult("BMI = "+output);
    if (output < 18.5) 
    {
      props.setOutputMessage("Underweight");
    } 
    else if (output >= 18.5 && output <= 24.9) 
    {
      props.setOutputMessage("Healthy Weight");
    } 
    else if (output >= 25 && output <= 29.9) 
    {
      props.setOutputMessage("Overweight");
    } 
    else if (output > 30) 
    {
      props.setOutputMessage("Obese!");
    }

  }

  return (
    <div className="compute-bmi">
      <button className="btn" onClick={handleClick}>
        Compute BMI
      </button>
    </div>
  );
}

export default Button;
