import { useParams } from 'react-router-dom';

export function Post({ postId, message, imageUrl, createdAt, likesCount, dislikesCount, fetchData, likedAlready, dislikedAlready }) {
    const { page } = useParams()

    async function handleClick(postId, type) {
        await fetch(`http://localhost:3001/posts/${postId}/${type}`, { method: 'POST'} )
            .then(response => console.log(response.status))
            .then(() => fetchData(`/posts/`))
    }
   
    return (
        <div>
            
            <h3>{message}</h3>
            <h3>{createdAt.slice(0, 10).split('-').reverse().join('-')}</h3>
            {likesCount && <h4>{likesCount} Likes</h4>}
            {dislikesCount && <h4>{dislikesCount} Dislikes</h4>}
            <img alt=''  style={{width:'200px'}} src={imageUrl} />  
            {!likedAlready && <button onClick={() => handleClick(postId, "like")}>Like</button>}
            {!dislikedAlready && <button onClick={() => handleClick(postId, "dislike")}>Dislike</button>}
        </div>
    )
}