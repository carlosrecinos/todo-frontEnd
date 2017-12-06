import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './css/Login.css';
import {registrar} from '../actionCreators';
import {connect} from 'react-redux';
import { NotificationManager } from 'react-notifications';
import PropTypes from 'prop-types'

class Registrar extends Component{

    componentWillMount(){
        if(this.props.logged){
            this.context.router.history.push('/');
        }
    }
    componentWillUpdate(nextProps){
        if(!this.props.logged){
            this.context.router.history.push('/');
        }
    }
    onSubmit(e){
        e.preventDefault();
        let nombre = this.inputNombre.value;
        let email = this.inputEmail.value;
        let pass1 = this.inputPass.value;
        let pass2 = this.inputConfirmPass.value;
        if(pass1!="" && pass2!="" && nombre != "" && email != ""){
            if(pass1===pass2){
                this.props.registrarse({
                    nombre,
                    email,
                    pass:pass1
                })
            }else{
                NotificationManager.error("Contraseñas no coinciden", "Error")
            }
        }else{
            NotificationManager.error("Debe completar todos los campos antes de continuar", "Error");
            this.inputNombre.focus();
        }
    }

    render(){
        console.log(this)
        return(
            <div id="login">
                <div className="login-page">
                    <div className="form">
                        <h2>Registrarse</h2>
                        
                        <form onSubmit={this.onSubmit.bind(this)} >
                            <input ref={(ref) => {this.inputNombre = ref}} type="text" placeholder="Nombre"/>
                            <input ref={(ref) => {this.inputEmail = ref}} type="text" placeholder="E-mail"/>
                            <input ref={(ref) => {this.inputPass = ref}} type="password" placeholder="Password"/>
                            <input ref={(ref) => {this.inputConfirmPass = ref}} type="password" placeholder="Confirm Password"/>
                            <button type="submit">Registrarse</button>
                            <p className="message">Already registered? <Link to="/login">Sign In</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

Registrar.contextTypes = {
    router : PropTypes.object.isRequired
}

const mapStateToProps = store =>{
    return {
        logged:store.logged
    }
}
const mapDispatchToProps = dispatch =>{
    return {
        registrarse: (usuario)=>{
            dispatch(registrar(usuario))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Registrar);
