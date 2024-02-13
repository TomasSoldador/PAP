import Sidebar from "../../components/Sidebar/Sidebar";
import * as Components from "./styled"; 
import { useState, useEffect } from "react";
import Axios from "axios";
import Posts from "../../components/posts/Posts";
import Cookies from "js-cookie";




function Home () {
  const token = Cookies.get('authToken');
  const [postsData, setPostsData] = useState([]);

  useEffect(() => {
    const PesquisarPosts = async () => {
      try {
        const resposta = await Axios.get(
          "http://localhost:3001/api/posts/get",
          null,
        );
        setPostsData(resposta.data);
      } catch (error) {
        console.error("Erro na requisição:", error);
      }
    };
  
    PesquisarPosts();  // Chama a função assíncrona imediatamente
  }, [token]);
  


  return (
    <Components.LayoutContainer>
      <Sidebar />
      <Components.ContentContainer>
        {postsData.map((post, index) => (
          <Posts key={index} data={post} />
        ))}
      </Components.ContentContainer>
    </Components.LayoutContainer>
  );
}

export default Home;
