import React, { useState } from "react";

export default function Counter() {
    const [count,setCount]=useState(0)

    const handleInc = () => {
        setCount(count+1);
    }

    return (
        <div>
            <p>{count}</p>
            <button onClick={handleInc}>INCREMENT</button>
        </div>
    )
}