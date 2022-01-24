import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import img from '../../img/user.png'

//slice 
import {fetchAllPostDetail} from '../../redux/slice/slicePostDetail/slicePostDetail'

const PostDetail = () => {

    const {id} = useParams()

    const { listDetails } = useSelector(state => state.postDetail);
    // console.log(listDetails,"post y comentario")
    // console.log(listDetails.map(postDetail =>(postDetail.comments.map(comment =>(comment.title)))))

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllPostDetail(id)); 
    },[dispatch])
  

    const DateFormat = (a) =>{
        let date = new Date(a)
        let formatDate = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear()
        return formatDate

    }
  

    return (
        <div>
            {
                listDetails.map(postDetail =>(
                    <div className="md:mx-auto my-20 max-w-md md:max-w-2xl w-full rounded-lg shadow-lg bg-white flex" key={postDetail.id}>
                    <div className="px-4 py-6 flex items-start w-full">
                        <div className="w-16 h-16 mr-4">
                            <img src="http://source.unsplash.com/800x800" className="rounded-full shadow object-cover"/>
                        </div>
                      <div className="w-full">
                          <div className="flex items-center justify-start">
                            <h2 className="-mt-1 mr-1 text-lg text-gray-900 font-semibold">{postDetail.user.name}</h2>
                          </div>
                          <div className="text-sm text-gray-500">{DateFormat(postDetail.created_at)}</div> 
                          <div className="mt-3 text-lg text-gray-700">{postDetail.title}</div>
                          <div className="mt-3 text-sm text-gray-700">{postDetail.content}</div>
                        <div className="mt-4 flex items-center">
                          <div className="mr-4 text-sm text-gray-400 flex items-center">
                              <i className="fa fa-heart"></i>
                              <span className="pl-1">0</span>
                          </div>
                          <div className="mr-4 text-sm text-gray-400 flex items-center">
                              <i className="fas fa-heart-broken"></i>
                              <span className="pl-1">0</span>
                          </div>
                          <div className="mr-4 text-sm text-gray-400 flex items-center">
                              <i className="fa fa-comment"></i>
                              <span className="pl-1">0</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
            }
            {
                listDetails.map((postDetail) =>(postDetail.comments.map((comment) =>(
                    // <div className="card mb-3 mt-5" id="cardPost" key={comment.id}>
                
                    //     <div className="card-header text-left">
                    //         <img  width="30" className="img-fluid z-depth-1 rounded-circle " src={img}  alt="no se encuentra imagen" />
                    //         <span className="ml-2">{comment.email}</span>
                    //     </div>
                    //     <div className="card-create-post">
                    //         <h6 className="created_post">{comment.created_at}</h6>
                    //     </div>
                    //     <div className="card-body">
                    //         <h6>{comment.title}</h6>
                    //         <h6>{comment.content}</h6> 
                    //     </div>
                    // </div>


                    <div className="md:mx-auto my-20 max-w-md md:max-w-2xl w-full rounded-lg shadow-lg bg-white flex" key={comment.id}>
                    <div className="px-4 py-6 flex items-start w-full">
                        <div className="w-16 h-16 mr-4">
                            <img src="http://source.unsplash.com/800x800" className="rounded-full shadow object-cover"/>
                        </div>
                      <div className="w-full">
                          <div className="flex items-center justify-start">
                            <h2 className="-mt-1 mr-1 text-lg text-gray-900 font-semibold">falta</h2>
                          </div>
                          <div className="text-sm text-gray-500">{DateFormat(comment.created_at)}</div> 
                          <div className="mt-3 text-lg text-gray-700">{comment.title}</div>
                          <div className="mt-3 text-sm text-gray-700">{comment.content}</div>
                      </div>
                    </div>
                  </div>
                ))))
            } 
        </div>
    )

}

export default PostDetail
