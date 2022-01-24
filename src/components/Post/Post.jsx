import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Cookies from 'universal-cookie'
import { BASE_URL } from '../../config/config'
import axios from 'axios'
import './Post.css'

export default function Post()  {
    //const cookies = new Cookies();
    const[title,setTitle]=useState("");
    const[content,setContent]=useState("");
    const user_id = localStorage.getItem('id')
    console.log(user_id)

    const history = useNavigate();
    

    async function apiPost(){
        // try{
        //     let post={title,content,user_id};
        //     let result= await fetch(BASE_URL + 'posts',{
        //         method: 'POST',
        //         headers:{
        //             "Content-Type":"application/json",
        //             "Accept": "appication/json"
        //         },
        //         body: JSON.stringify({post})
        //     });
        //     result = await result.json();
        //     history('/home');
        // }catch(e){
        //     console.log(e)
        //     alert("hubo un error al publicar el post")
        // }   


        try{  
          await axios.post(BASE_URL+'posts',{post:{title,content,user_id}})
             .then(() => {
                history('/home')
             })
         }catch(e){
             alert('Error')
         }
    }

    
   
    return (
        // <div className="container-fluid">
        //     <div className="card border mb-3"  id="card-social">
        //         <div className="card-header" id="toPostName">   
        //         </div>
        //         <div className="card-body">
        //             <div className="form-group text-left">
        //                 <label><b className="mr-1"></b>escribe aqui lo que quieras publicar</label>
        //                 <form action="">
        //                     <label className="title-card-post"><b className="mr-1"></b>Titulo Post</label>
        //                     <input
        //                         type="text"
        //                         className="form-control"
        //                         onChange={(e)=>setTitle(e.target.value)}/>
        //                     <label className="title-card-post"><b className="mr-1"></b>Contenido Post</label>
        //                     <textarea 
        //                         name='post' 
        //                         className="form-control" 
        //                         id="commentary"
        //                         onChange={(e)=>setContent(e.target.value)} />

        //                         <button  type="button" onClick={apiPost} className="btn btn-raised btn-secondary btn-sm mt-3" id="button-topost">Publicar</button>  
        //                 </form>
                            
        //             </div>
        //         </div>
        //     </div>
        // </div>
       
  <div className="max-w-xl p-5 mx-auto my-10 bg-white rounded-md shadow-sm shadow-lg">
    <div className="text-center">
      <h1 className="my-3 text-3xl font-semibold text-gray-600">Post</h1>
      <p className="text-gray-400"></p>
    </div>
    <div>
      <form>
        <div className="mb-6">
          <label className="block mb-2 text-sm text-gray-600">Titulo Post</label>
          <input
            type="text"
            placeholder="Escribe un titulo para tu post"
            required
            className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
            onChange={(e)=>setTitle(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm text-gray-600">Contenido Post</label>
          <textarea
            rows="5"
            placeholder="Escribe un contenido para el post"
            className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
            onChange={(e)=>setContent(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="mb-6">
          <button
            type="button"
            className="w-full px-2 py-2 text-white bg-indigo-500 rounded-md  focus:bg-indigo-600 focus:outline-none" 
            onClick={apiPost}
          >Crear Post</button>
        </div>
      </form>
    </div>
  </div>

       
    )
}

