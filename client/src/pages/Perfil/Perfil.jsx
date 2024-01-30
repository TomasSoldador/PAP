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
          const response = await Axios.post("http://localhost:3001/api/user/profile", { username });
          setUserData(response.data); 
        } catch (error) {
          console.log("Erro ao buscar dados do usuário: ", error);
        }
      }
    };

    fetchUserData(); // Chama a função ao montar o componente e quando o username mudar
  }, [username]); // Dependências do useEffect, neste caso, o username

  return (
    <Components.LayoutContainer>
      <Sidebar />
      <Components.ContentContainer>
        {userData ? (
          <div>
            <h1>{userData.username}</h1>
            <h1>{userData.imageUrl}</h1>
            <h1>{userData.descricao}</h1>
          </div>
        ) : (
          <p>Carregando dados do usuário...</p>
        )}
      </Components.ContentContainer>
    </Components.LayoutContainer>
  );
}

export default Perfil;
