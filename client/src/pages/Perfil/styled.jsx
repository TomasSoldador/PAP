import styled from "styled-components";

export const LayoutContainer = styled.div`
  display: flex;
  background-color: #101821;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
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

export const Wrapper = styled.div`
  display: flex;
`;

export const Info = styled.div`
  border-bottom: 3px solid #15202B;
  width: 100%;
  margin-bottom: 10px;
`;

export const Conteudo = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Foto = styled.div`
  display: flex;
  align-items: center; 

  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 10px;
  }

  div {
    display: flex;
    flex-direction: column;
  }
  
  h1, p {
    margin: 0;
  }
`;

export const descricao = styled.div`
  margin-left: 30px;
`;

export const Conteiner = styled.div`
  padding: 20px;
`;

export const Buttons = styled.div`
  justify-content: center;
  display: flex;
  margin-bottom: 20px;
`;

export const botao = styled.button`
  padding: 10px 20px 10px 20px;
  background-color: transparent;
  color: white;
  border: none;
  border-bottom: 2px solid #15202B;
  font-size: 14px;
  font-weight: bold;
  transition: 0.3s;

  &:hover {
    cursor: pointer;
    background-color: #191133a7;
  }
`;

export const buttonSeguir = styled.button`
  padding: 8px 20px;
  background: blue;
  font-weight: bolder;
  border-radius: 8px;
  font-size: 15px;
  border: 2px solid #0056b3; /* Adicionando uma borda azul */
  color: white;
  cursor: pointer;
  margin: 10px 0 25px 30px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2); /* Adicionando uma sombra */
`;

export const Follows = styled.div`
  
`;

