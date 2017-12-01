import axios from 'axios'
const addTarea = tarea =>{
    return{
        type:"ADD_TAREA",
        tarea
    }
}
const finalizarTarea = id => {
    return{
        type: "FINISH_TAREA",
        id
    }
}
const eliminarTarea = id => {
    console.log("Entro a eliminarTarea",id)
    return dispatch =>{
      return axios.delete('http://localhost:3005/tareas/'+id,{
        headers: {
          'Access-Control-Allow-Origin': '*',
        }})
      .then(response=>{
          dispatch(fillTareas())
      })
    }
}
const fillTareas = () => {
    console.log("Entro a fill")
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
export {addTarea,finalizarTarea,eliminarTarea,fillTareas}