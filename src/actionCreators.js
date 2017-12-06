import axios from 'axios';
import setAuthorizationToken from './setAuthorizationToken';
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
const logIn = usuario =>{
    return dispatch => {
      return axios.post('https://api-rest-padawan.herokuapp.com/login', {
                email: usuario.email,
                pass: usuario.pass
            })
            .then(response=>{
                const token = response.data.token;
                localStorage.setItem('jwtToken',token);
                setAuthorizationToken(token);
                dispatch({
                    type:"LOGGED_IN"
                })
            }).catch(error=>{
                console.log("ERROR: ",error.response)
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
      return axios.delete('http://localhost:3005/tareas'+id,{
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
      return axios.get('http://localhost:3005/tareas')
      //return axios.get('http://localhost:3005/tareas')
      .then(response=>{
          if(response.data.mensaje){
            dispatch({
                type:"ERROR_MOSTRAR_TAREAS",
                error:response.data.mensaje
              })
          }else{
            dispatch({
                type:"FILL_TAREAS",
                tareas:response.data
              })
          }
      }).catch(error=>{
        console.log(error)
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
export {addTarea,
    finalizarTarea,
    eliminarTarea,
    fillTareas,
    changeModalState,
    updateTarea,
    changeTareaToUpdate,
    logIn
}