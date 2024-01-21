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
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;


  @media (max-width: 768px) {
    margin-left: 80px;
  }
`;