import React, { useState } from "react";
import * as Components from "./styled";

function Modal ({post, onClose, atualizar}) {
  const [enlargedImage, setEnlargedImage] = useState(null);

  const handleClose = () => {
    onClose();
    atualizar();
  };

  const handleImageClick = (imageSrc) => {
    setEnlargedImage(imageSrc);
  };

  const handleEnlargedImageClose = () => {
    setEnlargedImage(null);
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
            {post.foto1 && <img src={`http://localhost:3001/server/imagesPostsLoja/${post.foto1}`} alt="Imagem 1" onClick={() => handleImageClick(`http://localhost:3001/server/imagesPostsLoja/${post.foto1}`)} />}
            {post.foto2 && <img src={`http://localhost:3001/server/imagesPostsLoja/${post.foto2}`} alt="Imagem 2" onClick={() => handleImageClick(`http://localhost:3001/server/imagesPostsLoja/${post.foto2}`)} />}
            {post.foto3 && <img src={`http://localhost:3001/server/imagesPostsLoja/${post.foto3}`} alt="Imagem 3" onClick={() => handleImageClick(`http://localhost:3001/server/imagesPostsLoja/${post.foto3}`)} />}
            {post.foto4 && <img src={`http://localhost:3001/server/imagesPostsLoja/${post.foto4}`} alt="Imagem 4" onClick={() => handleImageClick(`http://localhost:3001/server/imagesPostsLoja/${post.foto4}`)} />}
          </Components.Imagens>
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
        </Components.Conteudo>
      </Components.Modal>

      {enlargedImage && (
        <Components.EnlargedImageBackdrop onClick={handleEnlargedImageClose}>
          <Components.EnlargedImage>
            <img src={enlargedImage} alt="Enlarged Image" />
            <Components.CloseButton onClick={handleEnlargedImageClose}>
              &times;
            </Components.CloseButton>
          </Components.EnlargedImage>
        </Components.EnlargedImageBackdrop>
      )}
    </Components.ModalBackdrop>
  );
};

export default Modal;