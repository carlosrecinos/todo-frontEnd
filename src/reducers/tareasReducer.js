
const tareaReducer = (state,action)=>{
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
        
    }else if(action.type==="FILL_TAREAS"){
        console.log("state.tareas",state.tareas);
        console.log("api",action);
        return {
            ...state,
            tareas:state.tareas.concat(action.tareas)
        }
    }

    return state;
}
export default tareaReducer;