import React, { useRef, useState } from "react";
import * as Components from "./ModalStyled";

function Modal ({ userData, onClose}) {

  const handleClose = () => {
    onClose();
  };



  return (
    <Components.ModalBackdrop>
      <Components.ModalContent onClick={(e) => e.stopPropagation()}>
        <Components.Titulo>
          <Components.FotoPerfil>
            <img
              src={`http://localhost:3001/server/imagens/` + userData.imageUrl}
              alt="Perfil"
            />
          </Components.FotoPerfil>
          <Components.Username>
            {userData.username}
          </Components.Username>
          <Components.CloseButton onClick={handleClose}>
            &times;
          </Components.CloseButton>
        </Components.Titulo>
        <Components.Conteudo>

        </Components.Conteudo>
      </Components.ModalContent>
    </Components.ModalBackdrop>
  );
};

export default Modal;