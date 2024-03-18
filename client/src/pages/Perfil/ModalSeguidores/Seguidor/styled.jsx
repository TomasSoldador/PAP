import styled from "styled-components";

export const Button = styled.div`
  border: solid #15202B 1px;
  margin-left: -45px;
  margin-right: -5px;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 10px;
  display: flex; 
  align-items: center;
  cursor: pointer;
`;

export const img = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  display: flex; 
  justify-content: center; 
  align-items: center; 

  img {
    width: auto; 
    height: 100%; 
    object-fit: cover;
  }
`;

export const username = styled.div`
  margin-left: 10px; /* Adiciona espaço entre a foto e o username */
`;
