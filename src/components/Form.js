import React,{Component} from 'react';

class Form extends Component{

    //Refs para los campos del formulario
    nombreGasto = React.createRef();
    cantidad = React.createRef();

    crearGasto=(e)=>{
        e.preventDefault();//prevenimos que se recargue,

        //Crear el objeto con los datos.

        const datos = {
            nombre: this.nombreGasto.current.value,
            cantidad: this.cantidad.current.value,
        }
        
        //Enviando datos al componente padre
        this.props.agregarGasto(datos);
        //resetear datos del formulario (opcional).
        e.currentTarget.reset();
        
    }

    render(){
        return(
            <form onSubmit={this.crearGasto} >
                <h2>Agrega tus gastos aqui</h2>
                <div className="campo">
                    <label>Nombre Gasto</label>
                    <input className="u-full-width" type="text" placeholder="Ej. Transporte" ref={this.nombreGasto}/>
                </div>

                <div className="campo">
                    <label>Cantidad</label>
                    <input className="u-full-width" type="text" placeholder="Ej. 300" ref={this.cantidad}/>
                </div>

                <input className="button-primary u-full-width" type="submit" value="Agregar" />
            </form>
        );
    }
}
export default Form;