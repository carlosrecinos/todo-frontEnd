import { createStore,applyMiddleware } from 'redux';
import tareaReducer from './reducers/tareasReducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';


export default createStore(tareaReducer,
    {
        tareas: [],
        logged : false,
        showModalTareas:false,
        tareaToUpdate:{},
        tareaFinalizada:false,
        tareaEliminada:false,
        error:"",
        usuarioActual:{}
    },
    applyMiddleware(logger,thunk));

    