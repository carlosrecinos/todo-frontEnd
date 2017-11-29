import React, { Component } from 'react';
import TareaList from './TareaList';
import store from '../store';
class Tareas extends Component {

    constructor(props){
        super(props)
        console.log("Aasd")
        store.subscribe(()=>{
            this.state={
                tareas:store.getState().tareas,
                    tarea: {
                        id: "",
                        nombre:""
    
                    }
                };
                console.log("tareas"+this.state)
        })
        
        
    }

    addTarea(tarea){
        console.log(this.state.tareas)
        this.setState({
            tareas:this.state.tareas.concat(this.state.tarea)
        })
        store.dispatch({
            type:"ADD_TAREA",
            tarea
        })
    }
    actualizarNombre(e){
        this.setState({
            tarea:{
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
                        <h5>Tarea: {tarea.nombre}</h5>
                    )
                })
            }
            
            <input type="text" name="nombreTarea" onChange={this.actualizarNombre.bind(this)}/>
            <button onClick={this.addTarea.bind(this)}>Agregar Tarea</button>
            <br/>
            <p>Tarea: </p><input value={this.state.tarea.nombre}></input>
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
