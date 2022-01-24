import React, {useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
import {BASE_URL} from '../../config/config'
//redux
import {fetchAllPosts} from '../../redux/slice/slicePostList/slicePostList'
import img from '../../img/user.png'
import { useDispatch, useSelector } from 'react-redux'
import './PostList.css'

export const PostList = () => {

    

    const { list: posts } = useSelector(state => state.posts);
    console.log(posts.created_at)
    const dispatch = useDispatch();

    const history = useNavigate();

    useEffect(() => {
        dispatch(fetchAllPosts());
    }, [dispatch])

    
    const DateFormat = (a) =>{
        let date = new Date(a)
        let formatDate = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear()
        return formatDate

    }

    async function dislike( post_id ){
      const user_id = localStorage.getItem('id')
      const dislikes = true
      const likes = false
      console.log(post_id)
        try{  
          await axios.put(BASE_URL+'likes/32',{like:{dislikes,likes}})
          .then((response) => {
              console.log(response)
          })
        }catch(e){
          alert('Error')
        }
    }

    async function likes( post_id ){
      const user_id = localStorage.getItem('id')
      const likes = true
      console.log(post_id)
        try{  
          await axios.post(BASE_URL+'likes',{like:{user_id,post_id,likes}})
          .then((response) => {
              console.log(response)
          })
        }catch(e){
          alert('Error')
        }
    }

    return (
      <>
        {
          posts.map((post)=>(
            <div className="md:mx-auto my-20 max-w-md md:max-w-2xl w-full rounded-lg shadow-lg bg-white flex" key={post.id}>
              <div className="px-4 py-6 flex items-start w-full">
                  <div className="w-16 h-16 mr-4">
                      <img src="http://source.unsplash.com/800x800" className="rounded-full shadow object-cover"/>
                  </div>
                <div className="w-full">
                    <div className="flex items-center justify-start">
                      <h2 className="-mt-1 mr-1 text-lg text-gray-900 font-semibold">{post.user.name}</h2>
                    </div>
                    <div className="text-sm text-gray-500">{DateFormat(post.created_at)}</div> 
                    <div className="mt-3 text-lg text-gray-700"><Link to={`/post/${post.id}`}>{post.title}</Link></div>
                    <div className="mt-3 text-sm text-gray-700">{post.content}</div>
                  <div className="mt-4 flex items-center">
                    <div className="mr-4 text-sm text-gray-400 flex items-center">
                        <button className="btn btn-primary" onClick={() => likes(post.id)} > <i className="fa fa-heart"></i></button>
                        <span className="pl-1">0</span>
                    </div>
                    <div className="mr-4 text-sm text-gray-400 flex items-center">
                       <button type="button" className="btn btn-primary" onClick={() => dislike(post.id)}><i className="fas fa-heart-broken"></i></button>
                        <span className="pl-1">0</span>
                    </div>
                    <div className="mr-4 text-sm text-gray-400 flex items-center">
                        <Link to={`/comment/${post.id}`}><i className="fa fa-comment"></i></Link>
                        <span className="pl-1">{post.comments.length}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        }  
      </>
        
    )
}
