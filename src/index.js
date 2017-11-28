import React from 'react';
import ReactDOM from 'react-dom';
import './components/css/App.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'
import { createStore } from 'redux';
import tareas from './reducers/tareas';

const store = createStore(
    tareas 
)
ReactDOM.render(
    <BrowserRouter>
            <App />
    </BrowserRouter>,
    document.getElementById('root')
)

registerServiceWorker();
