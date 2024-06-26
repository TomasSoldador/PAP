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
  margin-left: 20px;
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

export const Descricao = styled.div`
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
  padding: 10px 20px 10px 20px;
  background-color: ${(props) => props.cor || "blue"};
  color: white;
  border: none;
  border-radius: 10px;
  border-bottom: 2px solid #15202B;
  font-size: 14px;
  font-weight: bold;
  transition: 0.3s;
  cursor: pointer;
`;

export const seguidor = styled.div`
  margin: 10px 0 25px 10px;
  display: flex;
  align-items: center; /* Alinhamento à esquerda */
  position: relative;
`;

export const Follows = styled.div`
  margin-left: 10px;
  font-weight: bold;
  cursor: pointer;
`;

export const WrapperFrase = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  align-items: center; /* Alinhar itens horizontalmente */
`;

export const Frase = styled.div`
  margin-top: 40px;
  text-align: center;
  span {
    font-weight: bolder;
  }
`;

export const ButtonNew = styled.button`
  margin-top: 15px;
  color: white;
  background-color: #3471db;
  border-radius: 8px;
  font-size: 14px;
  border: none;
  padding: 10px 10px 7px 10px;
  font-size: 15px;
  font-weight: bolder;
  &:hover,
  &:focus {
    background-color: #000dff;
    cursor: pointer;
  }
`;