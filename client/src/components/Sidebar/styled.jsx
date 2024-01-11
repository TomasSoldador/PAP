import styled from "styled-components";

export const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 96vh;
  background-color: #15202b;
  margin: 15px 0 45px 15px;
  color: white;
  padding: 20px;
  overflow-y: auto;
  border-radius: 10px;
  transition: width 0.3s;
  display: flex;
  flex-direction: column; // Define a direção do layout para coluna

  @media (max-width: 768px) {
    width: 80px; // Largura reduzida para telas menores
  }
`;

export const SidebarItem = styled.div`
  padding: 10px 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;

  &:hover {
    background-color: #1a91da;
    border-radius: 5px;
    transition: background-color 0.2s;
  }

  // Esconde o texto em telas menores, mostrando apenas os ícones
  @media (max-width: 768px) {
    justify-content: center; // Centraliza o ícone
    padding: 10px; // Ajusta o padding
    .text {
      display: none; // Esconde o texto
    }
  }
`;

export const ProfileButton = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  margin-top: auto;
  cursor: pointer;
  gap: 10px;

  &:hover {
    background-color: #1a91da;
    border-radius: 5px;
  }

  .profile-pic {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    overflow: hidden;
    img {
      width: 100%;
      height: auto;
    }
  }

  .username {
    display: block; // O nome do usuário é mostrado por padrão
  }

  @media (max-width: 768px) {
    padding: 10px;
    justify-content: center; // Centraliza o ícone no botão

    .username {
      display: none; // Esconde o nome do usuário em telas menores
    }
  }
`;

export const Logo = styled.div`
  height: 5px;
`