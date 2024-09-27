import React, { useCallback, useState } from 'react';
import Child from './Child';

function UseCallback() {
    const [count,setCount]=useState(0);
    const [minus,setMinus]=useState(100);

    const learning = useCallback(()=>{

    },[])

    return (
        <div>
            <Child count={count} learning={learning}/>
            <h3>Count : {count}</h3>
            <button onClick={()=>setCount(count + 3)}>Increament</button>
            
         <h3>{minus}</h3>
         <button onClick={()=>setMinus(minus-2)}>Decrement</button>

        </div>
    );
}

export default UseCallback;