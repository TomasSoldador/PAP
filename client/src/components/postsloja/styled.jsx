import styled from "styled-components";

export const PostContainer = styled.div`
  color: white;
  border: solid 1px white;
  border-radius: 10px;
  margin-bottom: 10px;
  margin-right: 10px;
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Titulo = styled.div`
  border-bottom: solid white 1px;
  padding: 10px;
`;

export const ImageArea = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 150px;
    height: 150px;
    object-fit: cover;
  }
`;

export const Descricao = styled.div`
  border-top: solid 1px white;
  margin-top: auto;
  padding: 10px; /* Define a margem superior para "auto", posicionando a descrição no final do PostContainer */
`;
