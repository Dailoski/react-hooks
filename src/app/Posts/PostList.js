import React from 'react'
import { PostItem } from './PostItem'

export const PostList = ({ posts, isGrid }) => {
    if (posts.length === 0) {
        return <h4>Loading...</h4>
    }

    return (
        <div className="row">
            {posts.map(post => (
                <PostItem post={post} isGrid={isGrid} key={post.id} />
            ))}
        </div>
    )
}
