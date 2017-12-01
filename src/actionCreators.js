import axios from 'axios'
const addTarea = tarea =>{
    return dispatch =>{
      return axios.post('http://localhost:3005/tareas', {
                titulo: tarea.titulo,
                descripcion: tarea.descripcion,
                autor : tarea.autor,
                fechaEntrega:tarea.fechaEntrega

            })
            .then(response=>{
                dispatch(fillTareas())
            })
            
    }
    
}
const finalizarTarea = id => {
    return dispatch =>{
      return axios.put('http://localhost:3005/tareas/finalizar/'+id)
      .then(response=>{
          dispatch(fillTareas())
      })
    }
}
const eliminarTarea = id => {
    return dispatch =>{
      return axios.delete('http://localhost:3005/tareas/'+id)
      .then(response=>{
          dispatch(fillTareas())
      })
    }
}
const fillTareas = () => {
    return dispatch =>{
        //return axios.get('https://api-rest-padawan.herokuapp.com/tareas')
      return axios.get('http://localhost:3005/tareas')
      .then(response=>{
          dispatch({
            type:"FILL_TAREAS",
            tareas:response.data
          })
      })
    }
  }
  const updateTarea = (tarea) => {
    return dispatch =>{
        //return axios.get('https://api-rest-padawan.herokuapp.com/tareas')
      return axios.get('http://localhost:3005/tareas')
      .then(response=>{
          dispatch({
            type:"FILL_TAREAS",
            tareas:response.data
          })
      })
    }
  }
  const changeModalState = () =>{
      return {
          type:"CHANGE_MODAL_STATE"
      };
  }
  const changeTareaToUpdate = (tarea) =>{
    return {
        type:"CHANGE_TAREA_TO_UPDATE",
        tarea
    };
}
export {addTarea,finalizarTarea,eliminarTarea,fillTareas,changeModalState,updateTarea,changeTareaToUpdate}