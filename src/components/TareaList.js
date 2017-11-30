import React, { Component } from 'react';
import store from '../store';
import {finalizarTarea,eliminarTarea} from '../actionCreators';
import { connect } from 'react-redux';
class TareaList extends Component{
    
    render(){
        return (
            <div >
                <h5>ID: {this.props.listado.id}</h5>
                <h5>Tarea: {this.props.listado.nombre}</h5>
                <h5>Completado: {this.props.listado.completado.toString()}</h5>
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
        eliminarTarea: (id)=>{
            dispatch(eliminarTarea(id))
        },
        finalizarTarea: (id)=>{
            dispatch(finalizarTarea(id))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(TareaList);