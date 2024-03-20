import { useParams } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import * as Components from "./styled";
import { useState, useEffect } from "react";
import Axios from "axios";
import PostsPerfil from "../../components/PostsPerfil/PostsPerfil";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
import ModalSeguidores from "./ModalSeguidores/ModalSeguidores";
import { Success, Error } from "../../components/Alertas";
import { useNavigate } from 'react-router-dom';


function Perfil() {
  const navigate  = useNavigate();
  const { username } = useParams();
  const [userData, setUserData] = useState(null);
  const [userPosts, setUserPosts] = useState([]);
  const [userPostsLoja, setUserPostsLoja] = useState([]);
  const [buttonPost, setButtonPost] = useState(true);
  const token = Cookies.get("authToken");
  const [crud_userId, setCrud_UserId] = useState([]);
  const [userId, setUserId] = useState("");
  const [userDataUsername, setUserDataUsername] = useState();
  const [followButtonClicked, setFollowButtonClicked] = useState(false);
  const [numeroFollows, setNumeroFollows] = useState();
  const [tokenId, setTokenId] = useState("");
  const [modalShow, setModalShow] = useState(false);
  const [isOpenSuccess, setIsOpenSuccess] = useState(false);
  const [isOpenError, setIsOpenError] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      if (username) {
        try {
          const response = await Axios.post(
            "http://localhost:3001/api/user/profile",
            { username }
          );
          setUserData(response.data);

          const resposePosts = await Axios.post(
            "http://localhost:3001/api/user/profilePosts",
            { userId: response.data.id }
          );
          setUserPosts(resposePosts.data);

          const resposePostsLoja = await Axios.post(
            "http://localhost:3001/api/user/profilePostsLoja",
            { userId: response.data.id }
          );
          setUserPostsLoja(resposePostsLoja.data);

          const responseAllFollows = await Axios.post(
            "http://localhost:3001/api/user/getAllFollows",
            { userDataid: response.data.id }
          );
          setNumeroFollows(responseAllFollows.data.length);
        } catch (error) {
          console.error("Erro ao buscar dados do usuário: ", error);
        }
      }
    };

    fetchUserData();
  }, [username]);

  useEffect(() => {
    if (token) {
      const decodedToken = jwtDecode(token);
      console.log(decodedToken);
      setUserId(decodedToken.id);

      try {
        Axios.post("http://localhost:3001/api/home/post", {
          userId: decodedToken.id,
        })
          .then((res) => {
            setUserDataUsername(res.data[0].username);
            setTokenId(res.data[0].id);

            setCrud_UserId([
              ...crud_userId,
              {
                userId: decodedToken.id,
              },
            ]);
          })
          .catch((error) => {
            console.log("Erro na solicitação ao servidor: ", error);
          });
      } catch (error) {
        console.log("Erro no pedido ao servidor: ", error);
      }
    }
  }, [token]);

  const atualizar = async () => {
    if (username) {
      try {
        const response = await Axios.post(
          "http://localhost:3001/api/user/profile",
          { username }
        );
        setUserData(response.data);

        const resposePosts = await Axios.post(
          "http://localhost:3001/api/user/profilePosts",
          { userId: response.data.id }
        );
        setUserPosts(resposePosts.data);

        const resposePostsLoja = await Axios.post(
          "http://localhost:3001/api/user/profilePostsLoja",
          { userId: response.data.id }
        );
        if (Array.isArray(resposePostsLoja.data)) {
          setUserPostsLoja(resposePostsLoja.data);
        } else {
          console.error(
            "Os dados recebidos para userPostsLoja não são um array:",
            resposePostsLoja.data
          );
        }
      } catch (error) {
        console.error("Erro ao buscar dados do usuário: ", error);
      }
    }
  };

  const updateUserPosts = (newPosts) => {
    setUserPosts(newPosts);
  };

  const updateUserPostsLoja = (newPosts) => {
    setUserPostsLoja(newPosts);
  };

  const novoSeguidor = async () => {
    try {
      if (followButtonClicked) {
        setFollowButtonClicked(false);
        await Axios.delete("http://localhost:3001/api/user/deletefollow", {
          data: { userId: userId, followerId: userData.id },
        });
      } else {
        setFollowButtonClicked(true);
        await Axios.post("http://localhost:3001/api/user/follows", {
          userId: userId,
          followerId: userData.id,
        });
      }
    } catch (error) {
      console.error("Erro ao processar a solicitação:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (userData) {
          const responseFollowsTrueFalse = await Axios.post(
            "http://localhost:3001/api/user/getfollows",
            { userId: tokenId, userDataId: userData }
          );
          console.log(responseFollowsTrueFalse.data);
          if (responseFollowsTrueFalse.data) {
            setFollowButtonClicked(true);
          } else {
            setFollowButtonClicked(false);
          }
        }
      } catch (error) {
        console.error("Erro ao buscar os dados:", error);
      }
    };

    fetchData();
  }, [tokenId, userData]);

  const mostrarFollows = () => {
    console.log("clicado");
    setModalShow(true);
  };

  const onClose = () => {
    setModalShow(false);
  };

  const criarnovo = (path) => {
    navigate(path)
  }

  return (
    <>
      <Components.LayoutContainer>
        <Sidebar />
        <Components.ContentContainer>
          {isOpenSuccess && (
            <Success texto={"Operação feita com sucesso!"} mostrar={true} />
          )}
          {isOpenError && (
            <Error texto={"Erro a fazer a operação!"} mostrar={true} />
          )}
          {userData ? (
            <>
              <Components.Info>
                <Components.Foto>
                  <img
                    src={
                      `http://localhost:3001/server/imagens/` +
                      userData.imageUrl
                    }
                    alt="Perfil"
                  />
                  <div>
                    <h1>{userData.username}</h1>
                    <p>{userData.descricao}</p>
                  </div>
                </Components.Foto>
                <Components.seguidor>
                  {userData.username !== userDataUsername && (
                    <Components.buttonSeguir
                      onClick={novoSeguidor}
                      cor={followButtonClicked ? "red" : "blue"}
                    >
                      {followButtonClicked ? "Unfollow" : "Follow"}
                    </Components.buttonSeguir>
                  )}
                  <Components.Follows onClick={mostrarFollows}>
                    Seguidores: {numeroFollows}
                  </Components.Follows>
                </Components.seguidor>
              </Components.Info>
              <Components.Buttons>
                <Components.botao onClick={() => setButtonPost(true)}>
                  Posts
                </Components.botao>
                <Components.botao onClick={() => setButtonPost(false)}>
                  Loja
                </Components.botao>
              </Components.Buttons>
              <Components.Conteudo>
              {buttonPost ? (
                userPosts.length > 0 ? (
                <Components.Conteudo>
                  {userPosts.map((post) => (
                    <PostsPerfil
                      key={post.id}
                      post={post}
                      userData={userData}
                      url={"imagesPosts"}
                      type={"normal"}
                      updateUserPosts={updateUserPosts}
                      atualizar={atualizar}
                      userId={userId}
                      setIsOpenError={setIsOpenError}
                      setIsOpenSuccess={setIsOpenSuccess}
                    />
                  ))}
                </Components.Conteudo>
                ) : (
                  <Components.WrapperFrase>
                    <Components.Frase>
                      <span>Ainda não ha publicações</span>
                    </Components.Frase>
                    <Components.ButtonNew onClick={() => criarnovo('/criar')}>
                      <span>Crie sua primeria Publicação</span>
                    </Components.ButtonNew>
                  </Components.WrapperFrase>
                )
              ) : (
                userPostsLoja.length > 0 ? (
                  userPostsLoja.map((post) => (
                    <PostsPerfil
                      key={post.id}
                      post={post}
                      userData={userData}
                      url={"imagesPostsLoja"}
                      type={"Loja"}
                      updateUserPostsLoja={updateUserPostsLoja}
                      atualizar={atualizar}
                      userId={userId}
                      setIsOpenError={setIsOpenError}
                      setIsOpenSuccess={setIsOpenSuccess}
                    />
                  ))
                ) : (
                  
                  <Components.WrapperFrase>
                    <Components.Frase>
                      <span>Ainda não há conteudo na loja.</span>
                    </Components.Frase>
                    <Components.ButtonNew onClick={() => criarnovo('/CriarLoja')}>
                      <span>Crie sua primeira venda.</span>
                    </Components.ButtonNew>
                  </Components.WrapperFrase>
                ))}
              </Components.Conteudo>
            </>
          ) : (
            <p>Carregando dados do usuário...</p>
          )}
        </Components.ContentContainer>
        {modalShow && (
          <ModalSeguidores userData={userData.id} onClose={onClose} />
        )}
      </Components.LayoutContainer>
    </>
  );
}

export default Perfil;
