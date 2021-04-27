class Post {
    constructor(post) {
        this.body = post.body
        this.id = post.id
        this.title = post.title
    }
    get shortBody() {
        return this.body.slice(0, 20)
    }
    get shortTitle() {
        return this.title.slice(0, 10)
    }
}
export default Post
