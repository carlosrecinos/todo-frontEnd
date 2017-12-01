import axios from 'axios';
const ADD_TAREA = "ADD_TAREA"
const UPDATE_TAREA = "UPDATE_TAREA"
const DELETE_TAREA = "DELETE_TAREA"
const FINISH_TAREA = "FINISH_TAREA"
const FILL_TAREAS = "FILL_TAREAS"


const VisibilityFilters = {
  SHOW_ALL : "SHOW_ALL",
  SHOW_FINISHED : "SHOW_FINISHED",
  SHOW_UNFINISHED : "SHOW_UNFINISHED"
}



function addTarea(tarea) {
    return {
      type: ADD_TAREA,
      tarea
    }
  }

function updateTarea(id){
  return{
    type: UPDATE_TAREA,
    id
  }
}

function deleteTarea(id){
  return{
    type: DELETE_TAREA,
    id
  }
}

function finishTarea(id){
  return{
    type: FINISH_TAREA,
    id
  }
}
function fillTareas(tareas){
  
}
function setVisibilityFilters(filter){
  return{
    type: S
  }
}

export {
  addTarea,
  updateTarea,
  deleteTarea,
  finishTarea,
  setVisibilityFilters,
  fillTareas
}