import styled from "styled-components";


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
  }
`;

export const Conteudo = styled.div`
  
`;