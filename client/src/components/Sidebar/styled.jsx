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
  overflow-y: auto; // Permite rolagem por padrão
  border-radius: 10px;
  transition: width 0.3s;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 80px;
  }
`;

export const SidebarItem = styled.div`
  padding: 10px 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 5px; // Aumenta o espaço abaixo de cada item

  &:hover {
    background-color: #1a91da;
    border-radius: 5px;
    transition: background-color 0.2s;
  }

  @media (max-width: 768px) {
    justify-content: center;
    padding: 10px;
    .text {
      display: none;
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
    display: flex; /* Adiciona flexbox */
    justify-content: center; /* Centraliza horizontalmente */
    align-items: center; /* Centraliza verticalmente */

    img {
      width: auto; /* Altere para 'auto' para manter a proporção da imagem */
      height: 100%; /* A altura será de 100% do contêiner */
      /* Adicione 'object-fit' se quiser que a imagem cubra completamente o contêiner sem distorção */
      object-fit: cover;
    }
  }

  .username {
    display: block;
  }

  @media (max-width: 768px) {
    padding: 10px;
    justify-content: center;

    .username {
      display: none;
    }
  }
`;

export const Logo = styled.div`
  height: 5px;
`;

export const SidebarTopImage = styled.div`
  width: 100%;
  padding: 10px;
  text-align: center;

  img {
    max-width: 50%;
    height: auto;
    border-radius: 50%;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const LogoutButton = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  cursor: pointer;
  gap: 10px;
  margin-top: auto;

  &:hover {
    background-color: #1a91da;
    border-radius: 5px;
  }

  .logout-text {
    display: block; // O texto é mostrado por padrão
  }

  // Media query para telas com largura menor que 768px
  @media (max-width: 768px) {
    justify-content: center; // Centraliza o ícone
    padding: 10px;
    .logout-text {
      display: none; // Esconde o texto em telas menores
    }
  }
`;
