
const tareaReducer = (state,action)=>{
    if(action.type==="ADD_TAREA"){
        return{
            ...state,
            tareas:state.tareas.concat(action.tarea)
        }
    } else if(action.type==="DELETE_TAREA"){
        return{
            ...state,
            tareas: state.tareas.filter(tarea => tarea._id !== action.id)
        }
    } else if(action.type==="FINISH_TAREA"){
        return {
            ...state,
            tareas: state.tareas.map((tarea) => {
                if(tarea._id !== action.id) {
                    return tarea;
                }else{
                }
                return {
                    ...tarea,
                    entregado : true
                }    
            })
        }
        
    }else if(action.type==="FILL_TAREAS"){
        console.log("action.tareas: ",action.tareas);
        return {
            ...state,
            tareas: action.tareas
        }
    }

    return state;
}
export default tareaReducer;