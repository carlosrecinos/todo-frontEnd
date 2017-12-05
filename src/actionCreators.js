import axios from 'axios'
const addTarea = tarea =>{
    return dispatch =>{
      return axios.post('https://api-rest-padawan.herokuapp.com/tareas', {
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
      return axios.put('https://api-rest-padawan.herokuapp.com/tareas/finalizar/'+id)
      .then(response=>{
          dispatch(fillTareas())
          if(response.data.mensaje){
              console.log(response.data.mensaje)
          }
      })
    }
}
const eliminarTarea = id => {
    return dispatch =>{
      return axios.delete('https://api-rest-padawan.herokuapp.com/tareas/'+id,{
        headers: {
            'Access-Control-Allow-Origin': '*',
          }
      } )
      .then(response=>{
          dispatch(fillTareas())
      })
    }
}
const fillTareas = () => {
    return dispatch =>{
      return axios.get('https://api-rest-padawan.herokuapp.com/tareas')
      //return axios.get('http://localhost:3005/tareas')
      .then(response=>{
          dispatch({
            type:"FILL_TAREAS",
            tareas:response.data
          })
      })
    }
  }
  const updateTarea = tarea => {
      console.log("UPDATE",tarea._id)
    return dispatch =>{
      return axios.put('https://api-rest-padawan.herokuapp.com/tareas/'+tarea._id,tarea)
      .then(response=>{
        dispatch(fillTareas())
        dispatch(changeModalState())
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