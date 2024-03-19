import React, { useState, useEffect } from "react";
import * as Components from "./styled";
import Sidebar from "../../components/Sidebar/Sidebar";
import { jwtDecode } from "jwt-decode";
import Axios from "axios";
import Cookies from "js-cookie";
import ChangePhoto from "./ModalChangePhoto/ChangePhoto";
import { useNavigate } from 'react-router-dom';

const Settings = () => {
  const navigate  = useNavigate();
  const token = Cookies.get("authToken");
  const [crud_userId, setCrud_UserId] = useState([]);
  const [userId, setUserId] = useState("");
  const [userData, setUserData] = useState([]);
  const [outro, setOutro] = useState(false);
  const [gender, setGender] = useState("");
  const [usuarioData, setUsuarioData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [sidebarKey, setSidebarKey] = useState(0);
  const [editedUsername, setEditedUsername] = useState("");
  const [editedDescricao, setEditedDescricao] = useState("");

  const fotoURL = `http://localhost:3001/server/imagens/` + userData[0]?.imageUrl;

  useEffect(() => {
    if (token) {
      const decodedToken = jwtDecode(token);
      setUserId(decodedToken.id);

      try {
        Axios.post("http://localhost:3001/api/home/post", {
          userId: decodedToken.id,
        })
          .then((res) => {
            setUserData(res.data);
            setEditedUsername(res.data[0].username);
            setEditedDescricao(res.data[0].descricao);
            if (userData.descricao === "Masculino") {
              setGender("Masculino")
            } else if (res.data[0].genero === "Feminino") {
              setGender("Feminino")
            } else {
              setGender(res.data[0].genero)
            }

            Axios.post("http://localhost:3001/api/definicoes/getUsuario", {
              usuarioId: res.data[0].Usuario_id,
            }).then((response) => {
              setUsuarioData(response.data);
            }).catch((error) => {
              console.error("Erro na solicitação ao servidor: ", error);
            });

            setCrud_UserId([
              ...crud_userId,
              {
                userId: decodedToken.id,
              },
            ]);
          })
          .catch((error) => {
            console.error("Erro na solicitação ao servidor: ", error);
          });
      } catch (error) {
        console.error("Erro no pedido ao servidor: ", error);
      }
    }
  }, [token]);
  

  const RadioOutro = (gender) => {
    setGender(gender);
    setOutro(true);
  };

  const RadioMasculino = () => {
    setGender("Masculino");
    setOutro(false);
  };

  const RadioFemenino = () => {
    setGender("Feminino");
    setOutro(false);
  };

  const MudarFoto = () => {
    setModalVisible(true)
  }

  const FecharModal = () => {
    setModalVisible(false)
    Axios.post("http://localhost:3001/api/home/post", {
      userId: userId,
    }).then((res) => {
        setUserData(res.data);
      }).catch ((error) => {
          console.error("Erro no pedido ao servidor: ", error);
      })
    setSidebarKey(prevKey => prevKey + 1);
  }

  const save = () => {
    try {
      Axios.post('http://localhost:3001/api/definicoes/uploadDados', {
        userId: userId,
        username: editedUsername,
        descricao: editedDescricao,
        gender: gender,
      }).then((res) => {
        console.log(res)
      }).catch((err) => {
        console.error(err)
      })
    } catch (error) {
      console.error(error)
    }
    setSidebarKey(prevKey => prevKey + 1);
  }

  const alterarPassword = () => {
    navigate('/resetpassword', { state: { email: usuarioData[0]?.email } })
  }

  return (
    <>
      <Components.LayoutContainer>
        <Sidebar key={sidebarKey}/>
        <Components.ContentContainer>
          <Components.EditPerfil>
            <span>Editar Perfil</span>
          </Components.EditPerfil>
          <Components.ChangePhoto>
            <Components.ProfileImage src={fotoURL} alt={userData[0]?.username} />
            <Components.TextContainer>
              <Components.Span1>{editedUsername}</Components.Span1>
              <Components.Span2>{usuarioData[0]?.nome}</Components.Span2>
            </Components.TextContainer>
            <Components.ButtonChange onClick={MudarFoto}>Mudar Foto</Components.ButtonChange>
          </Components.ChangePhoto>
          <Components.Input>
            <span>Username:</span>
            <input type="text" value={editedUsername} onChange={(e) => {setEditedUsername(e.target.value)}} />
          </Components.Input>
          <Components.Input>
            <span>Descricão:</span>
            <input type="text" value={editedDescricao} onChange={(e) => {setEditedDescricao(e.target.value)}} />
          </Components.Input>
          <Components.RadioWrapper>
            <span>Genero: </span>
            <Components.RadioLabel>
              <Components.RadioInput
                type="radio"
                name="gender"
                onChange={RadioMasculino}
                checked={gender === "Masculino"}
              />
              Masculino
            </Components.RadioLabel>

            <Components.RadioLabel>
              <Components.RadioInput
                type="radio"
                name="gender"
                onChange={RadioFemenino}
                checked={gender === "Feminino"}
              />
              Feminino
            </Components.RadioLabel>

            <Components.RadioLabel>
              <Components.RadioInput
                type="radio"
                name="gender"
                onChange={RadioOutro}
                checked={gender != "Masculino" && gender != "Feminino"}
                
              />
              Outro
            </Components.RadioLabel>
          </Components.RadioWrapper>
          {outro && (
            <Components.InputGenero
              type="text"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              placeholder="Género (opcional)"
            />
          )}
          <Components.ButtonSave onClick={save}>
            <span>Salvar</span>
          </Components.ButtonSave>

          <Components.EditConta>
            <span>Editar Conta</span>
          </Components.EditConta>
          <Components.Input>
            <span>Email:</span>
            <input type="Input" value={usuarioData[0]?.email} readOnly />
            <Components.EditIcon />
          </Components.Input>
          <Components.Input>
            <span>Password:</span>
            <input type="Input" value="*********" readOnly />
            <Components.EditIcon onClick={alterarPassword}/>
          </Components.Input>
        </Components.ContentContainer>
        {modalVisible && (
          <ChangePhoto onClose={FecharModal} userId={userId} />
        )}
      </Components.LayoutContainer>
    </>
  );
};

export default Settings;
