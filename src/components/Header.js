import React, { Component } from 'react';
import logo from './global/images/logo.svg';
import './css/Header.css';
import { Link } from 'react-router-dom';
class Header extends Component{
    
    render(){
        return (
            <div className="Header">
                <div className="Header-logo">
                    <Link to="/" ><img alt="Home" src={logo}/></Link>
                </div>

                <Link to='/login'>
                    <div className="Header-button">
                        Iniciar Sesión
                    </div>
                </Link>
                <Link to='/tareas'>
                    <div className="Header-button">
                        Tareas
                    </div>
                </Link>

            </div>
        )
    }
}

export default Header;