import React, { useState, useEffect } from "react";

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
                
                <div>
                  
                <h3>{post.message}</h3>
                <h3>{post.createdAt.slice(0,10).split('-').reverse().join('-')}</h3>
                <img alt='' src={post.imageUrl} />
                </div>
            )}
            
        </div>

    )
}