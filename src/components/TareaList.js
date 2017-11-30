import React, { Component } from 'react';
import {finalizarTarea,eliminarTarea} from '../actionCreators';
import { connect } from 'react-redux';
import loadTareas from '../services';
class TareaList extends Component{
    
    render(){
        
        return (
            
            <div >
                <h5>ID: {this.props.listado._id}</h5>
                <h5>Título: {this.props.listado.titulo}</h5>
                <h5>Descripción: {this.props.listado.descripcion}</h5>
                <h5>Autor: {this.props.listado.autor}</h5>
                <h5>Entregado: {this.props.listado.entregado.toString()}</h5>
                <button id={this.props.listado.id} onClick={() => this.props.finalizarTarea(this.props.listado.id)}>Finalizar Tarea</button>
                <button id={this.props.listado.id} onClick={() => this.props.eliminarTarea(this.props.listado.id)}>Eliminar Tarea</button>
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
        componentWillMount(){
            tareas : loadTareas
        },
        eliminarTarea: (id)=>{
            dispatch(eliminarTarea(id))
        },
        finalizarTarea: (id)=>{
            dispatch(finalizarTarea(id))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(TareaList);