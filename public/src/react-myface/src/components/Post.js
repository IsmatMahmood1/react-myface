
export function Post({ message, imageUrl, createdAt }) {
    return (
        <div>
            <h3>{message}</h3>
            <h3>{createdAt.slice(0, 10).split('-').reverse().join('-')}</h3>
            <img alt='' src={imageUrl} />
        </div>
    )
}