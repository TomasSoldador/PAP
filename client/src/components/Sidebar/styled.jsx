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
  margin-bottom: 15px; // Aumenta o espaço abaixo de cada item

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
    img {
      width: 100%;
      height: auto;
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
`

export const SidebarTopImage = styled.div`
  width: 100%; 
  padding: 10px;
  text-align: center;

  img {
    max-width: 100%;
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
  margin-top: auto; // Isso colocará o botão no final da sidebar

  &:hover {
    background-color: #1a91da;
    border-radius: 5px;
  }
`;