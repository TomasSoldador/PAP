import React, { useState, useEffect } from "react";
import * as Components from "./styled";
import { FaPaperPlane } from "react-icons/fa";
import Axios from "axios";
import ScomentariosPost from "../ScomentariosPost/ScomentariosPost";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

function ComentarioPost({ comentario, comentarioId }) {
  console.log(comentarioId)

  const fotoUrl = `http://localhost:3001/server/imagens/${encodeURIComponent(comentario.imageUrl)}`;

  
  const [respostaVisible, setRespostaVisible] = useState(false);
  const [mensagem, setMensagem] = useState("");
  const [comentarios, setComentarios] = useState([]);
  const token = Cookies.get("authToken");
  const [userDataUsername, setUserDataUsername] = useState();
  const [userImageURL, setUserImageURL] = useState("");
  const [crud_userId, setCrud_UserId] = useState([]);
  const [userId, setUserId] = useState();

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

  const sendResposta = async (comentarioId) => {
    try {
      const resposta = await Axios.post(`http://localhost:3001/api/posts/scomentarios`, {
        comentarioId: comentarioId,
        imageUrl: userImageURL,
        mensagem: mensagem,
        username: userDataUsername,
      });
      
      setComentarios([resposta.data, ...comentarios]);
      // Atualize os comentários após o envio
      openResposta();
  
      // Limpe a mensagem após o envio
      setMensagem("");
    } catch (error) {
      console.error("Erro ao enviar resposta:", error);
    }
  };
  
  const openResposta = async () => {
    try {
      // Verifique se os comentários já foram carregados para evitar busca repetida
      const response = await Axios.post(
        "http://localhost:3001/api/posts/getScomentarios",
        {
          comentarioId: comentarioId,
        }
      );
  
      // Atualize os comentários apenas se houver novos comentários
      if (response.data.length > 0) {
        setComentarios(response.data);
      }
    } catch (error) {
      console.error("Erro ao buscar comentários:", error);
    }
    
    // Mantenha as respostas abertas
    setRespostaVisible(true);
  };
  

  return (
    <Components.Conteinar>
      <Components.Foto>
        <img src={fotoUrl} alt={comentario.username} />
      </Components.Foto>
      <Components.Conteudo>
        <Components.Username>{comentario.username}</Components.Username>
        <Components.Comentario>{comentario.comentarios}</Components.Comentario>

        {respostaVisible ? (
          <>
            <Components.InputContainer>
              <Components.Input
                placeholder="Comente aqui"
                onChange={(e) => setMensagem(e.target.value)}
                value={mensagem}
              />
              <Components.ButtonSend onClick={() => sendResposta(comentarioId)}>
                <FaPaperPlane />
              </Components.ButtonSend>
            </Components.InputContainer>
            <Components.mensagens>
            {comentarios.map((comentario) => (
                <div key={comentario.id}>
                  <ScomentariosPost comentarios={comentario}/>
                </div>
            ))}
            </Components.mensagens>
          </>
        ) : (
          <Components.ButtonResponder onClick={openResposta}>
            Responder
          </Components.ButtonResponder>
        )}
      </Components.Conteudo>
    </Components.Conteinar>
  );
}

export default ComentarioPost;
