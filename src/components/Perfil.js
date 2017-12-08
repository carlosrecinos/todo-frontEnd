import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Col,Row,ControlLabel} from 'react-bootstrap'

class Perfil extends Component{
    
    render(){
        return(
            <div>
                <h1>Perfil</h1>
                <Row>
                    <Col md={2}></Col>
                    <Col md={4}>Imagen</Col>
                    <Col md={4}>
                        <Row>
                            <ControlLabel>Nombre</ControlLabel>
                            <h3>{this.props.usuarioActual.nombre}</h3>
                            <br/><br/>
                            <ControlLabel>Email</ControlLabel>
                            <h3>{this.props.usuarioActual.email}</h3>
                            <br/><br/>
                        </Row>
                    </Col>
                    <Col md={2}></Col>
                </Row>
            </div>
        )
    }
}
const mapStateToProps = (store)=>{
    return {
        usuarioActual:store.usuarioActual
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Perfil);