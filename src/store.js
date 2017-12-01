import { createStore,applyMiddleware,combineReducers } from 'redux';
import tareaReducer from './reducers/tareasReducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { fillTareas }from './actionCreators'
import loadTareas from './services';

    



export default createStore(tareaReducer,
    {tareas: [],logged : true},
    applyMiddleware(logger,thunk));

    