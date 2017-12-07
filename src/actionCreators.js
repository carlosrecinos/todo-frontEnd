import axios from 'axios';
import setAuthorizationToken from './setAuthorizationToken';
import { NotificationManager } from 'react-notifications';
const addTarea = tarea =>{
    return dispatch =>{
      return axios.post('https://api-rest-padawan.herokuapp.com/tareas', {
                titulo: tarea.titulo,
                descripcion: tarea.descripcion,
                autor : tarea.autor,
                fechaEntrega:tarea.fechaEntrega

            })
            .then(response=>{
                if(response.data.mensaje){
                    dispatch(fillTareas())
                    NotificationManager.success("Tarea insertada", "Tarea agregada")
                }else{
                    NotificationManager.error(response.data.error, "Error")
                }
            }).catch((error)=>{
                NotificationManager.error("Error")
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
                if(response.data.mensaje){
                    NotificationManager.error(response.data.mensaje, "Error")
                  
                }else{
                    const token = response.data.token;
                    localStorage.setItem('jwtToken',token);
                    setAuthorizationToken(token);
                    dispatch(setUsuarioActual(response.data.usuario))
                }
            }).catch((error)=>{
                NotificationManager.error("Error de conexión")
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
            logged:false,
            tareas:[]
        })
    }
}
const registrar = usuario => {
    return dispatch =>{
      return axios.post('https://api-rest-padawan.herokuapp.com/registrar',{
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
      return axios.put('https://api-rest-padawan.herokuapp.com/tareas/finalizar/'+id)
      .then(response=>{
          
          if(response.data.error){
                NotificationManager.error(response.data.error, "Error");
          }else{
                dispatch(fillTareas());
                NotificationManager.info("Tarea Finalizada", "Tarea finalizada");
          }
      })
    }
}
const eliminarTarea = id => {
    return dispatch =>{
      return axios.delete('https://api-rest-padawan.herokuapp.com/login/'+id)
      .then(response=>{
          if(response.data.error){
            NotificationManager.error(response.data.error, "Error");
          }else{
            dispatch(fillTareas())
            NotificationManager.warning('Tarea eliminada', 'La tarea fue eliminada');
          }
      })
    }
}
const fillTareas = () => {
    return dispatch =>{
      return axios.get('https://api-rest-padawan.herokuapp.com/tareas')
      .then(response=>{
          if(response.data.error){
              NotificationManager.error(response.data.mensaje, "Error");
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
      return axios.put('https://api-rest-padawan.herokuapp.com/login/'+tarea._id,tarea)
      .then(response=>{
          if(response.data.error){
            NotificationManager.error(response.data.error, "Error");
          }else{
            dispatch(fillTareas())
            dispatch(changeModalState())
            NotificationManager.info("Tarea modificada");
          }
        
        
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