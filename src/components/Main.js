import React, { Component } from 'react';
import logo from './global/images/logo.svg';
import './css/App.css'
class Main extends Component{
    render(){
        return(
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Bienvenido al Taller de Korinver</h1>
            </div>
        )
    }
}

export default Main;