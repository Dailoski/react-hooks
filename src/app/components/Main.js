import React from 'react'
import { Route } from 'react-router-dom'

import About from '../About/AboutPage'
import PostPage from '../Posts/PostPage'

const Main = props => {
    return (
        <main className="container">
            <Route path="/about" component={About} />
            <Route exact path="/" render={() => <PostPage isGrid={props.isGrid} />} />
        </main>
    )
}

export default Main
