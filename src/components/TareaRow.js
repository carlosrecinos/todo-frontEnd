import React, { Component } from 'react';
import './css/tareas.css'
import store from '../store';
class TareaRow extends Component{
    constructor(props){
        super(props);
        store.subscribe(()=>{
            this.setState({
                tarea: store.getState().tarea
            })
        })
    }

    addTarea(tarea){
        store.dispatch({
            type: "ADD_TAREA",
            tarea
        });
    }
    render(){
        return (
            <div className="TareaRow">
                <h2>{this.props.id}</h2>
                <h5>{this.props.nombre}</h5>
            </div>
        )
        
        
        /*(
            <div className="TareaRow">
                <h2>{this.props.titulo}</h2>
                <h5>{this.props.descripcion}</h5>
                <h5>{this.props.autor}</h5>
                <h5>{this.props.fechaEntrega}</h5>
                <h5>{this.props.entregado.toString()}</h5>
            </div>
        )*/
    }
}

export default TareaRow;