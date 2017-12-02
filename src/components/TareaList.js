import React, { Component } from 'react';
import { Col, Button, Panel} from 'react-bootstrap';
import {finalizarTarea,eliminarTarea,changeModalState,changeTareaToUpdate} from '../actionCreators';
import { connect } from 'react-redux';
import './css/style.css';
import True from '../components/global/images/true.png';
import False from '../components/global/images/false.png';
import ModalTareas from './ModalTareas';
class TareaList extends Component{
    
    render(){
        return (
            <div>
                
                <Col xs={4} md={4}>
                <Panel header={this.props.listado.titulo} bsStyle="primary">
                <h5>ID: {this.props.listado._id}</h5>
                    <h5>Descripción: {this.props.listado.descripcion}</h5>
                    <h5>Autor: {this.props.listado.autor}</h5>
                    <h5>Fecha Entrega: {this.props.listado.fechaEntrega}</h5>
                    <h5>Entregado: {this.props.listado.entregado ? <img alt="Entregado" className="entregado" src={True}/> :<img alt="Sin Entregar" className="entregado" src={False}/>}</h5>
                    <Button bsStyle="primary" onClick={()=>{this.props.changeModalState({
                        _id:this.props.listado._id,
                        titulo:this.props.listado.titulo,
                        descripcion:this.props.listado.descripcion,
                        autor:this.props.listado.autor,
                        fechaEntrega: this.props.listado.fechaEntrega,
                        entregado:this.props.listado.entregado
                    })} } >Modificar Tarea</Button>
                    <Button bsStyle="success" id={this.props.listado._id} onClick={() => this.props.finalizarTarea(this.props.listado._id)}>Finalizar Tarea</Button>
                    <Button bsStyle="danger"  id={this.props.listado._id} onClick={() => {
                        this.props.eliminarTarea(this.props.listado._id)
                        this.props.deleting
                        }}>Eliminar Tarea</Button>
                    <ModalTareas tarea={{
                        _id:this.props.tareaToUpdate._id,
                        titulo:this.props.tareaToUpdate.titulo,
                        descripcion:this.props.tareaToUpdate.descripcion,
                        autor:this.props.tareaToUpdate.autor,
                        fechaEntrega: this.props.tareaToUpdate.fechaEntrega,
                        entregado:this.props.tareaToUpdate.entregado
                    }} show={this.props.showModalTareas} onHide={()=>{this.props.changeModalState({
                        _id:this.props.tareaToUpdate._id,
                        titulo:this.props.tareaToUpdate.titulo,
                        descripcion:this.props.tareaToUpdate.descripcion,
                        autor:this.props.tareaToUpdate.autor,
                        fechaEntrega: this.props.tareaToUpdate.fechaEntrega,
                        entregado:this.props.tareaToUpdate.entregado 
                    })} }/>
                </Panel>
                </Col>
            </div>
            
        )
    }
}
const mapStateToProps=(store)=>{
    return{
        showModalTareas:store.showModalTareas,
        tareaToUpdate:store.tareaToUpdate
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        eliminarTarea: (id)=>{
            dispatch(eliminarTarea(id))
        },
        finalizarTarea: (_id)=>{
            dispatch(finalizarTarea(_id))
        },
        changeModalState(tarea){
            dispatch(changeTareaToUpdate(tarea))
            dispatch(changeModalState());
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(TareaList);