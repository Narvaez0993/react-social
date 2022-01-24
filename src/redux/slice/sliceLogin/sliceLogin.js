import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isUserLoggedIn: false,
    username: "",
}


export const loginSlice = createSlice({
    name: 'auth',
    initialState: initialState ,
    reducers:{
        login:{
           isUserLoggedIn: true,
           username: action.payload
        }
    }

})