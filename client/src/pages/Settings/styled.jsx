import styled from "styled-components";
import { FaEdit } from "react-icons/fa";

export const LayoutContainer = styled.div`
  display: flex;
  background-color: #101821;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: white !important;
  padding: 60px;
  margin-left: 250px;
  min-height: 100vh;
  transition: margin-left 0.3s;
  width: 100%;

  @media (max-width: 768px) {
    margin-left: 80px;
  }
`;

export const EditPerfil = styled.div`
  border-bottom: solid 1px #223345;
  span {
    font-weight: bold;
    padding-left: 15px;
  }
`;

export const EditConta = styled.div`
  margin-top: 120px;
  border-bottom: solid 1px #223345;
  span {
    font-weight: bold;
    padding-left: 15px;
  }
`;

export const ChangePhoto = styled.div`
  margin-top: 10px;
  padding: 10px;
  border-radius: 10px;
  border: solid 1px #223345;
  display: flex;
  align-items: center; /* Alinha os elementos verticalmente */
`;

export const ProfileImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column; /* Organiza os elementos em coluna */
  margin-left: 10px; /* Adiciona espaço entre a foto e o texto */
`;

export const Span1 = styled.span`
  font-weight: bold;
`;

export const Span2 = styled.span`
  color: grey;
`;

export const Input = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;

  span {
    font-weight: bold;
  }

  input {
    font-size: 20px;
    background-color: transparent;
    color: white;
    border: none;
    border-bottom: solid 1px white;
    flex: 1;
    margin-left: 10px;
    margin-right: 20px;

    &:focus {
      outline: none; 
    }
  }

  &:hover {
    input {
      border-bottom: solid 1px white;
    }
  }
`;


export const EditIcon = styled(FaEdit)`
  color: #fff;
  font-size: 25px;
  margin-left: 5px;
  cursor: pointer;
`;

export const RadioWrapper = styled.div`  margin-top: 30px;
  margin-top: 30px;
  margin-bottom: 10px;
  span {
    margin-right: 20px;
    font-weight: bold;
  }
`;

export const RadioLabel = styled.label`
  margin-right: 15px;
  font-size: 16px;
`;

export const RadioInput = styled.input`
  margin-right: 5px;
`;

export const InputGenero = styled.input`
    font-size: 18px;
    background-color: transparent;
    color: white;
    border: none;
    border-bottom: solid 1px white;
    padding: 10px;
    margin-left: 90px;
    margin-right: 20px;
`;

export const ButtonSave = styled.button`
  width: 90px;
  margin-top: 15px;
  color: white;
  background-color: #3471db;
  border-radius: 8px;
  font-size: 14px;
  border: none;
  padding: 10px;
  margin-left: auto;
  span {
    font-weight: bolder;
  }
  &:hover,
  &:focus {
    background-color: #000dff;
    cursor: pointer;
  }
`;
export const ButtonChange = styled.button`
  margin-left: auto;
  width: 90px;
  color: white;
  background-color: #3471db;
  border-radius: 8px;
  font-size: 14px;
  border: none;
  padding: 5px;
  span {
    font-weight: bolder;
  }
  &:hover,
  &:focus {
    background-color: #000dff;
    cursor: pointer;
  }
`;