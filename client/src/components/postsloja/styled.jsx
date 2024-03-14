import styled from "styled-components";

export const PostContainer = styled.div`
  color: white;
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
  border-bottom: solid #1d2d3d 1px;
  padding: 10px;
  border-radius: 10px 10px 0px 0px; 
  background-color: #0B1017;
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
  border-top: solid 1px #1d2d3d;
  margin-top: auto;
  background-color: #0B1017;
  border-radius: 0px 0px 10px 10px; 
  padding: 10px; /* Define a margem superior para "auto", posicionando a descrição no final do PostContainer */
`;
