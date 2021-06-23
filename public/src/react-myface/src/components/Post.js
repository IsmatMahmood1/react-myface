
export function Post({ id, message, imageUrl, createdAt, likesCount, dislikesCount }) {
  
    return (
        <div>
            <h3>{message}</h3>
            <h3>{createdAt.slice(0, 10).split('-').reverse().join('-')}</h3>
            {likesCount && <h4>{likesCount} Likes</h4>}
            {dislikesCount && <h4>{dislikesCount} Dislikes</h4>}
            <img alt=''  style={{width:'200px'}} src={imageUrl} />     

        </div>
    )
}