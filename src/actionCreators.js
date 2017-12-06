import axios from 'axios';
import setAuthorizationToken from './setAuthorizationToken';
import { NotificationManager } from 'react-notifications';
import jwt from 'jwt-simple'
import jwt2 from 'jsonwebtoken'
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
      return axios.post('http://localhost:3005/login', {
                email: usuario.email,
                pass: usuario.pass
            })
            .then(response=>{
                if(response.data.mensaje){
                    dispatch({
                        type:"ERROR_LOGUEARSE",
                        error:response.data.mensaje
                    })
                    NotificationManager.error(response.data.mensaje, "Error", 5000, () => {})
                  
                }else{
                    const token = response.data.token;
                    localStorage.setItem('jwtToken',token);
                    setAuthorizationToken(token);
                    dispatch({
                        type:"LOGGED_IN"
                    })
                    console.log("JSON: ",jwt2.decode(token))
                    dispatch(setUsuarioActual(response.data.usuario))
                }
            })
    }
}
const setUsuarioActual = usuario =>{
    return {
        type: "SET_USUARIO_ACTUAL",
        usuario,
        logged:true
    }
}
const logOut = ()=>{
    localStorage.removeItem('jwtToken');
    return dispatch => {
        localStorage.removeItem('jwtToken');
        setAuthorizationToken(false);
        dispatch(setUsuarioActual({}));
        dispatch({
            type:"LOGOUT",
            logged:false
        })
    }
}
const registrar = usuario => {
    return dispatch =>{
      return axios.post('http://localhost:3005/registrar',{
          nombre:usuario.nombre,
          email:usuario.email,
          pass: usuario.pass
      })
      .then(response=>{
          if(response.data.error){
            NotificationManager.error("Correo electrónico ya está en uso", "Error");
          }
          if(response.data.mensaje){
            dispatch(logIn(usuario));
            NotificationManager.success("Usuario registrado", "Bienvenido a Korinver "+ usuario.nombre);
          }
      })
    }
}
const finalizarTarea = id => {
    return dispatch =>{
      return axios.put('http://localhost:3005/tareas/finalizar/'+id)
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
      return axios.delete('http://localhost:3005/tareas/'+id)
      .then(response=>{
          dispatch(fillTareas())
      })
    }
}
const fillTareas = () => {
    return dispatch =>{
      return axios.get('http://localhost:3005/tareas')
      .then(response=>{
          if(response.data.mensaje){
            dispatch({
                type:"ERROR_MOSTRAR_TAREAS",
                error:response.data.mensaje
              })
              NotificationManager.error('Error', response.data.mensaje, 5000, () => {})
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
      return axios.put('http://localhost:3005/tareas/'+tarea._id,tarea)
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
    logIn,
    setUsuarioActual,
    logOut,
    registrar
}