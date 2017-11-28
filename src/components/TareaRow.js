import React, { Component } from 'react';
import './css/tareas.css'
class TareaRow extends Component{
    render(){
        return (
            <div className="TareaRow">
                <h2>{this.props.titulo}</h2>
                <h5>{this.props.descripcion}</h5>
                <h5>{this.props.autor}</h5>
                <h5>{this.props.fechaEntrega}</h5>
                <h5>{this.props.entregado.toString()}</h5>
            </div>
        )
    }
}

export default TareaRow