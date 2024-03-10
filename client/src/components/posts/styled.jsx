import styled from "styled-components";

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 3px;
  margin: 20px;
  background: #15202B;
`;

export const UserProfile = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #1d2d3d;
`;

export const ProfileImage = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;

export const UserName = styled.span`
  color: white;
  font-weight: bold;
  margin-left: 10px;
`;

export const Photo = styled.div`
  width: 500px;
  height: 500px;
  background-color: #0b1017;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const CarouselContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 1%;
`;

export const Img = styled.img`
  z-index: 10;
  
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const NavButton = styled.button`
  background: none;
  color: white !important;
  border: none;
  cursor: pointer;
  padding: 5px;
  margin: 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    opacity: 0.7;
  }

  &:focus {
    outline: none;
  }
`;

export const LikeCommentSection = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  border-top: 1px solid #1d2d3d;
`;

export const IconButton = styled.button`
  background: none;
  color: white !important;
  border: none;
  cursor: pointer;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  span{
    margin-left: 7px;
  }
  
  &:hover {
    opacity: 0.7;
  }

  &:focus {
    outline: none;
  }
`;

export const Comantarios = styled.div`
  border-top: 1px solid #1d2d3d; 
  padding: 10px;
  max-height: 200px; /* Ajuste a altura máxima conforme necessário */
  overflow-y: auto; /* Adiciona a rolagem vertical quando necessário */
  border-radius: 4px;
  margin-top: 0px;
  width: 500px;
  display: flex;
  flex-direction: column; /* Alteração para exibir os elementos em coluna */
  align-items: flex-start;
  justify-content: flex-start; /* Alinhe os itens ao centro verticalmente */
`;

export const InputContainer = styled.div`
  flex-grow: 1; /* Ocupa todo o espaço disponível */
  display: flex;
  align-items: center; /* Alinhe os itens ao centro verticalmente */
`;

export const Input = styled.input`
  background-color: transparent;
  width: 440px;
  height: 32px;
  color: white;
  border: none;
  border-bottom: 1px solid white;
  margin-right: 10px; /* Espaço entre o Input e o ButtonSend */

  &:focus {
    outline: none; /* Remove a borda de foco padrão */
    border-bottom: 1px solid white; /* Se desejar manter a borda inferior ao focar */
  }
`;

export const ButtonSend = styled.button`
  background-color: transparent;
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 18px;

  &:hover {
    opacity: 0.7;
  }

  &:focus {
    outline: none;
  }
`;

export const mensagens = styled.div`
  margin-top: 10px;
  
`;