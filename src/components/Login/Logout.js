import React from 'react'
import { useNavigate } from 'react-router-dom'

const Logout = () => {
    const history = useNavigate();
    const log = () =>{
        localStorage.clear();
        history("/")
    }

    return (
        <>
           <a className="dropdown-item" onClick={log} >Cerrar sesion</a>
        </>
    )
}

export default Logout