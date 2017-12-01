import axios from 'axios';
import {fillTareas} from './actionCreators';
import store from './store';


const loadTareas = (action) =>{
    return axios.get('http://localhost:3005/tareas')
    .then(response=>{
        return response
    })
}
const deleteTarea = (action) =>{
    return axios.delete('http://localhost:3005/tareas/'+action.id)
    .then(response=>{
        return response
    })
    loadTareas();
}

export default loadTareas;