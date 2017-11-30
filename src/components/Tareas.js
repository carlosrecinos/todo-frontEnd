import React, { Component } from 'react';
import TareaList from './TareaList';
import store from '../store';
import {addTarea} from '../actionCreators';
class Tareas extends Component {

    constructor(props){
        super(props)
        this.state={
            tareas:[],
            tarea:{}
        };
        store.subscribe(()=>{
            this.setState({
                tareas:store.getState().tareas
            
            })
        })
        
        
    }
    addTarea(){
        var tarea = {
            id: this.inputId.value,
            nombre: this.inputNombre.value,
            completado:false
        }
        store.dispatch(addTarea(tarea))
        this.inputId.value="";
        this.inputNombre.value="";
    }
  render() {
    return (
        <div>
            <h1>Lista de Tareas</h1>
            ID: <input type="text" name="idTarea" ref={el => this.inputId = el}/><br/>
            NOMBRE: <input type="text" name="nombreTarea" ref={el => this.inputNombre = el}/>
            <button onClick={this.addTarea.bind(this)}>+</button>
            <br/>
            
            {
                this.state.tareas.map((tarea)=>{
                    return (
                        <TareaList listado={tarea} key={tarea.id}/>
                    )
                })
            }
            
            
        </div>
        )
    
  }
}

export default Tareas;
