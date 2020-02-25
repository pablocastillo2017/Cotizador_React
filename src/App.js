import React ,{useState} from 'react';
import  Header from './components/Header';
import styled from '@emotion/styled';
import  Formulario from './components/Formulario';
import  Resumen from './components/Resumen';




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

 const [resumen , guardarResumen] = useState({

   cotizacion :0,
   datos:{
     marca:'',
     year:'',
     plan:''
   }
 });

 // Extraer Datos 
 const {datos} = resumen;

 
  
return(

  <Contenedor>
        <Header
      titulo='Cotizador De Seguros'

      />

      <ContenedorFormulario>

        <Formulario
          guardarResumen={guardarResumen}
        />

        <Resumen

        datos={datos}

        />
        
      </ContenedorFormulario>
  </Contenedor>
  


);

}

export default App;
