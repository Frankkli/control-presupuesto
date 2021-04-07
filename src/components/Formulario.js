import React,{useState,Fragment} from 'react';
import Error from './Error';
import shortid from 'shortid';

const Formulario = ({guardarGasto,guardarCrearGasto})=>{

    const[nombre,guardarNombre]=useState('');
    const[cantidad,guardarCantidad]=useState(0);
    const[error,guardarError]=useState(false);


    //Cuando el user agrega un gasto
    const agregarGasto = e=>{
        e.preventDefault();

        //validar
       if(cantidad<1||isNaN(cantidad)||nombre.trim()===''){
           guardarError(true);
           return;
       }
       guardarError(false);
        //construir gasto
       const gasto = {
           nombre,
           cantidad,
           id:shortid.generate()
       }
     
        //pasar el gasto al componente principal
        guardarGasto(gasto);
        //resetear el formulario
        guardarNombre('');
        guardarCantidad(0);
        guardarCrearGasto(true);
    }

    return(
        <Fragment>
    <form
     onSubmit={agregarGasto}
    >
        <h2>Agrega tus Gastos aqui </h2>

        {error ? <Error mensaje="Ambos campos son obligatorios o presupuesto incorrecto"/>: null }

        <div className="campo">
        <label>Nombre Gasto</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Ej.transporte"
          value={nombre}
          onChange={e=>guardarNombre(e.target.value)}

        />
        </div>
        <div className="campo">
        <label>Cantidad Gasto</label>
        <input
          type="number"
          className="u-full-width"
          placeholder="Ej.300  "
          value={cantidad}
          onChange={e=>guardarCantidad(parseInt(e.target.value,10))}

        />
        </div>

        <input
        type="submit"
        className="button-primary u-full-width"
        value="Agregar Gasto"
        
        />
    </form>
    </Fragment>
    );
}
export default Formulario;