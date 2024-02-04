import styled from "styled-components";

export const LayoutContainer = styled.div`
  display: flex;
  background-color: black !important;
`;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
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

export const Conteiner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const Foto = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 150px; // Ajuste conforme necessário
    height: 150px; // Ajuste conforme necessário
    border-radius: 50%; // Para tornar a imagem redonda
    object-fit: cover; // Isso garante que a imagem cubra o espaço sem distorcer
  }

  h1 {
    margin-top: 10px; // Espaço entre a imagem e o nome do usuário
  }
`;