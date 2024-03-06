import styled from "styled-components";

export const Conteinar = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const Foto = styled.div`
  margin-bottom: 25px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 40px;
    height: 40px; /* Defina a altura desejada */
    object-fit: cover; /* Para manter a proporção e cobrir todo o espaço */
    border-radius: 50%;
    border: 1px solid white;
  }  
`;

export const Conteudo = styled.div`
  margin-left: 10px;
  display: flex;
  flex-direction: column;
`;

export const Username = styled.div``;

export const Comentario = styled.div`
  margin-top: 5px;
`;

export const ButtonResponder = styled.button`
  background: none;
  color: white;
  border: none;
  margin-top: 5px; /* Adicionando margem ao topo para separar do comentário */
  &:hover {
    cursor: pointer;
    color: wheat;
  }
`;

export const InputContainer = styled.div`
  flex-grow: 1; /* Ocupa todo o espaço disponível */
  display: flex;
  align-items: center; /* Alinhe os itens ao centro verticalmente */
`;

export const Input = styled.input`
  background-color: transparent;
  width: 340px;
  height: 32px;
  color: white;
  border: none;
  border-bottom: 1px solid white;
  margin-right: 10px; /* Espaço entre o Input e o ButtonSend */
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
