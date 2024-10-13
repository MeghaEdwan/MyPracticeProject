import React, { useState } from 'react';

const UseState = () =>{

    const [color,setColor]=useState("Orange");
    const [count,setCount]=useState(0)

   const handleColor = ()=>{
    setColor("Yellow")
   }

   const handleIncrement =()=>{
    setCount(count+1)
   }

   const handleDecrement =()=>{
    setCount(count-1)
   }

   const handleReset =()=>{
    setCount(0)
   }
    return (
        <div>
                <h1>We learn useState Hook in React</h1>
                <p>My fav Color is : {color}</p>
                <button onClick={handleColor}>Change Color</button>
                <p>Count : {count}</p>
                <button onClick={handleIncrement}>Increament</button>
                <button onClick={handleDecrement}>Decrement</button>
                <button onClick={handleReset}>Reset</button>

        </div>
    )
}
export default UseState;