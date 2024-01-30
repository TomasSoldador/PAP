import Sidebar from "../../components/Sidebar/Sidebar";
import * as Components from "./styled"; 
import { useState, useEffect } from "react";
import Axios from "axios";
import { useNavigate } from 'react-router-dom';



function Explorer () {
  
  const [options, setOptions] = useState([]);

  const navigate = useNavigate();

  const handleInputChange = (inputValue) => {
    if (inputValue.length > 0 ) {
      Axios.post("http://localhost:3001/api/explorer/post", { query: inputValue })
        .then((res) => {
          setOptions(res.data); // Atualiza as opções com a resposta da busca
        })
        .catch((error) => {
          console.log("Erro ao buscar opções: ", error);
        });
    } else {
      setOptions([]);
    }
  };

  const handleOptionClick = (username) => {
    navigate(`/Perfil/${username}`);
  };


  return (
    <Components.LayoutContainer>
      <Sidebar />
      <Components.ContentContainer>
        <Components.explorer>
          <Components.Input onChange={(e) => handleInputChange(e.target.value)} />
          <Components.BlackSearchIcon />
          {options.length > 0 && (
            <Components.OpcoesConteiner>
              {options.map((option, index) => (
                <Components.opcoes key={index} onClick={() => handleOptionClick(option.username)}>
                  <img src={`http://localhost:3001/server/imagens/` + option.imageUrl} alt={option.username} />
                  {option.username}
                </Components.opcoes>
              ))}
            </Components.OpcoesConteiner>
          )}
        </Components.explorer>
      </Components.ContentContainer>
    </Components.LayoutContainer>
  );
}

export default Explorer;
