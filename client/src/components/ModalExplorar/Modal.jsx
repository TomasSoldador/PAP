import React, { useState } from "react";
import * as Components from "./Styled";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Modal = ({post}) => {

  const fotoURL = `http://localhost:3001/server/imagesPosts/${post.foto1}`;

  return (
    <>
      <Components.PostContainer>
        <img src={fotoURL} alt={post.username} />
      </Components.PostContainer>
    </>
  );
};

export default Modal;
