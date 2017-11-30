import { createStore,applyMiddleware,combineReducers } from 'redux';
import logger from 'redux-logger';
const reducer = (state,action)=>{
    if(action.type==="ADD_TAREA"){
        return{
            ...state,
            tareas:state.tareas.concat(action.tarea)
        }
    } else if(action.type==="DELETE_TAREA"){
        return{
            ...state,
            tareas: state.tareas.filter(tarea => tarea.id !==action.id)
        }
    } else if(action.type==="FINISH_TAREA"){
        return {
            ...state,
            tareas: state.tareas.map((tarea) => {
                if(tarea.id !== action.id) {
                    return tarea;
                }else{
                }
                return {
                    ...tarea,
                    completado : true
                }    
            })
        }
        
    }
    return state;
}
const myLogger = (store)=>(next)=>(action)=>{
    console.log("Log action: ",action);
    next(action);
}
const tarea=[
    {
        id:1,
        nombre: "Tarea 1",
        completado:false
    },
    {
        id:2,
        nombre: "Tarea 2",
        completado:true
    },
    {
        id:3,
        nombre: "Tarea 3",
        completado:false
    }
]
export default createStore(reducer,
    { tareas: [],tarea },
    applyMiddleware(logger));
