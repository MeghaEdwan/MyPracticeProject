import React, { createContext, useContext, useState } from "react";

 export const MyContext = createContext();
const UseContextHook=()=> {
  const [name, setName] = useState("Komal");

  return (
    <div>
      <h4>This is parent component :{name}</h4>
      <MyContext.Provider value={name}>
        <Child3 />
      </MyContext.Provider>
    </div>
  );
}

export const Child1=()=> {
  return (
    <div>
      <h4>this is child 1</h4>
      {/* <Child2 /> */}
    </div>
  );
}

export const Child2=()=> {
  return (
    <div>
      <h4>this is child 2</h4>
      {/* <Child3 /> */}
    </div>
  );
}

export const Child3=()=> {
  const context = useContext(MyContext);
  return (
    <div>
      <h4>this is child 3</h4>
      <h3>i recieve the data i am consumer : {context}</h3>
    </div>
  );
}

export default UseContextHook;
