import React from 'react';
import ReactDOM from 'react-dom';
import './components/css/App.css';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import registerServiceWorker from './registerServiceWorker';
import setAuthorizationToken from './setAuthorizationToken';
import { setUsuarioActual } from './actionCreators'
import jwt2 from 'jsonwebtoken';
import axios from 'axios';


let bandera = 0;
let token = localStorage.jwtToken;
if(localStorage.jwtToken){
    bandera=1
    axios.post("https://api-rest-padawan.herokuapp.com/verificarToken",{token})
    .then((response)=>{
        if(response.data.valido){
            if(localStorage.jwtToken){
                setAuthorizationToken(localStorage.jwtToken);
                store.dispatch(setUsuarioActual(jwt2.decode(localStorage.jwtToken)));
            }
            
        }else{
            localStorage.removeItem("jwtToken")
            bandera=0;
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
    })
}

if(bandera===0){
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


    






