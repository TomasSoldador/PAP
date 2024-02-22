import React, { useEffect, useState } from "react";
import * as Components from "./styled";
 import "react-responsive-carousel/lib/styles/carousel.min.css";
import Modal from "../ModalPostsLoja/Modal";

const PostsPerfil = ({post, url}) => {

  const fotoURL = `http://localhost:3001/server/${url}/${post.foto1}`;

  return (
    <>
      <Components.PostContainer>
        <img src={fotoURL} alt="imagem 1" />
      </Components.PostContainer>
    </>
  )
}

export default PostsPerfil;