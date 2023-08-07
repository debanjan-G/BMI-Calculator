import React, { useState } from "react";
import Button from "./Button";
import Result from "./Result";
import Input from "./Input";
import Heading from "./Heading";
import ResetButton from "./ResetButton";



function App(){
    const [height,setHeight]=useState();
    const [weight,setWeight]=useState();
    const [result,setResult]=useState();
    const [message,setMessage]=useState();
    return (
        <div className="container">
            <Heading/>
            <Input about={"height"} placeHolder={"Height(in cm)"} val={height} updateHeight={setHeight}/>
            <Input about={"weight"} placeHolder={"Weight(in kg)"} val={weight} updateWeight={setWeight}/>
            <div className="buttons">
            <Button heightValue={height} weightValue={weight} computeResult={setResult} setOutputMessage={setMessage}/>
            <ResetButton resetHeight={setHeight} resetWeight={setWeight} resetResult={setResult} resetMessage={setMessage}/>
            </div>
            <Result Result={result} outputMessage={message} />
            
        </div>
    )
}

export default App;


{/* <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div><div>Icons made by <a href="https://www.flaticon.com/authors/leremy" title="Leremy">Leremy</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div><div>Icons made by <a href="https://www.flaticon.com/authors/karyative" title="Karyative">Karyative</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}