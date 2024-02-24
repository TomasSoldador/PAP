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
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  position: relative;
  overflow: hidden;
  width: 500px;
  max-width: 100%;
  min-height: 350px;
`;

export const Titulo = styled.div`
  background-color: rgb(7, 7, 92);;
  color: white;
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 2px solid black;
  font-weight: bold;
`;

export const Input = styled.input`
  background-color: #eee;
  border: none;
  padding: 12px 15px;
  margin: 8px 0;
  width: 100%;
`;

export const Form = styled.div`
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 50px;
  height: 230px;

  text-align: center;
`;

export const DivButtons = styled.div`
  text-align: right;
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  border-top: 2px solid black;  
`;

export const Button = styled.button`
  border-radius: 20px;
  border: 1px solid rgb(7, 7, 92);
  background-color: rgb(9, 9, 121);
  text-decoration: none;
  color: #ffffff;
  font-size: 12px;
  margin: 10px 10px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
  &:active {
    transform: scale(0.95);
  }
  &:focus {
    outline: none;
  }
`;

export const DivPassword = styled.div`
  width: 100%;
  display: inline-flex;
`;

export const ButtonEye = styled.button`
  margin-top: 4px;
  background: none;
  border: none;
  cursor: pointer;
  position: relative;
  font-size: 1.2em;
  color: #777;
`;

export const p = styled.p`
  color: #e90000;
  font-size: 12px;
  margin: -1px;
  margin-top: 120px;
  position: absolute;
`;