import { createStore,applyMiddleware } from 'redux';
import tareaReducer from './reducers/tareasReducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

    



export default createStore(tareaReducer,
    {
        tareas: [],
        logged : true,
        showModalTareas:false,
        tareaToUpdate:{},
        tareaFinalizada:false,
        tareaEliminada:false
    },
    applyMiddleware(logger,thunk));

    