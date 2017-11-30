import axios from 'axios';
import {fillTareas} from './actionCreators';
import store from './store';


const loadTareas = (action) =>{
    return axios.get('http://localhost:3006/tareas')
    .then(response=>{
        return response
    })
}
const deleteTarea = (action) =>{
    return axios.post('http://localhost:3006/tareas/'+action.id)
    .then(response=>{
        return response
    })
}

export default loadTareas;