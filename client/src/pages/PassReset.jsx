import { React, useState } from "react";
import * as Components from "../Styles/PassReset";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const PassReset = () => {
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");

  const [passwordTouched, setPasswordTouched] = useState(false);
  const [confirmPasswordTouched, setConfirmPasswordTouched] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [passwordList, setPasswordList] = useState([]);


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

  const Enviar = async (e) => {
    if (password !== confirmPassword) {
      alert("As passwords não são iguais" + " ola: " + confirmPassword + " adeus: " + password);
    } else {
      try {
        const resposta = await Axios.post(
          "http://localhost:3001/api/passReset/insert",
          {
            password: password,
            confirmPassword: confirmPassword,
          }
        );
        setPasswordList([
          ...passwordList,
          {
            password: password,
            confirmPassword: confirmPassword,
          },
        ]);

      }catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <>
      <Components.AllContainer>
        <Components.Container>
          <Components.Titulo>Redefenir Password:</Components.Titulo>
          <Components.Form>
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
              <Components.p>As senhas não são iguais!</Components.p>
            )}
          </Components.Form>
          <Components.DivButtons>
            <Components.Button onClick={Enviar}>Procurar</Components.Button>
          </Components.DivButtons>
        </Components.Container>
      </Components.AllContainer>
    </>
  );
};

export default PassReset;
