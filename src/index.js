import React from 'react';
import ReactDOM from 'react-dom';
import './components/css/App.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import setAuthorizationToken from './setAuthorizationToken';
import { setUsuarioActual } from './actionCreators'
import jwt2 from 'jsonwebtoken';

if(localStorage.jwtToken){
    setAuthorizationToken(localStorage.jwtToken);
    store.dispatch(setUsuarioActual(jwt2.decode(localStorage.jwtToken)))
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

registerServiceWorker();
