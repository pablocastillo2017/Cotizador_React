import React, { useState } from "react";
import Header from "./components/Header";
import styled from "@emotion/styled";
import Formulario from "./components/Formulario";
import Resumen from "./components/Resumen";
import Resultado from "./components/Resultado";
import Spinner from "./components/Spinner";

// Para Centrar el Condenido
const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;
// Contenedor Para Formulario
const ContenedorFormulario = styled.div`
  background-color: #fff;
  padding: 3rem;
`;

function App() {
  const [resumen, guardarResumen] = useState({
    cotizacion: 0,
    datos: {
      marca: "",
      year: "",
      plan: ""
    }
  });

  const [cargando, guardarCargando] = useState(false);

  // Extraer Datos
  const { cotizacion, datos } = resumen;
  return (
    <Contenedor>
      <Header titulo="Cotizador De Seguros" />

      <ContenedorFormulario>
        <Formulario
          guardarCargando={guardarCargando}
          guardarResumen={guardarResumen}
        />

        {cargando ? <Spinner /> : null}

        <Resumen 
        datos={datos} />

        {!cargando 
        ? <Resultado cotizacion={cotizacion} 
        /> : null}

      </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;
