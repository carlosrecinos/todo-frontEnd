import React, { Component } from 'react';
import TareaList from './TareaList';
import store from '../store';
import {addTarea, fillTareas} from '../actionCreators';
import { connect } from 'react-redux';
import loadTareas from '../services';
import { FormGroup,FormControl,Grid,Row,HelpBlock,ControlLabel,Col,Button } from 'react-bootstrap';
class Tareas extends Component {

    constructor (props) {
        super(props)
      }
    componentWillMount(){
        this.props.loadData()
    }
   
  render() {
    return (
        <div>
            
            <h1>Lista de Tareas</h1>

            <Row>
            <Col xs={12} md={4}></Col>
            <Col xs={12} md={4}>
                <FormGroup >
                    <ControlLabel>ID</ControlLabel>
                    <FormControl inputRef={(ref) => {this.inputID = ref}} placeholder="ID"/>
                    <Row>
                        <Col md={6}>
                            <ControlLabel>Título</ControlLabel>
                            <FormControl inputRef={(ref) => {this.inputTitulo = ref}} placeholder="Título"/>
                        </Col>
                        <Col md={6}>
                            <ControlLabel>Autor</ControlLabel>
                            <FormControl inputRef={(ref) => {this.inputAutor = ref}} placeholder="Autor"/>
                        </Col>
                    </Row>
                    <FormGroup controlId="formControlsTextarea">
                        <ControlLabel>Descripción</ControlLabel>
                        <FormControl inputRef={(ref) => {this.inputDescripcion = ref}} componentClass="textarea" placeholder="textarea" />
                    </FormGroup>
                    <FormGroup controlId="formControlsTextarea">
                        <ControlLabel>Fecha de Entrega</ControlLabel><br/>
                        <input type="date" ref={el => this.inputFechaEntrega = el}/>
                    </FormGroup>
                    <Button onClick={()=>this.props.addTarea({
                        _id: this.inputID.value,
                        titulo: this.inputTitulo.value,
                        autor: this.inputAutor.value,
                        fechaEntrega: this.inputFechaEntrega.value,
                        entregado: false
                    })} bsStyle="success">Agregar Tarea</Button>
                </FormGroup>
                
            </Col>
            <Col xs={12} md={4}></Col>
            </Row>
            
            <Row>
            {
                
                this.props.tareas.map((tarea)=>{
                    return (
                        <TareaList listado={tarea} key={tarea._id}/>
                    )
                })
            }
            </Row>
            
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
        loadData(){
            var tareas = loadTareas();
            tareas.then(response=>{
                dispatch(fillTareas(response.data))
            })
            
        },
        addTarea(tarea){
            dispatch(addTarea(tarea))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Tareas);
