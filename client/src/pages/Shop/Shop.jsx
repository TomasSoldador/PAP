import Sidebar from "../../components/Sidebar/Sidebar";
import * as Components from "./styled"; 
import { useState, useEffect } from "react";
import Axios from "axios";
import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


function Shop () {
  const navigate = useNavigate();
  
  const Criar = () => {
    navigate("/CriarLoja");
  }

  return (
    <Components.LayoutContainer>
      <Sidebar />
      <Components.ContentContainer>
        <Components.navbar>
          <Components.Titulo>
            <h1>Loja</h1>
          </Components.Titulo>
          <Components.button onClick={Criar}>
            <FaPlus />
            <span>Criar</span> 
          </Components.button>
        </Components.navbar>
      </Components.ContentContainer>
    </Components.LayoutContainer>
  )
}

export default Shop;
