import React, { useState } from 'react';

function PropsDrilling(props) {
    const [color,setColor]=useState("red")
    return (
        <div>
            <h4>this is parent Component</h4>
            <p>Color = {color}</p>
            <ChildA color={color}/>
        </div>
    );
}

function ChildA(props){
    return (
        <div>
          <h4>  Child A </h4>
           <p> color : {props.color}</p>

           <ChildB color={props.color}/>
        </div>
    )
}


function ChildB(props){
    return (
        <div>
            <h4>Child B</h4>
          <p> color : {props.color}</p>

          <ChildC color={props.color}/>
        </div>
    )
}

function ChildC(props){
    return (
        <div>
            <h4>Child C</h4>
            <p> color : {props.color}</p>
        </div>
    )
}

export default PropsDrilling;