import React from 'react'
import { fetchPosts } from '../../services/postsServices'
import { PostList } from './PostList'

class PostPage extends React.Component {
    state = {
        posts: []
    }

    componentDidMount() {
        fetchPosts().then(posts => {
            this.setState({
                posts
            })
        })
    }

    render() {
        return (
            <React.Fragment>
                <h1> Posts Page </h1>
                <PostList posts={this.state.posts} isGrid={this.props.isGrid} />
            </React.Fragment>
        )
    }
}

export default PostPage
