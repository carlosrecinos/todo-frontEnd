import { createStore,applyMiddleware,combineReducers } from 'redux';
import tareaReducer from './reducers/tareasReducer';
import logger from 'redux-logger';

export default createStore(tareaReducer,
    {tareas: []},
    applyMiddleware(logger));
