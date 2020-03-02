import React from "react";
import styled from "@emotion/styled";

const Mensaje = styled.p`
  background-color: rgb(127, 224, 237);
  margin-top: 2rem;
  padding: 1rem;
  text-align: center;
`;

const ResultadoCotizacion = styled.div`
  text-align: center;
  padding: 1rem;
  border: 1px solid #26c6da;
  background-color: rgb(127, 224, 237);
  margin-top: 1 rem;
  position: relative;
`;

const TextoCotizacion = styled.p`
  color: #00838f;
  padding: 1rem;
  text-transform: uppercase;
  margin: 0;
  font-weight: bold;
  position: relative;
`;

const Resultado = ({ cotizacion }) => {
  // si esta en 0 el valor de cotizacion no se muestra en la pagina.

  return cotizacion === 0 ? (
    <Mensaje>Elige: marca, año y tipo de auto</Mensaje>
  ) : (
    <ResultadoCotizacion>
      <TextoCotizacion>El Total es : ${cotizacion}</TextoCotizacion>
    </ResultadoCotizacion>
  );
};

export default Resultado;
