import React, {useState} from "react";
// import Button from "./Button";

const App = () =>{
    const [number, setNumber] = useState(0)
    return <div>
        <h1>{number}</h1>
        <button onClick ={()=> setNumber(number+1)} className="button">Add</button>
        <button onClick ={()=> setNumber(number-1)} className="button">Less</button>
        <button onClick ={()=> setNumber(0)} className="button">Reset</button>
        <button onClick ={()=> setNumber(number*2)} className="button">Multiply</button>
        <button onClick ={()=> setNumber(number/2)} className="button" >divide</button>
        </div>
}


export default App;
