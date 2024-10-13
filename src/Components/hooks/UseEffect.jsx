import React, { useEffect, useState } from 'react';

const UseEffect = () =>{
    const [counter,setCounter] = useState(0);

    useEffect(()=>{
        console.log(`You clicked ${counter} times.`)
    },[counter])

    return(
        <div>
            <h2>We learn useEffect Hook in React</h2>
            <p>You clicked {counter} times.</p>
            <button onClick={() =>setCounter(counter+1)}>Click me</button>
        </div>
    )
}
export default UseEffect;