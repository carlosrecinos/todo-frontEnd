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
    return{
        type:"DELETE_TAREA",
        id
    }
}
const fillTareas = tareas => {
    return{
      type: "FILL_TAREAS",
      tareas
    }
  }
export {addTarea,finalizarTarea,eliminarTarea,fillTareas}