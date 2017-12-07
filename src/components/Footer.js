import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import './css/Footer.css';
class Footer extends Component{
    
    
    render(){
        return(
            <Navbar inverse className="Footer">
                <div className="Footer-contenido">
                    <h1 className="texto">Korinver {(new Date()).getFullYear()}</h1>
                </div>
            </Navbar>
        )
    }
}

export default Footer;