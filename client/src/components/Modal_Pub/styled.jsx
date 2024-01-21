import styled from "styled-components";

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
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  position: fixed;
  color: black;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  max-width: 600px;
`;

export const CloseButton = styled.span`
  color: #ecf0f1;
  float: right;
  margin: 10px 20px;
  font-size: 28px;
  font-weight: bold;
  &:hover,
  &:focus {
    color: #3498db; // Cor de destaque para botão de fechar
    cursor: pointer;
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
