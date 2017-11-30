import React, { Component } from 'react';
import TareaList from './TareaList';
import store from '../store';
import {addTarea, fillTareas} from '../actionCreators';
import { connect } from 'react-redux';
import loadTareas from '../services';
class Tareas extends Component {
    componentWillMount(){
        this.props.loadData()
    }
   
  render() {
    
    return (
        <div>
            
            <h1>Lista de Tareas</h1>
            ID: <input type="text" name="idTarea" ref={el => this.inputId = el}/><br/>
            NOMBRE: <input type="text" name="nombreTarea" ref={el => this.inputNombre = el}/>
            <button onClick={()=>this.props.addTarea({  id:this.inputId.value,
                                                        nombre:this.inputNombre.value,
                                                        completado:false})}>+</button>
            <br/>
            
            {
                this.props.tareas.map((tarea)=>{
                    return (
                        <TareaList listado={tarea} key={tarea._id}/>
                    )
                })
            }
            
            
        </div>
        )
    
  }
}
const mapStateToProps=(store)=>{
    return{
        tareas:store.tareas
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        loadData(){
            var tareas = loadTareas();
            tareas.then(response=>{
                dispatch(fillTareas(response.data))
            })
            
        },
        addTarea(tarea){
            dispatch(addTarea(tarea))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Tareas);
