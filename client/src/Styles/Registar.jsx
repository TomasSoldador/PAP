import styled from "styled-components";
import foto from '../assets/fundo2.jpg';

export const AllContainer = styled.div`
   background-image: url(${foto});
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
   min-height: 550px;
`;

export const Form = styled.form`
   background-color: #ffffff;
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   padding: 0 50px;
   height: 100%;
   text-align: center;
`;


export const ImageInputWrapper = styled.label`
   display: inline-block;
   width: 100px;
   height: 100px;
   border-radius: 50%;
   overflow: hidden;
   background-color: #ccc;
   position: relative;
   cursor: pointer;
   margin-bottom: 15px;

   span {
      display: block;
      font-size: 2em;
      color: white;
      text-align: center;
      line-height: 100px;
   }

   input {
      display: none;
   }

   img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 50%;
   }
`;

export const Title = styled.h1`
   font-weight: bold;
   margin: 0;
`;

export const Input = styled.input`
   background-color: #eee;
   border: none;
   padding: 12px 15px;
   margin: 8px 0;
   width: 100%;
`;

export const RadioWrapper = styled.div`
   margin-bottom: 10px;
`;

export const RadioLabel = styled.label`
   
   margin-right: 15px;
   font-size: 16px;
`;

export const RadioInput = styled.input`
   margin-right: 5px;
`;

export const Button = styled.button`
   border-radius: 20px;
   border: 1px solid rgb(7, 7, 92);
   background-color: rgb(9, 9, 121);
   color: #ffffff;
   font-size: 12px;
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

export const Paragraph = styled.p`
   font-size: 14px;
   font-weight: 100;
   line-height: 20px;
   letter-spacing: 0.5px;
   margin: 20px 0 30px;
`;
