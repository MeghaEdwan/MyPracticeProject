import React, { useEffect, useState } from 'react';

const Api_Integration_Fetch = () => {

    const [users,setUsers] = useState([]);
    const fetchData = async () =>{
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        console.log(data);
    setUsers(data);
    }
    useEffect(()=>{
        fetchData();
    },[]);

    return (
        <div>
            <h1>Api Integration Fetch</h1>
            {users.map((user)=>(
                <div key={user.id}>
                    <h3>Name : {user.name}</h3>
                    <p>Email : {user.email}</p>
                </div>
            ))}


        </div>
    );
}
export default Api_Integration_Fetch;