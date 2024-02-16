import Sidebar from "../../components/Sidebar/Sidebar";
import * as Components from "./styled"; 
import { useState, useEffect } from "react";
import Axios from "axios";
import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Postsloja from "../../components/postsloja/Postsloja"


function Shop () {
  const [postsData, setPostsData] = useState([])
  const navigate = useNavigate();
  
  const Criar = () => {
    navigate("/CriarLoja");
  }

  useEffect(() => {
    const PesquisarPosts = async () => {
      try {
        const resposta = await Axios.get(
          "http://localhost:3001/api/loja/get"
        );
        setPostsData(resposta.data);
      } catch (error) {
        console.error("Erro na requisição:", error);
      }
    };
    
    PesquisarPosts();
  }, []);

  useEffect(() => {
    console.log(postsData);
  }, [postsData]);
  
  
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
        <Components.conteudo>
          {postsData.map((post, index) => (
            <Postsloja post={post} key={index} />
          ))}
        </Components.conteudo>
      </Components.ContentContainer>
    </Components.LayoutContainer>
  )
}

export default Shop;
