import { createStore } from 'redux';

const reducer = (state,action)=>{
    if(action.type==="ADD_TAREA"){
        return{
            ...state,
            tareas: state.tareas.concat(action.tarea)
        }
    }
    
    return state;
}

export default createStore(reducer,{ tareas: [
    {
        nombre: "HOla"
    },{
        nombre:"hola2"
    }
    
] });
