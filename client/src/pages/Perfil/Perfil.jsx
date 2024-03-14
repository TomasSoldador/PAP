import { useParams } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import * as Components from "./styled";
import { useState, useEffect } from "react";
import Axios from "axios";
import PostsPerfil from "../../components/PostsPerfil/PostsPerfil"

function Perfil() {
  const { username } = useParams();
  const [userData, setUserData] = useState(null);
  const [userPosts, setUserPosts] = useState([]);
  const [userPostsLoja, setUserPostsLoja] = useState([]);
  const [buttonPost, setButtonPost] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      if (username) {
        try {
          const response = await Axios.post("http://localhost:3001/api/user/profile", { username });
          setUserData(response.data); 

          const resposePosts = await Axios.post("http://localhost:3001/api/user/profilePosts", { userId: response.data.id });
          setUserPosts(resposePosts.data)

          const resposePostsLoja = await Axios.post("http://localhost:3001/api/user/profilePostsLoja", { userId : response.data.id });
          setUserPostsLoja(resposePostsLoja.data)
          
        } catch (error) {
          console.error("Erro ao buscar dados do usuário: ", error);
        }
      }
    };

    fetchUserData();
  }, [username]);

  const atualizar = async () => {
    if (username) {
      try {
        const response = await Axios.post("http://localhost:3001/api/user/profile", { username });
        setUserData(response.data); 

        const resposePosts = await Axios.post("http://localhost:3001/api/user/profilePosts", { userId: response.data.id });
        setUserPosts(resposePosts.data)

        const resposePostsLoja = await Axios.post("http://localhost:3001/api/user/profilePostsLoja", { userId : response.data.id });
        setUserPostsLoja(resposePostsLoja.data)
        
      } catch (error) {
        console.error("Erro ao buscar dados do usuário: ", error);
      }
    }
  }

  const updateUserPosts = (newPosts) => {
    setUserPosts(newPosts);
  };

  const updateUserPostsLoja = (newPosts) => {
    setUserPostsLoja(newPosts);
  };
  
  return (
    <>
      <Components.LayoutContainer>
        <Sidebar />
        <Components.ContentContainer>
          {userData ? (
            <>
              <Components.Info>
                <Components.Foto>
                  <img
                    src={`http://localhost:3001/server/imagens/` + userData.imageUrl}
                    alt="Perfil"
                  />
                  <div>
                    <h1>{userData.username}</h1>
                    <p>{userData.descricao}</p> 
                  </div>
                </Components.Foto>
                <Components.buttonSeguir>
                  Follow
                </Components.buttonSeguir>
                <Components.Follows>
                  Seguidores: 
                </Components.Follows>
              </Components.Info>
              <Components.Buttons>
                <Components.botao onClick={() => setButtonPost(true)}>
                  Posts
                </Components.botao>
                <Components.botao onClick={() => setButtonPost(false)}>
                  Loja
                </Components.botao>
              </Components.Buttons>
              {buttonPost ? (
                <Components.Conteudo>
                  {userPosts.map((post) => (
                    <PostsPerfil key={post.id} post={post} userData={userData} url={"imagesPosts"} type={"normal"} updateUserPosts={updateUserPosts} atualizar={atualizar}/>
                  ))}
                </Components.Conteudo>
              ) : (
                <Components.Conteudo>
                  {userPostsLoja.map((post) => (
                    <PostsPerfil key={post.id} post={post} userData={userData} url={"imagesPostsLoja"} type={"Loja"} updateUserPostsLoja={updateUserPostsLoja} atualizar={atualizar}/>
                  ))}
                </Components.Conteudo>
              )}
            </>
            
          ) : (
            <p>Carregando dados do usuário...</p>
          )}
        </Components.ContentContainer>
      </Components.LayoutContainer>
    </>
  );
}

export default Perfil;
