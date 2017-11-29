import { createStore } from 'redux';

const reducer = (state,action)=>{
    console.log(action)
    if(action.type==="ADD_TAREA"){
        return{
            ...state,
            tareas: state.tareas.concat(action.tarea)
        }
    } else if(action.type==="DELETE_TAREA"){
        return{
            ...state,
            tareas: state.tareas.filter(tarea => tarea.id !==action.id)
        }
    }
    return state;
}

export default createStore(reducer,{ tareas: [] });
