import React,{Fragment,useState} from 'react';
import Error from './Error';

const Pregunta = ({guardarPresupuesto,guardarRestante,actualizarPregunta})=>{

    //Definir el State

    const[cantidad,guardarCantidad] = useState(0); 
    const [error,guardarError]=useState(false);

    //Definir presupuesto

    const definirPresupuesto = e=>{
        guardarCantidad(parseInt(e.target.value,10));
    }

    //Submit para el Presupuesto
    const agregarPresupuesto = e=>{

        e.preventDefault();
        //Validar
        if(cantidad<1 ||isNaN(cantidad)){
            guardarError(true);
            return;
        }
        //si se pasa la Validadcion
        guardarError(false);
        guardarPresupuesto(cantidad);
        guardarRestante(cantidad);
        actualizarPregunta(false);
    }
    return(
        <Fragment>

        <h2>Coloca tu Presupuesto</h2>
        {error ?<Error mensaje="Tienes un error con tu Presupuesto"/> : null}

        <form
        onSubmit={agregarPresupuesto}
        >

            <input
            type="number"
            className="u-full-width"
            placeholder="Coloca tu presupuesto"
            onChange={definirPresupuesto}
            />

            <input
            type="submit"
            className="button-primary u-full-width"
            value="Definir Presupuesto"
            />
        </form>

        </Fragment>
    );

}


export default Pregunta;