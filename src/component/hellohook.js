import React, { useState } from 'react';


function HelloHook(){

    const [counterOne, myChangeCounterOne ] = useState(1)
    const [counterTwo, myChangeCounterTwo ] = useState(2)

    const incrementFour=()=>{
        myChangeCounterTwo(p => p + 4)
    }

    return (
        <div>
            <button onClick={()=>myChangeCounterOne(counterOne+1)}>Counter One {counterOne}</button>
            <br></br>
            <button onClick={incrementFour}>Counter Two {counterTwo}</button>
        </div>
    )
}

export default HelloHook