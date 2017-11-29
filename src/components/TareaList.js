import React, { Component } from 'react';
import store from '../store';
class TareaList extends Component{
    constructor(props){
        super(props)
        console.log(this.props)

    }
    eliminarTarea(id){
        console.log("ELIMINAR: "+id)
        store.dispatch({
            type:"DELETE_TAREA",
            id:this.props.listado.id
        })
    }
    finalizarTarea(id){
        console.log(id)
        store.dispatch({
            type:"FINISH_TAREA",
            id:this.props.listado.id
        })
        console.log("FINISH:: ")
        console.log(store.getState())
        
    }
    render(){
        console.log("props: ")
        console.log(this.props)
        return (
            <div >
                <h5>ID: {this.props.listado.id}</h5>
                <h5>Tarea: {this.props.listado.nombre}</h5>
                <h5>Completado: {this.props.listado.completado.toString()}</h5>
                <button href="#" id={this.props.listado.id} onClick={this.finalizarTarea.bind(this)}>Finalizar Tarea</button>
                <button href="#" id={this.props.listado.id} onClick={this.eliminarTarea.bind(this)}>Eliminar Tarea</button>
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