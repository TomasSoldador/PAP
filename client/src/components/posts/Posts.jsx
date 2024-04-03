import React, { useEffect, useState } from "react";
import * as Components from "./styled";
import { FaComment, FaHeart, FaRegHeart, FaPaperPlane } from "react-icons/fa";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Axios from "axios";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import ComentarioPost from "./ComentarioPost/ComentarioPost";
import { useNavigate } from 'react-router-dom';

const Post = ({ posts }) => {
  const [comentariosVisible, setComentariosVisible] = useState(false);
  const [comentarios, setComentarios] = useState([]);
  const [coracao, setCoracao] = useState(false);
  const [dataPerfil, setDataPerfil] = useState([]);
  const [userId, setUserId] = useState();
  const [mensagem, setMensagem] = useState("");
  const idperfil = posts.perfil_id;
  const token = Cookies.get("authToken");
  const [userDataUsername, setUserDataUsername] = useState();
  const [userImageURL, setUserImageURL] = useState("");
  const [crud_userId, setCrud_UserId] = useState([]);
  const [numeroLikes, setNumeroLikes] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      const decodedToken = jwtDecode(token);
      setUserId(decodedToken.id);

      try {
        Axios.post("http://localhost:3001/api/home/post", {
          userId: decodedToken.id,
        })
          .then((res) => {
            setUserDataUsername(res.data[0].username);
            setUserImageURL(res.data[0].imageUrl);

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

  useEffect(() => {
    Axios.post("http://localhost:3001/api/posts/getlikePost", {
      postId: posts.id,
    })
      .then((response) => {
        if (Array.isArray(response.data) && response.data.length > 0) {
          const numeroLikes = response.data[0].Likes;
          console.log(numeroLikes);
          setNumeroLikes(numeroLikes);
        }
      })
      .catch((error) => {
        console.log("Erro na solicitação ao servidor: ", error);
      });
  }, [posts.id]);

  const handleLike = async () => {
    // Utilize o valor anterior de coracao para determinar a ação
    const novoCoracao = !coracao;

    setCoracao(novoCoracao);

    // Atualize o estado local antes de fazer a chamada para o servidor
    if (novoCoracao) {
      setNumeroLikes((prevLikes) => prevLikes + 1);
    } else {
      setNumeroLikes((prevLikes) => prevLikes - 1);
    }

    try {
      const response = await Axios.post(
        "http://localhost:3001/api/posts/likePost",
        {
          numeroLikes: novoCoracao ? numeroLikes + 1 : numeroLikes - 1,
          postsId: posts.id,
        }
      );

      console.log(response);
    } catch (error) {
      console.log("Erro na solicitação ao servidor: ", error);
    }
  };

  const toggleComentariosVisible = async () => {
    try {
      // Verifique se os comentários já foram carregados para evitar busca repetida
      if (!comentariosVisible && comentarios.length === 0) {
        const response = await Axios.post(
          "http://localhost:3001/api/posts/getComentarios",
          {
            postId: posts.id,
          }
        );
        setComentarios(response.data);
      }
      setComentariosVisible((prevVisibility) => !prevVisibility);
    } catch (error) {
      console.error("Erro ao buscar comentários:", error);
    }
  };

  const sendMensage = async () => {
    try {
      const resposta = await Axios.post(
        "http://localhost:3001/api/posts/comentarios",
        {
          data: {
            userId: userId,
            postId: posts.id,
            mensagem: mensagem,
            userFoto: userImageURL,
            username: userDataUsername,
          },
        }
      );

      // Atualize o estado 'comentarios' com a nova mensagem
      setComentarios((prevComentarios) => [
        {
          id: resposta.data.id,
          username: userDataUsername,
          comentarios: mensagem,
          imageUrl: userImageURL,
        },
        ...prevComentarios,
      ]);

      // Limpe a mensagem após o envio
      setMensagem("");
    } catch (error) {
      console.error("Erro ao enviar comentário:", error);
    }
  };

  useEffect(() => {
    const fetchUserData = async () => {
      if (idperfil) {
        try {
          // Assegure-se de que a URL esteja correta e corresponda ao endpoint do servidor
          const response = await Axios.post(
            "http://localhost:3001/api/posts/getPerfil",
            { idperfil }
          );
          setDataPerfil(response.data);
        } catch (error) {
          console.error("Erro ao buscar dados do usuário: ", error);
        }
      }
    };

    fetchUserData();
  }, [idperfil]);

  const handleOptionClick = (username) => {
    navigate(`/Perfil/${username}`);
  };

  return (
    <>
    {console.log(comentarios)}
      <Components.PostContainer>
        <Components.UserProfile>
          <Components.ProfileImage
            src={`http://localhost:3001/server/imagens/${
              dataPerfil[0]?.imageUrl || "../../assets/transferir.jpeg"
            }`}
            alt={`${dataPerfil[0]?.imageUrl}'s profile`}
            onClick={() => handleOptionClick(dataPerfil[0]?.username)}
          />
          <Components.UserName onClick={() => handleOptionClick(dataPerfil[0]?.username)}>{dataPerfil[0]?.username}</Components.UserName>
        </Components.UserProfile>
        <Components.Photo>
          <Carousel
            showThumbs={false}
            showStatus={false}
            style={{ zIndex: "1" }}
            dynamicHeight={false}
          >
            {Object.values(posts)
              .map((value, index) => {
                if (
                  typeof value === "string" &&
                  value.match(/\.(jpeg|jpg|gif|png)$/)
                ) {
                  return (
                    
                      <Components.Img
                        src={
                          `http://localhost:3001/server/imagesPosts/` + value
                        }
                        alt={`Post Image ${index + 1}`}
                      />
                    
                  );
                }
                return null; // Handle other cases where value is not a valid image URL
              })
              .filter(Boolean)}
          </Carousel>
        </Components.Photo>
        {posts.descricao && (
          <Components.Descricao>
            <span>{posts.descricao}</span>
          </Components.Descricao>
        )}
        <Components.LikeCommentSection>
          <Components.IconButton onClick={handleLike}>
            {coracao ? <FaHeart /> : <FaRegHeart />}
            <span>{numeroLikes !== null ? numeroLikes : "0"}</span>
          </Components.IconButton>
          <Components.IconButton onClick={toggleComentariosVisible}>
            <FaComment />
          </Components.IconButton>
        </Components.LikeCommentSection>
        {comentariosVisible && (
          <Components.Comantarios comentariosVisible={comentariosVisible}>
            <Components.InputContainer>
              <Components.Input
                placeholder="Comente aqui"
                onChange={(e) => setMensagem(e.target.value)}
                value={mensagem}
              />
              <Components.ButtonSend onClick={sendMensage}>
                <FaPaperPlane />
              </Components.ButtonSend>
            </Components.InputContainer>
            <Components.mensagens>
              {comentarios.map((comentario) => (
                <div key={comentario.id}>
                  <ComentarioPost
                    comentario={comentario}
                    comentarioId={comentario.id}
                  />
                </div>
              ))}
            </Components.mensagens>
          </Components.Comantarios>
        )}
      </Components.PostContainer>
    </>
  );
};

export default Post;
