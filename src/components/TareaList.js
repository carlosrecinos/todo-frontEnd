import React, { Component } from 'react';
import store from '../store';
import {finalizarTarea,eliminarTarea} from '../actionCreators';
class TareaList extends Component{
    constructor(props){
        super(props)
        console.log(this.props)

    }
    eliminarTarea(id){
        store.dispatch(eliminarTarea(this.props.listado.id))
    }
    finalizarTarea(id){
        store.dispatch(finalizarTarea(this.props.listado.id))
    }
    render(){
        console.log(this.props)
        return (
            <div >
                <h5>ID: {this.props.listado.id}</h5>
                <h5>Tarea: {this.props.listado.nombre}</h5>
                <h5>Completado: {this.props.listado.completado.toString()}</h5>
                <button id={this.props.listado.id} onClick={this.finalizarTarea.bind(this)}>Finalizar Tarea</button>
                <button id={this.props.listado.id} onClick={this.eliminarTarea.bind(this)}>Eliminar Tarea</button>
            </div>
            /*<div>
                {
                    this.props.listado.map((tarea)=>{
                        return (
                            <TareaRow key={tarea._id}
                                      nombre={tarea.titulo}
                                      />  
                        )
                    })
                }
            </div>*/
        )
        /*
        return (
            <div>
                {
                    this.props.listado.map((tarea)=>{
                        return (
                            <TareaRow key={tarea._id}
                                      titulo={tarea.titulo}
                                      descripcion={tarea.descripcion}
                                      autor={tarea.autor}
                                      fechaEntrega={tarea.fechaEntrega}
                                      entregado={tarea.entregado}
                                      />  
                        )
                    })
                }
            </div>
        )
        
        
        */
    }
}

export default TareaList;