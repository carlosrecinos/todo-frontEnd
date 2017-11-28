const TAREA_ADD = "TAREA_ADD"



function addTarea(tarea) {
    return {
      type: TAREA_ADD,
      tarea
    }
  }

dispatch(addTarea(tarea))