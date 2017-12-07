import React from 'react';
import ReactDOM from 'react-dom';
import './components/css/App.css';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import setAuthorizationToken from './setAuthorizationToken';
import { setUsuarioActual } from './actionCreators'
import jwt2 from 'jsonwebtoken';
import axios from 'axios';

//let contador = 0;
let token = localStorage.jwtToken;
axios.post("https://api-rest-padawan.herokuapp.com/verificarToken",{token})
.then((response)=>{
    console.log("Response",response)
    if(response.data.valido){
        if(localStorage.jwtToken){
            setAuthorizationToken(localStorage.jwtToken);
            store.dispatch(setUsuarioActual(jwt2.decode(localStorage.jwtToken)));
        }
        
    }else{
        localStorage.removeItem("jwtToken")
    }
    ReactDOM.render(
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
        ,
        document.getElementById('root')
    )
    //contador=1;
})
/*
if(contador===0){
    ReactDOM.render(
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
        ,
        document.getElementById('root')
    )
    registerServiceWorker();
}
*/




