import Sidebar from "../../components/Sidebar/Sidebar";
import * as Components from "./styled"; 
import { useState, useEffect } from "react";
import Axios from "axios";
import { useNavigate } from 'react-router-dom';
import Modal from "../../components/ModalExplorar/Modal";



function Explorer() {
  const [options, setOptions] = useState([]);
  const [posts, setPosts] = useState([]);
  const [postsUser, setPostsUser] = useState([]);
  const navigate = useNavigate();

  const handleInputChange = (inputValue) => {
    if (inputValue.length > 0) {
      Axios.post("http://localhost:3001/api/explorer/post", { query: inputValue })
        .then((res) => {
          const { resultsUser, resultsPost } = res.data;
          setOptions(resultsUser);
          setPostsUser(resultsPost);
        })
        .catch((error) => {
          console.log("Erro ao buscar opções: ", error);
        });
    } else {
      // Se a barra de pesquisa estiver vazia, buscar todos os posts novamente
      Axios.post("http://localhost:3001/api/posts/getAll")
        .then((res) => {
          setPosts(res.data);
        })
        .catch((error) => {
          console.log("Erro ao buscar opções: ", error);
        });
      setOptions([]);
      setPostsUser([]);
    }
  };

  useEffect(() => {
    // Se a barra de pesquisa estiver vazia, busque todos os posts existentes
    Axios.post("http://localhost:3001/api/posts/getAll")
      .then((res) => {
        setPosts(res.data);
      })
      .catch((error) => {
        console.log("Erro ao buscar opções: ", error);
      });
  }, []);

  const handleOptionClick = (username) => {
    navigate(`/Perfil/${username}`);
  };

  return (
    <Components.LayoutContainer>
      <Sidebar />
      <Components.ContentContainer>
        <Components.explorer>
          <Components.Input onChange={(e) => handleInputChange(e.target.value)} />
          <Components.BlackSearchIcon />
          {options.length > 0 && (
            <Components.OpcoesConteiner>
              {options.map((option, index) => (
                <Components.opcoes key={index} onClick={() => handleOptionClick(option.username)}>
                  <img src={`http://localhost:3001/server/imagens/` + option.imageUrl} alt={option.username} />
                  {option.username}
                </Components.opcoes>
              ))}
            </Components.OpcoesConteiner>
          )}
        </Components.explorer>
        <Components.conteudo>
        {posts.length > 0 ? (
          <Components.posts>
            {postsUser.length > 0 ? (
              postsUser.map((post, index) => (
                <div key={index}>
                  <Modal post={post} />
                </div>
              ))
            ) : (
              posts.map((post, index) => (
                <div key={index}>
                  <Modal post={post} />
                </div>
              ))
            )}
          </Components.posts>
        ) : (
          <Components.Frase>
            <span>Ups! Ainda não ha conteudo.</span>
          </Components.Frase>
        ) }
          
        </Components.conteudo>
      </Components.ContentContainer>
    </Components.LayoutContainer>
  );
}

export default Explorer;

