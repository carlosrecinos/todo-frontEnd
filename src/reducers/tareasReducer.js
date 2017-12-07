
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
        return {
            ...state,
            tareas: action.tareas
        }
    }else if(action.type==="CHANGE_MODAL_STATE"){
        return{
            ...state,
            showModalTareas:!state.showModalTareas
        }
    }else if(action.type==="CHANGE_TAREA_TO_UPDATE"){
        return{
            ...state,
            tareaToUpdate: action.tarea
        }
    }else if(action.type==="TAREA_FINALIZADA"){
        return{
            ...state,
            tareaFinalizada:true
        }
    }else if(action.type==="ERROR_MOSTRAR_TAREAS"){
        return{
            ...state,
            error: action.error
        }
    }else if(action.type==="ERROR_LOGUEARSE"){
        return{
            ...state,
            error: action.error
        }
    }else if(action.type==="LOGGED_IN"){
        return{
            ...state,
            logged:true
        }
    }else if(action.type==="SET_USUARIO_ACTUAL"){
        return{
            ...state,
            usuarioActual:action.usuario,
            logged:action.logged
        }
    }else if(action.type==="LOGGED"){
        return{
            ...state,
            logged:action.logged
        }
    }else if(action.type==="LOGOUT"){
        return{
            ...state,
            logged:action.logged,
            tareas: action.tareas
        }
    }
    return state;
}
export default tareaReducer;