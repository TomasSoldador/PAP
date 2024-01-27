import styled from "styled-components";
import { FaTrashAlt } from "react-icons/fa";


export const ModalBackdrop = styled.div`
  display: ${({ $show }) => $show ? 'block' : 'none'};
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.7);
`;

export const ModalContent = styled.div`
  background-color: #2c3e50;
  color: #ecf0f1;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  position: absolute; /* Change to absolute */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  max-width: 400px;

  @media (max-width: 768px) {
    height: 200px; 
  }
`;

export const CloseButton = styled.span`
  color: #ecf0f1;
  font-size: 28px;
  font-weight: bold;
  position: absolute;
  top: 5px;
  right: 10px;
  cursor: pointer;
  z-index: 1;
  &:hover,
  &:focus {
    color: #3498db;
  }
`;

export const TitleDiv = styled.div`
  padding: 15px;
  width: 100%;
  height: 100%;
  border-bottom: 1px solid black;
  text-align: center;
  color: white;
`

export const Dropzone = styled.div`
  display: flex; 
  flex-direction: column; 
  align-items: center; 
  justify-content: center; 
  color: white;
  border-radius: 5px;
  padding: 20px;
  text-align: center;
  height: 300px;

`;

export const svg = styled.div`
  margin-bottom: 20px;
`

export const Button = styled.button` 
  margin-top: 15px;
  color: white;
  background-color: #3471db;
  border-radius: 8px;
  font-size: 14px;
  border: none;
  padding: 10px 10px 7px 10px; 
  
  &:hover,
  &:focus {
    background-color: #000dff; // Cor de destaque para botão de fechar
    cursor: pointer;
  }
`

export const CarouselContainer = styled.div`
  width: 100%; /* Ajuste para 100% */
  height: 400px; /* Ajuste para 100% */
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 1%;
`;

export const CarouselImage = styled.img`
  width: 100%; /* Garante que a imagem preencha a largura */
  height: 100%; /* Garante que a imagem preencha a altura */
  object-fit: cover; /* A imagem cobrirá todo o espaço, podendo ser cortada */
  object-position: center; /* Centraliza a imagem no espaço disponível */
`;

export const RemoveImageIcon = styled(FaTrashAlt)`
  font-size: 20px;
  position: absolute;
  top: 240px;
  right: 50%;
  color: #fff; 
  cursor: pointer;
  &:hover {
      color: #2980b9; 
  }
`;