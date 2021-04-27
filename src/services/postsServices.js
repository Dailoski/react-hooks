import Axios from 'axios'
import Post from '../models/Post'

export const fetchPosts = () => {
    const requestUrl = 'https://jsonplaceholder.typicode.com/posts'
    return Axios.get(requestUrl)
        .then(res => res.data)
        .then(res => res.map(a => new Post(a)))
}
