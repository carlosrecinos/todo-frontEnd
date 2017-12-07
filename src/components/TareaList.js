import React, { Component } from 'react';
import { Col, Button, Panel} from 'react-bootstrap';
import 'react-notifications/lib/notifications.css';
import {finalizarTarea,eliminarTarea,changeModalState,changeTareaToUpdate} from '../actionCreators';
import { connect } from 'react-redux';
import './css/style.css';
import True from '../components/global/images/true.png';
import False from '../components/global/images/false.png';
import ModalTareas from './ModalTareas';
import './css/Loading.css'
import {NotificationManager} from 'react-notifications';
class TareaList extends Component{
    constructor(props){
        super(props)
        this.state={
            deleting:false,
            finishing:false,
            finished:false,
            deleted:false
        }
    }
    componentWillMount(){
        this.setState({
            deleting:false,
            finishing:false,
            
        })
    }
    deleting(){
        this.setState({
            deleting:true
        })
        
    }
    finishing = () => {
        this.setState({
            finishing:true
        })
    }
    componentDidMount(){
        this.props.cargado()
    }
    render(){
        return (
            <div>
                
                <Col xs={12} md={4}>
                    <Panel className="panelTarea" header={this.props.listado.titulo} bsStyle="primary">
                    {
                        this.state.deleting
                        ?
                        <div class="spinner">
                            <div class="bounce1"></div>
                            <div class="bounce2"></div>
                            <div class="bounce3"></div>
                        </div>
                        :
                        <div>
                            <h5>ID: {this.props.listado._id}</h5>
                            <h5>Descripción: {this.props.listado.descripcion}</h5>
                            <h5>Autor: {this.props.listado.autor.nombre}</h5>
                            <h5>Fecha Entrega: {this.props.listado.fechaEntrega}</h5>
                            <h5>Entregado: 
                            {
                                this.props.tareaFinalizada
                                &&
                                NotificationManager.success('Tarea Finalizada', 'La tarea se finalizó.')
                            }
                            {
                                this.props.listado.entregado 
                                ? 
                                <div className="img-entregado">
                                    <img alt="Entregado" className="entregado" src={True}/>
                                </div> 
                                :
                                <div className="img-entregado">
                                    <img alt="Entregado" className="entregado" src={False}/>
                                </div>
                            }
                                
                            </h5>
                            <Button bsStyle="primary" onClick={()=>{this.props.changeModalState({
                                _id:this.props.listado._id,
                                titulo:this.props.listado.titulo,
                                descripcion:this.props.listado.descripcion,
                                autor:this.props.listado.autor,
                                fechaEntrega: this.props.listado.fechaEntrega,
                                entregado:this.props.listado.entregado
                            })} } >Modificar Tarea</Button>
                            
                            {
                                !this.props.listado.entregado
                                &&
                                <Button bsStyle="success" id={this.props.listado._id} onClick={() => {
                                    this.props.finalizarTarea(this.props.listado._id)
                                    this.finishing()
                                    }}>Finalizar Tarea</Button>
                            }
                            <Button bsStyle="danger"  id={this.props.listado._id} onClick={() => {
                                this.props.eliminarTarea(this.props.listado._id)
                                this.deleting()
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
                            
                        </div>
                    }
                    </Panel>
                </Col>
                
            </div>
            
        )
    }
}
const mapStateToProps=(store)=>{
    return{
        showModalTareas:    store.showModalTareas,
        tareaToUpdate:      store.tareaToUpdate,
        tareaFinalizada:    store.tareaFinalizada,
        tareaEliminada:     store.tareaEliminada
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