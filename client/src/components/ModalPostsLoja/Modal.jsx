import React, { useRef, useState } from "react";
import * as Components from "./styled";
import { Error } from "../Alertas";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from 'react-router-dom';



function Modal ({post, onClose}) {

  const handleClose = () => {
    onClose();
  };


  return (
    <Components.ModalBackdrop>
      <Components.Modal>
      <Components.CloseButton onClick={handleClose}>
          &times;
        </Components.CloseButton>
        <Components.Title>
          {post.nome}
        </Components.Title>
        <Components.Conteudo>
          <Components.Imagens>
            <img src={`http://localhost:3001/server/imagesPostsLoja/${post.foto1}`} alt="Imagem 1" />
            <img src={`http://localhost:3001/server/imagesPostsLoja/${post.foto2}`} alt="Imagem 2" />
            <img src={`http://localhost:3001/server/imagesPostsLoja/${post.foto3}`} alt="Imagem 3" />
            <img src={`http://localhost:3001/server/imagesPostsLoja/${post.foto4}`} alt="Imagem 4" />
          </Components.Imagens>
          <Components.Preco>
            <span>Preço: {post.preco}</span>
          </Components.Preco>
          <Components.Localizacao>
            <span>Localização: {post.localizacao}</span>
          </Components.Localizacao>
          <Components.Numero>
            <span>Telefone para contato: {post.numero}</span>
          </Components.Numero>
          <Components.Descricao>
            <span>{post.descricao}</span>
          </Components.Descricao>
        </Components.Conteudo>
      </Components.Modal>
    </Components.ModalBackdrop>
  );
};

export default Modal;