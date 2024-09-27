import React, { useState } from "react";

const UseMemo = ()=>{

    const [count,setCount]= useState(0);
    const [item,setItem]=useState(2)

    // function multiplication(){
    //     console.log("Multiplication function called.....");
    //     return count*5;
    // }

    const multiply = React.useMemo(function multiplication(){
            console.log("Multiplication function called.....");
            return count*5;
        },[count])
    return(
        <div>
            <h3>We learn useMemo hook in react js</h3>
            {/* <h4>multiplication = {multiplication()}</h4> */}
            <h4>multiply = {multiply}</h4>
            <p>Count = {count}</p>
            <button onClick={()=>setCount(count+1)}>Increament</button>
           <p> Item = {item}</p>
            <button onClick={()=>setItem(item*10)}>Item clicked</button>
        </div>
    )
}
export default UseMemo;