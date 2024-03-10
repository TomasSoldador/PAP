import React, { useState, useEffect } from "react";
import * as Components from "./styled";
import { FaPaperPlane } from "react-icons/fa";
import Axios from "axios";

function ScomentarioPost({ comentarios }) {

  const fotoUrl = `http://localhost:3001/server/imagens/${encodeURIComponent(comentarios.imageUrl)}`;

  return (
    <Components.Conteinar>
      <Components.Foto>
        <img src={fotoUrl} alt={comentarios.username} />
      </Components.Foto>
      <Components.Conteudo>
        <Components.Username>{comentarios.username}</Components.Username>
        <Components.Comentario>{comentarios.comentario}</Components.Comentario>
      </Components.Conteudo>
    </Components.Conteinar>
  );
}

export default ScomentarioPost;
