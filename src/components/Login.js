import React, { Component } from 'react';
import './css/Login.css';
import { Link } from 'react-router-dom';
import { NotificationManager } from 'react-notifications';
import { connect } from 'react-redux';
import { logIn } from '../actionCreators';
class Login extends Component{


    constructor(props){
        super(props)
        this.state={
            error:{},
            logueando:false,


        }
    }

    validate = () =>{
        if(this.inputUsername.value === "" || this.inputPassword.value === "" ){
            return false;
        }else{
            return true;
        }
    }
    onSubmit(e){
        e.preventDefault();
        if(this.validate()){
            let email = this.inputUsername.value;
            let pass = this.inputPassword.value;
            this.props.logIn({
                email,
                pass
            });
        }else{
            NotificationManager.error('Debe completar los campos', 'Campos inválidos', 5000, () => {
                this.inputUsername.focus()
              });
        }
    }

    render(){
        return(
            <div id="login">
                <div className="login-page">
                    <div className="form">
                    <h2>Login</h2>
                        <form onSubmit={this.onSubmit.bind(this)} className="login-form">
                            <input ref={(ref) => {this.inputUsername = ref}} type="text" placeholder="Username"/>
                            <input ref={(ref) => {this.inputPassword = ref}} type="password" placeholder="Password"/>
                            <button>login</button>
                            <p className="message">Not registered? 
                                <Link to='/registrar'>
                                    Create a account?
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps=(store)=>{
    return{
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        logIn: (usuario)=>{
            dispatch(logIn(usuario))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Login);
