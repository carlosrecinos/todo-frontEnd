import React, { Component } from 'react';
import './css/Footer.css';

class Footer extends Component{
    
    
    render(){
        return(
            <footer className="Footer">
                <div className="Footer-contenido">
                    <h1>Korinver {(new Date()).getFullYear()}</h1>
                </div>
            </footer>
        )
    }
}

export default Footer;