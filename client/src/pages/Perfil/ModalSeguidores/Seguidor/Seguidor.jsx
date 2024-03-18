import React from 'react';
import * as Components from "./styled";
import { useNavigate } from 'react-router-dom';



const Seguidor = ({seguidorData, handleClose}) => {
  const navigate = useNavigate();
  const fotoURL = `http://localhost:3001/server/imagens/` + seguidorData.imageUrl;

  const perfil = (username) => {
    navigate(`/Perfil/${username}`);
    handleClose()
  }

  return (
    <Components.Button onClick={() => perfil(seguidorData.username)}>
      <Components.img>
        <img src={fotoURL} alt={seguidorData.username} />
      </Components.img>
      <Components.username>
        {seguidorData.username}
      </Components.username>
    </Components.Button>
  );
};

export default Seguidor;