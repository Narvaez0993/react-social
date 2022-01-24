import React from 'react'
import { Fragment } from 'react/cjs/react.production.min';
// components
import Navbar from '../components/Navbar/Navbar'
import { PostList } from '../components/PostList/PostList'

const Home = () => {
    return (
        <Fragment>
           <Navbar/>
           <PostList/>
        </Fragment>
    )
}

export default Home
