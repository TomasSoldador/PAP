import React, { useRef, useState } from "react";
import * as Components from "./Styled";

function Modal ({ userData, post, url, onClose}) {

  

  const handleClose = () => {
    onClose();
  };

  const remover = () => {
    if(post.preco) {
      const resposta = axios.delete();
    } else {

    }
  }

  const editar = () => {
    if(post.preco) {
      const resposta = axios.delete();
    } else {

    }
  }

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
          <Components.Imagens>
            {post.foto1 && <img src={`http://localhost:3001/server/${url}/${post.foto1}`} alt="Imagem 1" onClick={() => handleImageClick(`http://localhost:3001/server/${url}/${post.foto1}`)} />}
            {post.foto2 && <img src={`http://localhost:3001/server/${url}/${post.foto2}`} alt="Imagem 2" onClick={() => handleImageClick(`http://localhost:3001/server/${url}/${post.foto2}`)} />}
            {post.foto3 && <img src={`http://localhost:3001/server/${url}/${post.foto3}`} alt="Imagem 3" onClick={() => handleImageClick(`http://localhost:3001/server/${url}/${post.foto3}`)} />}
            {post.foto4 && <img src={`http://localhost:3001/server/${url}/${post.foto4}`} alt="Imagem 4" onClick={() => handleImageClick(`http://localhost:3001/server/${url}/${post.foto4}`)} />}
          </Components.Imagens>
            {post.preco ? (
              <>
                <Components.Info>
                  <span>Preço: </span>
                  <Components.Dados>
                    {post.preco}€
                  </Components.Dados>
                </Components.Info>
                <Components.Info>
                  <span>Localização: </span> 
                  <Components.Dados>
                    {post.localizacao}
                  </Components.Dados>
                </Components.Info>
                <Components.Info>
                  <span>Telefone para contato: </span> 
                  <Components.Dados>
                    {post.numero} 
                  </Components.Dados>
                </Components.Info>
                <Components.Info>
                  <span> Descrição: </span> 
                  <Components.Dados>
                    {post.descricao}
                  </Components.Dados>
                </Components.Info>
              </>
            ) : (
              <Components.Info>
                <span> Descrição: </span> 
                <Components.Dados>
                  {post.descricao}
                </Components.Dados>
              </Components.Info>
            )}
        </Components.Conteudo>
        <Components.Footer>
          <Components.EditButton onClick={editar}>
            <Components.PenIcon />
          </Components.EditButton>
          <Components.DeleteButton onClick={remover}>
            <Components.TrashIcon />
          </Components.DeleteButton>
        </Components.Footer>
      </Components.ModalContent>
    </Components.ModalBackdrop>
  );
};

export default Modal;