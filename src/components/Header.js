import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Navbar,NavItem,Nav,NavDropdown,MenuItem } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import {logOut} from '../actionCreators';
import './css/Header.css';




class Header extends Component{
    
    

    render(){
        const userHeader = (
                <Nav pullRight>
                    <LinkContainer  to="/tareas">
                        <NavItem>
                            Tareas
                        </NavItem>
                    </LinkContainer>
                    
                    <NavDropdown eventKey={3} title={this.props.usuarioActual.nombre ? this.props.usuarioActual.nombre : ""} id="basic-nav-dropdown">
                        
                        <MenuItem eventKey={3.2} onClick={this.props.logOut}>Cerrar Sesión</MenuItem>
                    </NavDropdown>
                </Nav>
        )
        const invitadoHeader = (
            <Nav pullRight>
                <LinkContainer  to="/login">
                    <NavItem>
                        Iniciar Sesión
                    </NavItem>
                </LinkContainer>
                <LinkContainer  to="/registrar">
                    <NavItem>
                        Registrarse
                    </NavItem>
                </LinkContainer>
            </Nav>
        )
        return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">
                            Home
                        </Link>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                </Nav>
                {
                    this.props.logged
                    ?
                    userHeader
                    :
                    invitadoHeader
                }
            </Navbar>
        )
    }
}
const mapStateToProps=(store)=>{
    return{
        tareas:store.tareas,
        logged:store.logged,
        usuarioActual:store.usuarioActual
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        logOut: ()=>{
            dispatch(logOut())
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Header);