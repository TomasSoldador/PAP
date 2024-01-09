import { React, useState } from "react";
import * as Components from "../Styles/Login";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { Aviso , Error } from "../components/Alertas";
import Cookies from 'js-cookie';

function Login() {
  const navigateTo = useNavigate();

  const [signIn, toggle] = useState(true);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  
  const [passwordError, setPasswordError] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [confirmPasswordTouched, setConfirmPasswordTouched] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [usuarioList, setUsuarioList] = useState([]);

  const [isOpenAviso, setIsOpenAviso] = useState(false);
  const [isOpenErrorEmail, setIsOpenErrorEmail] = useState(false);
  const [isOpenErrorPassword, setIsOpenErrorPassword] = useState(false);


  // Verifica se as passwords são iguais
  const primeira_password = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setPasswordTouched(true);
    setPasswordError(newPassword !== confirmPassword && confirmPasswordTouched);
  };

  const confirmarPassword = (e) => {
    const secondPassword = e.target.value;
    setConfirmPassword(secondPassword);
    setConfirmPasswordTouched(true);
    setPasswordError(password !== secondPassword && passwordTouched);
  };

  const Login = async (e) => {
    e.preventDefault();

    setIsOpenAviso(false);

    try {
      const resposta = await Axios.post(
        "http://localhost:3001/api/login/post",
        {
          email: email,
          password: password,
        }
      );

      if (resposta.data.token) {
        Cookies.set('authToken', resposta.data.token, { expires: 7, sameSite: 'None', secure: true });
        navigateTo("/");
      } else {
        setIsOpenAviso(true)
      }

      setUsuarioList([...usuarioList, { email: email, password: password }]);
    } catch (error) {
      console.log("Erro no pedido ao servidor: ", error);
    }
  };

  const Registar = async (e) => {
    e.preventDefault();

    setIsOpenErrorEmail(false);
    setIsOpenErrorPassword(false);

    try {
      const resposta = await Axios.post(
        "http://localhost:3001/api/login/insert",
        {
          nome: name,
          email: email,
          password: password,
          confirmPassword: confirmPassword,
        }
      );

      if (resposta.data.emailError) {
        setIsOpenErrorEmail(true);
      }

      if (resposta.data.ErrorSenhas) {
        setIsOpenErrorPassword(true);
      }

      if (resposta.data.token) {
        Cookies.set('authToken', resposta.data.token, { expires: 7, sameSite: 'None', secure: true });
        navigateTo("/registar");
      }

      setUsuarioList([
        ...usuarioList,
        {
          nome: name,
          email: email,
          password: password,
          confirmPassword: confirmPassword,
        },
      ]);
    } catch (error) {
      console.log("Erro no pedido ao servidor: ", error);
    }
  };

  return (
    <Components.AllContainer>
      <Components.Container>
        {isOpenErrorEmail && (
          <Error texto={"Email já cadastrado!"} mostrar={true} />
        )}
        {isOpenErrorPassword && (
          <Error texto={"Passwords não são iguais!"} mostrar={true} />
        )}
        <Components.SignUpContainer signinIn={signIn}>
          <Components.Form>
            <Components.Title>Criar Conta</Components.Title>
            <Components.Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
            />
            <Components.Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            <Components.DivPassword>
              <Components.Input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={primeira_password}
                placeholder="Password"
              />
              <Components.ButtonEye
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </Components.ButtonEye>
            </Components.DivPassword>
            
            <Components.DivPassword>
              <Components.Input
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={confirmarPassword}
                placeholder="Confirmar Password"
                />
              <Components.ButtonEye
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </Components.ButtonEye>
            </Components.DivPassword>
            {passwordError && (
              <Components.p>
                As senhas não são iguais!
              </Components.p>
            )}
            
            <Components.Button onClick={Registar}>
              Registar-se
            </Components.Button>
          </Components.Form>
        </Components.SignUpContainer>
        
        {isOpenAviso && (
          <Aviso texto={"Email ou password incorretas"} mostrar={true} />
        )}
        <Components.SignInContainer signinIn={signIn}>
          <Components.Form>
            <Components.Title>Login</Components.Title>
            <Components.Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            <Components.Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <Components.Anchor href="/resetpassword">
              Esqueceu-se da senha?
            </Components.Anchor>
            <Components.Button onClick={Login}>
              Iniciar Sessão
            </Components.Button>
          </Components.Form>
        </Components.SignInContainer>

        <Components.OverlayContainer signinIn={signIn}>
          <Components.Overlay signinIn={signIn}>
            <Components.LeftOverlayPanel signinIn={signIn}>
              <Components.Title>Bem vindo de volta!</Components.Title>
              <Components.Paragraph>
                Para se manter conectado conosco, por favor, faça login com suas
                informações pessoais.
              </Components.Paragraph>
              <Components.GhostButton onClick={() => toggle(true)}>
                Iniciar Sessão
              </Components.GhostButton>
            </Components.LeftOverlayPanel>

            <Components.RightOverlayPanel signinIn={signIn}>
              <Components.Title>Olá, Amigo!</Components.Title>
              <Components.Paragraph>
                Registe-se e comece a jornada connosco.
              </Components.Paragraph>
              <Components.GhostButton onClick={() => toggle(false)}>
                Registar-se
              </Components.GhostButton>
            </Components.RightOverlayPanel>
          </Components.Overlay>
        </Components.OverlayContainer>
      </Components.Container>
    </Components.AllContainer>
  );
}

export default Login;
