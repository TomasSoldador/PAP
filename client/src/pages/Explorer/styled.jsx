import styled from "styled-components";
import { FiSearch } from 'react-icons/fi';

export const LayoutContainer = styled.div`
  display: flex;
  background-color: black !important;
`;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: center; // Centraliza horizontalmente
  color: white !important;
  padding: 20px;
  margin-left: 250px;
  min-height: 100vh;
  transition: margin-left 0.3s;
  width: 100%;

  @media (max-width: 768px) {
    margin-left: 80px;
  }
`;

export const BlackSearchIcon  = styled(FiSearch)`
  color: black; 
  cursor: pointer;
  display: flex;
  align-items: right;
  margin-top: -3px;
`;

export const Input = styled.input`
  width: 100%;
  margin-top: -10px;
  margin-bottom: -10px;
  border: none;
  border-radius: 10px;
  background: transparent; // Torna o fundo transparente
  outline: none; // Remove o contorno ao focar

  &:focus {
    outline: none; // Garante que não haverá contorno ao focar
    border: none; // Remove a borda ao focar
    box-shadow: none; // Remove qualquer sombra que possa aparecer ao focar
  }
`;

export const explorer = styled.div`
  background-color: white;
  display: flex;
  height: 30px;
  width: 25%;
  border-radius: 50px;
  border: none;
  transition: width 0.3s;
  padding: 10px;
  position: relative; 

  @media (max-width: 1268px) {
    width: 60%;
  }
`

export const OpcoesConteiner = styled.div`
  background-color: white; // Ou qualquer cor que combine com o design
  display: flex;
  margin-top: 5px;
  flex-direction: column;
  width: 100%; // Para que preencha a largura do container pai
  position: absolute;
  top: 100%; // Posiciona o container logo abaixo do input
  left: 0;
  z-index: 5;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  border-radius: 20px;
  
`;

export const opcoes = styled.div`
  display: flex; 
  align-items: center; 
  gap: 10px; 
  color: black;
  border: 1px solid black;
  padding: 10px;
  cursor: pointer;
  img {
    width: 40px; 
    height: 40px; 
    border-radius: 50%; 
  }
`;