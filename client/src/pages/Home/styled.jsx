import styled, { keyframes } from "styled-components";

export const LayoutContainer = styled.div`
  display: flex;
  background-color: #101821;
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

export const LoadingOverlay = styled.div`
  position: absolute;
  background: #101821;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

export const LoadingSpinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

export const LoadingBotton = styled.div`
  position: relative;
  bottom: 0;
  background-color: transparent;
`;

export const Frase = styled.div`
  span {
    font-weight: bolder;
    font-size: 18px;
  }
`;

export const ButtonNew = styled.div`
  margin-top: 15px;
  color: white;
  background-color: #3471db;
  border-radius: 8px;
  border: none;
  padding: 10px 10px 7px 10px;
  &:hover,
  &:focus {
    background-color: #000dff;
    cursor: pointer;
  }

  span {
    font-size: 16px;
    font-weight: bolder;
  }
`;
