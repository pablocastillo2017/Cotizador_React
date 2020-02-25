import React, { Fragment } from "react";

const Resumen = ({ datos }) => {
  //extraer de datos .
  const { marca, year, plan } = datos;

  // no llega a la parte del return de abajo, detecta que esta vacio
  // y el componente no se carga
  if (marca === "" || year === "" || plan === "") return null;

  return (
    // cuando se retornan dos contenedores similares h2 y ul
    // se necesita el Fragment
    <Fragment>
      <h2>Resumen De Cotización</h2>
      <ul>
        <li>Marca: {marca} </li>
        <li>Plan: {plan}</li>
        <li>Año del Auto: {year}</li>
      </ul>
    </Fragment>
  );
};

export default Resumen;
