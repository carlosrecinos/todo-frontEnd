import React, { Component } from 'react';
import img404 from './global/images/404.png'
import {LinkContainer} from 'react-router-bootstrap'
import {Button} from 'react-bootstrap';

const body = {
  height : "400px"
}
const img = {
  height : "200px"
}

const wellStyles = { 
  maxWidth: 400, 
  margin: '0 auto 10px' 
};


class Error404 extends Component {

  render() {
    return (
      
      <div style={body} >
        <img alt="Error" style={img} src={img404} ></img>
        <h1>Lo sentimos pero la página que busca no existe</h1>
        <div className="well" style={wellStyles}>
        <LinkContainer to="/">
          <Button bsStyle="danger" bsSize="large" block>Volver</Button>
        </LinkContainer>
        </div>
      </div>
    )
  }
}

export default Error404;
