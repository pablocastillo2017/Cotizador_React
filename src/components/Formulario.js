import React, { useState } from "react";
import styled from "@emotion/styled";
import { obtenerDiferenciaYear, calcularMarca, obtenerPlan } from "../helper";

const Campo = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
`;

// centra y le da margen
const Label = styled.label`
  flex: 0 0 100px;
`;

const Select = styled.select`
  width: 100%;
  height: 35px;
  background: white;
  color: gray;
  padding-left: 5px;
  font-size: 14px;
  border: none;
  margin-left: 10px;

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;

// le da separacion entre en input y el texto
const InputRadio = styled.input`
  margin: 0 1rem;
`;

const Boton = styled.button`
  background-color: #00838f;
  font-size: 16px;
  width: 100%;
  padding: 1rem;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  border: outset;
  transition: background-color 0.3s ease;
  margin-top: 2rem;

  &:hover {
    background-color: #26c6da;
    cursor: pointer;
  }
`;
// (SAAS) &:hover : lo que hace es cambiar el cursor cuando pasamos por el boton
// lo coniverte en la manito

// background-color > cambia el color de fondo del boton

const Error = styled.div`
  background-color: red;
  color: white;
  padding: 1rem;
  width: 100%;
  text-align: center;
  margin-bottom: 2rem;
  font-weight: bold;
`;

const Formulario = () => {
  const [datos, guardarDatos] = useState({
    marca: "",
    year: "",
    plan: ""
  });

  const [error, guardarError] = useState(false);

  // Extraer Valores del State
  const { marca, year, plan } = datos;

  // Leer Datos del Formulario y colocarlos en el State
  const obtenerInformcion = e => {
    guardarDatos({
      ...datos,
      [e.target.name]: e.target.value
    });
  };

  // cuando el usuario presiona submit

  const cotizadorSeguro = e => {
    e.preventDefault();

    if (marca.trim() === "" || year.trim() === "" || plan.trim() === "") {
      guardarError(true);
      return;
    }
    guardarError(false);

    // Una base de 2000

    let resultado = 2000;

    // Obtener la diferencia de anios

    const diferencia = obtenerDiferenciaYear(year);

    // por cada anio hay que restar el 3%
    resultado -= (diferencia * 3 * resultado) / 100;

    // americano 15
    // asitico %5
    // Europero 30%
    resultado = calcularMarca(marca) * resultado;

    //Basico aumenta 20%
    //Completo 50%
    // parseFloat()Convierte (parsea) un argumento de tipo cadena y
    //devuelve un número de punto flotante
    const incrementoPlan = obtenerPlan(plan);
    resultado = parseFloat(incrementoPlan * resultado).toFixed(2);

    console.log(resultado);

    // Total
  };
  return (
    <form onSubmit={cotizadorSeguro}>
      {error ? <Error>Todos Los Campos Son Obligatorios </Error> : null}

      <Campo>
        <Label>Marca</Label>
        <Select name="marca" value={marca} onChange={obtenerInformcion}>
          <option value="">---Selecione---</option>
          <option value="americano">Americano</option>
          <option value="europeo">Europeo</option>
          <option value="asiatico">Asiatico</option>
        </Select>
      </Campo>

      <Campo>
        <Label>Año</Label>
        <Select name="year" value={year} onChange={obtenerInformcion}>
          <option value="">-- Seleccione --</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
        </Select>
      </Campo>

      <Campo>
        <Label>Plan</Label>
        <InputRadio
          type="radio"
          name="plan"
          value="basico"
          checked={plan === "basico"}
          onChange={obtenerInformcion}
        />{" "}
        Básico
        <InputRadio
          type="radio"
          name="plan"
          value="completo"
          checked={plan === "completo"}
          onChange={obtenerInformcion}
        />{" "}
        Completo
      </Campo>

      <Boton type="submit">Cotizar</Boton>
    </form>
  );
};

export default Formulario;
