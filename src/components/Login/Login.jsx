import React,{useState} from 'react'
import { useNavigate , Link } from 'react-router-dom'
import Cookies from 'universal-cookie'
import './Login.css'
import axios from 'axios'
import { BASE_URL } from '../../config/config'

export default function Login() {
    const[email, setEmail]=useState("");
    const[password, setPassword]=useState("")
    const history = useNavigate();

    async function login(){
        try{  
           let result =  await axios.post(BASE_URL+'login',{user:{email,password}})
            .then((result) => {
                if(result.data.id != null){
                    localStorage.setItem("id", JSON.stringify(result.data.id))
                    localStorage.setItem("name", JSON.stringify(result.data.name))
                    history('/home')
                }
            })
        }catch(e){
            alert('Error')
        }
    }


    
    return (
 
        <section className="login">
            <div className="loginContainer">
                <h1>Inicia Sesión</h1>
            
                <form>
                    <label>Email</label>
                    <input
                        type='email'
                        autoFocus
                        required
                        onChange={(e)=>setEmail(e.target.value)} 
                    />
                    <label>Password</label>
                    <input
                        type='password'
                        required
                        onChange={(e)=>setPassword(e.target.value)} 
                    />
                    <div className="btnContainer">
                        <button className="btn-login" type='button' onClick={login}>Inicia Sesión</button>
                        <p>No tienes cuenta? <Link to={'/signup'}><span>Registrate</span></Link> </p>
          
                    </div>
                </form>
            </div>
        </section>
    )
}