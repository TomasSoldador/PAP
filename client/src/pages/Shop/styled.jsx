import styled from "styled-components";

export const LayoutContainer = styled.div`
  display: flex;
  background-color: black !important;
`;

export const ContentContainer = styled.div`
  color: white !important;
  padding: 20px;
  margin-left: 250px;
  min-height: 100vh;
  transition: margin-left 0.3s;

  @media (max-width: 768px) {
    margin-left: 80px;
  }
`;

export const navbar = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
`;

export const Titulo = styled.div`
  margin-left: 35%;
`;

export const button = styled.button`
  top: 20px;
  right: 40px;
  position: fixed;
  padding: 10px 20px;
  color: #fff;
  border: none;
  font-size: 16px;
  transition: background-color 0.3s ease;
  background-color: #3471db;
  border-radius: 8px;
  &:hover {
    background-color: #000dff;
    cursor: pointer;
  }

  span{
    margin-left:10px;
  }
`;

export const conteudo = styled.div`
  margin-top: 60px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;