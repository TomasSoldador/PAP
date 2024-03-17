import React, { useEffect, useState } from "react";
import * as Components from "./styled";
import axios from "axios";

function ModalSeguidores ({userData, onClose}) {
  const [userIds, setUserIds] = useState([]);
  const [userDataForIds, setUserDataForIds] = useState([]);

  const handleClose = () => {
    onClose();
  };

  useEffect (() => {
    const fetchUserData = async () => {
      console.log(userData);
      if (userData) {
        try {
          const response = await axios.post("http://localhost:3001/api/user/getAllFollows", { userDataid: userData });
          const extractedUserIds = response.data.map(item => item.id_user);
          setUserIds(extractedUserIds);

          const userDataPromises = extractedUserIds.map(async userId => {
            const userResponse = await axios.post("http://localhost:3001/api/user/getDataFollow", { userId });
            return userResponse.data; // Retorna os dados do usuário para cada id_user
          });

          Promise.all(userDataPromises)
            .then(userDataResults => {
              // Aqui estamos achatando o array de arrays em um único array de usernames
              const allUsernames = userDataResults.flatMap(usernames => usernames);
              setUserDataForIds(allUsernames);
            })
            .catch(error => {
              console.error("Erro ao buscar dados do usuário por id: ", error);
            });

        } catch (error) {
          console.error("Erro ao buscar dados do usuário: ", error);
        }
      }
    };

    fetchUserData();
  }, [userData]);

  useEffect(() => {
    console.log(userDataForIds);
  }, [userDataForIds]);

  return (
    <Components.ModalBackdrop>
      <Components.ModalContent onClick={(e) => e.stopPropagation()}>
        <Components.Titulo>
          <span>Seguidores</span>
          <Components.CloseButton onClick={handleClose}>
            &times;
          </Components.CloseButton>
        </Components.Titulo>
        <Components.Conteudo>
          <ul>
            {userDataForIds.map((username, index) => (
              <li key={index}>{username}</li> // Renderize os usernames aqui
            ))}
          </ul>
        </Components.Conteudo>
      </Components.ModalContent>
    </Components.ModalBackdrop>
  );
}

export default ModalSeguidores;
