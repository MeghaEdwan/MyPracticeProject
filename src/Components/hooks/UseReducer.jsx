import React, { useReducer } from 'react';

const counter = 0;

const reducer = (state,action)=>{
    switch(action){
        case "increament" :
            return state +=1;
            case "decreament" :
                return state -=1;
                case "reset" :
                    return state = 0;
    }
}
function UseReducer(props) {

    const [count,dispatch]= useReducer(reducer,counter);

    return (
        <div>
            <h3>We learn useReducer Hook in react js</h3>
            <p>Counter = {count}</p>
            <button onClick={()=> dispatch("increament")}>Increament</button>
            <button onClick={()=> dispatch("decreament")}>Decreament</button>
            <button onClick={()=> dispatch("reset")}>Reset</button>
       
        </div>
    );
}

export default UseReducer;