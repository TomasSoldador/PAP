import React, { useEffect, useState } from "react";
import * as Components from "./styled";
 import "react-responsive-carousel/lib/styles/carousel.min.css";
import Modal from "../ModalPostsLoja/Modal";

const Postsloja = ({post, index}) => {
  const fotoURL = `http://localhost:3001/server/imagesPostsLoja/` + post.foto1;

  const [modalVisible, setModalVisible] = useState(false);

  const abrirModal = () => {
    setModalVisible(true);
  };

  const fecharModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      <Components.PostContainer onClick={abrirModal}>
        <Components.Titulo>
          {post.nome}
        </Components.Titulo>
        <Components.ImageArea>
          <img
            src={fotoURL || "../../src/assets/transferir.jpeg"}
            alt="Perfil"
          />
        </Components.ImageArea>
        <Components.Descricao>
          Preco: {post.preco}€<br />
          Location: {post.localizacao}
        </Components.Descricao>
      </Components.PostContainer>

      {modalVisible && (
        <Modal post={post} onClose={fecharModal} />
      )}
    </>
  )
}

export default Postsloja;