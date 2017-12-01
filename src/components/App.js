import React, { Component } from 'react';
import { Switch,Route}  from 'react-router-dom'
import './css/App.css';
import './css/index.css';
import Header from './Header';
import Main from './Main'
import Footer from './Footer';
import Error404 from './Error404';
import Tareas from './Tareas';
import Login from './Login';
import Registrar from './Registrar'
import { Grid } from 'react-bootstrap';
import { connect } from 'react-redux';
import { fillTareas } from '../actionCreators';
class App extends Component {
  
  render() {
    return (
      
      <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Main}/>
        <Route path="/tareas" component={Tareas}/>
        <Route path="/login" component={Login}/>
        <Route path="/registrar" component={Registrar}/>
        <Route component={Error404}/>
      </Switch>
      <Footer />
      </div>
    )
  }
}

export default App;
