import React, { Component } from 'react';
import TareaList from './TareaList';
import { addTarea, fillTareas } from '../actionCreators';
import { connect } from 'react-redux';
import './css/Loading.css';
import { FormGroup, FormControl, Row, ControlLabel, Col, Button } from 'react-bootstrap';
import { NotificationManager } from 'react-notifications';

class Tareas extends Component {

    validar(){
        if(this.inputTitulo.value === "" || 
            this.inputDescripcion.value === "" ||
            this.inputFechaEntrega.value === ""){
                this.inputTitulo.focus()
             NotificationManager.error("","Complete los campos para agregar tarea")
        }else{
            this.props.addTarea({
                titulo: this.inputTitulo.value,
                descripcion: this.inputDescripcion.value,
                fechaEntrega: this.inputFechaEntrega.value,
                entregado: false
            })

            this.inputTitulo.value = "";
            this.inputDescripcion.value = "";
            this.inputFechaEntrega.value = "";
        }
    }
    componentWillMount() {
        this.setState({
            deleting: false,
            cargandoData: false
        })
        if(this.props.logged){
            this.props.loadData();
        }
        this.setState({
            cargandoData: true
        })
        if (this.props.tareas.length > 0) {
            this.setState({
                cargandoData: false
            })
        }
    }

    render() {
        const deleting = () => {
            this.setState({
                deleting: true
            })
        }
        const cargado = () => {
            this.setState({
                cargandoData: false
            })
        }

        return (
            <div>
                <h1>Lista de Tareas</h1>
                <Row>
                    <Col xs={12} md={4}>
                        <FormGroup >
                            <Row>
                                <Col md={12}>
                                    <ControlLabel>Título</ControlLabel>
                                    <FormControl inputRef={(ref) => { this.inputTitulo = ref }} placeholder="Título" />
                                </Col>
                            </Row>
                            <FormGroup controlId="formControlsTextarea">
                                <ControlLabel>Descripción</ControlLabel>
                                <FormControl inputRef={(ref) => { this.inputDescripcion = ref }} componentClass="textarea" placeholder="Descripción" />
                            </FormGroup>
                            <FormGroup controlId="formControlsTextarea">
                                <ControlLabel>Fecha de Entrega</ControlLabel><br />
                                <input type="date" ref={el => this.inputFechaEntrega = el} />
                            </FormGroup>
                            <Button onClick={this.validar.bind(this)} bsStyle="success">Agregar Tarea</Button>
                        </FormGroup>
                    </Col>

                    <Col xs={12} md={8}>
                    
                    {
                        this.state.cargandoData && this.props.logged
                        ?
                        <div className="sk-circle">
                            <div className="sk-circle1 sk-child"></div>
                            <div className="sk-circle2 sk-child"></div>
                            <div className="sk-circle3 sk-child"></div>
                            <div className="sk-circle4 sk-child"></div>
                            <div className="sk-circle5 sk-child"></div>
                            <div className="sk-circle6 sk-child"></div>
                            <div className="sk-circle7 sk-child"></div>
                            <div className="sk-circle8 sk-child"></div>
                            <div className="sk-circle9 sk-child"></div>
                            <div className="sk-circle10 sk-child"></div>
                            <div className="sk-circle11 sk-child"></div>
                            <div className="sk-circle12 sk-child"></div>
                        </div>
                        :
                        <h1> </h1>
                    }
                    
                    {
                        
                        this.props.tareas.length>0
                        &&
                        this.props.tareas.map((tarea) => {
                            return (
                                <TareaList borrando={deleting} cargado={cargado} listado={tarea} key={tarea._id} />
                            )
                        })
                    }
                    
                    </Col>

                </Row>

            </div>
        )

    }
}
const mapStateToProps = (store) => {
    return {
        tareas: store.tareas,
        error: store.error,
        logged: store.logged
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addTarea(tarea) {
            dispatch(addTarea(tarea))
        },
        loadData() {
            dispatch(fillTareas())

        }

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Tareas);
