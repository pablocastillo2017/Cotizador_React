import React from "react";
import styled from "@emotion/styled";
import PropTypes from 'prop-types';

// link Documentacion
// https://emotion.sh/docs/introduction

const ContenedorHeader = styled.header`
  background-color: #26c6da;
  padding: 10px;
  font-weight: bold;
  color: #ffffff;
`;
// para Centrar El texto
const TextoHeader = styled.h1`
  font-size: 2rem;
  margin: 0;
  font-family: "Slabo 27px", serif;
  text-align: center;
`;

const Header = ({ titulo }) => {
  return (
    <ContenedorHeader>
      <TextoHeader>{titulo}</TextoHeader>
    </ContenedorHeader>
  );
};

Header.prototype = {
  titulo: PropTypes.string.isRequired
}

export default Header;
