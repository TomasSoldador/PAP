import React, { useState } from "react";
import * as Components from "./styled";
import { FaPaperPlane } from "react-icons/fa";

function ComentarioPost({ comentario }) {

  const fotoUrl = `http://localhost:3001/server/imagens/${encodeURIComponent(comentario.imageUrl)}`;

  const [respostaVisible, setRespostaVisible] = useState(false);
  const [mensagem, setMensagem] = useState("");

  const sendResposta = () => {
    setRespostaVisible((prevVisibility) => !prevVisibility);
    console.log(mensagem)
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
        ) : (
          <Components.ButtonResponder onClick={sendResposta}>
            Responder
          </Components.ButtonResponder>
        )}
      </Components.Conteudo>
    </Components.Conteinar>
  );
}

export default ComentarioPost;
