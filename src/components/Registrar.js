import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './css/Login.css'
class Login extends Component{

    registrarse(){
                
    }

    render(){
        
        return(
            <div id="login">
                <div className="login-page">
                    <div className="form">
                        <h2>Registrarse</h2>
                        
                        <form>
                            <input type="password" placeholder="E-mail"/>
                            <input type="text" placeholder="Pass"/>
                            <button>Registrarse</button>
                            <p className="message">Already registered? <Link to="/login">Sign In</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;
