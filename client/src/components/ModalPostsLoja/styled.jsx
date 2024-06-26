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

export const Modal = styled.div`
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

export const Title = styled.div`
  justify-content: center;
  display:flex;
  font-size: 24px;
  font-weight: bold;
  padding: 10px;
  border-bottom: 1px solid white;
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

export const EnlargedImageBackdrop = styled.div`
  position: fixed;
  z-index: 10003;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.7);
`;

export const EnlargedImage = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 80%;
  max-height: 80%;
  text-align: center;
`;

