import React,{Component}  from 'react'
import {Modal} from 'react-bootstrap';
import { connect } from 'react-redux';
import {updateTarea} from '../actionCreators';
import { FormGroup,FormControl,Row,ControlLabel,Col,Button } from 'react-bootstrap';
class ModalTareas extends Component{
        
    render() {
        var timeStamp = Date.parse(this.props.tarea.fechaEntrega)
        var date = new Date(timeStamp);
        var dia = 0;
        var mes = 0;
        if(date.getDate()<10){
            dia = "0"+(date.getDate()+1)
        }else{
            dia = (date.getDate()+1)
        }


        if(date.getMonth()<9){
            mes = "0"+(date.getMonth()+1)
        }else{
            mes = (date.getMonth()+1)
        }
        var fecha = date.getFullYear() + '-' + mes + '-' + dia;
      return (
        <Modal {...this.props} bsSize="large" aria-labelledby="contained-modal-title-lg">
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-lg">Modificar Tarea {this.props.tarea.titulo} </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <FormGroup >
                    <ControlLabel>ID</ControlLabel>
                    <FormControl defaultValue={this.props.tarea._id} inputRef={(ref) => {this.inputID = ref}} placeholder="ID"/>
                    <Row>
                        <Col md={6}>
                            <ControlLabel>Título</ControlLabel>
                            <FormControl defaultValue={this.props.tarea.titulo} inputRef={(ref) => {this.inputTitulo = ref}} placeholder="Título"/>
                        </Col>
                        <Col md={6}>
                            <ControlLabel>Autor</ControlLabel>
                            <FormControl defaultValue={this.props.tarea.autor} inputRef={(ref) => {this.inputAutor = ref}} placeholder="Autor"/>
                        </Col>
                    </Row>
                    <FormGroup controlId="formControlsTextarea">
                        <ControlLabel>Descripción</ControlLabel>
                        <FormControl defaultValue={this.props.tarea.descripcion} inputRef={(ref) => {this.inputDescripcion = ref}} componentClass="textarea" placeholder="textarea" />
                    </FormGroup>
                    <FormGroup controlId="formControlsTextarea">
                        <ControlLabel>Fecha de Entrega</ControlLabel><br/>
                        <input defaultValue={fecha}  type="date" ref={el => this.inputFechaEntrega = el}/>
                    </FormGroup>
                    
                    <Button onClick={()=>this.props.updateTarea({
                        _id: this.inputID.value,
                        titulo: this.inputTitulo.value,
                        autor: this.inputAutor.value,
                        descripcion: this.inputDescripcion.value,
                        fechaEntrega: this.inputFechaEntrega.value,
                        entregado: false
                    })} bsStyle="primary">Modificar Tarea</Button>&nbsp;&nbsp;
                    <Button bsStyle="danger" onClick={this.props.onHide} >Cancelar</Button>
                </FormGroup>
            
            </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      );
    }
  };
const mapStateToProps=(store)=>{
    return{
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        updateTarea(tarea){
            dispatch(updateTarea(tarea));
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ModalTareas);