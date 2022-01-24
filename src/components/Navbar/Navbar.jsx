import React from 'react'
//import Cookies from 'universal-cookie';
import './Navbar.css'
import {Link} from "react-router-dom";
import Logout from '../Login/Logout';

export default function Navbar() {

    const nameUser = JSON.parse(localStorage.getItem('name'))
    //const cookies = new Cookies();

    return (
        <nav className="navbar navbar-expand-lg navbar-light navHome">
            <a id="titule" className="navbar-brand" >Hablalo</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end mr" id="navbarSupportedContent">
                <Link to="/post" className="style-text">Publicar Post</Link>
                
                <ul className="navbar-nav ul-options">
                
                    <a id="titule2" className="nav-link dropdown-toggle"  role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Bienvenido {nameUser}<span></span>
                    </a>
                  
                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" >Mi perfil</a>
                        <hr/>    
                        <a className="dropdown-item" >Mensajes</a>
                        <hr />
                        <a className="dropdown-item" >Grupos</a>
                        <hr />
                        <Logout/>
                    </div>
                </ul>
            </div>
      </nav>
    )
}
