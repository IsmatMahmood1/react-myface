import { Post } from "./Post";
import { useState, useEffect } from "react";

export function User() {
    // const { id } = useParams();
    const [userData, setUserData] = useState(null);

    function fetchData(postRoute) {
        fetch(`http://localhost:3001${postRoute}`)
            .then(res => res.json())
            .then(data => setUserData(data));
    }
    useEffect(() => {
        fetchData(`/users/${userData.id}`)
    }, [])

    if (!userData) {
        return <div>Waiting for data...</div>
    }

    return (
        <div>
            <h3>{userData.name}</h3>
            <h2>{userData.email}</h2>
            <img alt='' style={{width:'400px'}} src={userData.coverImageUrl} />
            <img alt='' style={{width:'200px'}} src={userData.profileImageUrl} />
            <div className='posts'>
                <h1>Posts</h1>
                {userData.posts && userData.posts.map(post =>
                    <Post
                    key={post.id}
                    message={post.message}
                    createdAt={post.createdAt}
                    imageUrl={post.imageUrl}
                    />)}
            </div>
            <div className='likes'>
                <h1>Likes</h1>
                {userData.likes && userData.likes.map(post =>
                    <Post
                    key={post.id}
                    message={post.message}
                    createdAt={post.createdAt}
                    imageUrl={post.imageUrl}
                    />)}
            </div>
            <div className='dislikes'>
                <h1>Dislikes</h1>
                {userData.dislikes && userData.dislikes.map(post =>
                    <Post
                    key={post.id}
                    message={post.message}
                    createdAt={post.createdAt}
                    imageUrl={post.imageUrl}
                    />)}
            </div>
        </div>
    )
}