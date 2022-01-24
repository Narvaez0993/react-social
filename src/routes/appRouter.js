import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";
import Home from '../pages/Home'

export const appRouter = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Login/>}/>
                    <Route path="/home" element={<Home/>}/>
                    <Route exact path="/post" element={<Post/>}/>
                    <Route exact path="/post/:id" element={<PostDetails/>}/>
                    <Route exact path="/comment/:id" element={<Comment/>}/>
                </Routes>
            </Router>
        </>
    )
}
