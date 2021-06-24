import { Post } from "./Post";

export function UserPosts(posts) {
    return (
        <div>
            {posts.map(post =>
                <Post
                    key={post.id}
                    message={post.message}
                    createdAt={post.createdAt}
                    imageUrl={post.imageUrl}
                />)}
        </div>
    )
}