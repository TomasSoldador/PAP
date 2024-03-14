import React, { useEffect, useRef, useState } from "react";
import * as Components from "./styled";
import axios from "axios";
import { useNavigate } from 'react-router-dom';



function Modals({onClose, post}) {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});
  const [username, setUsername] = useState(""); 
  console.log("id:",post.perfil_id)

  const handleClose = () => {
    onClose();
  };

  useEffect(() => {
    if (post.perfil_id) {
      axios.post("http://localhost:3001/api/explorer/getUser", { perfil_id: post.perfil_id })
        .then((results) => {
          setUserData(results.data);
          setUsername(results.data.username);
           // Atualiza o estado com os dados do usuário
        })
        .catch((error) => {
          console.error("Erro ao buscar dados do usuário:", error);
        });
    }
  }, [post.perfil_id]);


  const handleTitleClick = (username) => {
    console.log("clicado")
    navigate(`/Perfil/${userData[0]?.username}`);
  };
  
  return (
    <>
    
      <Components.ModalBackdrop>
        <Components.ModalContent onClick={(e) => e.stopPropagation()}>
          <Components.Titulo >
            <Components.CloseButton onClick={handleClose}>
              &times;
            </Components.CloseButton>
            <Components.FotoPerfil onClick={handleTitleClick}>
              {userData[0]?.imageUrl && (
                <img
                  src={`http://localhost:3001/server/imagens/${userData[0].imageUrl}`}
                  alt="Perfil"
                />
              )}
            </Components.FotoPerfil>
            <Components.Username onClick={handleTitleClick}>{userData[0]?.username}</Components.Username>
          </Components.Titulo>
          <Components.Conteudo> 
            <Components.Imagens>
              {post.foto1 && (
                <img
                  src={`http://localhost:3001/server/imagesPosts/${post.foto1}`}
                  alt="Imagem 1"
                  onClick={() =>
                    handleImageClick(
                      `http://localhost:3001/server/imagesPosts/${post.foto1}`
                    )
                  }
                />
              )}
              {post.foto2 && (
                <img
                  src={`http://localhost:3001/server/imagesPosts/${post.foto2}`}
                  alt="Imagem 2"
                  onClick={() =>
                    handleImageClick(
                      `http://localhost:3001/server/imagesPosts/${post.foto2}`
                    )
                  }
                />
              )}
              {post.foto3 && (
                <img
                  src={`http://localhost:3001/server/imagesPosts/${post.foto3}`}
                  alt="Imagem 3"
                  onClick={() =>
                    handleImageClick(
                      `http://localhost:3001/server/imagesPosts/${post.foto3}`
                    )
                  }
                />
              )}
              {post.foto4 && (
                <img
                  src={`http://localhost:3001/server/imagesPosts/${post.foto4}`}
                  alt="Imagem 4"
                  onClick={() =>
                    handleImageClick(
                      `http://localhost:3001/server/imagesPosts/${post.foto4}`
                    )
                  }
                />
              )}
            </Components.Imagens>
          </Components.Conteudo>
          <Components.Footer>
              <Components.Info>
                <Components.Dados>{post.descricao}</Components.Dados>
              </Components.Info>
          </Components.Footer>
        </Components.ModalContent>
      </Components.ModalBackdrop>
    </>
  );
}

export default Modals;
