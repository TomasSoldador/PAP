import React, { useRef, useState } from "react";
import * as Components from "./styled";
import { Error } from "../Alertas";
import axios from "axios";

function Modal({ userData, post, url, onClose, fetchUserData }) {
  console.log(post.id);

  const [descricao, setDescricao] = useState(post.descricao);
  const [preco, setPreco] = useState(post.preco || "");
  const [localizacao, setLocalizacao] = useState(post.localizacao || "");
  const [numero, setNumero] = useState(post.numero || "");
  const [nome, setNome] = useState(post.nome || "");


  const handleClose = () => {
    onClose();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "descricao":
        setDescricao(value);
        break;
      case "preco":
        setPreco(value);
        break;
      case "localizacao":
        setLocalizacao(value);
        break;
      case "numero":
        setNumero(value);
        break;
      case "nome":
        setNome(value);
        break;
      default:
        break;
    }
  }

  const salvar = async () => {
    try {
      if (post.preco) {
        await axios.post('http://localhost:3001/api/loja/upload', {
          postId: post.id,
          nome: nome,
          descricao: descricao,
          preco: preco,
          numero: numero,
          localizacao: localizacao,
        }).then((response) => {
          handleClose()
          console.log(response);
        });
        
      } else {
        await axios.post('http://localhost:3001/api/posts/upload', {
          postId: post.id,
          descricao: descricao,
        }).then((response) => {
          handleClose()
          console.log(response);
        });
      }
    } catch (error) {
      console.error('Error uploading images:', error);
    }
    
  }

  return (
    <>
      <Components.ModalBackdrop>
        <Components.ModalContent onClick={(e) => e.stopPropagation()}>
          <Components.Titulo>
            <Components.FotoPerfil>
              <img
                src={
                  `http://localhost:3001/server/imagens/` + userData.imageUrl
                }
                alt="Perfil"
              />
            </Components.FotoPerfil>
            <Components.Username>{userData.username}</Components.Username>
            <Components.CloseButton onClick={handleClose}>
              &times;
            </Components.CloseButton>
          </Components.Titulo>
          <Components.Conteudo>
            <Components.Imagens>
              {post.foto1 && (
                <img
                  src={`http://localhost:3001/server/${url}/${post.foto1}`}
                  alt="Imagem 1"
                  onClick={() =>
                    handleImageClick(
                      `http://localhost:3001/server/${url}/${post.foto1}`
                    )
                  }
                />
              )}
              {post.foto2 && (
                <img
                  src={`http://localhost:3001/server/${url}/${post.foto2}`}
                  alt="Imagem 2"
                  onClick={() =>
                    handleImageClick(
                      `http://localhost:3001/server/${url}/${post.foto2}`
                    )
                  }
                />
              )}
              {post.foto3 && (
                <img
                  src={`http://localhost:3001/server/${url}/${post.foto3}`}
                  alt="Imagem 3"
                  onClick={() =>
                    handleImageClick(
                      `http://localhost:3001/server/${url}/${post.foto3}`
                    )
                  }
                />
              )}
              {post.foto4 && (
                <img
                  src={`http://localhost:3001/server/${url}/${post.foto4}`}
                  alt="Imagem 4"
                  onClick={() =>
                    handleImageClick(
                      `http://localhost:3001/server/${url}/${post.foto4}`
                    )
                  }
                />
              )}
            </Components.Imagens>
            {post.preco ? (
              <>
                <Components.Info>
                  <span>Nome: </span>
                  <input
                    type="text"
                    name="nome"
                    value={nome}
                    onChange={handleInputChange}
                  />
                </Components.Info>
                <Components.Info>
                  <span>Preço: </span>
                  <input
                    type="text"
                    name="preco"
                    value={preco}
                    onChange={handleInputChange}
                  />
                </Components.Info>
                <Components.Info>
                  <span>Localização: </span>
                  <input
                    type="text"
                    name="localizacao"
                    value={localizacao}
                    onChange={handleInputChange}
                  />
                </Components.Info>
                <Components.Info>
                  <span>Telefone para contato: </span>
                  <input
                    type="text"
                    name="numero"
                    value={numero}
                    onChange={handleInputChange}
                  />
                </Components.Info>
                <Components.Info>
                  <span> Descrição: </span>
                  <input
                    type="text"
                    name="descricao"
                    value={descricao}
                    onChange={handleInputChange}
                  />
                </Components.Info>
              </>
            ) : (
              
              <Components.Info>
                
                <span> Descrição: </span>
                <input
                    type="text"
                    name="descricao"
                    value={descricao}
                    onChange={handleInputChange}
                  />
              </Components.Info>
            )}
          </Components.Conteudo>
          <Components.Footer>
            <Components.button onClick={salvar}>
              Save
            </Components.button>
          </Components.Footer>
        </Components.ModalContent>
      </Components.ModalBackdrop>
    </>
  );
}

export default Modal;
