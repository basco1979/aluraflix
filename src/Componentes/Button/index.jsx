/* eslint-disable no-undef */
import styled from "styled-components";

const Boton = styled.button`
  padding: 0.8em 1.5em;
  margin: 0.8em;
  background-color: ${props => props.$colorFondo || "#2A7AE4"};
  color: ${props => props.$colorTexto || "#FFFFFF"};
  border: 1px solid ${props => props.$borde || "none"}    ;
  border-radius: 4px;
  font-family: 'Source Sans 3', sans-serif;
  font-size: 21px;
`;

export default Boton;