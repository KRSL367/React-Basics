import React, { useState } from "react";
// import Button from "./Button";

const App = () => {
    const [diceNumber, setDiceNumber] = useState(1)

    const refreshDice = () =>{
        const random_no = Math.floor(Math.random() * 6) +1
        setDiceNumber(random_no)
    }
    return <div>
        <img src={require(`./assets/${diceNumber}.png`)}></img>
        <br></br>
        <button onClick={()=> refreshDice()} className="button">Roll</button>

    </div>
}

export default App; 