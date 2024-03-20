import React, { useState } from "react";
import * as Components from "./styled";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Modal from "../../components/ModalPostsPerfil/Modal";

const PostsPerfil = ({
  post,
  userData,
  url,
  type,
  updateUserPosts,
  updateUserPostsLoja,
  atualizar,
  userId,
  setIsOpenError,
  setIsOpenSuccess
}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const fotoURL = `http://localhost:3001/server/${url}/${post.foto1}`;

  const abrirModal = (post) => {
    setModalVisible(true);
  };

  const fecharModal = () => {
    setModalVisible(false);
    
  };

  return (
    <>
      <Components.PostContainer onClick={() => abrirModal(post)}>
        <img src={fotoURL} alt="imagem 1" />
      </Components.PostContainer>
      {modalVisible && (
        <Modal
          userData={userData}
          post={post}
          url={url}
          onClose={fecharModal}
          type={type}
          updateUserPosts={
            type === "normal" ? updateUserPosts : updateUserPostsLoja
          }
          atualizar = {atualizar}
          userId = {userId}
          setIsOpenError={setIsOpenError}
          setIsOpenSuccess={setIsOpenSuccess}
        />
      )}
    </>
  );
};

export default PostsPerfil;
