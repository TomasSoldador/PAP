import { useParams } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import * as Components from "./styled";
import { useState, useEffect } from "react";
import Axios from "axios";

function Perfil() {
  const { username } = useParams();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      if (username) {
        try {
          // Assegure-se de que a URL esteja correta e corresponda ao endpoint do servidor
          const response = await Axios.post("http://localhost:3001/api/user/profile", { username });
          setUserData(response.data); 
        } catch (error) {
          console.error("Erro ao buscar dados do usuário: ", error);
        }
      }
    };

    fetchUserData();
  }, [username]);

  return (
    <Components.LayoutContainer>
      <Sidebar />
      <Components.ContentContainer>
        {userData ? (
          <Components.Conteiner>
            <Components.Foto>
              <img
                src={`http://localhost:3001/server/imagens/` + userData.imageUrl}
                alt="Perfil"
              />
              <h1>{userData.username}</h1>
            </Components.Foto>
            <p>{userData.descricao}</p> {/* Mudança de h1 para p para descrição */}
          </Components.Conteiner>
        ) : (
          <p>Carregando dados do usuário...</p>
        )}
      </Components.ContentContainer>
    </Components.LayoutContainer>
  );
}

export default Perfil;
