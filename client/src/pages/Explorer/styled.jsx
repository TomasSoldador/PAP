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

const BlackSearchIcon  = styled(FiSearch)`
  color: black; 
`;

export const explorer = styled.div`
  background-color: white;
  display:flex;
  height: 30px;
  width: 25%;
  border-radius: 50px;
  border: none;
  transition: width 0.3s;
  padding: 10px;

  @media (max-width: 1268px) {
    width: 60%;
  }
`