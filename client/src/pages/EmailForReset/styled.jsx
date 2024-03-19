import styled from "styled-components";

export const AllContainer = styled.div`
  background-color: #101821;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: "Montserrat", sans-serif;
  height: 100vh;
`;

export const Container = styled.div`
  background-color: #2c3e50;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  position: relative;
  overflow: hidden;
  width: 500px;
  max-width: 100%;
  min-height: 350px;
`;

export const Form = styled.div`
  background-color: #2c3e50;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 50px;
  height: 4vh;
  text-align: center;
`;

export const Input = styled.input`
  color: white;
  font-size: 18px;
  background-color: transparent;
  border: none;
  border-bottom: white solid 1px;
  padding: 12px 15px;
  margin: 8px 0;
  width: 100%;
`;

export const Titulo = styled.div`
  background-color: #2c3e50;
  color: white;
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid black;
  font-weight: bold;
`;

export const p = styled.div`
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 40px;
`;

export const DivButtons = styled.div`
  text-align: right;
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  border-top: 1px solid black;  
`;

export const Button = styled.button`
  border-radius: 20px;
  border: none;
  background-color: #3471db;
  text-decoration: none;
  color: #ffffff;
  font-size: 12px;
  margin: 10px 10px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
  &:hover,
  &:focus {
    background-color: #000dff;
    cursor: pointer;
  }
`;



