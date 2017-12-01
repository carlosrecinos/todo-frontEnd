import axios from 'axios';
import {fillTareas} from './actionCreators';
import store from './store';


const loadTareas = (action) =>{
    
}
const deleteTarea = (action) =>{
    return axios.delete('https://api-rest-padawan.herokuapp.com/tareas/'+action.id)
    .then(response=>{
        return response
    })
    loadTareas();
}

export default loadTareas;