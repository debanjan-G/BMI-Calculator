import React from "react";



function Result(props) {
    let textColor;
    if(props.Result>24.9|| props.Result<18.5){
         textColor="#FF0303"
    }
    else{
        textColor="lime"
    }
  return (
    <div className="result">
    <div className="text-result">
      <h1>{props.Result!==undefined?props.Result:null}</h1>
      <h2 style={{color:textColor}}>{props.outputMessage}</h2>
      </div>
      <div className="image-result">
      <img src={require("./images/003-muscle.png")} alt="healthy bodyweight" className="body-img" />
      </div>
    </div>
  );
}

export default Result;
