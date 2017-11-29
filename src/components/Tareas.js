import React, { Component } from 'react';
import TareaList from './TareaList';
import store from '../store';
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
    addTarea(tarea){
        store.dispatch({
            type:"ADD_TAREA",
            tarea: this.state.tarea
        })
        this.inputId.value="";
        this.inputNombre.value="";
    }
    actualizarId(e){
        this.setState({
            tarea:{
                ...this.state.tarea,
                id: e.target.value
            }
        })
    }
    actualizarNombre(e){
        this.setState({
            tarea:{
                ...this.state.tarea,
                nombre: e.target.value
            }
        })
    }
    
    /*componentWillMount(){
        fetch('http://localhost:3005/tareas')
        .then((respuesta)=>{
            return respuesta.json();
        })
        .then((tareas)=>{
            console.log(tareas);
            this.setState({
                tareas
            })
        })
    }*/
  render() {
    return (
        <div>
            <h1>Lista de Tareas</h1>
            {
                this.state.tareas.map((tarea)=>{
                    return (
                        <TareaList listado={tarea} key={tarea.id}/>
                        
                    )
                })
            }
            ID: <input type="text" name="idTarea" ref={el => this.inputId = el} onChange={this.actualizarId.bind(this)}/><br/>
            NOMBRE: <input type="text" name="nombreTarea" ref={el => this.inputNombre = el} onChange={this.actualizarNombre.bind(this)}/>
            <button onClick={this.addTarea.bind(this)}>+</button>
            <br/>
            
        </div>
        )
    
    /*
    <TareaList listado={this.state.tareas}/>
    if(this.state.tareas.length>0){
        return (
        <div>
            <h1>Lista de Tareas</h1>
            <TareaList listado={this.state.tareas}/>
        </div>
        )
    }else if(this.state.tareas.length===0){
        console.log(this.state.tareas);
        return (
            <div>
                <h1>Prohibido el acceso</h1>
            </div>
            )
    }else{
        if(this.state.tareas.mensaje){
            return (
                <h1>{this.state.tareas.mensaje}</h1>
            )
        }
        return (
            <div>
                <h1>Lista de Tareas</h1>
                <h5>Cargando tareas...</h5>
            </div>
            )
    }*/
    
  }
}

export default Tareas;
