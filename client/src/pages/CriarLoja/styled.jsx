import styled from "styled-components";
import { FaTrashAlt } from "react-icons/fa";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export const ModalBackdrop = styled.div`
  position: fixed;
  z-index: 10001; /* Set a higher z-index value */
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: #101821;
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

export const TitleDiv = styled.div`
  padding: 15px;
  width: 100%;
  height: 100%;
  border-bottom: 1px solid black;
  text-align: center;
  color: white;
`;

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
`;

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
    background-color: #000dff;
    cursor: pointer;
  }
`;

export const CarouselContainer = styled.div`
  width: 100%;
  height: 400px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 1%;
  flex-direction: column;
`;

export const CarouselImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

export const RemoveImageIcon = styled(FaTrashAlt)`
  font-size: 18px;
  position: absolute;
  bottom: 17px;
  left: 15px;
  color: #ededed;
  cursor: pointer;
  &:hover {
    color: #e74c3c;
  }
`;

export const NavigationButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: #3498db;
  font-size: 24px;
  z-index: 2;
  &:hover {
    color: #ecf0f1;
  }
  &:focus {
    outline: none;
  }
`;

export const NavigationButtonLeft = styled(NavigationButton)`
  left: 10px;
`;

export const NavigationButtonRight = styled(NavigationButton)`
  right: 10px;
`;

export const ImageListContainer = styled.div`
  display: flex;
  overflow-x: auto;
  padding: 10px 0;
`;

export const ImageThumbnail = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  margin-right: 10px;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

export const NextButton = styled.div`
  color: #3498db;
  display: flex;
  position: absolute;
  bottom: 16px;
  right: 20px;
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;
  &:hover,
  &:focus {
    color: #ededed;
  }
`;


export const footer = styled.div`
  border-top: solid 1px black;
  padding: 10px;
  width: 100%; 
`;

export const BackBottum = styled(FaArrowLeft)`
  color: #ecf0f1;
  font-size: 18px;
  font-weight: bold;
  position: absolute;
  top: 15px;
  left: 15px;
  cursor: pointer;
  z-index: 1;
  &:hover,
  &:focus {
    color: #3498db;
  }
`;

export const ContentContainer = styled.div`
  justify-content: space-between;
  align-items: flex-start; // Mantém os itens alinhados no topo
  padding: 20px;
  gap: 16px;
  width: 100%; // Ajuste conforme necessário
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%; /* Ensure the container takes full height */
`;

export const DescriptionInput = styled.textarea`
  width: 100%;
  padding: 10px;
  background-color: transparent;
  border: none;
  box-sizing: border-box;
  resize: none; /* Impede o usuário de redimensionar o textarea */
  color: white;
  font-size: 14px;
  &:focus {
    outline: none;
  }
`;

export const Input = styled.input`
  width: 100%;
  background-color: transparent;
  border: none;
  padding: 10px;
  margin-bottom: 20px;
  box-sizing: border-box;
  resize: none; /* Impede o usuário de redimensionar o textarea */
  color: white;
  border-bottom: 1px solid white;
  font-size: 14px;
  &:focus {
    outline: none;
  }

  -moz-appearance: textfield;
  -webkit-appearance: none;
  appearance: none;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const ContactInput = styled.input`
  width: 100%;
  background-color: transparent;
  border: none;
  padding: 10px;
  margin-bottom: 20px;
  box-sizing: border-box;
  resize: none; /* Impede o usuário de redimensionar o textarea */
  color: white;
  font-size: 14px;
  &:focus {
    outline: none;
  }
`;


export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 2 columns */
  gap: 10px; /* Adjust the gap as needed */
  justify-items: center; /* Center the items horizontally */
`;