import React, { useState, useEffect } from "react";
import * as Components from "./styled";
import { FaPaperPlane } from "react-icons/fa";
import Axios from "axios";
import ScomentariosPost from "../ScomentariosPost/ScomentariosPost";

function ComentarioPost({ comentario, comentarioId }) {

  const fotoUrl = `http://localhost:3001/server/imagens/${encodeURIComponent(comentario.imageUrl)}`;

  const [respostaVisible, setRespostaVisible] = useState(false);
  const [mensagem, setMensagem] = useState("");
  const [comentarios, setComentarios] = useState([]);

  const sendResposta = async () => {
    try {
      const resposta = await Axios.post(`http://localhost:3001/api/posts/scomentarios`, {
        comentarioId: comentarioId,
        imageUrl: comentario.imageUrl,
        mensagem: mensagem,
        username: comentario.username,
      });
  
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
              <Components.ButtonSend onClick={sendResposta}>
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
