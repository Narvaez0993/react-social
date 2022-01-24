import React, {Fragment} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Login from "./components/Login/Login";
import Home from "./pages/Home";
import Post from "./components/Post/Post";
import PostDetails from './pages/PostDetail';
import Comment from './components/Comments/Comments'
import Register from './components/Register/Register';


function App() {
    return (
      <Fragment>
        <Router>
          <Routes>
              <Route exact path="/" element={<Login/>}/>
              <Route path="/home" element={<Home/>}/>
              <Route exact path="/post" element={<Post/>}/>
              <Route exact path="/post/:id" element={<PostDetails/>}/>
              <Route exact path="/comment/:id" element={<Comment/>}/>
              <Route exact path="/signup" element={<Register/>}/>
          </Routes>
        </Router>
      </Fragment>
    );
}

export default App;
