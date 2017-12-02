import React, { Component } from 'react';
import logo from './global/images/korinver_logo.png';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Navbar,NavItem,Nav } from 'react-bootstrap'
import './css/Header.css';


class Header extends Component{
    
    render(){
        return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">
                            <img className="Header-logo" src={logo}></img>
                        </Link>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                <NavItem>
                    <Link to="/tareas">
                        Tareas
                    </Link>
                </NavItem>
                </Nav>
                <Nav pullRight>
                    
                    {
                        this.props.logged 
                        ? 
                        
                            <NavItem>
                                <Link to="/login">
                                    Iniciar Sesión
                                </Link>
                            </NavItem>
                        
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