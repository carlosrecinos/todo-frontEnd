import React, { Component } from 'react';
import logo from './global/images/korinver_logo.png';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Navbar,NavItem,Nav } from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import './css/Header.css';


class Header extends Component{
    
    render(){
        return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">
                            Korinver - Home
                        </Link>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                <LinkContainer to="/tareas">
                    <NavItem>
                        Tareas
                    </NavItem>
                </LinkContainer>
                </Nav>
                <Nav pullRight>
                    
                    {
                        !this.props.logged 
                        ? 

                            <LinkContainer to="/login">
                                <NavItem>
                                        Iniciar Sesión
                                </NavItem>
                            </LinkContainer>
                            
                        
                        :
                        <NavItem>
                        <Link to="/registrar">
                            Cerrar Sesión
                        </Link>
                    </NavItem>
                    }
                </Nav>
            </Navbar>
        )
    }
}
const mapStateToProps=(store)=>{
    return{
        tareas:store.tareas,
        logged:store.logged
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        eliminarTarea: (id)=>{
        },
        finalizarTarea: (id)=>{
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Header);