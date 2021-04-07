import React,{useState,Fragment,useEffect} from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import ControlPresupuesto from './components/ControlPresupuesto';

function App() {

//Definir el  State
const[presupuesto,guardarPresupuesto]=useState(0);
const[restante,guardarRestante]=useState(0);
const[mostrarpregunta,actualizarPregunta]=useState(true);
const[gastos,guardarGastos]=useState([]);
const[creargasto,guardarCrearGasto]=useState(false);

const[gasto,guardarGasto]=useState({});

//Useeffect que actualiza el restante

useEffect(()=>{
  if(creargasto){

    //Agrega el nuevo presupuesto

    const restantePresupuesto= restante-gasto.cantidad;
    guardarRestante(restantePresupuesto);

    guardarGastos([
      ...gastos,
      gasto
    ])
  }
  //Resetear a false
  guardarCrearGasto(false);
  
},[gasto,creargasto,gastos,restante]);

//funcion que se ejecuta cada vez que se  agrega un nuevo gasto


  return (
    <Fragment>
    <div
    className="container"
    >
      <header>
           <h1>Gasto Semanal</h1>

        <div className = "contenido-principal contenido">
          {mostrarpregunta ? 
          
          <Pregunta
          guardarPresupuesto={guardarPresupuesto}
          guardarRestante={guardarRestante}
          actualizarPregunta={actualizarPregunta}
          
          />
           : 
          <div className="row">
            <div className="one-half column">
              <Formulario
              guardarGasto={guardarGasto}
              guardarCrearGasto={guardarCrearGasto}
              />

            </div>

            <div className="one-half column">
              <Listado
            
                gastos={gastos}
              />
              <ControlPresupuesto
              
              presupuesto={presupuesto}
              restante={restante}
              />
            </div>
          </div>
          }
          
         
          </div>   
      </header>
    </div>
    </Fragment>
  );
}

export default App;
