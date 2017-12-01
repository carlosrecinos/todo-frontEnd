import React, { Component } from 'react';
import logo from './global/images/logo.svg';
import './css/Header.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
class Header extends Component{
    
    render(){
        return (
            <div className="Header">
                <div className="Header-logo">
                    <Link to="/" ><img alt="Home" src={logo}/></Link>
                </div>
                { !this.props.logged
                
                ?   <Link to='/login'>
                        <div className="Header-button">
                            Iniciar Sesión
                        </div>
                    </Link> 
                :   <div>
                        <Link to='/logout'>
                            <div className="Header-button">
                                Cerrar Sesión
                            </div>
                        </Link>
                        <Link to='/tareas'>
                        <div className="Header-button">
                            Tareas
                        </div>
                        </Link>
                    </div> 
                }

                
                

            </div>
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