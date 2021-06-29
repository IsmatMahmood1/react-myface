import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { UserPosts } from "./UserPosts";

export function User() {
    const { id } = useParams();
    const [userData, setUserData] = useState(null);

    function fetchData(postRoute) {
        fetch(`http://localhost:3001${postRoute}`)
            .then(res => res.json())
            .then(data => setUserData(data));
    }
    useEffect(() => {
        fetchData(`/users/${id}`)
    },[]);

    if (!userData) {
        return <div>Waiting for data...</div>
    }
  
    return (
        <div>
            <h3>{userData.name}</h3>
            <h2>{userData.email}</h2>
            <img alt='' style={{ width: '400px' }} src={userData.coverImageUrl} />
            <img alt='' style={{ width: '200px' }} src={userData.profileImageUrl} />
            <div className='posts'>
                <h1>Posts</h1>
                {userData.posts && UserPosts(userData.posts)}
            </div>
            <div className='likes'>
                <h1>Likes</h1>
                {userData.likes && UserPosts(userData.likes)}
            </div>
            <div className='dislikes'>
                <h1>Dislikes</h1>
                {userData.dislikes && UserPosts(userData.dislikes)}
            </div>
        </div>
    )
}