import React,{useState} from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { BASE_URL } from '../../config/config'
import axios from 'axios'

const Comments = () => {
    const {id} = useParams();
    const[title,setTitle]=useState("");
    const[content,setContent]=useState("");
    const user_id = localStorage.getItem('id')
    const post_id = id
    const history = useNavigate();
    async function apiPost(){
     
        try{  
            await axios.post(BASE_URL+'comments',{comment:{title,content,user_id,post_id}})
               .then((response) => {
                  console.log(response.data)
                    history("/home")
            })
           }catch(e){
               alert('Error')
        }
    }
    return (
        <>
<div className="max-w-xl p-5 mx-auto my-10 bg-white rounded-md shadow-sm shadow-lg">
    <div className="text-center">
      <h1 className="my-3 text-3xl font-semibold text-gray-600">Comentario</h1>
      <p className="text-gray-400"></p>
    </div>
    <div>
      <form>
        <div className="mb-6">
          <label className="block mb-2 text-sm text-gray-600">Titulo comentario</label>
          <input
            type="text"
            placeholder="Escribe un titulo para tu post"
            required
            className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
            onChange={(e)=>setTitle(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm text-gray-600">Contenido Comentario</label>
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
          >Comentar</button>
        </div>
      </form>
    </div>
  </div>
        </>
    )
}

export default Comments
