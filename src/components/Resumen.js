import React from 'react';
import styled from "@emotion/styled";
import {primerMayuscula} from '../helper';

const ContenedorResumen = styled.div `
    padding: 1rem;
    text-align: center;
    background-color:#00838F;
    color:#FFF;
    margin-top: 1rem;
    align-items: center;

`;

const Resumen = ({ datos }) => {
  //extraer de datos .
  const { marca, year, plan } = datos;

  // no llega a la parte del return de abajo, detecta que esta vacio
  // y el componente no se carga
  if (marca === "" || year === "" || plan === "") return null;

  return (
    // cuando se retornan dos contenedores similares h2 y ul
    // se necesita el Fragment o ContenedorResumen (styled)
    <ContenedorResumen>
      <h2>Resumen De Cotización</h2>
      <ul>
        <li>Marca: {primerMayuscula(marca)} </li>
        <li>Plan:  {primerMayuscula(plan)}</li>
        <li>Año del Auto: {year}</li>
      </ul>
    </ContenedorResumen>
  );
};

export default Resumen;
