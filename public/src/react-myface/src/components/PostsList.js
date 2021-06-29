import { useState, useEffect } from "react";
import { Post } from './Post';

export function PostsList() {
    const [postData, setPostData] = useState(null);
    console.log(postData)
  
    async function fetchData(postRoute) {
        fetch(`http://localhost:3001${postRoute}`)
            .then(res => res.json())
            .then(data => setPostData(data));
    }

    useEffect(() => {
        fetchData('/posts')
    }, [])

    if (!postData) {
        return <div>Waiting for data...</div>
    }
 
    return (
        <div>
            {postData.results.map(post =>
                <Post
                    key={post.id}
                    postId={post.id}
                    message={post.message}
                    createdAt={post.createdAt}
                    imageUrl={post.imageUrl}
                    likesCount={post.likedBy.length}
                    dislikesCount={post.dislikedBy.length}
                    userId={post.postedBy.id}
                    fetchData = {fetchData}
                    likedAlready = {post.likedBy.find(o=>o.id == 1)}
                    dislikedAlready = {post.dislikedBy.find(o =>o.id == 1)}
                    /> 
            )}
            {postData.previous && <button onClick={() => fetchData(postData.previous)}>Previous</button>}
            {postData.next && <button onClick={() => fetchData(postData.next)}>Next</button>}

        </div>

    )
}