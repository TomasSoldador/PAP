import * as Components from "../Styles/PasswordReset";
import React, { useState } from "react";
import { Link } from "react-router-dom";

// TODO: usar o nodemailer no lado do servidor para enviar o email com o codigo de segurança  
export default function PasswordReset() {

  const [email, setEmail] = useState("");

  return (
    <>
      <Components.AllContainer>
        <Components.Container>
          <Components.Titulo>
            Vamos ajuda-lo a encontrar a sua conta:
          </Components.Titulo>
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
            <Components.Button as={Link} to="/login">Cancelar</Components.Button>
            <Components.Button>Procurar</Components.Button>
          </Components.DivButtons>
        </Components.Container>
      </Components.AllContainer>
    </>
  );
}
