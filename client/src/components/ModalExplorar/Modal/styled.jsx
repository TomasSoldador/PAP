import styled from "styled-components";
import {FaPen, FaTrash } from "react-icons/fa";


export const ModalBackdrop = styled.div`
  position: fixed;
  z-index: 10001; /* Set a higher z-index value */
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
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  max-width: 400px;
  z-index: 10002; /* Set a higher z-index value */

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

export const Titulo = styled.div`
  display: flex;
  align-items: center;
  height: auto;
  border-bottom: #15202B solid 1px;
`;

export const Username = styled.div`
  margin-left: 0; // ou qualquer outra margem que você preferir
`;

export const FotoPerfil = styled.div`
  width: 60px;
  height: 60px;
  img {
    width: 60px;
    height: 60px;
    padding: 10px;
    border-radius: 50%;
    
  }
`;

export const Conteudo = styled.div`
  padding: 10px;
`;

export const Imagens = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 10px 0;

  img {
    max-width: 48%; /* Adjust as needed to fit your layout */
    margin-bottom: 10px;
    border-radius: 5px;
  }
`;

export const Info = styled.div`
  margin-bottom: 10px;
  span {
    font-weight: bold;
  }
`;

export const Dados = styled.div`
  margin-left: 10px;
`;

export const Footer = styled.div`
  border-top: solid 1px #15202B;
  padding: 10px;
  display: flex;
  justify-content: space-between;
`;

export const EditButton = styled.button`
  padding: 10px;
  background: none;
  border: none;
  cursor: pointer;
  color: #00bcd4;
`;

export const DeleteButton = styled.button`
  padding: 10px;
  background: none;
  border: none;
  cursor: pointer;
  color: #ff6347;
`;



export const TrashIcon = styled(FaTrash)`
  font-size: 1.5em;
`;

export const PenIcon = styled(FaPen)`
  font-size: 1.5em;
`;

export const button = styled.button`
  color: white;
  background-color: #3471db;
  border-radius: 8px;
  font-size: 14px;
  border: none;
  padding: 10px 20px 10px 20px;
  &:hover,
  &:focus {
    background-color: #000dff;
    cursor: pointer;
  }
`;