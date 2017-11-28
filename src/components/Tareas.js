import React, { Component } from 'react';
import TareaList from './TareaList';
class Tareas extends Component {

    constructor(props){
        super(props)
        this.state = {
            tareas : []
        }
    }
    componentWillMount(){
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
    }
  render() {
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
    }
    
  }
}

export default Tareas;
