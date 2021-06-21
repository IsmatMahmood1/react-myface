import React, { useState, useEffect } from "react";
import { Post } from './Post'

export function PostsList() {
    const [postData, setPostData] = useState(null);

    function fetchData(postRoute) {
        fetch(`http://localhost:3001${postRoute}`)
        .then(res => res.json())
        .then(data => setPostData(data));
    }
    
    useEffect(() => {
        fetchData('/posts')
    },[])

    if(!postData) {
        return <div>Waiting for data...</div>
    }
    console.log(postData)

    

    return (
        <div>
            {postData.results.map(post =>
                <Post 
                key = {post.id}  
                message = {post.message}
                createdAt={post.createdAt}
                imageUrl={post.imageUrl} 
                />
            )}
            {postData.previous  && <button onClick={() => fetchData(postData.previous)}>Previous</button>}
            {postData.next && <button onClick={()=> fetchData(postData.next)}>Next</button>}
            
        </div>

    )
}