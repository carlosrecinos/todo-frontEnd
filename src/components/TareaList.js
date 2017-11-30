import React, { Component } from 'react';
import { Col, Button, ButtonGroup} from 'react-bootstrap';
import {finalizarTarea,eliminarTarea} from '../actionCreators';
import { connect } from 'react-redux';
import loadTareas from '../services';
class TareaList extends Component{
    
    render(){
        
        return (
            <Col xs={4} md={4}>
            <br/><br/>
                <h5>ID: {this.props.listado._id}</h5>
                <h5>Título: {this.props.listado.titulo}</h5>
                <h5>Descripción: {this.props.listado.descripcion}</h5>
                <h5>Autor: {this.props.listado.autor}</h5>
                <h5>Fecha Entrega: {this.props.listado.fechaEntrega}</h5>
                <h5>Entregado: {this.props.listado.entregado.toString()}</h5>
                <Button bsStyle="success" id={this.props.listado.id} onClick={() => this.props.finalizarTarea(this.props.listado.id)}>Finalizar Tarea</Button>
                <Button bsStyle="danger" id={this.props.listado.id} onClick={() => this.props.eliminarTarea(this.props.listado.id)}>Eliminar Tarea</Button>
                
            </Col>
            
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