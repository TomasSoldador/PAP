import styled from "styled-components";
import { FaTrashAlt } from "react-icons/fa";


export const ModalBackdrop = styled.div`
  display: ${({ show }) => (show ? "block" : "none")};
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
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  position: fixed;
  color: black;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: auto;
  max-width: 600px;
`;

export const CloseButton = styled.span`
  color: #ecf0f1;
  float: right;
  font-size: 28px;
  font-weight: bold;
  &:hover,
  &:focus {
    color: #3498db; // Cor de destaque para botão de fechar
    cursor: pointer;
  }
`;

export const Dropzone = styled.div`
  border: 2px dashed #888;
  border-radius: 5px;
  padding: 20px;
  text-align: center;
  margin-top: 20px;
  cursor: pointer;
  background-color: #f4f4f4;
  &:hover {
    background-color: #e8e8e8;
  }
`;

export const CarouselContainer = styled.div`
  width: 400px; // Largura fixa para o carrossel
  height: 300px; // Altura fixa para o carrossel
  margin: auto; // Isso centralizará o carrossel no modal
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const CarouselImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

export const CarouselButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: white;
  border: none;
  border-radius: 50%; // Torna o botão redondo
  cursor: pointer;
  width: 40px; // Tamanho do botão
  height: 40px; // Tamanho do botão
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #3498db; // Cor que combina com o esquema do site
  &:hover {
    background-color: #2980b9; // Um tom mais escuro para o hover
  }

  &[data-direction="prev"] {
    left: 10px;
  }

  &[data-direction="next"] {
    right: 10px;
  }
`;

export const DescriptionField = styled.textarea`
  width: 100%;
  margin-top: 10px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #888;
  resize: vertical;
`;

export const RemoveImageIcon = styled(FaTrashAlt)`
  font-size: 20px;
  position: absolute;
  top: 270px;
  right: 78%;
  color: #fff; 
  cursor: pointer;
  &:hover {
      color: #2980b9; 
  }
`;