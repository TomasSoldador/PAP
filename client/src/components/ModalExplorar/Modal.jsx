import React, { useState } from "react";
import * as Components from "./Styled";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Modals from "./Modal/Modal";

const Modal = ({post}) => {

  const fotoURL = `http://localhost:3001/server/imagesPosts/${post.foto1}`;
  const [modalVisible, setModalVisible] = useState(false);

  const visibleModal = () => {
    setModalVisible(true)
  }

  const fecharModal = () => {
    setModalVisible(false);
  };



  return (
    <>
      <Components.PostContainer onClick={visibleModal}>
        <img src={fotoURL} alt={post.username} />
      </Components.PostContainer>
      {modalVisible && (
        <Modals onClose={fecharModal} post={post}/>
      )}
    </>
  );
};

export default Modal;
