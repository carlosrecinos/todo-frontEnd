import React, { Component } from 'react';
import './css/Login.css';
import { Link } from 'react-router-dom';
class Login extends Component{



    render(){
        return(
            <div id="login">
                <div className="login-page">
                    <div className="form">
                    <h2>Login</h2>
                        <form className="login-form">
                            <input type="text" placeholder="Username"/>
                            <input type="password" placeholder="Password"/>
                            <button>login</button>
                            <p className="message">Not registered? <Link to='/registrar'>Create a account?</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;
