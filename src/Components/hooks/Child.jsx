import React, { memo } from 'react';

function Child({count, learning}) {
    console.log("Child component is called...");
    return (
        <div>
            this is child component
        </div>
    );
}

export default memo(Child);