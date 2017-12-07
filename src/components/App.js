import React, { Component } from 'react';
import { Switch,Route}  from 'react-router-dom'
import './css/App.css';
import Header from './Header';
import Main from './Main'
import Footer from './Footer';
import Error404 from './Error404';
import Tareas from './Tareas';
import Login from './Login';
import Registrar from './Registrar'
import {NotificationContainer} from 'react-notifications';
import Authenticate from '../requireAuth';
import Perfil from './Perfil';

class App extends Component {

  render() {
    return (

      <div className="App">
      <NotificationContainer/>
      <Header />
      <Switch>
        <Route exact path="/" component={Main}/>
        <Route path="/tareas" component={Authenticate(Tareas)}/>
        <Route path="/perfil" component={Authenticate(Perfil)}/>
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
