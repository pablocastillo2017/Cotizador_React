import React from 'react';
import  Header from './components/Header';
import styled from '@emotion/styled';


// Para Centrar el Condenido
const Contenedor = styled.div`

  max-width: 600px;
  margin:0 auto;

`
// Contenedor Para Formulario
const ContenedorFormulario = styled.div`
background-color:#FFF;
padding: 3rem;
`

function App() {
return(

  <Contenedor>
        <Header
      titulo='Cotizador De Seguros'

      />

      <ContenedorFormulario>

        
      </ContenedorFormulario>
  </Contenedor>
  


);

}

export default App;
