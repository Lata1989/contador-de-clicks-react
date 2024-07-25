import { useState } from 'react';

import './App.css';
import imagenContador from './imagenes/contador.png';
import {Boton} from './components/Boton/Boton';
import { Contador } from './components/Contador/Contador';

function App() {

  const [numeroClicks, setNumeroClicks] = useState(0);

  const manejarClick = () => {
    console.log('El boton funciona.');
    setNumeroClicks(numeroClicks + 1);
  };

  const reiniciarContador = () => {
    console.log('Reiniciar');
    setNumeroClicks(0);
  };

  return (
    <div className="App">
      <div className='contenedor-logo'>
        <img
          className='contador-logo'
          src={imagenContador}
          alt='Logo de aplicación'
        />
      </div>
      <div className='contenedor-principal'>
        <Contador
          numeroClicks={numeroClicks}
        >
        </Contador>

        <Boton
          texto={'Click'}
          esBotonDeClick={true}
          manejarClick={manejarClick}
        >
        </Boton>
        <Boton
          texto={'Reiniciar'}
          esBotonDeClick={false}
          manejarClick={reiniciarContador}
        >
        </Boton>
      </div>
    </div>
  );
};

export default App;
