import React, { Component } from 'react';
import logo from './global/images/logo.svg';
import './css/App.css'
import { Grid } from 'react-bootstrap';
class Main extends Component{
    render(){
        return(
            <Grid>
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Bienvenido al sistema de tareas de Korinver</h1>
                </div>
            </Grid>
        )
    }
}

export default Main;