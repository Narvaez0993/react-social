import { createSlice } from '@reduxjs/toolkit';
import {BASE_URL} from '../../../config/config'

//axios
import axios from 'axios';

export const postSlice = createSlice({
    name: 'posts',
    initialState:{
        list: [],
    },
    reducers:{
        setPostList: (state, action) => {
            state.list = action.payload;
        }
    }
})

export const { setPostList } = postSlice.actions;

export default postSlice.reducer;

export const fetchAllPosts = () => (dispatch) =>{
   
    axios.get(BASE_URL+"posts")
    .then((response) => {
        dispatch(setPostList(response.data));
    })
    .catch((error) => console.log(error));

}