import React,{Component} from 'react';
import {revisarPresupuesto} from '../Helpers';

class Restante extends Component{
    render(){
        const presupuesto = this.props.presupuesto;
        const restante = this.props.restante;

        const clase = revisarPresupuesto(presupuesto,restante);
        console.log(clase);

        return(
            <div className={clase}>
                Restante: ${this.props.restante}
            </div>
        );
    }
}

export default Restante;