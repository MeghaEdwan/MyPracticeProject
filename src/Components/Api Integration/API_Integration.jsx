import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ApiIntegration = () => {
    
    const [posts,setPosts] = useState([])

    const BASE_URL = "https://jsonplaceholder.typicode.com/posts";
    

    const fetchData = async () => {
        try {
            const result = await axios.get(BASE_URL);
            console.log(result);
            setPosts(result.data)
        } catch (error) {
            console.log("error fetching data...", error);
        }
    }
    
    useEffect( ()=>{
        fetchData();
    },[]);
    return(
        <div>
             <h2>Api Integration</h2>
            {posts.map((post)=>(
                <ul key={post.id}>
                    <li>{post.title}</li>
                    <li>{post.body}</li>
                </ul>
            ))}
            
        </div>
    )
}

export default ApiIntegration;