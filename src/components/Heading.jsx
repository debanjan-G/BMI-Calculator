import React from "react";

function Heading(){

    return ( <div className="header">
        <h1>BMI Calculator</h1>
        <img src={require('./images/bmi.png')} alt="bmi-logo" className="bmi-logo"/>
    </div> )
}

export default Heading;