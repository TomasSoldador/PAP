import * as Components from "./styled";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import { Error } from "../../components/Alertas";
import { useNavigate, useLocation } from "react-router-dom";
import Cookies from 'js-cookie';

export default function PasswordReset() {
  const location = useLocation();
  const navigateTo = useNavigate();
  
  const [email, setEmail] = useState("");
  const [emaild, setemaild] = useState("");
  const [isOpenErrorEmail, setIsOpenErrorEmail] = useState(false);
  const [emailEnviado, setEmailEnviado] = useState(false);
  
  useEffect(() => {
    setEmail(location.state?.email || "");
  }, [location.state?.email]);

  const Enviar = async (e) => {
    e.preventDefault();

    setIsOpenErrorEmail(false);

    try {
      const resposta = await Axios.post(
        "http://localhost:3001/api/PasswordReset/post",
        {
          email: email
        }
      );

      console.log(resposta.data.token);
      if (resposta.data.token) {
        Cookies.set('authToken', resposta.data.token, { expires: 7, sameSite: 'None', secure: true });
      } 

      if (!resposta.data.emailError){
        setIsOpenErrorEmail(true);
        setEmailEnviado(false)
      } else {
        setEmailEnviado(true)
      }

      setemaild([
        ...emaild,
        {
          email: email
        },
      ]);
    } catch (error) {
      console.error("Erro ao enviar imagem para o servidor:", error);
    }
  };

  return (
    <>
      <Components.AllContainer>
        <Components.Container>
          {isOpenErrorEmail && (
            <Error texto={"Email não existe!"} mostrar={true} />
          )}
          <Components.Titulo>
            Vamos ajuda-lo a encontrar a sua conta:
          </Components.Titulo>
          {emailEnviado ? (
            <>
              <Components.p>Email enviado continue apartir do seu email!</Components.p>
              <Components.p>Se não encontrar o email enviado tente vero spam!</Components.p>
            </>
          ) : (
            <>
              <Components.p>	
                Insere o teu e-mail para procurares a tua conta.
              </Components.p>
              <Components.Form>
                <Components.Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                />
              </Components.Form>
              <Components.DivButtons>
                <Components.Button onClick={() => navigateTo(-1)}>Cancelar</Components.Button>
                <Components.Button onClick={Enviar}>Procurar</Components.Button>
              </Components.DivButtons>
            </>
          )}
        </Components.Container>
      </Components.AllContainer>
    </>
  );
}
