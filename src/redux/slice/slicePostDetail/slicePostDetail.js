import { createSlice } from '@reduxjs/toolkit';
import {BASE_URL} from '../../../config/config'
//axios
import axios from 'axios'

export const postDetailSlice = createSlice({
    name: 'postDetail',
    initialState:{
        listDetails: [],
    },
    reducers:{
        setPostDetail: (state, action) => {
            state.listDetails = action.payload;
        }
    }
})

export const { setPostDetail } = postDetailSlice.actions;

export default postDetailSlice.reducer;

export const fetchAllPostDetail = (id) => (dispatch) =>{
   
    axios.get(BASE_URL+`posts/${id}`)
    .then((response) => {
        dispatch(setPostDetail(response.data));
    })
    .catch((error) => console.log(error));

}