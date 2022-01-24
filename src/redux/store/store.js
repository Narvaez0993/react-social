import { configureStore } from '@reduxjs/toolkit'

//reducer
import posts from '../slice/slicePostList/slicePostList'
import postDetail from '../slice/slicePostDetail/slicePostDetail'


export default configureStore({
    reducer:{
        posts,
        postDetail
    }
})