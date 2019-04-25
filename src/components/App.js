import React,{Component} from 'react';
import '../css/App.css';
import Header from './Header';
import Form from './Form';
import Listado from './Listado';
import {validarPresupuesto} from '../Helpers'
import ControlPresupuesto from './ControlPresupuesto';

class App extends Component {
  state = {
      presupuesto: '',
      restante: '',
      gastos:{}
  }

  componentDidMount(){
    this.obtenerPresupuesto();
  }
  obtenerPresupuesto=()=>{
    let presupuesto = prompt('Cual es tu presupuesto semanal?')
    let resultado = validarPresupuesto(presupuesto);

    if(resultado){
      this.setState({
        presupuesto,
        restante:presupuesto
      })
    }else{
      this.obtenerPresupuesto();
    }
  }


  agregarGasto=datosHijo=>{//agregarmos gasto
    //console.log(datosHijo);
    if(datosHijo.nombre===''|| datosHijo.cantidad==='')return
    //Tomar una copia del state actual
    const gastos = {...this.state.gastos};//se toma una copia para ir juntando los gastos
    //agregar el gasto al objeto del state
    gastos[`gasto${Date.now()}`]=datosHijo
    //Modificamos el restante
    let restante = this.state.restante;
    restante -= datosHijo.cantidad;
  
    //ponerlo en state
    this.setState({
      gastos,
      restante
    });
  }

  render(){
    return (
      <div className="App container980978897">
          <Header
            titulo='Gasto Semanal'
          />
          <div className="contenido-principal contenido">
              <div className="row">
                  <div className="one-half column">
                      <Form
                         agregarGasto={this.agregarGasto}
                      />
                  </div>
                  <div className="one-half column">
                      <Listado
                        gastos={this.state.gastos}
                      />
                      <ControlPresupuesto
                        presupuesto={this.state.presupuesto}
                        restante = {this.state.restante}
                      />
                  </div>

              </div>
          </div>
      </div>
    );
  }
}

export default App;
