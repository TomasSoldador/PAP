// changePhoto:
import React, { useRef } from 'react';
import * as Components from './styled';
import Axios from 'axios';
import Cookies from 'js-cookie';

const ChangePhoto = ({ onClose, userId, isOpenSuccess, isOpenError }) => {
  const fileInputRef = useRef(null);
  const token = Cookies.get('authToken');

  const FecharModal = () => {
    onClose();
  };

  const mudarPhoto = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = async (event) => {
    isOpenSuccess(false)
    isOpenError(false)
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("foto", file);
    formData.append("userId", userId);

    try {
      await Axios.post(
        "http://localhost:3001/api/definicoes/uploadPhoto",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      ).then((res) => {
        if(res.data === "UpdateFotoSuccess") {
          isOpenSuccess(true)
        } else {
          isOpenError(true)
        }
      })
      FecharModal();
    } catch (error) {
      console.error("Erro na requisição:", error);
    }
  };

  return (
    <Components.ModalBackdrop>
      <Components.ModalContent onClick={(e) => e.stopPropagation()}>
        <Components.Titulo>
          <span>Seguidores</span>
          <Components.CloseButton onClick={FecharModal}>
            &times;
          </Components.CloseButton>
        </Components.Titulo>
        <Components.Conteudo>
          <Components.Button onClick={mudarPhoto}>
            Mudar Foto
          </Components.Button>
          <input
            ref={fileInputRef}
            name="avatar"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: "none" }}
          />
        </Components.Conteudo>
      </Components.ModalContent>
    </Components.ModalBackdrop>
  );
};

export default ChangePhoto;
