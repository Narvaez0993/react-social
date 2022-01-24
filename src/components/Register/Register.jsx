import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import './Register.css'
import axios from 'axios'
import { BASE_URL } from '../../config/config'

export default function Register() {
    const[name,setName]=useState("")
    const[email, setEmail]=useState("");
    const[password, setPassword]=useState("")
    const history = useNavigate();

    async function register(){
        try{  
            await axios.post(BASE_URL+'signup',{user:{name,email,password}})
            .then((response) => {
                if(response.data.id != null){
                    console.log(response.data)
                    history("/")
                }
            })
        }catch(e){
            alert('Error')
        }
    }

    return (
        <section className="register">
            <div className="registerContainer">
                <h1>Registrate</h1>
            
                <form>
                    <label>Name</label>
                    <input
                        type='text'
                        autoFocus
                        required
                        onChange={(e)=>setName(e.target.value)} 
                    />
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
                        <button className="btn-login" type='button' onClick={register}>Registrarse</button>
                    </div>
                </form>
            </div>
        </section>
    )
}