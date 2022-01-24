import React from 'react'
import { Fragment } from 'react/cjs/react.production.min';
// components
import Navbar from '../components/Navbar/Navbar'
import PostDetail from  "../components/PostDetail/PostDetail"

const PostDetails = () => {
    return (
        <Fragment>
           <Navbar/>
           <PostDetail/>
        </Fragment>
    )
}

export default PostDetails


