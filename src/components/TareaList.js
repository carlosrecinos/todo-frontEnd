import React, { Component } from 'react';
import TareaRow from './TareaRow';

class TareaList extends Component{
    render(){

        return (
            <div>
                {
                    this.props.listado.map((tarea)=>{
                        return (
                            <TareaRow key={tarea._id}
                                      nombre={tarea.titulo}
                                      />  
                        )
                    })
                }
            </div>
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