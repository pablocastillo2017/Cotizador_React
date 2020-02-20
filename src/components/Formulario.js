import React from "react";
import styled from "@emotion/styled";

const Campo = styled.div`
  display:flex;
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
    margin:0 1rem;
`;

const Boton = styled.button`
  background-color: #00838f;
  font-size: 16px;
  width: 100%;
  padding: 1rem;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  transition: background-color .3s ease;
  margin-top: 2rem;

  &:hover{
      background-color: #26c6DA;
      cursor: pointer;
      
  }
`
// (SAAS) &:hover : lo que hace es cambiar el cursor cuando pasamos por el boton
// lo coniverte en la manito

// background-color > cambia el color de fondo del boton

const Formulario = () => {
  return (
    <form>
      <Campo>
        <Label>Marca</Label>
        <Select>
          <option value="">---Selecione---</option>
          <option value="americano">Americano</option>
          <option value="europeo">Europeo</option>
          <option value="asiatico">Asiatico</option>
        </Select>
      </Campo>

      <Campo>
        <Label>Año</Label>
        <Select>
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
          {/* <InputRadio
            type="radio"
            name="plan"
            value="basico"

            />*/}Básicos 
            <InputRadio
            type="radio"
            name="plan"
            value="Básicos"

            />Completo
            <InputRadio
            type="radio"
            name="plan"
            value="completo"
            />
      </Campo>

      <Boton type="button">Cotizar</Boton>
    </form>
  );
};

export default Formulario;
